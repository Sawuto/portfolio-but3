import { useEffect, useMemo, useRef, useState } from 'react'
import { releve, sondeEnTexte, formaterSonde } from '../lib/sondes.js'
import { identite, stations } from '../content/portfolio.js'
import { Champ } from './Champ.jsx'
import { Terminus, Correspondance, Travaux } from './Icones.jsx'
import { lienLigne } from '../lib/routeur.js'

/* Géométrie. Les zones tarifaires sont les niveaux du référentiel. */
const NIVEAU_MAX = 3
const LARGE = { x0: 232, largeurZone: 300, y0: 92, pas: 74, epaisseur: 11 }
const COMPACT = { x0: 16, y0: 58, pas: 88, epaisseur: 10 }

export default function Reseau() {
  const [ligneActive, setLigneActive] = useState(null)
  const { lignes, exemple } = useMemo(() => releve(), [])
  const [stationActive, setStationActive] = useState(null)
  const [anime, setAnime] = useState(true)
  const [compact, setCompact] = useState(false)
  const refVoies = useRef([])

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 60rem)')
    setCompact(mq.matches)
    const on = (e) => setCompact(e.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])

  useEffect(() => {
    const t = setTimeout(() => setAnime(false), 2200)
    return () => clearTimeout(t)
  }, [])

  const n = lignes.length

  /* Les dessertes de la station pointée, par ligne. */
  const desserte = useMemo(() => {
    if (!stationActive) return null
    const st = stations.find((s) => s.id === stationActive)
    if (!st) return null
    const m = {}
    for (const s of st.sondes ?? []) {
      if (typeof s.niveau === 'number') m[s.competence] = s.niveau
    }
    return { station: st, niveaux: m }
  }, [stationActive])

  const surTouche = (e, i) => {
    const suivant =
      e.key === 'ArrowDown' || e.key === 'ArrowRight'
        ? (i + 1) % n
        : e.key === 'ArrowUp' || e.key === 'ArrowLeft'
          ? (i - 1 + n) % n
          : null
    if (suivant !== null) {
      e.preventDefault()
      refVoies.current[suivant]?.focus()
      setLigneActive(lignes[suivant].competence.id)
      return
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      window.location.hash = lienLigne(lignes[i].competence.id)
    }
  }

  const g = compact ? COMPACT : LARGE
  const hauteur = g.y0 + n * g.pas + (compact ? 24 : 40)
  const largeurVue = compact ? 700 : 1240
  const xFin = compact ? largeurVue - 16 : LARGE.x0 + 3 * LARGE.largeurZone
  const xDe = (niveau) =>
    compact
      ? COMPACT.x0 + (niveau / NIVEAU_MAX) * (xFin - COMPACT.x0)
      : LARGE.x0 + niveau * LARGE.largeurZone
  const yDe = (i) => g.y0 + i * g.pas

  return (
    <section id="reseau" className="section reseau" aria-labelledby="reseau-titre">
      <header className="reseau-entete">
        <p className="signal" style={{ margin: 0 }}>
          Portefeuille de compétences · Semestre 6 · {identite.formation}
        </p>
        <h1 id="reseau-titre" className="titre-page">
          <Champ v={identite.prenom} /> <Champ v={identite.nom} />
        </h1>
        <p className="prose" style={{ margin: 0, fontSize: '1.05rem' }}>
          <Champ v={identite.accroche} />
        </p>
        <p className="signal" style={{ margin: '0.35rem 0 0' }}>
          {identite.parcours} · {identite.etablissement} · Alternance chez{' '}
          {identite.entreprise}
        </p>
      </header>

      {exemple && (
        <p
          className="signal"
          style={{
            margin: '0 var(--marge) 1rem',
            color: 'var(--travaux)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
          }}
          role="status"
        >
          <Travaux />
          Plan de démonstration — les niveaux affichés ne sont pas les tiens
        </p>
      )}

      <svg
        className={`reseau-toile ${anime ? 'anime' : ''}`}
        viewBox={`0 0 ${largeurVue} ${hauteur}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={`Plan du réseau de compétences. Six lignes, une par compétence du référentiel, traversant trois zones correspondant aux trois niveaux. ${lignes
          .map(
            (l) =>
              `Ligne ${l.competence.numero}, ${l.competence.nom} : ${sondeEnTexte(
                l.S6.niveau,
              )}, terminus au niveau ${l.competence.niveauMaxParcours}.`,
          )
          .join(' ')}`}
      >
        {/* Zones tarifaires = niveaux du référentiel */}
        {[1, 2, 3].map((z) => (
          <g key={z}>
            <rect
              x={xDe(z - 1)}
              y={g.y0 - (compact ? 30 : 44)}
              width={xDe(z) - xDe(z - 1)}
              height={n * g.pas + (compact ? 26 : 40)}
              fill={`var(--zone-${z})`}
            />
            <text
              x={xDe(z - 1) + (xDe(z) - xDe(z - 1)) / 2}
              y={g.y0 - (compact ? 38 : 56)}
              textAnchor="middle"
              fontSize={compact ? 15 : 14}
              fontWeight="600"
              fill="var(--encre-3)"
              style={{
                fontFamily: 'var(--f-etroit)',
                textTransform: 'uppercase',
                letterSpacing: '0.09em',
              }}
            >
              Zone {z} — niveau {z}
            </text>
          </g>
        ))}

        {/* Les six lignes */}
        {lignes.map((l, i) => {
          const c = l.competence
          const y = yDe(i)
          const couleur = `var(--l-${c.id})`
          const actif = ligneActive === c.id
          const plafond = c.niveauMaxParcours
          const s6 = l.S6.niveau
          const s4 = l.S4.niveau
          const acquis = typeof s6 === 'number' ? Math.floor(s6) : 0
          const fraction = typeof s6 === 'number' ? s6 - acquis : 0

          return (
            <g
              key={c.id}
              className="voie"
              role="button"
              tabIndex={0}
              ref={(el) => (refVoies.current[i] = el)}
              aria-label={`Ouvrir la page de la ligne ${c.numero}, ${c.nom}. ${sondeEnTexte(s6)}. Terminus au niveau ${plafond}.`}
              onClick={() => {
                window.location.hash = lienLigne(c.id)
              }}
              onMouseEnter={() => setLigneActive(c.id)}
              onMouseLeave={() => setLigneActive(null)}
              onKeyDown={(e) => surTouche(e, i)}
            >
              <rect
                className="voie-cible"
                x={0}
                y={y - g.pas / 2 + 4}
                width={largeurVue}
                height={g.pas - 8}
              />

              {/* Tronçon latent : jusqu'au terminus du parcours */}
              <line
                className="trace-ligne trace-latente"
                x1={xDe(0)}
                y1={y}
                x2={xDe(plafond)}
                y2={y}
                stroke={couleur}
                strokeWidth={g.epaisseur}
              />

              {/* Tronçon acquis */}
              {acquis > 0 && (
                <line
                  className="trace-ligne trace-acquise"
                  x1={xDe(0)}
                  y1={y}
                  x2={xDe(acquis)}
                  y2={y}
                  stroke={couleur}
                  strokeWidth={g.epaisseur}
                  style={{ animationDelay: `${i * 0.09}s` }}
                />
              )}

              {/* Tronçon en travaux : le degré d'acquisition entamé */}
              {fraction > 0.02 && (
                <line
                  className="trace-ligne trace-travaux"
                  x1={xDe(acquis)}
                  y1={y}
                  x2={xDe(acquis + fraction)}
                  y2={y}
                  stroke={couleur}
                  strokeWidth={g.epaisseur}
                />
              )}

              {/* Terminus : le plafond du parcours RA */}
              <line
                x1={xDe(plafond)}
                y1={y - g.epaisseur}
                x2={xDe(plafond)}
                y2={y + g.epaisseur}
                stroke={couleur}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {plafond < NIVEAU_MAX && (
                <text
                  x={xDe(plafond) + 12}
                  y={y + 4}
                  fontSize={compact ? 13 : 12}
                  fontWeight="600"
                  fill="var(--encre-3)"
                  style={{
                    fontFamily: 'var(--f-etroit)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.07em',
                  }}
                >
                  terminus
                </text>
              )}

              {/* Position au S4 : un arrêt déjà passé */}
              {typeof s4 === 'number' && (
                <g className="marqueur" style={{ animationDelay: `${0.5 + i * 0.05}s` }}>
                  <circle
                    cx={xDe(s4)}
                    cy={y}
                    r={g.epaisseur / 2 - 1.5}
                    fill="var(--papier)"
                    stroke={couleur}
                    strokeWidth="2.5"
                  />
                  <text
                    x={xDe(s4)}
                    y={y - g.epaisseur - 7}
                    textAnchor="middle"
                    fontSize={compact ? 12 : 11}
                    fontWeight="600"
                    fill="var(--encre-3)"
                    style={{ fontFamily: 'var(--f-etroit)' }}
                  >
                    S4
                  </text>
                </g>
              )}

              {/* Position au S6 : « vous êtes ici » */}
              {typeof s6 === 'number' && (
                <g className="marqueur" style={{ animationDelay: `${0.72 + i * 0.05}s` }}>
                  <circle
                    cx={xDe(s6)}
                    cy={y}
                    r={g.epaisseur / 2 + 3.5}
                    fill="var(--papier)"
                    stroke={couleur}
                    strokeWidth="4"
                  />
                  <text
                    x={xDe(s6)}
                    y={y + g.epaisseur + 19}
                    textAnchor="middle"
                    fontSize={compact ? 14 : 13}
                    fontWeight="700"
                    fill="var(--encre)"
                    style={{ fontFamily: 'var(--f-etroit)' }}
                  >
                    S6 · {libelleNiveau(s6)}
                  </text>
                </g>
              )}

              {/* Desserte de la station pointée sur cette ligne */}
              {desserte && typeof desserte.niveaux[c.id] === 'number' && (
                <g>
                  <circle
                    cx={xDe(desserte.niveaux[c.id])}
                    cy={y}
                    r={g.epaisseur / 2 + 7}
                    fill="none"
                    stroke="var(--encre)"
                    strokeWidth="2"
                  />
                  <circle
                    cx={xDe(desserte.niveaux[c.id])}
                    cy={y}
                    r="3.5"
                    fill="var(--encre)"
                  />
                </g>
              )}

              {/* Cartouche de ligne */}
              {compact ? (
                <>
                  <rect
                    x={COMPACT.x0}
                    y={y - g.pas / 2 + 6}
                    width={34}
                    height={20}
                    rx={10}
                    fill={couleur}
                  />
                  <text
                    x={COMPACT.x0 + 17}
                    y={y - g.pas / 2 + 20}
                    textAnchor="middle"
                    fontSize="13"
                    fontWeight="700"
                    fill="var(--blanc)"
                    style={{ fontFamily: 'var(--f-etroit)' }}
                  >
                    C{c.numero}
                  </text>
                  <text
                    x={COMPACT.x0 + 42}
                    y={y - g.pas / 2 + 20}
                    fontSize="15"
                    fontWeight={actif ? 700 : 600}
                    fill="var(--encre)"
                    style={{ fontFamily: 'var(--f-etroit)' }}
                  >
                    {c.verbe}
                  </text>
                </>
              ) : (
                <>
                  <rect x={16} y={y - 12} width={38} height={24} rx={12} fill={couleur} />
                  <text
                    x={35}
                    y={y + 5}
                    textAnchor="middle"
                    fontSize="14"
                    fontWeight="700"
                    fill="var(--blanc)"
                    style={{ fontFamily: 'var(--f-etroit)' }}
                  >
                    C{c.numero}
                  </text>
                  <text
                    x={64}
                    y={y + 5}
                    fontSize="17"
                    fontWeight={actif ? 700 : 600}
                    fill="var(--encre)"
                    style={{ fontFamily: 'var(--f-etroit)' }}
                  >
                    {c.verbe}
                  </text>
                </>
              )}
            </g>
          )
        })}

        {/* Correspondance : le trait qui relie les dessertes d'une même station */}
        {desserte && (
          <CheminCorrespondance
            desserte={desserte}
            lignes={lignes}
            xDe={xDe}
            yDe={yDe}
            compact={compact}
          />
        )}
      </svg>

      <div className="legende">
        <span className="signal">Légende</span>
        <span className="legende-item">
          <svg width="30" height="12" aria-hidden="true">
            <line x1="2" y1="6" x2="28" y2="6" stroke="var(--encre)" strokeWidth="8" strokeLinecap="round" />
          </svg>
          Niveau acquis
        </span>
        <span className="legende-item">
          <svg width="30" height="12" aria-hidden="true">
            <line
              x1="2"
              y1="6"
              x2="28"
              y2="6"
              stroke="var(--encre)"
              strokeWidth="8"
              strokeDasharray="3 7"
            />
          </svg>
          Engagé, non acquis
        </span>
        <span className="legende-item">
          <Terminus /> Terminus : plafond du parcours RA
        </span>
        <span className="legende-item">
          <Correspondance /> Correspondance : une mission, plusieurs lignes
        </span>
        <span className="legende-item">
          <svg width="16" height="16" aria-hidden="true">
            <circle cx="8" cy="8" r="5" fill="var(--papier)" stroke="var(--encre)" strokeWidth="2.5" />
          </svg>
          Position au S4
        </span>
      </div>

      {/* Sélecteur de station : allumer une mission sur toutes ses lignes */}
      <div className="legende" style={{ borderTop: '1px solid var(--filet)' }}>
        <span className="signal">Pointer une mission</span>
        {stations.map((st) => (
          <button
            key={st.id}
            className="bouton"
            aria-pressed={stationActive === st.id}
            onClick={() => setStationActive(stationActive === st.id ? null : st.id)}
          >
            {st.code} · {st.leve}
          </button>
        ))}
        {stationActive && (
          <span style={{ color: 'var(--encre-2)', fontSize: '0.88rem' }}>
            {Object.keys(desserte?.niveaux ?? {}).length} ligne(s) desservie(s) — c'est ce qu'on
            appelle une mission multicompétences.
          </span>
        )}
      </div>
    </section>
  )
}

/** Trait de correspondance à 45°, comme sur un plan de réseau. */
function CheminCorrespondance({ desserte, lignes, xDe, yDe, compact }) {
  const points = lignes
    .map((l, i) => {
      const niveau = desserte.niveaux[l.competence.id]
      return typeof niveau === 'number' ? { x: xDe(niveau), y: yDe(i) } : null
    })
    .filter(Boolean)

  if (points.length < 2) return null

  /* Coudes à 45° : le segment diagonal est cadré sur la différence verticale. */
  let d = `M${points[0].x},${points[0].y}`
  for (let k = 1; k < points.length; k++) {
    const a = points[k - 1]
    const b = points[k]
    const dy = b.y - a.y
    const dx = b.x - a.x
    const diag = Math.min(Math.abs(dx), Math.abs(dy))
    const signeX = Math.sign(dx) || 1
    if (Math.abs(dx) > diag) {
      d += ` L${a.x + signeX * (Math.abs(dx) - diag)},${a.y}`
    }
    d += ` L${b.x},${b.y}`
  }

  return (
    <g>
      <path
        className="correspondance"
        d={d}
        fill="none"
        stroke="var(--encre)"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <g>
        <rect
          x={points[0].x + 14}
          y={points[0].y - (compact ? 32 : 34)}
          width={compact ? 46 : 42}
          height={20}
          rx={10}
          fill="var(--encre)"
        />
        <text
          x={points[0].x + 14 + (compact ? 23 : 21)}
          y={points[0].y - (compact ? 18 : 20)}
          textAnchor="middle"
          fontSize="12.5"
          fontWeight="700"
          fill="var(--papier)"
          style={{ fontFamily: 'var(--f-etroit)' }}
        >
          {desserte.station.code}
        </text>
      </g>
    </g>
  )
}

/** « 2 » ou « 2 + » selon que le niveau est plein ou entamé. */
function libelleNiveau(v) {
  const f = formaterSonde(v)
  if (!f) return '—'
  return f.fraction ? `niveau ${f.entier} +` : `niveau ${f.entier}`
}
