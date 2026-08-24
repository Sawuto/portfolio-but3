import { useState } from 'react'
import { parCompetence } from '../data/referentiel.js'
import { lienLigne } from '../lib/routeur.js'
import {
  releve,
  formaterSonde,
  sondeEnTexte,
  estRempli,
  acConnu,
  plafondDepasse,
  anomalies,
} from '../lib/sondes.js'
import { leves, monteeEnCompetence, aTerre, carnet, stations } from '../content/portfolio.js'
import { Champ, ChampProse, ChampListe } from './Champ.jsx'
import { Travaux, Trace, Lieu } from './Icones.jsx'

/** Pastille de ligne. */
export function Pastille({ c, grande = false }) {
  return (
    <span
      className={`pastille ${grande ? 'pastille--grande' : ''}`}
      style={{ '--ligne': `var(--l-${c.id})` }}
      title={c.nom}
    >
      C{c.numero}
    </span>
  )
}

/** Niveau lisible : « niveau 2 » ou « niveau 2 + » quand le suivant est entamé. */
function Niveau({ v }) {
  const f = formaterSonde(v)
  if (!f) return <span className="travaux">non renseigné</span>
  return (
    <span title={sondeEnTexte(v)}>
      niveau {f.entier}
      {f.fraction && ' +'}
    </span>
  )
}

/* ═══════════════════════════ LES MISSIONS ═══════════════════════════ */

export function Missions() {
  const [filtre, setFiltre] = useState('tous')
  const liste = filtre === 'tous' ? stations : stations.filter((s) => s.leve === filtre)

  return (
    <section id="missions" className="section" aria-labelledby="missions-titre">
      <header>
        <h2 id="missions-titre" className="titre-section">
          Les missions
        </h2>
        <p className="prose">
          Chaque mission est une station du réseau. Une station desservie par plusieurs
          lignes est une correspondance : c'est la façon la plus honnête de dire qu'un
          projet mobilise plusieurs compétences à la fois.
        </p>
        <div style={{ display: 'flex', gap: '0.4rem', marginTop: '1.25rem' }}>
          {['tous', 'S6', 'S4'].map((k) => (
            <button
              key={k}
              className="bouton"
              aria-pressed={filtre === k}
              onClick={() => setFiltre(k)}
            >
              {k === 'tous' ? 'Toutes' : `Levé ${k}`}
            </button>
          ))}
        </div>
      </header>

      {liste.map((st) => (
        <FicheMission key={st.id} st={st} />
      ))}
    </section>
  )
}

function FicheMission({ st }) {
  const dessert = (st.sondes ?? []).map((s) => parCompetence[s.competence]).filter(Boolean)

  return (
    <details id={`mission-${st.id}`}>
      <summary>
        <span className="station-tete">
          <span className="station-code">{st.code}</span>
          <span>
            <span className="station-nom">
              <Champ v={st.intitule} />
            </span>
            {(estRempli(st.organisation) || estRempli(st.periode)) && (
              <span className="station-meta" style={{ display: 'block' }}>
                {estRempli(st.organisation) && st.organisation}
                {estRempli(st.organisation) && estRempli(st.periode) && ' · '}
                {estRempli(st.periode) && st.periode}
              </span>
            )}
          </span>
          <span className="desserte">
            {dessert.map((c) => (
              <Pastille key={c.id} c={c} />
            ))}
          </span>
        </span>
      </summary>

      <div className="depli-corps">
        <ChampProse v={st.descriptif} className="prose" />

        <p className="sous-titre-depli">Rôle et contexte</p>
        <p className="prose" style={{ margin: 0 }}>
          <Champ v={st.role} />
        </p>
        <ChampProse v={st.contexte} className="prose" />

        <p className="sous-titre-depli">Environnement technique</p>
        <ChampListe items={st.technique} vide="Langages, frameworks, outils" />

        <p className="sous-titre-depli">Bilan de résultats</p>
        {estRempli(st.resultats) ? (
          <ul className="prose" style={{ margin: 0, paddingLeft: '1.15rem' }}>
            {st.resultats.map((r, i) => (
              <li key={i}>
                <Champ v={r} discret={false} />
              </li>
            ))}
          </ul>
        ) : (
          <Champ
            v={{
              __aRemplir: 'Faits vérifiables : mise en production, volume, tickets, retour',
            }}
          />
        )}

        <p className="sous-titre-depli">Lignes desservies</p>
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {(st.sondes ?? []).map((sonde, i) => {
            const c = parCompetence[sonde.competence]
            if (!c) return null
            const depasse = plafondDepasse(sonde.competence, sonde.niveau)
            return (
              <div key={i} style={{ '--ligne': `var(--l-${c.id})` }}>
                <p
                  style={{
                    margin: '0 0 0.4rem',
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '0.6rem',
                    flexWrap: 'wrap',
                  }}
                >
                  <Pastille c={c} />
                  <span style={{ fontWeight: 600 }}>{c.nom}</span>
                  <span style={{ color: 'var(--encre-2)' }}>
                    — <Niveau v={sonde.niveau} />
                  </span>
                </p>

                {depasse && (
                  <div className="alerte" style={{ margin: '0 0 0.6rem' }}>
                    <Travaux />
                    <span>
                      Le parcours RA a son terminus au niveau {c.niveauMaxParcours} sur cette
                      compétence. Corrige le niveau déclaré.
                    </span>
                  </div>
                )}

                {estRempli(sonde.ac) ? (
                  <ul className="ac-liste">
                    {sonde.ac.map((ac, k) => (
                      <li key={k} data-mobilise="true" data-inconnu={!acConnu(ac)}>
                        {ac}
                        {!acConnu(ac) && (
                          <span className="signal" style={{ display: 'block', color: 'var(--travaux)' }}>
                            ce libellé n'existe pas mot pour mot dans le référentiel
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <Champ
                    v={{
                      __aRemplir:
                        'Apprentissages critiques, recopiés depuis src/data/referentiel.js',
                    }}
                  />
                )}

                <p className="trace-demontre" style={{ margin: '0.5rem 0 0' }}>
                  <Champ v={sonde.justification} discret={false} />
                </p>
              </div>
            )
          })}
        </div>

        <p className="sous-titre-depli">Traces et preuves</p>
        {estRempli(st.traces) ? (
          st.traces.map((tr, i) => (
            <div key={i} className="trace">
              <p className="signal" style={{ margin: 0 }}>
                <Champ v={tr.nature} />
              </p>
              <p style={{ margin: 0, fontWeight: 600 }}>
                {estRempli(tr.lien) && !tr.prive ? (
                  <a href={tr.lien} target="_blank" rel="noreferrer">
                    <Trace style={{ verticalAlign: '-3px', marginRight: '0.3rem' }} />
                    <Champ v={tr.titre} />
                  </a>
                ) : (
                  <Champ v={tr.titre} />
                )}
              </p>
              {tr.prive && (
                <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--travaux)' }}>
                  {tr.accesNote ??
                    'Dépôt privé — ouvrable par ton tuteur enseignant, pas par ton tuteur entreprise ni par un recruteur.'}
                </p>
              )}
              {tr.lienPublic !== undefined && (
                <p style={{ margin: 0, fontSize: '0.88rem' }}>
                  Version publique :{' '}
                  {estRempli(tr.lienPublic) ? (
                    <a href={tr.lienPublic}>{tr.lienPublic}</a>
                  ) : (
                    <Champ v={tr.lienPublic} />
                  )}
                </p>
              )}
              <p className="trace-demontre" style={{ margin: 0 }}>
                <Champ v={tr.demontre} discret={false} />
              </p>
            </div>
          ))
        ) : (
          <Champ
            v={{ __aRemplir: 'Aucune trace — 20 points de la grille portent sur les traces' }}
          />
        )}
      </div>
    </details>
  )
}

/* ═══════════════════════════ LE TRAJET ═══════════════════════════ */

export function LeTrajet() {
  const { lignes } = releve()

  return (
    <section id="trajet" className="section" aria-labelledby="trajet-titre">
      <header>
        <h2 id="trajet-titre" className="titre-section">
          Le trajet
        </h2>
        <p className="prose">
          Le semestre 4 et le semestre 6 sont deux relevés de la même eau à deux dates. Le détail
          de chaque progression, et ce qui l'a provoquée, vit sur la page de la ligne concernée.
        </p>
      </header>

      <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        {leves.map((l) => (
          <div key={l.id} style={{ maxWidth: '26rem' }}>
            <p className="signal" style={{ margin: 0 }}>
              {l.nom} · <Champ v={l.annee} />
            </p>
            <p style={{ margin: '0.2rem 0 0', fontWeight: 600 }}>
              <Lieu style={{ verticalAlign: '-3px', marginRight: '0.3rem' }} />
              <Champ v={l.lieu} />
            </p>
            <ChampProse v={l.resume} className="prose" />
          </div>
        ))}
      </div>

      <details>
        <summary>Les six progressions en tableau</summary>
        <div className="depli-corps">
        <div className="tableau-enveloppe">
        <table>
          <caption>
            La même information que le plan, en lecture directe. Cliquez une compétence pour la
            bascule qui a provoqué sa progression.
          </caption>
          <thead>
            <tr>
              <th scope="col">Ligne</th>
              <th scope="col">Compétence</th>
              <th scope="col">S4</th>
              <th scope="col">S6</th>
              <th scope="col">Progression</th>
            </tr>
          </thead>
          <tbody>
            {lignes.map((l) => {
              const c = l.competence
              return (
                <tr key={c.id}>
                  <td>
                    <Pastille c={c} />
                  </td>
                  <th scope="row" style={{ fontWeight: 500 }}>
                    <a href={lienLigne(c.id)}>{c.nom}</a>
                  </th>
                  <td className="num">{l.S4.niveau ?? '—'}</td>
                  <td className="num" style={{ fontWeight: 600 }}>
                    {l.S6.niveau ?? '—'}
                  </td>
                  <td className="num">
                    {l.delta === null
                      ? '—'
                      : l.delta === 0
                        ? (() => {
                            const nb = new Set(l.S6.stations.map(({ station }) => station.id)).size
                            return nb > 0
                              ? `plafond dès le S4 — confirmé sur ${nb} mission(s) en alternance`
                              : 'terminus atteint au S4'
                          })()
                        : `+${l.delta.toFixed(1)}`}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
        </div>
      </details>
    </section>
  )
}

/* ═══════════════════════════ L'ITINÉRAIRE ═══════════════════════════ */

export function Itineraire() {
  return (
    <section id="itineraire" className="section" aria-labelledby="itineraire-titre">
      <header>
        <h2 id="itineraire-titre" className="titre-section">
          L'itinéraire
        </h2>
        <p className="prose">
          Deux escales, une trajectoire. C'est la partie qu'un recruteur lira dans six mois,
          quand la grille d'évaluation n'existera plus.
        </p>
      </header>

      <div className="prose" style={{ marginBottom: '1.5rem', fontSize: '1.05rem' }}>
        <Champ v={aTerre.fil} discret={false} />
      </div>

      {aTerre.escales.map((e, i) => (
        <div key={i} className="escale">
          <div>
            <p className="escale-lieu" style={{ margin: 0 }}>
              {e.lieu}
            </p>
            {e.pays && (
              <p className="station-meta" style={{ margin: '0.1rem 0 0' }}>
                {e.pays}
              </p>
            )}
            <p className="signal" style={{ margin: '0.3rem 0 0' }}>
              <Champ v={e.periode} />
            </p>
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 500 }}>
              <Champ v={e.quoi} />
            </p>
            <p className="prose" style={{ margin: '0.5rem 0 0' }}>
              <Champ v={e.cequejairetenu} discret={false} />
            </p>
          </div>
        </div>
      ))}

      <div style={{ marginTop: '2rem' }}>
        <p className="sous-titre-depli" style={{ marginTop: 0 }}>
          Après le BUT
        </p>
        <div className="prose">
          <Champ v={aTerre.apres} discret={false} />
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════ LA NOTICE ═══════════════════════════ */

export function Notice() {
  const problemes = anomalies()

  return (
    <section id="notice" className="section" aria-labelledby="notice-titre">
      <header>
        <h2 id="notice-titre" className="titre-section">
          Notice
        </h2>
        <p className="prose">
          Les objectifs de ce portfolio et les choix qui l'ont façonné. C'est par là que
          commence la navigation commentée en soutenance.
        </p>
      </header>

      <div style={{ display: 'grid', gap: '1.75rem', maxWidth: 'var(--mesure)' }}>
        <div>
          <p className="sous-titre-depli" style={{ marginTop: 0 }}>
            Objectifs
          </p>
          <div className="prose">
            <Champ v={carnet.objectifs} discret={false} />
          </div>
        </div>

        <div>
          <p className="sous-titre-depli" style={{ marginTop: 0 }}>
            Pourquoi cette forme
          </p>
          <p className="prose" style={{ margin: 0 }}>
            {carnet.choixDeLaForme}
          </p>
        </div>

        <div>
          <p className="sous-titre-depli" style={{ marginTop: 0 }}>
            Comment lire le plan
          </p>
          <ul className="prose" style={{ margin: 0, paddingLeft: '1.15rem' }}>
            <li>
              Une <strong>ligne</strong> est une compétence du référentiel. Six lignes, six
              compétences.
            </li>
            <li>
              Une <strong>zone</strong> est un niveau du référentiel. Plus on avance sur une
              ligne, plus le niveau est élevé.
            </li>
            <li>
              Une <strong>station</strong> est une mission ou un projet. Une station desservie
              par plusieurs lignes est une <strong>correspondance</strong> : la mission a
              mobilisé plusieurs compétences.
            </li>
            <li>
              Le <strong>terminus</strong> est le niveau maximum que le parcours RA conduit sur
              cette compétence. Il n'est pas le même partout : trois lignes s'arrêtent en zone
              2.
            </li>
            <li>
              Un tronçon <strong>en pointillé</strong> est un niveau engagé sans être acquis.
              C'est le degré d'acquisition.
            </li>
          </ul>
        </div>

        <div>
          <p className="sous-titre-depli" style={{ marginTop: 0 }}>
            Choix techniques
          </p>
          <div className="prose">
            <Champ v={carnet.choixTechniques} discret={false} />
          </div>
        </div>

        <div>
          <p className="sous-titre-depli" style={{ marginTop: 0 }}>
            Ce que ce portfolio ne montre pas
          </p>
          <div className="prose">
            <Champ v={carnet.limites} discret={false} />
          </div>
        </div>
      </div>

      {problemes.length > 0 && (
        <details style={{ marginTop: '2.5rem' }}>
          <summary>
            <span style={{ color: 'var(--travaux)', display: 'flex', gap: '0.5rem' }}>
              <Travaux />
              Contrôle du plan — {problemes.length} point(s) à traiter
            </span>
          </summary>
          <div className="depli-corps">
            <p className="prose" style={{ marginTop: 0, fontSize: '0.88rem' }}>
              Ce dépli disparaît de lui-même quand la liste est vide.
            </p>
            <ul className="prose" style={{ margin: 0, paddingLeft: '1.15rem', display: 'grid', gap: '0.5rem' }}>
              {problemes.map((p, i) => (
                <li key={i} style={{ color: p.gravite === 'erreur' ? '#7d0a1c' : 'var(--encre-2)' }}>
                  {p.message}
                </li>
              ))}
            </ul>
          </div>
        </details>
      )}
    </section>
  )
}
