import * as THREE from 'three'

/**
 * INSTRUMENTS VIVANTS
 *
 * Le Tecnam nous parvient sans ses quinze textures, mais chacun de ses
 * instruments occupe un mesh et un matériau nommés : `_ai.png` pour l'horizon,
 * `_asi.png` pour l'anémomètre, `_alt.png` pour l'altimètre, `_pfd.png`,
 * `_mfd.png`, `_map.png`. Plutôt que de leur rendre une image plate, on y peint
 * des instruments qui bougent.
 *
 * LA SOURCE EST LE COURS DE L'AUTEUR DU PROJET, et rien d'autre. Le cours 3
 * « Étude des aéronefs », section 4, décrit ces instruments ; ce fichier s'y
 * tient et cite ce qu'il reprend. C'est la règle du projet : aucune donnée
 * aéronautique inventée, a fortiori sur un site montré à des écoles.
 *
 * Ce que le cours ne donne pas, ce fichier ne l'invente pas : les vitesses
 * caractéristiques propres à un appareil donné viennent de son manuel de vol,
 * et ne sont pas dans le cours. Les arcs sont donc tracés sur une échelle
 * générique, avec leurs SYMBOLES — ce que le BIA interroge — et non avec des
 * nombres qui auraient l'air d'être ceux du P2010 sans en être.
 */

/* --------------------------------------------------------------- état de vol */

export interface FlightState {
  /** Vitesse indiquée, en nœuds. Le cours : « la vitesse lue est la Vi ». */
  ias: number
  /** Altitude, en pieds. Le cours : « le cadran est généralement gradué en pieds ». */
  altitude: number
  /** Assiette longitudinale, en degrés. Positif à cabrer. */
  pitch: number
  /** Inclinaison, en degrés. Positif à droite. */
  roll: number
  /** Cap magnétique, en degrés. */
  heading: number
  /** Vitesse verticale, en pieds par minute. */
  vs: number
  /**
   * Calage altimétrique affiché dans la fenêtre, en hectopascals. Le cours :
   * « tous les altimètres sont munis d'une fenêtre où apparaît une échelle de
   * pression graduée en hectopascals », et l'atmosphère standard vaut
   * 1013,25 hPa.
   */
  qnh: number
}

export const STANDARD_QNH = 1013.25

export const restingState = (): FlightState => ({
  ias: 0,
  altitude: 0,
  pitch: 0,
  roll: 0,
  heading: 270,
  vs: 0,
  qnh: STANDARD_QNH,
})

/* ------------------------------------------------------------------ palette */

const C = {
  face: '#0c1013',
  faceLip: '#1b2228',
  ink: '#eef4fa',
  inkDim: '#8fa0b0',
  needle: '#f4f8fc',
  sky: '#2c6fb5',
  ground: '#6b4a2c',
  horizon: '#e8f0f8',
  arcWhite: '#e9f1f8',
  arcGreen: '#2f9e56',
  arcYellow: '#d8a41d',
  arcRed: '#c8362c',
  glass: 'rgba(180, 214, 244, 0.06)',
} as const

/* ------------------------------------------------------------------- outils */

function disc(ctx: CanvasRenderingContext2D, s: number) {
  ctx.fillStyle = C.faceLip
  ctx.fillRect(0, 0, s, s)
  ctx.beginPath()
  ctx.arc(s / 2, s / 2, s * 0.47, 0, Math.PI * 2)
  ctx.fillStyle = C.face
  ctx.fill()
}

/** Vernis : un léger éclat en haut à gauche, comme un verre d'instrument. */
function glaze(ctx: CanvasRenderingContext2D, s: number) {
  const g = ctx.createLinearGradient(0, 0, s * 0.7, s * 0.7)
  g.addColorStop(0, 'rgba(210, 232, 252, 0.10)')
  g.addColorStop(0.45, 'rgba(210, 232, 252, 0.02)')
  g.addColorStop(1, 'rgba(0, 0, 0, 0)')
  ctx.fillStyle = g
  ctx.beginPath()
  ctx.arc(s / 2, s / 2, s * 0.47, 0, Math.PI * 2)
  ctx.fill()
}

function label(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  px: number,
  color: string = C.ink,
  weight: string = '600',
) {
  ctx.fillStyle = color
  ctx.font = `${weight} ${px}px ui-sans-serif, system-ui, sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillText(text, x, y)
}

/* --------------------------------------------------------------- anémomètre */

/**
 * Bornes des arcs de l'anémomètre du Tecnam P2010, en nœuds indiqués.
 *
 * SOURCE : Tecnam P2010 Aircraft Flight Manual, 2nd Edition Rev.1, section 2
 * « Limitations », tableau « Airspeed Indicator Markings » page 2-6. Ce sont les
 * marquages publiés de l'appareil, non des valeurs plausibles.
 *
 * Le manuel écrit :
 *   arc blanc  50 – 91   « Positive Flap Operating Range », borne basse VS0,
 *                        borne haute vitesse maxi volets d'atterrissage sortis
 *   arc vert   59 – 132  « Normal Operating Range », borne basse VS1, borne
 *                        haute VNO
 *   arc jaune  132 – 166 manœuvres avec prudence et en air calme seulement
 *   trait rouge 166      vitesse maximale toutes opérations
 *
 * Ces valeurs recoupent exactement la structure décrite par le cours 3 de
 * l'auteur du projet, ce qui permet d'afficher un instrument à la fois juste et
 * conforme à ce qui est enseigné.
 *
 * Une vérification a évité une erreur : une première recherche donnait la VNE à
 * 169 kt. Le manuel officiel dit 166. C'est cette valeur qui est retenue.
 */
export const ASI_ARCS = {
  min: 0,
  max: 180,
  /** Arc blanc : VS0 → vitesse maxi volets sortis. */
  vso: 50,
  vfe: 91,
  /** Arc vert : VS1 → VNO. */
  vs: 59,
  vno: 132,
  /** Trait rouge : VNE. */
  vne: 166,
} as const

function asiAngle(kt: number): number {
  // 0 kt en haut, sens horaire, 320° pour toute l'échelle : disposition
  // courante des anémomètres d'aviation légère.
  const t = (kt - ASI_ARCS.min) / (ASI_ARCS.max - ASI_ARCS.min)
  return -Math.PI / 2 + t * (320 * Math.PI) / 180
}

export function drawAirspeed(
  ctx: CanvasRenderingContext2D,
  s: number,
  st: FlightState,
) {
  disc(ctx, s)
  const cx = s / 2
  const cy = s / 2
  const r = s * 0.47

  const arc = (from: number, to: number, color: string, width: number, rr: number) => {
    ctx.beginPath()
    ctx.arc(cx, cy, rr, asiAngle(from), asiAngle(to))
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.lineCap = 'butt'
    ctx.stroke()
  }

  // Le cours, mot pour mot :
  //   « l'arc blanc représente la zone de vitesse dans laquelle on peut sortir
  //     les éléments mobiles sans risque de les endommager » ;
  //   « la zone verte représente la plage de vitesse d'utilisation normale » ;
  //   « la zone jaune est une plage de vitesse utilisable mais à éviter en
  //     atmosphère turbulente » ;
  //   « le trait rouge représente la vitesse à ne jamais dépasser (VNE) ».
  arc(ASI_ARCS.vso, ASI_ARCS.vfe, C.arcWhite, s * 0.028, r * 0.72)
  arc(ASI_ARCS.vs, ASI_ARCS.vno, C.arcGreen, s * 0.042, r * 0.86)
  arc(ASI_ARCS.vno, ASI_ARCS.vne, C.arcYellow, s * 0.042, r * 0.86)

  // Le trait rouge de la VNE.
  const a = asiAngle(ASI_ARCS.vne)
  ctx.beginPath()
  ctx.moveTo(cx + Math.cos(a) * r * 0.76, cy + Math.sin(a) * r * 0.76)
  ctx.lineTo(cx + Math.cos(a) * r * 0.95, cy + Math.sin(a) * r * 0.95)
  ctx.strokeStyle = C.arcRed
  ctx.lineWidth = s * 0.026
  ctx.stroke()

  // Graduations tous les 10 kt, chiffrées tous les 20.
  for (let kt = 0; kt <= ASI_ARCS.max; kt += 10) {
    const ang = asiAngle(kt)
    const major = kt % 20 === 0
    const inner = major ? r * 0.78 : r * 0.85
    ctx.beginPath()
    ctx.moveTo(cx + Math.cos(ang) * inner, cy + Math.sin(ang) * inner)
    ctx.lineTo(cx + Math.cos(ang) * r * 0.94, cy + Math.sin(ang) * r * 0.94)
    ctx.strokeStyle = major ? C.ink : C.inkDim
    ctx.lineWidth = major ? s * 0.011 : s * 0.006
    ctx.stroke()
    if (major && kt > 0) {
      label(
        ctx,
        String(kt),
        cx + Math.cos(ang) * r * 0.64,
        cy + Math.sin(ang) * r * 0.64,
        s * 0.075,
      )
    }
  }

  label(ctx, 'KT', cx, cy - r * 0.3, s * 0.06, C.inkDim, '700')
  label(ctx, 'Vi', cx, cy + r * 0.42, s * 0.055, C.inkDim, '600')

  // L'aiguille.
  const ang = asiAngle(Math.max(0, Math.min(ASI_ARCS.max, st.ias)))
  ctx.save()
  ctx.translate(cx, cy)
  ctx.rotate(ang)
  ctx.beginPath()
  ctx.moveTo(-r * 0.09, s * 0.012)
  ctx.lineTo(r * 0.88, 0)
  ctx.lineTo(-r * 0.09, -s * 0.012)
  ctx.closePath()
  ctx.fillStyle = C.needle
  ctx.fill()
  ctx.restore()

  ctx.beginPath()
  ctx.arc(cx, cy, s * 0.035, 0, Math.PI * 2)
  ctx.fillStyle = C.faceLip
  ctx.fill()

  glaze(ctx, s)
}

/* ---------------------------------------------------------------- altimètre */

export function drawAltimeter(
  ctx: CanvasRenderingContext2D,
  s: number,
  st: FlightState,
) {
  disc(ctx, s)
  const cx = s / 2
  const cy = s / 2
  const r = s * 0.47

  // Cadran gradué de 0 à 9 sur un tour, comme un altimètre à aiguilles : la
  // grande aiguille fait un tour par millier de pieds, la petite un tour par
  // dix milliers.
  for (let i = 0; i < 50; i++) {
    const ang = -Math.PI / 2 + (i / 50) * Math.PI * 2
    const major = i % 5 === 0
    ctx.beginPath()
    ctx.moveTo(
      cx + Math.cos(ang) * r * (major ? 0.76 : 0.85),
      cy + Math.sin(ang) * r * (major ? 0.76 : 0.85),
    )
    ctx.lineTo(cx + Math.cos(ang) * r * 0.94, cy + Math.sin(ang) * r * 0.94)
    ctx.strokeStyle = major ? C.ink : C.inkDim
    ctx.lineWidth = major ? s * 0.012 : s * 0.005
    ctx.stroke()
    if (major) {
      label(
        ctx,
        String(i / 5),
        cx + Math.cos(ang) * r * 0.62,
        cy + Math.sin(ang) * r * 0.62,
        s * 0.1,
      )
    }
  }

  label(ctx, 'FT', cx, cy - r * 0.34, s * 0.055, C.inkDim, '700')

  // Fenêtre de calage, en hectopascals. Le cours : « tous les altimètres sont
  // munis d'une fenêtre où apparaît une échelle de pression graduée en
  // hectopascals (hPa) ».
  // À droite du cadran, comme sur un altimètre réel : au centre bas, elle
  // chevauchait les chiffres 4, 5 et 6.
  const wW = s * 0.26
  const wH = s * 0.085
  const wX = cx + r * 0.24
  const wY = cy - wH / 2
  ctx.fillStyle = '#05080a'
  ctx.fillRect(wX, wY, wW, wH)
  ctx.strokeStyle = C.inkDim
  ctx.lineWidth = s * 0.005
  ctx.strokeRect(wX, wY, wW, wH)
  label(
    ctx,
    `${st.qnh.toFixed(0)}`,
    wX + wW / 2,
    wY + wH / 2,
    s * 0.058,
    C.ink,
    '700',
  )
  label(ctx, 'hPa', wX + wW / 2, wY + wH + s * 0.045, s * 0.04, C.inkDim, '600')

  const alt = st.altitude
  const hundreds = ((alt % 1000) / 1000) * Math.PI * 2
  const thousands = ((alt % 10000) / 10000) * Math.PI * 2

  const needle = (ang: number, len: number, width: number) => {
    ctx.save()
    ctx.translate(cx, cy)
    ctx.rotate(-Math.PI / 2 + ang)
    ctx.beginPath()
    ctx.moveTo(-r * 0.08, width)
    ctx.lineTo(r * len, 0)
    ctx.lineTo(-r * 0.08, -width)
    ctx.closePath()
    ctx.fillStyle = C.needle
    ctx.fill()
    ctx.restore()
  }

  needle(thousands, 0.52, s * 0.026) // petite aiguille : milliers
  needle(hundreds, 0.86, s * 0.013) // grande aiguille : centaines

  ctx.beginPath()
  ctx.arc(cx, cy, s * 0.035, 0, Math.PI * 2)
  ctx.fillStyle = C.faceLip
  ctx.fill()

  glaze(ctx, s)
}

/* ---------------------------------------------------------- horizon artificiel */

/**
 * Le cours : « cet appareil permet de piloter l'avion sans voir l'horizon à
 * l'extérieur […] le pilote peut donc identifier si l'avion monte, descend,
 * s'incline à gauche ou à droite. C'est l'instrument essentiel du pilotage. »
 */
export function drawAttitude(
  ctx: CanvasRenderingContext2D,
  s: number,
  st: FlightState,
) {
  const cx = s / 2
  const cy = s / 2
  const r = s * 0.47

  ctx.fillStyle = C.faceLip
  ctx.fillRect(0, 0, s, s)

  ctx.save()
  ctx.beginPath()
  ctx.arc(cx, cy, r, 0, Math.PI * 2)
  ctx.clip()

  // La sphère tourne à l'inverse de l'inclinaison, et se translate avec
  // l'assiette : c'est l'avion qui bouge, pas le monde.
  const pxPerDeg = r / 26
  ctx.translate(cx, cy)
  ctx.rotate((-st.roll * Math.PI) / 180)
  ctx.translate(0, st.pitch * pxPerDeg)

  ctx.fillStyle = C.sky
  ctx.fillRect(-s, -s * 1.6, s * 2, s * 1.6)
  ctx.fillStyle = C.ground
  ctx.fillRect(-s, 0, s * 2, s * 1.6)

  ctx.beginPath()
  ctx.moveTo(-s, 0)
  ctx.lineTo(s, 0)
  ctx.strokeStyle = C.horizon
  ctx.lineWidth = s * 0.009
  ctx.stroke()

  // Échelle de tangage : traits tous les 5°, chiffrés tous les 10°.
  ctx.strokeStyle = C.horizon
  ctx.fillStyle = C.horizon
  for (let d = -30; d <= 30; d += 5) {
    if (d === 0) continue
    const y = -d * pxPerDeg
    const half = d % 10 === 0 ? r * 0.3 : r * 0.15
    ctx.beginPath()
    ctx.moveTo(-half, y)
    ctx.lineTo(half, y)
    ctx.lineWidth = s * 0.006
    ctx.stroke()
    if (d % 10 === 0) {
      label(ctx, String(Math.abs(d)), -half - s * 0.05, y, s * 0.05, C.horizon)
      label(ctx, String(Math.abs(d)), half + s * 0.05, y, s * 0.05, C.horizon)
    }
  }
  ctx.restore()

  // Index d'inclinaison, fixes par rapport au boîtier.
  ctx.save()
  ctx.translate(cx, cy)
  for (const d of [-60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60]) {
    const ang = -Math.PI / 2 + (d * Math.PI) / 180
    const long = d === 0 || Math.abs(d) === 30 || Math.abs(d) === 60
    ctx.beginPath()
    ctx.moveTo(Math.cos(ang) * r * 0.88, Math.sin(ang) * r * 0.88)
    ctx.lineTo(
      Math.cos(ang) * r * (long ? 0.99 : 0.94),
      Math.sin(ang) * r * (long ? 0.99 : 0.94),
    )
    ctx.strokeStyle = C.ink
    ctx.lineWidth = long ? s * 0.011 : s * 0.006
    ctx.stroke()
  }

  // La maquette d'avion : deux ailes et un point central.
  ctx.strokeStyle = '#ffd23d'
  ctx.lineWidth = s * 0.014
  ctx.beginPath()
  ctx.moveTo(-r * 0.44, 0)
  ctx.lineTo(-r * 0.14, 0)
  ctx.moveTo(r * 0.14, 0)
  ctx.lineTo(r * 0.44, 0)
  ctx.stroke()
  ctx.beginPath()
  ctx.arc(0, 0, s * 0.012, 0, Math.PI * 2)
  ctx.fillStyle = '#ffd23d'
  ctx.fill()
  ctx.restore()

  glaze(ctx, s)
}

/* ------------------------------------------------------------ jeu de textures */

export type InstrumentKind = 'asi' | 'alt' | 'ai'

const PAINTERS: Record<
  InstrumentKind,
  (ctx: CanvasRenderingContext2D, s: number, st: FlightState) => void
> = {
  asi: drawAirspeed,
  alt: drawAltimeter,
  ai: drawAttitude,
}

/**
 * Quel instrument pour quel matériau du Tecnam.
 *
 * Les noms viennent du modèle, relevés par `scripts/model-parts.mjs`, et les
 * positions par mesure. Trois cadrans ronds de huit centimètres sont empilés à
 * Z entre 0,02 et 0,10, dans cet ordre de haut en bas :
 *
 *   `_asi.png`  Y [ 0,14 ;  0,22]   anémomètre
 *   `_ai.png`   Y [ 0,04 ;  0,13]   horizon artificiel
 *   `_alt.png`  Y [-0,05 ;  0,04]   altimètre
 *
 * `_attitude_indicator.png` est volontairement ABSENT de cette table. Le nom
 * trompe : ce n'est pas un cadran mais un quad de deux triangles posé sur le
 * grand écran de gauche, à Z entre 0,16 et 0,37. Y peindre l'horizon le faisait
 * apparaître, déformé, sur l'écran, tandis que le vrai cadran restait noir.
 */
export const TECNAM_INSTRUMENTS: Record<string, InstrumentKind> = {
  'DefaultWhite_asi.png': 'asi',
  'DefaultWhite_ai.png': 'ai',
  'DefaultWhite_alt.png': 'alt',
}

export interface InstrumentSet {
  /** Textures prêtes à être posées, par nom de matériau. */
  textures: Record<string, THREE.Texture>
  /** Redessine tout selon un état de vol. */
  update(state: FlightState): void
  dispose(): void
}

/**
 * Fabrique les textures d'instruments. Chacune a son canevas : redessiner un
 * instrument ne touche pas aux autres, et l'on ne réveille que ce qui change.
 */
export function createInstruments(
  mapping: Record<string, InstrumentKind> = TECNAM_INSTRUMENTS,
  size = 512,
): InstrumentSet {
  const entries = Object.entries(mapping)
  const items = entries.map(([material, kind]) => {
    const canvas = document.createElement('canvas')
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')
    const texture = new THREE.CanvasTexture(canvas)
    texture.colorSpace = THREE.SRGBColorSpace
    texture.anisotropy = 4
    // `flipY` reste à sa valeur par défaut. Les coordonnées de texture de ces
    // faces sont recalculées par `projectPlanarUV`, qui produit déjà une
    // orientation droite : le retournement ferait alors l'inverse de ce qu'il
    // corrige sur un atlas d'origine.
    texture.flipY = true
    return { material, kind, canvas, ctx, texture }
  })

  const set: InstrumentSet = {
    textures: Object.fromEntries(items.map((i) => [i.material, i.texture])),

    update(state) {
      for (const i of items) {
        if (!i.ctx) continue
        i.ctx.clearRect(0, 0, size, size)
        PAINTERS[i.kind](i.ctx, size, state)
        i.texture.needsUpdate = true
      }
    },

    dispose() {
      for (const i of items) i.texture.dispose()
    },
  }

  set.update(restingState())
  return set
}
