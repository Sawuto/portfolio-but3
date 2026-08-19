import { useCallback, useEffect, useRef, useState } from 'react'
import { cheminSoutenance } from '../content/portfolio.js'
import { Champ } from './Champ.jsx'
import { Horloge } from './Icones.jsx'
import { allerVersAncre } from '../lib/routeur.js'

const TOTAL = cheminSoutenance.reduce((s, e) => s + e.secondes, 0)

const mmss = (s) => {
  const signe = s < 0 ? '−' : ''
  const a = Math.abs(s)
  return `${signe}${String(Math.floor(a / 60)).padStart(2, '0')}:${String(a % 60).padStart(2, '0')}`
}

/**
 * Mode soutenance, présenté comme un afficheur de prochain arrêt.
 *
 * Les consignes imposent une navigation commentée en 5 minutes, et la grille
 * accorde 10 points au seul respect du temps imparti. L'afficheur donne l'arrêt
 * courant, le suivant, et le temps restant sur le TOTAL — parce que c'est le
 * total qui est noté, pas l'étape.
 *
 * ← → changer d'arrêt.  Espace démarrer / mettre en pause.  Échap quitter.
 */
export default function ModeSoutenance({ ouvert, fermer }) {
  const [etape, setEtape] = useState(0)
  const [restant, setRestant] = useState(TOTAL)
  const [enMarche, setEnMarche] = useState(false)
  const panneau = useRef(null)

  const aller = useCallback((i) => {
    const borne = Math.max(0, Math.min(cheminSoutenance.length - 1, i))
    setEtape(borne)
    allerVersAncre(cheminSoutenance[borne].ancre)
  }, [])

  useEffect(() => {
    if (!ouvert) return
    setEtape(0)
    setRestant(TOTAL)
    setEnMarche(false)
    allerVersAncre(cheminSoutenance[0].ancre)
    panneau.current?.focus()
  }, [ouvert])

  useEffect(() => {
    if (!ouvert || !enMarche) return
    const t = setInterval(() => setRestant((r) => r - 1), 1000)
    return () => clearInterval(t)
  }, [ouvert, enMarche])

  useEffect(() => {
    if (!ouvert) return
    const surTouche = (e) => {
      if (e.key === 'Escape') return fermer()
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        aller(etape + 1)
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        aller(etape - 1)
      }
      if (e.key === ' ' && e.target === panneau.current) {
        e.preventDefault()
        setEnMarche((v) => !v)
      }
    }
    window.addEventListener('keydown', surTouche)
    return () => window.removeEventListener('keydown', surTouche)
  }, [ouvert, etape, aller, fermer])

  if (!ouvert) return null

  const e = cheminSoutenance[etape]
  const suivant = cheminSoutenance[etape + 1]
  const depasse = restant < 0

  return (
    <div className="afficheur" role="region" aria-label="Mode soutenance" tabIndex={-1} ref={panneau}>
      <div className="afficheur-jauge" aria-hidden="true">
        {cheminSoutenance.map((x, i) => (
          <span
            key={i}
            style={{ flex: x.secondes }}
            data-etat={i < etape ? 'fait' : i === etape ? 'courant' : 'avenir'}
          />
        ))}
      </div>

      <div className="afficheur-corps">
        <div className="afficheur-haut">
          <div>
            <p className="afficheur-suivant">
              Arrêt {etape + 1} sur {cheminSoutenance.length} · {e.secondes} s prévues
            </p>
            <p className="afficheur-arret">{e.titre}</p>
            <p className="afficheur-suivant" style={{ marginTop: '0.3rem' }}>
              {suivant ? `Prochain arrêt · ${suivant.titre}` : 'Terminus'}
            </p>
          </div>
          <p className="afficheur-chrono" data-depasse={depasse}>
            <Horloge style={{ width: 22, height: 22, verticalAlign: '-2px', marginRight: '0.3rem' }} />
            {mmss(restant)}
          </p>
        </div>

        <p className="afficheur-adire">
          <Champ v={e.aDire} />
        </p>

        <div className="afficheur-actions">
          <button className="bouton" onClick={() => aller(etape - 1)} disabled={etape === 0}>
            ← Précédent
          </button>
          <button
            className="bouton bouton--plein"
            onClick={() => aller(etape + 1)}
            disabled={etape === cheminSoutenance.length - 1}
          >
            Suivant →
          </button>
          <button className="bouton" onClick={() => setEnMarche((v) => !v)}>
            {enMarche ? 'Pause' : restant === TOTAL ? 'Démarrer' : 'Reprendre'}
          </button>
          <button
            className="bouton"
            onClick={() => {
              setRestant(TOTAL)
              setEnMarche(false)
              aller(0)
            }}
          >
            Remettre à zéro
          </button>
          <button className="bouton" onClick={fermer}>
            Quitter
          </button>
          <span style={{ color: 'var(--sombre-meta)', fontSize: '0.78rem' }}>
            <span className="touche">←</span> <span className="touche">→</span> arrêts ·{' '}
            <span className="touche">Échap</span> quitter
          </span>
          {depasse && (
            <span style={{ color: 'var(--sombre-alerte)', fontSize: '0.82rem' }}>
              Temps dépassé — la grille note le respect du temps imparti.
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
