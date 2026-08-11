import pymupdf, os, json
SRC="assets/cours/bia/BIA-Cours1-Meteorologie-2024-06-06.pdf"
OUT="public/verif/meteo"
os.makedirs(OUT, exist_ok=True)
d=pymupdf.open(SRC)
# id, page (1-based), clip rect in PDF points
FIGS=[
 ("atmosphere-coupe",        3, (291,155,556,304)),
 ("atmosphere-temperature",  3, (298,408,565,687)),
 ("colonne-air",             5, (455,225,545,385)),
 ("isobares-monde",          6, (48,205,540,440)),
 ("rayonnement-jour-nuit",   8, (339,484,564,667)),
 ("saisons-solstices",      10, (291,124,538,447)),
 ("changements-etat-eau",   11, (22,432,300,650)),
 ("cycle-eau",              11, (296,510,545,700)),
 ("vent-forces",            12, (93,533,543,737)),
 ("cellules-hadley",        13, (282,354,540,561)),
 ("onde-relief",            14, (296,580,564,739)),
 ("brises-mer-terre",       15, (55,416,537,777)),
 ("fleches-vent",           16, (100,346,549,435)),
 ("gradient-adiabatique",   18, (273,102,551,312)),
 ("stabilite-instabilite",  19, (66,120,553,310)),
 ("masses-air-tableau",     20, (60,50,560,580)),
 ("nuages-etages-tableau",  22, (60,120,555,265)),
 ("front-chaud-coupe",      27, (58,294,575,519)),
 ("front-chaud-tableau",    27, (66,602,548,745)),
 ("symbole-front-chaud",    27, (408,106,538,145)),
 ("front-froid-coupe",      28, (45,439,548,650)),
 ("front-froid-tableau",    28, (66,444,547,574)),
 ("symbole-front-froid",    28, (398,196,537,234)),
 ("perturbation-dessus",    29, (14,430,578,773)),
 ("occlusion-coupe",        30, (68,307,539,466)),
 ("symboles-occlusion",     30, (75,500,520,530)),
 ("brouillard-radiation",   31, (237,565,555,701)),
 ("brouillard-advection",   32, (255,105,552,240)),
 ("brouillard-evaporation", 32, (255,312,552,447)),
 ("brouillard-pente",       32, (255,519,546,655)),
 ("orage-charges",          36, (390,282,545,377)),
 ("visibilite-secteurs",    42, (70,91,206,226)),
 ("visibilite-brume",       42, (70,257,207,393)),
 ("prise-de-decision",      49, (43,480,413,737)),
 ("dossier-vol",            49, (54,336,570,472)),
]
man={}
for fid,pno,r in FIGS:
    p=d[pno-1]
    clip=pymupdf.Rect(*r)
    pix=p.get_pixmap(dpi=200, clip=clip)
    pix.save(f"{OUT}/{fid}.png")
    man[fid]={"page":pno,"w":pix.width,"h":pix.height}
    print(f"{fid:26s} p{pno:2d} {pix.width}x{pix.height}")
json.dump(man, open(f"{OUT}/manifest.json","w"), indent=1)
