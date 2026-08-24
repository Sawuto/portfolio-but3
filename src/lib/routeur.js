import { useEffect, useState } from 'react'

/**
 * Routeur minimal par fragment d'URL. Pas de dépendance : le site reste un
 * fichier statique déployable sur n'importe quel hébergement, sans règle de
 * réécriture côté serveur.
 *
 * Deux formes de fragment, volontairement distinctes :
 *   #/ligne/c1   → une page de ligne (une compétence)
 *   #missions    → une ancre sur la page d'accueil
 *
 * Le préfixe « / » est ce qui permet de faire cohabiter les deux sans ambiguïté.
 */

const PREFIXE = '#/ligne/'

function lire() {
  if (typeof window === 'undefined') return { page: 'accueil', ancre: '' }
  const h = window.location.hash
  if (h.startsWith(PREFIXE)) return { page: 'ligne', id: h.slice(PREFIXE.length) }
  return { page: 'accueil', ancre: h.slice(1) }
}

export function useRoute() {
  const [route, setRoute] = useState(lire)

  useEffect(() => {
    const on = () => setRoute(lire())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  // Changer de page ramène en haut. Rester sur l'accueil avec une ancre ne doit
  // pas défiler deux fois : le navigateur le fait déjà.
  useEffect(() => {
    if (route.page === 'ligne') window.scrollTo({ top: 0, behavior: 'auto' })
  }, [route.page, route.id])

  return route
}

export const lienLigne = (id) => `${PREFIXE}${id}`

/** Lien vers une ancre de l'accueil, depuis n'importe quelle page. */
export const lienAccueil = (ancre) => (ancre ? `#${ancre}` : '#')
