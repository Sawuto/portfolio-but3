import { COMPETENCES, parCompetence, apprentissagesCritiques } from '../data/referentiel.js'
import { stations, monteeEnCompetence, exempleDeLeve } from '../content/portfolio.js'

/** Un champ non rempli est un objet { __aRemplir }. */
export const estARemplir = (v) => !!v && typeof v === 'object' && '__aRemplir' in v

/** Un champ est-il utilisable ? */
export const estRempli = (v) => {
  if (v === null || v === undefined) return false
  if (estARemplir(v)) return false
  if (typeof v === 'string') return v.trim().length > 0
  if (Array.isArray(v)) return v.length > 0
  return true
}

/**
 * Formate un niveau à la manière d'un sondage porté sur une carte marine :
 * la partie entière en corps normal, la première décimale en indice.
 *   2    → « 2 »
 *   2.5  → « 2₅ »
 * C'est ce que la grille d'évaluation appelle « préciser le degré d'acquisition ».
 */
const INDICES = ['₀', '₁', '₂', '₃', '₄', '₅', '₆', '₇', '₈', '₉']

export function formaterSonde(niveau) {
  if (niveau === null || niveau === undefined || Number.isNaN(niveau)) return null
  const entier = Math.floor(niveau)
  const decimale = Math.round((niveau - entier) * 10)
  if (decimale === 0) return { entier: String(entier), fraction: null }
  if (decimale === 10) return { entier: String(entier + 1), fraction: null }
  return { entier: String(entier), fraction: INDICES[decimale] }
}

/** Rendu texte simple, pour les attributs title / aria-label. */
export function sondeEnTexte(niveau) {
  if (niveau === null || niveau === undefined) return 'non sondé'
  const entier = Math.floor(niveau)
  const reste = Math.round((niveau - entier) * 10)
  if (reste === 0) return `niveau ${entier} atteint`
  return `niveau ${entier} atteint, ${reste}/10 du niveau ${entier + 1} engagé`
}

/**
 * Vérifie qu'un libellé d'apprentissage critique existe réellement dans le
 * référentiel. La grille sanctionne les « compétences » qui ne reprennent pas les
 * items du référentiel : autant le détecter avant le jury.
 */
const normaliser = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[’']/g, "'")
    .replace(/\s+/g, ' ')
    .trim()

const INDEX_AC = new Map()
for (const c of COMPETENCES) {
  for (const niv of c.niveaux) {
    for (const libelle of niv.ac) {
      INDEX_AC.set(normaliser(libelle), { competence: c.id, niveau: niv.n, libelle })
    }
  }
}

export function acConnu(libelle) {
  return INDEX_AC.has(normaliser(libelle))
}

export function infosAc(libelle) {
  return INDEX_AC.get(normaliser(libelle)) ?? null
}

/** Le parcours RA plafonne trois compétences au niveau 2. */
export function plafondDepasse(competenceId, niveau) {
  const c = parCompetence[competenceId]
  if (!c || niveau === null || niveau === undefined) return false
  return niveau > c.niveauMaxParcours
}

/**
 * Agrège les sondes déclarées dans les stations, par compétence et par levé.
 * Le niveau retenu pour un levé est le maximum des sondes de ce levé : une
 * compétence acquise sur une mission ne se perd pas sur la suivante.
 */
export function releve() {
  const parId = {}

  for (const c of COMPETENCES) {
    parId[c.id] = {
      competence: c,
      S4: { niveau: null, stations: [], ac: new Set() },
      S6: { niveau: null, stations: [], ac: new Set() },
    }
  }

  for (const st of stations) {
    for (const sonde of st.sondes ?? []) {
      const entree = parId[sonde.competence]
      if (!entree) continue
      const levé = entree[st.leve]
      if (!levé) continue

      levé.stations.push({ station: st, sonde })
      for (const ac of sonde.ac ?? []) levé.ac.add(ac)

      if (typeof sonde.niveau === 'number') {
        levé.niveau = levé.niveau === null ? sonde.niveau : Math.max(levé.niveau, sonde.niveau)
      }
    }
  }

  // La section « montée en compétence » peut surcharger les niveaux : c'est là
  // que l'auto-évaluation d'ensemble est déclarée, station par station ou non.
  for (const ligne of monteeEnCompetence) {
    const entree = parId[ligne.competence]
    if (!entree) continue
    if (typeof ligne.niveauS4 === 'number') entree.S4.niveau = ligne.niveauS4
    if (typeof ligne.niveauS6 === 'number') entree.S6.niveau = ligne.niveauS6
  }

  // Aucun niveau saisi ? On affiche le levé d'exemple, franchement étiqueté comme
  // tel, plutôt qu'une carte vide : la structure reste démontrée et le tampon
  // « LEVÉ D'EXEMPLE » interdit toute confusion avec une auto-évaluation réelle.
  const aucuneSonde = COMPETENCES.every(
    (c) => parId[c.id].S4.niveau === null && parId[c.id].S6.niveau === null,
  )
  if (aucuneSonde) {
    for (const c of COMPETENCES) {
      const ex = exempleDeLeve[c.id]
      if (!ex) continue
      parId[c.id].S4.niveau = ex.S4
      parId[c.id].S6.niveau = ex.S6
    }
  }

  const lignes = COMPETENCES.map((c) => {
    const e = parId[c.id]
    const delta =
      typeof e.S4.niveau === 'number' && typeof e.S6.niveau === 'number'
        ? Math.round((e.S6.niveau - e.S4.niveau) * 10) / 10
        : null
    return {
      ...e,
      delta,
      S4: { ...e.S4, ac: [...e.S4.ac] },
      S6: { ...e.S6, ac: [...e.S6.ac] },
    }
  })

  return { lignes, exemple: aucuneSonde }
}

/** Toutes les stations d'un levé donné. */
export const stationsDuLeve = (leveId) => stations.filter((s) => s.leve === leveId)

/** Toutes les stations qui ont sondé une compétence donnée. */
export function stationsDeLaCompetence(competenceId) {
  return stations.filter((s) => (s.sondes ?? []).some((d) => d.competence === competenceId))
}

/**
 * État d'avancement du remplissage. Sert au panneau de contrôle : tant qu'il
 * reste des zones non sondées, autant savoir combien et où.
 */
export function avancement() {
  let total = 0
  let remplis = 0
  const manques = []

  const compter = (valeur, chemin) => {
    total += 1
    if (estRempli(valeur)) remplis += 1
    else manques.push(chemin)
  }

  for (const st of stations) {
    const p = `Station ${st.code}`
    compter(st.intitule, `${p} — intitulé`)
    compter(st.descriptif, `${p} — descriptif`)
    compter(st.resultats, `${p} — bilan de résultats`)
    for (const [i, sonde] of (st.sondes ?? []).entries()) {
      compter(sonde.niveau, `${p} — sonde ${i + 1} : niveau`)
      compter(sonde.ac, `${p} — sonde ${i + 1} : apprentissages critiques`)
      compter(sonde.justification, `${p} — sonde ${i + 1} : justification`)
    }
    if (!st.traces || st.traces.length === 0) {
      total += 1
      manques.push(`${p} — aucune trace`)
    }
    for (const [i, tr] of (st.traces ?? []).entries()) {
      compter(tr.lien, `${p} — trace ${i + 1} : lien`)
      compter(tr.demontre, `${p} — trace ${i + 1} : ce qu'elle démontre`)
    }
  }

  for (const ligne of monteeEnCompetence) {
    const nom = parCompetence[ligne.competence]?.verbe ?? ligne.competence
    compter(ligne.niveauS4, `Montée — ${nom} : niveau S4`)
    compter(ligne.niveauS6, `Montée — ${nom} : niveau S6`)
    compter(ligne.bascule, `Montée — ${nom} : la bascule`)
  }

  return { total, remplis, manques, part: total ? remplis / total : 0 }
}

/** Anomalies à corriger avant de rendre. */
export function anomalies() {
  const liste = []

  for (const st of stations) {
    const nbSondes = (st.sondes ?? []).length

    if (nbSondes === 1) {
      liste.push({
        gravite: 'avertissement',
        message:
          `La station ${st.code} ne déclare qu'une seule compétence. La grille sanctionne ` +
          `explicitement « un projet multicompétences traité comme l'illustration d'une seule ` +
          `compétence » — vérifie qu'il n'en manque pas.`,
      })
    }

    for (const sonde of st.sondes ?? []) {
      if (plafondDepasse(sonde.competence, sonde.niveau)) {
        const c = parCompetence[sonde.competence]
        liste.push({
          gravite: 'erreur',
          message:
            `Station ${st.code} : niveau ${sonde.niveau} déclaré sur « ${c.nom} », mais le ` +
            `parcours RA plafonne cette compétence au niveau ${c.niveauMaxParcours}.`,
        })
      }
      for (const ac of sonde.ac ?? []) {
        if (!acConnu(ac)) {
          liste.push({
            gravite: 'erreur',
            message:
              `Station ${st.code} : « ${ac} » ne correspond mot pour mot à aucun apprentissage ` +
              `critique du référentiel. Recopie-le depuis src/data/referentiel.js.`,
          })
        } else {
          const info = infosAc(ac)
          if (info.competence !== sonde.competence) {
            liste.push({
              gravite: 'avertissement',
              message:
                `Station ${st.code} : « ${ac} » appartient à « ${parCompetence[info.competence].nom} », ` +
                `pas à « ${parCompetence[sonde.competence].nom} ».`,
            })
          }
        }
      }
    }
  }

  const sansTrace = stations.filter((s) => !s.traces || s.traces.length === 0)
  if (sansTrace.length) {
    liste.push({
      gravite: 'avertissement',
      message:
        `${sansTrace.length} station(s) sans aucune trace : ${sansTrace.map((s) => s.code).join(', ')}. ` +
        `L'accès aux traces vaut 20 points sur 100.`,
    })
  }

  return liste
}

export { COMPETENCES, parCompetence, apprentissagesCritiques }
