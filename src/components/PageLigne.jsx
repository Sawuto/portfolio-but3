import { parCompetence } from '../data/referentiel.js'
import { releve, sondeEnTexte, acConnu, estRempli } from '../lib/sondes.js'
import { monteeEnCompetence, stations } from '../content/portfolio.js'
import { lienLigne, lienAccueil } from '../lib/routeur.js'
import { Champ, ChampProse } from './Champ.jsx'
import { Terminus, Travaux, Trajet } from './Icones.jsx'
import { Pastille } from './Sections.jsx'

const NIVEAU_MAX = 3

/**
 * Une page par compétence, construite comme le plan de ligne affiché à un arrêt :
 * la pastille, le nom, le tracé de la seule ligne concernée avec ses zones, son
 * terminus et ses arrêts, puis les explications.
 *
 * Les missions ne sont PAS recopiées ici : elles sont liées. Recopier une mission
 * sur chaque page de compétence reviendrait à la découper en morceaux, et la
 * grille d'évaluation sanctionne précisément le fait de traiter un projet
 * multicompétences comme l'illustration d'une seule compétence.
 */
export default function PageLigne({ id }) {
  const c = parCompetence[id]
  if (!c) return <PageInconnue />

  const { lignes } = releve()
  const ligne = lignes.find((l) => l.competence.id === id)
  const montee = monteeEnCompetence.find((m) => m.competence === id)
  const dessertes = stations
    .map((st) => ({ st, sonde: (st.sondes ?? []).find((d) => d.competence === id) }))
    .filter((x) => x.sonde)

  const acMobilises = [...ligne.S4.ac, ...ligne.S6.ac]
  const atteint = ligne.S6.niveau ?? ligne.S4.niveau
  const nivEntier = typeof atteint === 'number' ? Math.floor(atteint) : 0
  const couleur = `var(--l-${id})`

  return (
    <article style={{ '--ligne': couleur }}>
      <section className="section" style={{ borderTop: 0, paddingBottom: '1.5rem' }}>
        <nav className="fil-ariane" aria-label="Fil d'Ariane">
          <a href={lienAccueil('')}>Le réseau</a>
          <span aria-hidden="true">›</span>
          <a href={lienAccueil('lignes')}>Les lignes</a>
          <span aria-hidden="true">›</span>
          <span>Ligne {c.numero}</span>
        </nav>

        <header style={{ marginBottom: '1.5rem', maxWidth: '46rem' }}>
          <p style={{ margin: '0 0 0.75rem' }}>
            <Pastille c={c} grande />
          </p>
          <h1 className="titre-page">{c.nom}</h1>
          <p className="prose" style={{ marginTop: '1rem', fontSize: '1.05rem' }}>
            {c.enonce}
          </p>
        </header>

        <PlanDeLigne c={c} ligne={ligne} dessertes={dessertes} />

        <dl className="fiche-chiffres">
          <div>
            <dt>Niveau atteint</dt>
            <dd>{nivEntier >= 1 ? `Niveau ${nivEntier}` : '—'}</dd>
          </div>
          <div>
            <dt>Terminus du parcours</dt>
            <dd>Niveau {c.niveauMaxParcours}</dd>
          </div>
          <div>
            <dt>Levé S4</dt>
            <dd>{sondeEnTexte(ligne.S4.niveau)}</dd>
          </div>
          <div>
            <dt>Levé S6</dt>
            <dd>{sondeEnTexte(ligne.S6.niveau)}</dd>
          </div>
          <div>
            <dt>Missions</dt>
            <dd>{dessertes.length}</dd>
          </div>
        </dl>

        {c.niveauMaxParcours < NIVEAU_MAX && (
          <p className="encart-terminus">
            <Terminus />
            <span>
              Cette ligne a son terminus en <strong>zone {c.niveauMaxParcours}</strong> : le
              parcours <em>Réalisation d'applications</em> ne conduit pas cette compétence au
              niveau 3. Le niveau {NIVEAU_MAX} existe dans le référentiel national, il n'est pas
              visé ici.
            </span>
          </p>
        )}
      </section>

      {/* ── Le niveau atteint, dans les mots du référentiel ── */}
      <section className="section">
        <h2 className="titre-section">Ce que ce niveau signifie</h2>
        {nivEntier >= 1 ? (
          <>
            <p className="prose" style={{ marginTop: '1.25rem', fontSize: '1.05rem' }}>
              Niveau {nivEntier} —{' '}
              <strong>{c.niveaux.find((n) => n.n === nivEntier)?.intitule}</strong>
            </p>
            <p className="prose" style={{ marginTop: '0.75rem' }}>
              C'est la formulation exacte du référentiel national, reprise sans reformulation.
              {typeof atteint === 'number' && atteint > nivEntier && (
                <>
                  {' '}
                  Le niveau suivant est engagé sans être acquis : sur le plan, c'est le tronçon en
                  pointillé.
                </>
              )}
            </p>
          </>
        ) : (
          <Champ v={{ __aRemplir: 'Aucun niveau déclaré sur cette compétence' }} discret={false} />
        )}

        <h3 className="sous-titre-depli">Apprentissages critiques mobilisés</h3>
        {acMobilises.length ? (
          <ul className="ac-liste">
            {acMobilises.map((ac, i) => (
              <li key={i} data-mobilise="true" data-inconnu={!acConnu(ac)}>
                {ac}
              </li>
            ))}
          </ul>
        ) : (
          <div className="alerte">
            <Travaux />
            <span>
              Aucun apprentissage critique déclaré. Recopie-les depuis le référentiel dans les
              missions concernées.
            </span>
          </div>
        )}

        <details style={{ marginTop: '2rem' }}>
          <summary>Tous les niveaux et composantes essentielles de cette compétence</summary>
          <div className="depli-corps">
            <h3 className="sous-titre-depli" style={{ marginTop: 0 }}>
              Composantes essentielles
            </h3>
            <ul className="ac-liste">
              {c.composantes.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>

            {c.niveaux.map((niv) => (
              <div key={niv.n} style={{ marginTop: '1.5rem' }}>
                <h3 className="sous-titre-depli" style={{ marginTop: 0 }}>
                  Niveau {niv.n}
                  {niv.horsParcours
                    ? ' — hors parcours RA'
                    : typeof atteint === 'number' && atteint >= niv.n
                      ? ' — atteint'
                      : ''}
                </h3>
                <p style={{ margin: '0 0 0.6rem', fontWeight: 500 }}>{niv.intitule}</p>
                <ul className="ac-liste">
                  {niv.ac.map((ac, i) => (
                    <li key={i} data-mobilise={acMobilises.includes(ac)}>
                      {ac}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </details>
      </section>

      {/* ── La montée, propre à cette compétence ── */}
      {montee && (
        <section className="section">
          <h2 className="titre-section">Du semestre 4 au semestre 6</h2>
          <div className="deux-colonnes">
            <div>
              <h3 className="sous-titre-depli" style={{ marginTop: 0 }}>
                Au semestre 4
              </h3>
              <ChampProse v={montee.auS4} className="prose" />
            </div>
            <div>
              <h3 className="sous-titre-depli" style={{ marginTop: 0 }}>
                Au semestre 6
              </h3>
              <ChampProse v={montee.auS6} className="prose" />
            </div>
          </div>
          <h3 className="sous-titre-depli">Ce qui a fait basculer</h3>
          <div className="bascule">
            <ChampProse v={montee.bascule} />
          </div>
        </section>
      )}

      {/* ── Les missions, liées et non recopiées ── */}
      <section className="section">
        <h2 className="titre-section">Ce qui le prouve</h2>
        <p className="prose" style={{ marginTop: '1rem' }}>
          {dessertes.length
            ? "Chaque mission ci-dessous mobilise d'autres compétences que celle-ci. Le lien ouvre la mission entière, avec toutes ses lignes."
            : ''}
        </p>

        {dessertes.length ? (
          <ul className="liste-dessertes">
            {dessertes.map(({ st, sonde }) => {
              const autres = (st.sondes ?? [])
                .map((d) => parCompetence[d.competence])
                .filter((x) => x && x.id !== id)
              return (
                <li key={st.id}>
                  <a href={`${lienAccueil('mission-' + st.id)}`} className="desserte-lien">
                    <span className="station-code">{st.code}</span>
                    <span style={{ flex: 1, minWidth: 0 }}>
                      <span className="desserte-titre">
                        <Champ v={st.intitule} />
                      </span>
                      <span className="station-meta" style={{ display: 'block' }}>
                        {estRempli(st.organisation) ? st.organisation : ''}
                        {sonde.niveau ? ` · niveau ${Math.floor(sonde.niveau)}` : ''}
                      </span>
                    </span>
                    {autres.length > 0 && (
                      <span className="desserte-autres" title="Autres compétences mobilisées">
                        {autres.map((x) => (
                          <Pastille key={x.id} c={x} />
                        ))}
                      </span>
                    )}
                  </a>
                  <p className="prose" style={{ margin: '0.5rem 0 0 3.25rem', fontSize: '0.88rem' }}>
                    <Champ v={sonde.justification} discret={false} />
                  </p>
                </li>
              )
            })}
          </ul>
        ) : (
          <div className="alerte">
            <Travaux />
            <span>
              Aucune mission ne déclare cette compétence. Le recopiage du référentiel sans lien
              avec les missions est explicitement sanctionné par la grille d'évaluation.
            </span>
          </div>
        )}
      </section>

      <SuivantePrecedente id={id} />
    </article>
  )
}

/* ── Plan de ligne : le tracé d'une seule ligne, comme à un arrêt ── */

function PlanDeLigne({ c, ligne, dessertes }) {
  const V = { l: 1000, h: 150 }
  const X0 = 60
  const X1 = 940
  const y = 78
  const x = (n) => X0 + (n / NIVEAU_MAX) * (X1 - X0)
  const couleur = `var(--l-${c.id})`

  const s6 = ligne.S6.niveau
  const s4 = ligne.S4.niveau
  const acquis = typeof s6 === 'number' ? Math.floor(s6) : 0
  const fraction = typeof s6 === 'number' ? s6 - acquis : 0
  const plafond = c.niveauMaxParcours

  return (
    <svg
      className="plan-de-ligne"
      viewBox={`0 0 ${V.l} ${V.h}`}
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={`Plan de la ligne ${c.numero}. ${sondeEnTexte(s6)}. Terminus au niveau ${plafond}. ${dessertes.length} mission(s) sur cette ligne.`}
    >
      {[1, 2, 3].map((z) => (
        <g key={z}>
          <rect
            x={x(z - 1)}
            y={y - 40}
            width={x(z) - x(z - 1)}
            height={80}
            fill={`var(--zone-${z})`}
            opacity={z <= plafond ? 1 : 0.45}
          />
          <text
            x={x(z - 1) + (x(z) - x(z - 1)) / 2}
            y={y - 50}
            textAnchor="middle"
            fontSize="13"
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

      <line
        x1={x(0)}
        y1={y}
        x2={x(plafond)}
        y2={y}
        stroke={couleur}
        strokeWidth="12"
        strokeLinecap="round"
        opacity="0.16"
      />
      {acquis > 0 && (
        <line
          x1={x(0)}
          y1={y}
          x2={x(acquis)}
          y2={y}
          stroke={couleur}
          strokeWidth="12"
          strokeLinecap="round"
        />
      )}
      {fraction > 0.02 && (
        <line
          x1={x(acquis)}
          y1={y}
          x2={x(acquis + fraction)}
          y2={y}
          stroke={couleur}
          strokeWidth="12"
          strokeDasharray="3 9"
          opacity="0.78"
        />
      )}

      <line
        x1={x(plafond)}
        y1={y - 14}
        x2={x(plafond)}
        y2={y + 14}
        stroke={couleur}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text
        x={x(plafond) + 14}
        y={y + 5}
        fontSize="12"
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

      {/* Les missions, en arrêts sur la ligne */}
      {dessertes.map(({ st, sonde }, i) =>
        typeof sonde.niveau === 'number' ? (
          <g key={st.id}>
            <circle cx={x(sonde.niveau)} cy={y} r="5" fill="var(--papier)" stroke="var(--encre)" strokeWidth="2" />
            <text
              x={x(sonde.niveau)}
              y={i % 2 === 0 ? y - 22 : y + 32}
              textAnchor="middle"
              fontSize="13"
              fontWeight="700"
              fill="var(--encre)"
              style={{ fontFamily: 'var(--f-etroit)' }}
            >
              {st.code}
            </text>
          </g>
        ) : null,
      )}

      {typeof s4 === 'number' && (
        <circle cx={x(s4)} cy={y} r="7" fill="var(--papier)" stroke={couleur} strokeWidth="3" />
      )}
      {typeof s6 === 'number' && (
        <>
          <circle cx={x(s6)} cy={y} r="9" fill="var(--papier)" stroke={couleur} strokeWidth="5" />
          <text
            x={x(s6)}
            y={y + 52}
            textAnchor="middle"
            fontSize="14"
            fontWeight="700"
            fill="var(--encre)"
            style={{ fontFamily: 'var(--f-etroit)' }}
          >
            S6
          </text>
        </>
      )}
      {typeof s4 === 'number' && (
        <text
          x={x(s4)}
          y={y - 26}
          textAnchor="middle"
          fontSize="12"
          fontWeight="600"
          fill="var(--encre-3)"
          style={{ fontFamily: 'var(--f-etroit)' }}
        >
          S4
        </text>
      )}
    </svg>
  )
}

/* ── Navigation de ligne à ligne ── */

function SuivantePrecedente({ id }) {
  const ordre = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6']
  const i = ordre.indexOf(id)
  const prec = i > 0 ? parCompetence[ordre[i - 1]] : null
  const suiv = i < ordre.length - 1 ? parCompetence[ordre[i + 1]] : null

  return (
    <nav className="section nav-lignes" aria-label="Autres lignes">
      {prec ? (
        <a href={lienLigne(prec.id)} className="nav-ligne-lien">
          <span className="signal">Ligne précédente</span>
          <span className="nav-ligne-nom">
            <Pastille c={prec} /> {prec.nom}
          </span>
        </a>
      ) : (
        <span />
      )}
      {suiv ? (
        <a href={lienLigne(suiv.id)} className="nav-ligne-lien nav-ligne-lien--fin">
          <span className="signal">Ligne suivante</span>
          <span className="nav-ligne-nom">
            <Pastille c={suiv} /> {suiv.nom}
          </span>
        </a>
      ) : (
        <span />
      )}
    </nav>
  )
}

function PageInconnue() {
  return (
    <section className="section" style={{ borderTop: 0 }}>
      <h1 className="titre-page">Ligne inconnue</h1>
      <p className="prose" style={{ marginTop: '1rem' }}>
        Cette ligne n'existe pas sur le réseau.
      </p>
      <p style={{ marginTop: '1.5rem' }}>
        <a href={lienAccueil('')} className="bouton bouton--plein" style={{ textDecoration: 'none' }}>
          Retour au réseau
        </a>
      </p>
    </section>
  )
}

/** Index compact des six lignes, affiché sur l'accueil. */
export function IndexLignes() {
  const { lignes } = releve()

  return (
    <section id="lignes" className="section" aria-labelledby="lignes-titre">
      <header>
        <h2 id="lignes-titre" className="titre-section">
          Les lignes
        </h2>
        <p className="prose">
          Une ligne par compétence du référentiel. Chacune a sa page : le niveau atteint dans les
          mots du référentiel, les apprentissages critiques mobilisés, la montée du semestre 4 au
          semestre 6, et les missions qui la prouvent.
        </p>
      </header>

      <ul className="index-lignes">
        {lignes.map((l) => {
          const c = l.competence
          const niv = Math.floor(l.S6.niveau ?? l.S4.niveau ?? 0)
          const nb = stations.filter((st) => (st.sondes ?? []).some((d) => d.competence === c.id))
            .length
          return (
            <li key={c.id}>
              <a href={lienLigne(c.id)} className="index-ligne-lien">
                <Pastille c={c} grande />
                <span style={{ flex: 1, minWidth: 0 }}>
                  <span className="index-ligne-nom">{c.nom}</span>
                  <span className="station-meta" style={{ display: 'block' }}>
                    {nb} mission(s) · {niv >= 1 ? `niveau ${niv}` : 'niveau à déclarer'}
                    {c.niveauMaxParcours < NIVEAU_MAX ? ` · terminus ${c.niveauMaxParcours}` : ''}
                  </span>
                </span>
                <span className="index-ligne-etat">
                  {l.delta > 0 ? (
                    <span>
                      <Trajet style={{ verticalAlign: '-2px' }} /> +{l.delta.toFixed(1)}
                    </span>
                  ) : (
                    <span style={{ color: 'var(--encre-3)' }}>terminus atteint au S4</span>
                  )}
                </span>
              </a>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
