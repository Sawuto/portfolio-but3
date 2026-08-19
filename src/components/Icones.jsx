/**
 * Icônes dessinées dans la grammaire de la signalétique de transport :
 * trait de 2px, bouts ronds, formes pleines simples. Aucun caractère unicode ni
 * emoji ne tient lieu d'icône sur ce site.
 */

const base = {
  width: 16,
  height: 16,
  viewBox: '0 0 16 16',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

/** Terminus : la barre de fin de ligne. */
export const Terminus = (p) => (
  <svg {...base} {...p}>
    <path d="M1 8h9" strokeWidth="4" />
    <path d="M12.5 3.5v9" strokeWidth="2.5" />
  </svg>
)

/** Correspondance : deux lignes qui se croisent en un point. */
export const Correspondance = (p) => (
  <svg {...base} {...p}>
    <path d="M2 4h5l4 4h3" />
    <path d="M2 12h5l4-4h3" />
    <circle cx="7" cy="8" r="1.6" fill="currentColor" stroke="none" />
  </svg>
)

/** Travaux : ce qui est engagé sans être terminé. */
export const Travaux = (p) => (
  <svg {...base} {...p}>
    <path d="M8 2L15 14H1L8 2z" />
    <path d="M8 6.5v3" />
    <path d="M8 11.5h.01" strokeWidth="2.4" />
  </svg>
)

/** Arrêt : le rond cerclé des plans de ligne. */
export const Arret = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8" r="5" strokeWidth="2.5" />
  </svg>
)

/** Trajet : la progression d'un point vers un autre. */
export const Trajet = (p) => (
  <svg {...base} {...p}>
    <circle cx="3" cy="8" r="2" />
    <path d="M6 8h5" />
    <path d="M10 5l3 3-3 3" />
  </svg>
)

/** Pièce jointe : une trace consultable. */
export const Trace = (p) => (
  <svg {...base} {...p}>
    <path d="M9.5 4.5L5 9a2.5 2.5 0 003.5 3.5l4.5-4.5a4 4 0 00-5.5-5.5L3 7" />
  </svg>
)

/** Horloge, pour le mode soutenance. */
export const Horloge = (p) => (
  <svg {...base} {...p}>
    <circle cx="8" cy="8.5" r="5.5" />
    <path d="M8 8.5V6" />
  </svg>
)

/** Repère de lieu, pour l'itinéraire. */
export const Lieu = (p) => (
  <svg {...base} {...p}>
    <path d="M8 14s5-4.2 5-7.6A5 5 0 003 6.4C3 9.8 8 14 8 14z" />
    <circle cx="8" cy="6.4" r="1.7" />
  </svg>
)
