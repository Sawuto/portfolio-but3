import { useEffect, useState } from 'react'
import Reseau from './components/Reseau.jsx'
import ModeSoutenance from './components/ModeSoutenance.jsx'
import PageLigne, { IndexLignes } from './components/PageLigne.jsx'
import { Missions, LeTrajet, Itineraire, Notice, Pastille } from './components/Sections.jsx'
import { identite, etatDuLeve } from './content/portfolio.js'
import { avancement } from './lib/sondes.js'
import { useRoute, lienLigne, lienAccueil } from './lib/routeur.js'
import { COMPETENCES, PARCOURS } from './data/referentiel.js'
import { Champ } from './components/Champ.jsx'
import { Travaux } from './components/Icones.jsx'

const SECTIONS = [
  { id: 'reseau', nom: 'Le réseau' },
  { id: 'lignes', nom: 'Les lignes' },
  { id: 'missions', nom: 'Les missions' },
  { id: 'trajet', nom: 'Le trajet' },
  { id: 'itineraire', nom: 'Itinéraire' },
  { id: 'notice', nom: 'Notice' },

]

export default function App() {
  const route = useRoute()
  const [soutenance, setSoutenance] = useState(false)
  const [visible, setVisible] = useState('reseau')
  const av = avancement()
  const surAccueil = route.page === 'accueil'

  /* Section courante, uniquement sur l'accueil. */
  useEffect(() => {
    if (!surAccueil) return
    const obs = new IntersectionObserver(
      (entrees) => {
        const vue = entrees
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (vue) setVisible(vue.target.id)
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.25, 0.5, 1] },
    )
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id)
      if (el) obs.observe(el)
    }
    return () => obs.disconnect()
  }, [surAccueil])

  /* Raccourci S pour le mode soutenance. */
  useEffect(() => {
    const surTouche = (e) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (e.key === 's' || e.key === 'S') setSoutenance((v) => !v)
    }
    window.addEventListener('keydown', surTouche)
    return () => window.removeEventListener('keydown', surTouche)
  }, [])

  return (
    <>
      <a className="saut-contenu" href={surAccueil ? '#reseau' : '#'}>
        Aller au contenu
      </a>

      <nav className="nav" aria-label="Navigation du portfolio">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={lienAccueil(s.id)}
            aria-current={surAccueil && visible === s.id ? 'true' : undefined}
          >
            {s.nom}
          </a>
        ))}
        <span className="nav-fin">
          <button className="bouton bouton--plein" onClick={() => setSoutenance(true)}>
            Mode soutenance <span className="touche" style={{ marginLeft: '0.3rem' }}>S</span>
          </button>
        </span>
      </nav>

      {/* Barre des six lignes : toujours accessible, et elle indique la page courante. */}
      <nav className="barre-lignes" aria-label="Les six lignes">
        <span className="signal">Lignes</span>
        {COMPETENCES.map((c) => (
          <a
            key={c.id}
            href={lienLigne(c.id)}
            className="barre-ligne-lien"
            aria-current={route.page === 'ligne' && route.id === c.id ? 'page' : undefined}
            title={c.nom}
          >
            <Pastille c={c} />
            <span className="barre-ligne-verbe">{c.verbe}</span>
          </a>
        ))}
      </nav>

      <main>
        {surAccueil ? (
          <>
            <Reseau />
            {av.manques.length > 0 && (
              <details className="avis">
                <summary>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
                    <Travaux />
                    Avis de travaux — {av.manques.length} champ(s) à compléter, plan rempli à{' '}
                    {Math.round(av.part * 100)} %
                  </span>
                </summary>
                <ul>
                  {av.manques.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </details>
            )}
            <IndexLignes />
            <Missions />
            <LeTrajet />
            <Itineraire />
            <Notice />
          </>
        ) : (
          <PageLigne id={route.id} />
        )}
      </main>

      <footer className="pied">
        <p style={{ margin: 0, fontWeight: 600, color: 'var(--encre)' }}>
          <Champ v={identite.prenom} /> <Champ v={identite.nom} /> — {identite.formation}
        </p>
        <p style={{ margin: 0 }}>
          {PARCOURS.parcours} · {PARCOURS.etablissement}
        </p>
        <ul
          style={{
            listStyle: 'none',
            display: 'flex',
            gap: '1.25rem',
            padding: 0,
            margin: '0.4rem 0 0',
            flexWrap: 'wrap',
          }}
        >
          {identite.liens.map((l, i) => (
            <li key={i}>
              {typeof l.url === 'string' ? (
                <a href={l.url}>{l.libelle}</a>
              ) : (
                <>
                  {l.libelle} : <Champ v={l.url} />
                </>
              )}
            </li>
          ))}
        </ul>
        <p style={{ margin: '0.75rem 0 0', fontSize: '0.78rem', color: 'var(--encre-3)' }}>
          Compétences et apprentissages critiques cités mot pour mot depuis le référentiel national
          du B.U.T. Informatique, parcours {PARCOURS.sigle} (fiche {PARCOURS.rncp}). Niveaux
          d'acquisition : auto-évaluation
          {etatDuLeve.valide ? ' relue.' : ' provisoire, non encore validée.'}
        </p>
      </footer>

      <ModeSoutenance ouvert={soutenance} fermer={() => setSoutenance(false)} />
    </>
  )
}
