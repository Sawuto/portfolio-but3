import { estARemplir, estRempli } from '../lib/sondes.js'

/**
 * Affiche une valeur de contenu. Un champ non rempli s'affiche « en travaux » :
 * un soulignement pointillé discret, pas un encadré voyant.
 *
 * La version précédente affichait 121 blocs colorés sur la page, ce qui était une
 * des causes de la densité. Le récapitulatif de ce qui manque vit maintenant à un
 * seul endroit, dans l'avis de travaux en tête de page.
 */
export function Champ({ v, as: Balise = 'span', className = '', discret = true, ...reste }) {
  const marque = `travaux ${discret ? 'travaux--discret' : ''} ${className}`.trim()
  if (estARemplir(v)) {
    return (
      <Balise className={marque} title="Champ à compléter" {...reste}>
        {v.__aRemplir}
      </Balise>
    )
  }
  if (!estRempli(v)) {
    return (
      <Balise className={marque} {...reste}>
        à renseigner
      </Balise>
    )
  }
  return (
    <Balise className={className} {...reste}>
      {v}
    </Balise>
  )
}

/** Variante paragraphe. */
export function ChampProse({ v, className = '' }) {
  return (
    <p className={className} style={{ margin: 0 }}>
      {estRempli(v) ? v : <Champ v={v} discret={false} />}
    </p>
  )
}

/** Liste de chaînes, en pastilles neutres. */
export function ChampListe({ items, vide }) {
  if (!items || items.length === 0) return <Champ v={{ __aRemplir: vide }} discret={false} />
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.35rem',
        padding: 0,
        margin: 0,
        listStyle: 'none',
      }}
    >
      {items.map((it, i) => (
        <li
          key={i}
          style={{
            border: '1.5px solid var(--filet-fort)',
            borderRadius: '999px',
            padding: '0.1rem 0.6rem',
            fontSize: '0.82rem',
            color: 'var(--encre-2)',
            background: 'var(--blanc)',
          }}
        >
          <Champ v={it} />
        </li>
      ))}
    </ul>
  )
}
