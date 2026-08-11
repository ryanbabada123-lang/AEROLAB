#!/usr/bin/env python3
"""
Planches-contact des figures d'un cours, pour le tri à l'œil.

POURQUOI
--------
`cours-inventaire.py` compte les figures mais ne sait pas dire lesquelles
sont des schémas et lesquelles sont des photographies — deux heuristiques
ont été essayées et rejetées, voir son entête. Le tri demande un œil.

Le regarder figure par figure coûterait 404 examens. Cette planche en met
douze par image, numérotées, ce qui ramène le tri à une trentaine de coups
d'œil pour l'ensemble du BIA.

USAGE
    python3 scripts/cours-planches.py <pdf> [--out <dossier>]

Chaque figure porte son repère « pNN·i » : page du document, puis rang
dans la page. C'est ce repère qui sert ensuite dans
docs/INVENTAIRE-FIGURES.md.
"""

import argparse
import io
import math
import os

import pymupdf
from PIL import Image, ImageDraw

MIN_PT = (150, 110)
COLS, ROWS = 4, 3
CELL = (330, 250)
PAD = 26


def figures(doc):
    """Les figures assez grandes pour porter une information."""
    out = []
    for i in range(doc.page_count):
        page = doc[i]
        seen = set()
        rank = 0
        for info in page.get_images(full=True):
            xref = info[0]
            if xref in seen:
                continue
            seen.add(xref)
            rects = page.get_image_rects(xref)
            if not rects:
                continue
            r = rects[0]
            if r.width < MIN_PT[0] or r.height < MIN_PT[1]:
                continue
            rank += 1
            out.append((i + 1, rank, r))
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("pdf")
    ap.add_argument("--out", default="/tmp/planches")
    a = ap.parse_args()

    os.makedirs(a.out, exist_ok=True)
    doc = pymupdf.open(a.pdf)
    figs = figures(doc)
    per = COLS * ROWS
    sheets = math.ceil(len(figs) / per)
    nom = os.path.splitext(os.path.basename(a.pdf))[0][:28]

    for s in range(sheets):
        W = COLS * CELL[0] + (COLS + 1) * PAD
        H = ROWS * (CELL[1] + 22) + (ROWS + 1) * PAD
        sheet = Image.new("RGB", (W, H), "#ffffff")
        draw = ImageDraw.Draw(sheet)

        for k, (pno, rank, r) in enumerate(figs[s * per : (s + 1) * per]):
            col, row = k % COLS, k // COLS
            x = PAD + col * (CELL[0] + PAD)
            y = PAD + row * (CELL[1] + 22 + PAD)
            try:
                pix = doc[pno - 1].get_pixmap(dpi=110, clip=r)
                im = Image.open(io.BytesIO(pix.tobytes("png"))).convert("RGB")
            except Exception:
                continue
            im.thumbnail(CELL)
            sheet.paste(im, (x + (CELL[0] - im.width) // 2, y + 20))
            draw.rectangle(
                [x - 2, y + 18, x + CELL[0] + 2, y + 22 + CELL[1]],
                outline="#c8d2dc",
            )
            draw.text((x, y + 2), f"p{pno}·{rank}", fill="#0b0f14")

        path = f"{a.out}/{nom}-planche{s + 1}.png"
        sheet.save(path)
        print(f"{path}  ({min(per, len(figs) - s * per)} figures)")

    print(f"{len(figs)} figures, {sheets} planches.")


if __name__ == "__main__":
    main()
