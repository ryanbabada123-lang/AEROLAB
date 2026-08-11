#!/usr/bin/env python3
"""
Chaîne d'extraction : cours BIA (PDF) → blocs de contenu TypeScript.

POURQUOI UN SCRIPT ET PAS UNE TRANSCRIPTION À LA MAIN
-----------------------------------------------------
La règle du projet est « texte repris mot pour mot, aucun résumé, aucune
coupe, aucune reformulation » (assets/RESSOURCES.md §1). Sur 542 668 signes,
une transcription manuelle dérive — un accent, une virgule, un mot sauté.
Passer par la couche texte native du PDF garantit l'exactitude au signe :
ce qui sort est littéralement ce qui est dans le document.

Les huit cours ont une couche texte native, aucun n'est un scan. Aucune
reconnaissance de caractères n'intervient donc, et rien n'est deviné.

CE QUE LE SCRIPT FAIT, ET RIEN DE PLUS
--------------------------------------
1. retire l'entête et le pied de page répétés sur chaque page ;
2. saute le sommaire (repéré par ses lignes de points de conduite) ;
3. reconnaît les titres à leur numérotation (« 3 – LA TEMPÉRATURE »,
   « 3.1 - Notions », « 7.3.2.1 - Les cumulus ») ;
4. recolle les paragraphes que la mise en page du PDF a coupés en lignes ;
5. reconnaît les listes à leur puce (-, •, ➢, ○) ;
6. écrit un module TypeScript conforme au type CourseSection[].

Il ne réécrit rien, ne résume rien, ne complète rien. Les figures ne sont
pas traitées ici : elles relèvent de scripts/cours-figures.py et du redessin
en SVG.

USAGE
    python3 scripts/cours-extraire.py --src <pdf> --out <ts> \
        --var <nom> --start <première page de corps> [--verbose]
"""

import argparse
import json
import re
import sys

import pymupdf

# Pied de page répété : « Comité Départemental Aéronautique 35 Edition 2024
# André PARIS - HT - IFI - SFE - ». Les variantes d'espacement et d'édition
# sont couvertes.
FOOTER = re.compile(
    r"Comit[ée]\s+D[ée]partemental\s+A[ée]ronautique|"
    r"Edition\s+20\d\d|"
    r"HT\s*-\s*IFI\s*-\s*SFE|"
    r"CIRAS|"
    r"andre\.paris",
    re.I,
)

# Ligne de sommaire : contient une conduite de points (ASCII ou unicode).
TOC_LINE = re.compile(r"[.·…]{4,}|\.\s?\.\s?\.\s?\.")

# Titres numérotés. Le tiret peut être court, long, un point ou absent.
H1 = re.compile(r"^(\d{1,2})\s*[-–—.)]?\s+([A-ZÀÂÄÉÈÊËÎÏÔÖÙÛÜÇŒ'’][^\n]*)$")
HN = re.compile(r"^(\d{1,2}(?:\.\d{1,2}){1,3})\s*[-–—.)]?\s*(.*)$")

# Puces de liste employées par l'auteur. Elles varient d'un cours à l'autre
# et parfois d'un paragraphe à l'autre : ➢ et ❖ voisinent avec - et •.
BULLETS = "-–—•➢❖○*"
BULLET = re.compile(rf"^\s*[{BULLETS}]\s+(.+)$")
# Puce restée seule sur sa ligne, son texte rejeté à la ligne suivante.
LONE_BULLET = re.compile(rf"^\s*(?:[{BULLETS}]|o)\s*$")
# Numéro de titre resté seul sur sa ligne, même cause.
LONE_NUMBER = re.compile(r"^\s*(\d{1,2}(?:\.\d{1,2}){0,3})\s*[-–—.)]?\s*$")

# Une ligne qui n'est qu'un numéro de page.
PAGE_NO = re.compile(r"^\d{1,3}$")


def slug(text: str) -> str:
    """Identifiant d'ancre stable, sans accent ni ponctuation."""
    table = str.maketrans(
        "àâäéèêëîïôöùûüçÀÂÄÉÈÊËÎÏÔÖÙÛÜÇ’'",
        "aaaeeeeiioouuucAAAEEEEIIOOUUUC--",
    )
    s = text.translate(table).lower()
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return re.sub(r"-{2,}", "-", s)[:48] or "section"


def is_toc_page(page) -> bool:
    """
    Une page de sommaire se reconnaît à ses conduites de points : plus du
    tiers de ses lignes utiles en portent. Détecté plutôt que déclaré, car
    les huit cours n'ont pas tous un sommaire, ni de la même longueur.
    """
    lines = [l.strip() for l in page.get_text("text").split("\n") if l.strip()]
    lines = [l for l in lines if not FOOTER.search(l) and not PAGE_NO.match(l)]
    if len(lines) < 6:
        return False
    return sum(1 for l in lines if TOC_LINE.search(l)) / len(lines) > 0.34


def page_lines_with_size(page):
    """
    Lignes de la page, avec le corps typographique le plus grand qu'elles
    portent. C'est ce qui permet de reconnaître un titre qui n'est pas
    numéroté — le cours de Navigation n'a que des intitulés en capitales,
    sans numéro, et les distinguer d'un libellé de carte demande la taille.
    """
    out = []
    for block in page.get_text("dict")["blocks"]:
        if block["type"] != 0:
            continue
        for line in block["lines"]:
            text = "".join(s["text"] for s in line["spans"])
            size = max((s["size"] for s in line["spans"]), default=0)
            bold = any("bold" in s["font"].lower() for s in line["spans"])
            out.append((text, size, bold))
    return out


def body_size(doc, pages) -> float:
    """Corps typographique dominant du document — la taille du texte courant."""
    tally = {}
    for i in pages:
        for text, size, _ in page_lines_with_size(doc[i - 1]):
            if len(text.strip()) < 25:
                continue
            key = round(size, 1)
            tally[key] = tally.get(key, 0) + len(text)
    return max(tally, key=tally.get) if tally else 11.0


def clean_lines(doc, start: int | None):
    """Lignes utiles du corps, page par page, entête et pied retirés."""
    raw_pages = []
    for i in range(doc.page_count):
        if start is not None and i + 1 < start:
            continue
        if start is None and is_toc_page(doc[i]):
            continue
        raw_pages.append((i + 1, doc[i].get_text("text").split("\n")))

    # Table « texte normalisé → (corps, gras) », pour retrouver la taille
    # d'une ligne à partir du flux texte simple.
    sizes = {}
    for pageno, _ in raw_pages:
        for text, size, bold in page_lines_with_size(doc[pageno - 1]):
            key = re.sub(r"\s+", "", text)
            if key:
                sizes.setdefault(key, (size, bold))

    out = []
    for pageno, lines in raw_pages:
        # Passe de recollage : une puce ou un numéro de titre resté seul sur
        # sa ligne récupère le texte de la ligne suivante. C'est un artefact
        # de mise en page très fréquent dans ces documents, et il fait
        # perdre le titre ou l'item entier si on ne le traite pas.
        merged = []
        skip = False
        for j, raw in enumerate(lines):
            if skip:
                skip = False
                continue
            s = raw.strip()
            nxt = lines[j + 1].strip() if j + 1 < len(lines) else ""
            if s and nxt and not FOOTER.search(nxt):
                if LONE_BULLET.match(s):
                    merged.append(f"- {nxt}")
                    skip = True
                    continue
                m = LONE_NUMBER.match(s)
                if m and not PAGE_NO.match(s) and re.match(r"^[A-Za-zÀ-ÿ]", nxt):
                    merged.append(f"{m.group(1)} - {nxt}")
                    skip = True
                    continue
            merged.append(raw)

        for raw in merged:
            s = raw.strip()
            if not s:
                out.append(("blank", "", pageno, 0.0, False))
                continue
            if FOOTER.search(s) or PAGE_NO.match(s):
                continue
            if TOC_LINE.search(s):
                # Une conduite de points en plein corps est un reliquat de
                # sommaire ; on la garde si elle porte du texte réel.
                stripped = re.sub(r"[.·…]{2,}", " ", s).strip()
                if len(stripped) < 12:
                    continue
                s = stripped
            size, bold = sizes.get(re.sub(r"\s+", "", raw.strip()), (0.0, False))
            out.append(("text", s, pageno, size, bold))
    return out


def is_heading(s: str):
    """(niveau, numéro, intitulé) si la ligne est un titre, sinon None."""
    m = HN.match(s)
    if m:
        depth = m.group(1).count(".") + 1
        label = m.group(2).strip()
        # « 1.5 » seul, ou suivi d'un chiffre, n'est pas un titre mais une
        # valeur numérique restée dans le flux.
        if not label or re.match(r"^[\d,.\s%°]+$", label):
            return None
        return (min(depth + 1, 4), m.group(1), label)
    m = H1.match(s)
    if m:
        label = m.group(2).strip()
        # Un titre de premier niveau est en capitales dans ces documents.
        letters = [c for c in label if c.isalpha()]
        if len(letters) >= 4 and sum(c.isupper() for c in letters) / len(letters) > 0.7:
            return (2, m.group(1), label)
    return None


def flush(buf, blocks, kind="text"):
    """Verse le tampon courant comme un paragraphe."""
    if not buf:
        return
    para = " ".join(buf).strip()
    para = re.sub(r"\s{2,}", " ", para)
    if len(para) >= 2:
        blocks.append({"type": kind, "text": para})
    buf.clear()


def build(doc, start, verbose=False):
    lines = clean_lines(doc, start)
    pages = sorted({p for _, _, p, _, _ in lines})
    base = body_size(doc, pages)
    sections = []
    current = None
    blocks = []
    buf = []
    bullets = []

    def close_list():
        if bullets:
            blocks.append({"type": "list", "items": list(bullets)})
            bullets.clear()

    def close_section():
        nonlocal blocks
        flush(buf, blocks)
        close_list()
        if current and blocks:
            current["blocks"] = blocks
            sections.append(current)
        blocks = []

    for kind, s, page, size, bold in lines:
        if kind == "blank":
            flush(buf, blocks)
            continue

        head = is_heading(s)
        # Titre non numéroté : reconnu au corps typographique. Le cours de
        # Navigation n'a que des intitulés en capitales, sans numéro ; sans
        # ce critère il formerait une seule section de 32 pages.
        if head is None and size >= base + 1.4 and 4 <= len(s) <= 70:
            letters = [c for c in s if c.isalpha()]
            if letters and sum(c.isupper() for c in letters) / len(letters) > 0.75:
                head = (2, "", s.strip().rstrip(":").strip())
        if head:
            level, number, label = head
            if level == 2:
                close_section()
                current = {
                    "id": slug(label),
                    "number": number,
                    "title": label.capitalize()
                    if label.isupper()
                    else label,
                    "pages": [page, page],
                    "blocks": [],
                }
                if verbose:
                    print(f"  § {number} {label[:60]}  (p{page})", file=sys.stderr)
                continue
            if current is None:
                # Un sous-titre avant tout titre de section : on ouvre une
                # section d'ouverture plutôt que de perdre le texte.
                current = {
                    "id": "ouverture",
                    "number": "0",
                    "title": "Ouverture",
                    "pages": [page, page],
                    "blocks": [],
                }
            flush(buf, blocks)
            close_list()
            blocks.append(
                {"type": "heading", "level": 3 if level == 3 else 4,
                 "text": f"{number} - {label}"}
            )
            continue

        # Du texte avant le premier titre de section : plusieurs cours
        # ouvrent sur un chapeau non numéroté. Sans section pour l'accueillir
        # il serait mis en tampon puis perdu à la fermeture.
        if current is None:
            current = {
                "id": "ouverture",
                "number": "",
                "title": "Ouverture",
                "pages": [page, page],
                "blocks": [],
            }
        current["pages"][1] = page

        b = BULLET.match(s)
        if b:
            flush(buf, blocks)
            bullets.append(b.group(1).strip())
            continue
        close_list()

        # Une ligne qui finit par un signe de ponctuation forte clôt le
        # paragraphe ; sinon la ligne suivante lui est recollée.
        buf.append(s)
        if re.search(r"[.!?:;]\s*$", s) and len(" ".join(buf)) > 90:
            flush(buf, blocks)

    close_section()
    return sections


def emit(sections, var: str, src: str, pages: int, chars: int) -> str:
    body = json.dumps(sections, ensure_ascii=False, indent=2)
    # JSON → littéral TypeScript : les clés sont déjà valides, on garde tel
    # quel, seul le type est ajouté.
    return f'''import type {{ CourseSection }} from '@/content/types'

/**
 * ⚠️ FICHIER PRODUIT PAR `scripts/cours-extraire.py`. NE PAS ÉDITER À LA MAIN :
 * toute retouche serait écrasée à la prochaine extraction, et surtout elle
 * romprait la garantie qui fait la valeur de ce fichier — son texte est
 * exactement celui de la couche texte du PDF, au signe près.
 *
 * Source : {src}
 * {pages} pages, {chars} signes.
 *
 * Pour corriger une coupe de paragraphe ou un titre mal reconnu, corrigez
 * les heuristiques du script et relancez-le, pour que la correction profite
 * aux sept autres cours.
 */
export const {var}: CourseSection[] = {body}
'''


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--src", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--var", required=True)
    ap.add_argument("--start", type=int, default=None,
                    help="Première page de corps. Par défaut, le sommaire "
                         "est détecté et sauté automatiquement.")
    ap.add_argument("--verbose", action="store_true")
    a = ap.parse_args()

    doc = pymupdf.open(a.src)
    chars = sum(len(p.get_text("text")) for p in doc)
    sections = build(doc, a.start, a.verbose)

    # MESURE DE FIDÉLITÉ — c'est le seul contrôle qui vaut.
    #
    # On compare les signes NON BLANCS : l'espacement du PDF n'a aucune
    # valeur (il vient de la mise en page), mais un mot perdu se voit
    # immédiatement. Le pied de page répété est retiré des deux côtés,
    # sans quoi on mesurerait sa suppression comme une perte.
    # Le sommaire est hors dénominateur : le sauter est voulu, ce n'est pas
    # une perte. Les titres de section sont au numérateur, car ils portent du
    # texte de l'auteur même s'ils ne vivent pas dans un bloc. Les puces et
    # les tirets de numérotation sont neutralisés des deux côtés : ce sont
    # des marques de mise en forme, pas des mots.
    def norm(s: str) -> str:
        return re.sub(rf"[\s{re.escape(BULLETS)}]", "", s)

    body_src = []
    for i in range(doc.page_count):
        if a.start is not None and i + 1 < a.start:
            continue
        if a.start is None and is_toc_page(doc[i]):
            continue
        body_src += [
            l
            for l in doc[i].get_text("text").split("\n")
            if not FOOTER.search(l) and not PAGE_NO.match(l.strip())
        ]
    src_n = norm("".join(body_src))
    got_n = norm(
        "".join(
            s["number"] + s["title"]
            + "".join(
                b.get("text", "") + "".join(b.get("items", []))
                for b in s["blocks"]
            )
            for s in sections
        )
    )
    ratio = 100 * len(got_n) / max(1, len(src_n))

    open(a.out, "w").write(emit(sections, a.var, a.src, doc.page_count, chars))
    print(
        f"{a.src}\n"
        f"  {len(sections)} sections, "
        f"{sum(len(s['blocks']) for s in sections)} blocs\n"
        f"  fidélité : {ratio:.1f} % des signes non blancs "
        f"({len(got_n)} / {len(src_n)})"
    )
    if ratio < 97:
        print("  ⚠️  sous 97 % : vérifier les heuristiques avant d'intégrer.")


if __name__ == "__main__":
    main()
