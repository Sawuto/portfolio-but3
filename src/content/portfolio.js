/**
 * LE SEUL FICHIER À MODIFIER.
 *
 * ⚠️  CONFIDENTIALITÉ — ce site est public.
 * Aucun nom de collectivité cliente, de collègue, de table, de branche, de
 * version ni de ticket. Les missions sont décrites en termes fonctionnels : ce
 * que ça résout, pour qui, avec quelle démarche. Pas d'adresse postale, de date
 * de naissance ni de numéro d'étudiant.
 *
 * A_REMPLIR('indice') → s'affiche « en travaux ». Tout ce qui manque est
 * récapitulé en un seul endroit, dans l'avis en tête de page.
 *
 * ── VERSION COURTE ─────────────────────────────────────────────────────────
 * Volontairement réduite : deux phrases par justification au lieu de cinq. Le
 * jury a 22 minutes et n'en consacre que 5 au portfolio. Ce qui est court est
 * lu ; ce qui est long est survolé.
 *
 * Retiré délibérément : la SAÉ (semestre 5) et les missions de Matane
 * (semestre 4). Décision de l'étudiant — seules les compétences acquises en
 * stage / alternance figurent dans le portefeuille de compétences, à
 * l'exclusion des projets académiques.
 */

export const A_REMPLIR = (indice) => ({
  __aRemplir: indice,
  toString: () => `⟨à compléter : ${indice}⟩`,
})

/* Les dépôts publics, la certification CCNA et les liens de la forge Lyon 1
   ne vivent plus ici : ils appartenaient aux stations académiques (SAÉ,
   Matane) retirées du portefeuille de compétences — voir l'en-tête de ce
   fichier. */

/* ════════════════ 1. IDENTITÉ ════════════════ */

export const identite = {
  prenom: 'Enzo',
  nom: 'Saccone',
  formation: 'B.U.T. Informatique — 3ᵉ année',
  parcours: "Parcours A — Réalisation d'applications",
  etablissement: 'IUT Lyon 1',
  entreprise: 'Ciril Group',
  ville: 'Lyon',
  anneeUniversitaire: '2025 – 2026',

  accroche:
    'Développeur produit en alternance au service Finances de Ciril Group, sur les ' +
    'applications de gestion financière des collectivités territoriales.',

  liens: [{ libelle: 'GitHub', url: 'https://github.com/Sawuto' }],
}

/* ════════════════ 2. LES DEUX LEVÉS ════════════════ */

export const leves = [
  {
    id: 'S4',
    nom: 'Levé S4',
    annee: '2024 – 2025',
    lieu: 'Ciril Group — Lyon',
    resume:
      "Stage de deux mois chez Ciril Group, du 9 juin au 31 juillet 2025 — la station A4. " +
      "L'alternance officielle a commencé plus tard, le 25 août.",
  },
  {
    id: 'S6',
    nom: 'Levé S6',
    annee: '2025 – 2026',
    lieu: 'Ciril Group — Lyon',
    resume:
      'Alternance de douze mois au service Finances, une semaine sur deux, comme développeur ' +
      "produit. Au moins dix-huit demandes de fusion livrées sur l'année, toutes relues et " +
      'approuvées.',
  },
]

/* ════════════════ 3. LES STATIONS ════════════════
   Terminus RA : C1, C2, C6 → zone 3 · C3, C4, C5 → zone 2.
   Niveau décimal : 2.5 = niveau 2 acquis, moitié du niveau 3 engagée.
   Apprentissages critiques cités MOT POUR MOT depuis referentiel.js.
   ═════════════════════════════════════════════════ */

export const stations = [
  {
    id: 'a1',
    code: 'A1',
    leve: 'S6',
    intitule: "Écrans d'outillage : lancement des éditions et consultation des traces",
    organisation: 'Ciril Group — service Finances',
    lieu: 'Lyon',
    periode: 'septembre 2025 – février 2026',
    role: 'Conception et développement, seul sur le sujet',

    descriptif:
      "Les éditions de l'application financière ne pouvaient être lancées que depuis l'écran " +
      "métier auquel chacune était rattachée, ce qui rendait leur test long et peu " +
      "reproductible. J'ai commencé, pendant mon stage de juin-juillet 2025, un écran unique " +
      "capable de lancer n'importe quelle édition en saisissant ses paramètres, construits " +
      "dynamiquement à partir du code de l'édition choisie — testé alors sur une seule édition, " +
      "faute d'autres déjà prêtes. De retour en alternance en septembre 2025, je l'ai généralisé " +
      'et j\'ai terminé dans la même logique un second écran, de consultation des traces ' +
      'serveur, resté inachevé à la fin du stage.',

    contexte:
      'Base de code ancienne et volumineuse, plusieurs générations de code coexistantes, ' +
      'application en service chez des collectivités. Contrainte : ne rien casser.',

    technique: ['Java', 'Oracle', 'SQL', 'Introspection de classes', 'GitLab'],

    resultats: [
      "Écran de lancement des éditions commencé en stage sur une seule édition, généralisé " +
        'et validé en revue à mon retour en alternance, fin octobre 2025.',
      "Écran de consultation des traces, resté inachevé à la fin du stage, terminé en " +
        "septembre 2025 : tri, téléchargement et accès direct depuis l'écran des éditions.",
      "Correction d'un fichier de chargement qui désignait les colonnes de la table des " +
        "éditions sous leur ancien nom, avec un script de migration conditionnel pour que la " +
        'reprise fonctionne aussi sur les bases déjà installées.',
      "Correction, des mois après la livraison, d'une anomalie pénalisante sur mon propre écran : une requête sans alias que le socle interprétait mal.",
    ],

    sondes: [
      {
        competence: 'c1',
        niveau: 2.6,
        ac: [
          'Choisir et implémenter les architectures adaptées',
          'Adapter les solutions existantes au contexte applicatif',
          'Intégrer des solutions dans un environnement de production',
        ],
        justification:
          'La découverte des éditions se fait par introspection des classes qui implémentent ' +
          "une interface commune, ce qui évite une liste en dur dans un code que d'autres " +
          "feront évoluer. Les deux revues ont porté autant sur l'ergonomie que sur le code.",
      },
      {
        competence: 'c4',
        niveau: 2.0,
        ac: ["Optimiser les modèles de données de l'entreprise"],
        justification:
          "J'ai conçu la table de correspondance, son script de création et ses commentaires. " +
          'Quand ses colonnes ont dû être renommées, la migration devait purger les données ' +
          "existantes si l'ancien nom subsistait, sans quoi le chargement échouait chez les " +
          'clients déjà installés.',
      },
      {
        competence: 'c6',
        niveau: 2.3,
        ac: [
          'Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique',
          'Rendre compte de son activité professionnelle',
        ],
        justification:
          'Deux revues de code et deux comptes rendus formels. À chaque blocage sur un ' +
          'comportement métier que je ne pouvais pas deviner, je suis allé chercher la ' +
          'personne qui le connaissait plutôt que de supposer.',
      },
    ],

    traces: [
      {
        titre: "Écran de lancement manuel des éditions, sur un environnement de démonstration",
        nature: "Capture d'écran",
        lien: './traces/a1-ecran.png',
        demontre:
          "Montre l'écran unique décrit ci-dessus : le choix de l'édition, puis la grille de " +
          "ses paramètres construite dynamiquement. Sa limite : la capture montre l'interface " +
          "utilisateur, pas la généricité de l'architecture qui permet de réutiliser cet écran " +
          'pour chaque édition sans le récrire.',
      },
    ],
  },

  {
    id: 'a2',
    code: 'A2',
    leve: 'S6',
    intitule: 'Tests de non-régression de bout en bout',
    organisation: 'Ciril Group — service Finances',
    lieu: 'Lyon',
    periode: 'novembre 2025 – juillet 2026',
    role: 'Écriture des scénarios, des jeux de données et des plans de test',

    descriptif:
      'Scénarios de tests automatisés couvrant des parcours utilisateur complets sur les ' +
      "modules financiers. La partie la plus difficile n'a pas été d'écrire les tests mais de " +
      'fabriquer des données valides dans un modèle relationnel fortement contraint. Supprimer ' +
      "ces données une fois le test joué s'est avéré trop risqué à cause des contraintes entre " +
      'tables : j\'ai fini par concevoir les scénarios en acceptant qu\'elles restent.',

    contexte:
      "Suite exécutée par le serveur d'intégration continue. L'environnement de test était " +
      'trop pauvre en données pour être représentatif, ce qui produisait des échecs ' +
      'inexistants en conditions réelles.',

    technique: ['TypeScript', 'Selenium', 'Intégration continue', 'Oracle'],

    resultats: [
      "Scénarios livrés sur les modules d'achats, de stocks, d'immobilisations, de droits d'accès et de circuits de visa.",
      "Plan de test créé pour chaque écran couvert, ce qui rend la couverture visible à l'équipe.",
      "Jeu de données de l'environnement enrichi après avoir constaté qu'il produisait de faux échecs.",
    ],

    sondes: [
      {
        competence: 'c1',
        niveau: 2.4,
        ac: [
          "Vérifier et valider la qualité de l'application par les tests",
          "Réaliser un audit d'une application",
        ],
        justification:
          "Écrire un test de bout en bout oblige à formuler ce que l'application est censée " +
          'faire, écran par écran. Plusieurs scénarios ont échoué non à cause du test mais ' +
          "parce que l'application ne filtrait pas ce qu'elle prétendait filtrer.",
      },
      {
        competence: 'c4',
        niveau: 2.0,
        ac: ['Manipuler des données hétérogènes'],
        justification:
          "J'ai appris à lire un modèle de données par ses contraintes avant de tenter de " +
          "l'alimenter. C'est l'inverse de ce que j'aurais fait un an plus tôt.",
      },
      {
        competence: 'c5',
        niveau: 1.8,
        ac: ['Définir et mettre en œuvre une démarche de suivi de projet'],
        justification:
          'La couverture de test est un chantier sans date de fin nette. La structurer en ' +
          "plans par écran a été la façon de savoir où j'en étais et de le rendre lisible à " +
          "quelqu'un d'autre.",
      },
      {
        competence: 'c3',
        niveau: 1.6,
        ac: ['Utiliser des serveurs et des services réseaux virtualisés'],
        justification:
          'Mes tests passaient dans l\'environnement que j\'avais mis en place localement, mais ' +
          "échouaient sur les exécutions nocturnes du serveur d'intégration continue. Le blocage " +
          "réel tenait à une mise à jour de dépendance prise en charge par quelqu'un d'autre — " +
          "je n'ai pas résolu la cause moi-même, mais l'écart m'a montré qu'un environnement de " +
          "serveur partagé ne se comporte pas comme mon poste.",
      },
    ],

    traces: [
      {
        titre: "Principe d'un scénario de test bout en bout",
        nature: 'Démarche décrite en texte — le framework de test est propriétaire, donc non publiable',
        demontre:
          'Chaque scénario met en place un jeu de données qui respecte les contraintes du ' +
          "modèle (une entité référencée doit exister avant l'entité qui la référence), puis " +
          'exécute le parcours écran par écran et vérifie le résultat affiché. Sa limite : ceci ' +
          'décrit le principe, pas le code réel — le framework de test interne de l\'entreprise ' +
          "ne peut pas être publié, même anonymisé. Et la vraie difficulté n'était pas d'écrire " +
          "ce squelette : supprimer les données créées s'est avéré trop risqué à cause des " +
          "contraintes entre tables, si bien que les scénarios sont conçus pour tolérer qu'elles " +
          'restent.',
      },
    ],
  },

  {
    id: 'a3',
    code: 'A3',
    leve: 'S6',
    // ⚠️ Ex-« point technique de soutenance » — corrigé : le rapport d'alternance décrit
    //    ce même projet comme une tentative personnelle abandonnée, jamais mise en
    //    service. Il faut choisir un autre point technique pour la partie 17 min de
    //    l'oral (A1, A2 ou A5 sont de vraies candidates).
    intitule: "Tentative d'automatisation de l'analyse des échecs de tests — abandonnée",
    organisation: 'Ciril Group — service Finances',
    lieu: 'Lyon',
    periode: '2025 – 2026, en marge de la mission de tests automatisés',
    role: 'Initiative personnelle, hors mission confiée',

    descriptif:
      'En marge de mes missions, j\'ai tenté de construire un outil qui analyserait ' +
      'automatiquement les échecs des campagnes de tests, les classerait, et préparerait des ' +
      'brouillons de ticket, pour éviter de reprendre chaque rapport à la main.',

    contexte:
      'Le prototype reposait sur des appels à un modèle de langage pour classer les échecs. ' +
      "Je l'ai écrit en m'appuyant tellement sur l'assistance de l'IA que je ne le comprenais " +
      'plus assez moi-même pour le corriger quand il a fallu.',

    technique: ["Scripts d'analyse", 'Appels à un modèle de langage (API)'],

    resultats: [
      'Abandonné : le coût des appels au modèle de langage était disproportionné par rapport ' +
        'au temps gagné.',
      "Jamais mis en service — cette tentative ne faisait pas partie de mes missions.",
      "Leçon retenue, dans mes propres mots : un outil que je ne sais pas réparer moi-même " +
        'est inutile, même quand il fonctionne au départ.',
    ],

    sondes: [],

    traces: [],
  },

  {
    id: 'a4',
    code: 'A4',
    leve: 'S4',
    intitule: "Maintenance corrective de l'application en production",
    organisation: 'Ciril Group — service Finances',
    lieu: 'Lyon',
    periode: '9 juin – 31 juillet 2025 (stage)',
    role: "Traitement de tickets d'anomalie",

    descriptif:
      "Traitement de tickets d'anomalie sur une application en service chez des " +
      'collectivités. Le cas le plus représentatif : une régression pénalisante rendait un ' +
      "champ inaccessible en recettes alors qu'il l'était en dépenses, pour un besoin métier " +
      "identique des deux côtés. J'ai rendu le champ accessible et reporté la correction sur " +
      'la version de maintenance en plus de la version majeure.',

    contexte:
      'Le produit vit sur plusieurs versions en parallèle. Une anomalie de ce type ne ' +
      "provoque aucun message d'erreur : elle empêche simplement un agent de faire son " +
      'travail, sans contournement.',

    technique: ['Java', 'Oracle', 'SQL', 'Branches de version et report de correctif'],

    resultats: [
      'Régression corrigée sur la version majeure puis reportée sur la version de maintenance par reprise de commit entre branches.',
      "Correction validée par une testeuse de l'équipe sur un parcours complet avant clôture.",
      "Filtrage d'un écran de marchés corrigé : la logique se lisait dans la présence ou l'absence d'une date, pas dans un indicateur explicite.",
    ],

    sondes: [
      {
        competence: 'c1',
        niveau: 2.4,
        ac: [
          'Adapter les solutions existantes au contexte applicatif',
          'Intégrer des solutions dans un environnement de production',
        ],
        justification:
          'Le report du correctif est ce qui rend cette station représentative : corriger ne ' +
          'suffit pas, il faut décider sur quelles versions en service la correction doit ' +
          'vivre, et la porter sans emporter le reste de la branche.',
      },
      {
        competence: 'c5',
        niveau: 1.7,
        ac: ["Formaliser les besoins du client et de l'utilisateur"],
        justification:
          'La demande initiale ne portait que sur les dépenses. En instruisant le ticket, il ' +
          'est apparu que le même besoin existait en recettes et que plusieurs collectivités ' +
          "l'avaient signalé sans être entendues. Élargir le périmètre faisait partie du travail.",
      },
      {
        competence: 'c4',
        niveau: 2.0,
        ac: ['Manipuler des données hétérogènes'],
        justification:
          "Le filtrage de l'écran de marchés reposait sur la présence ou l'absence d'une date, " +
          "pas sur un indicateur explicite. Lire correctement comment l'information était " +
          'réellement stockée, avant de corriger la requête, a été la clé de cette correction.',
      },
      {
        competence: 'c6',
        niveau: 2.0,
        ac: [
          'Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique',
        ],
        justification:
          "Correction validée par une testeuse de l'équipe sur un parcours complet avant " +
          "clôture : je ne clôturais pas un ticket seul, la vérification croisée par une " +
          "personne extérieure au correctif faisait partie du travail.",
      },
    ],

    traces: [
      {
        titre: 'Avant — case masquée à tort, écran de saisie des immobilisations',
        nature: "Capture d'écran",
        lien: './traces/a4-immo-avant.png',
        demontre:
          "Un ticket de ce chantier, différent de celui décrit ci-dessus : une case du " +
          "formulaire ne s'affichait qu'après sélection explicite d'un mouvement précis en " +
          'recherche.',
      },
      {
        titre: 'Après — case affichée dès que la nature est détectée',
        nature: "Capture d'écran",
        lien: './traces/a4-immo-apres.png',
        demontre:
          "La case apparaît désormais dès que le type de nature correspondant est détecté, " +
          "sans sélection préalable. Limite de ces deux captures : elles montrent l'écran, pas " +
          'le code qui détecte ce type de nature.',
      },
    ],
  },

  {
    id: 'a5',
    code: 'A5',
    leve: 'S6',
    intitule: 'Sécurisation des requêtes contre les injections SQL',
    organisation: 'Ciril Group — service Finances',
    lieu: 'Lyon',
    periode: 'septembre – automne 2025',
    role: "Tests puis correction, sur un chantier d'équipe",

    descriptif:
      'Chantier transverse de sécurisation, organisé menu par menu, chaque écran donnant lieu ' +
      'à un ticket. Le principe est le paramétrage : toute valeur intégrée à une requête doit ' +
      'être passée comme variable liée, jamais assemblée dans la chaîne. Mon premier travail ' +
      "en arrivant a été de tester les écrans déjà corrigés, puis j'ai traité des tickets du " +
      'chantier moi-même.',

    contexte:
      'Application manipulant des données financières publiques, sur une base de code ancienne ' +
      "où des requêtes avaient été assemblées par concaténation. La difficulté n'est pas de " +
      'savoir quoi corriger mais de le faire sur des centaines de requêtes sans changer leur ' +
      'résultat.',

    technique: ['Java', 'Oracle', 'Requêtes paramétrées', 'Revue de code'],

    resultats: [
      "Corrections livrées sur les écrans qui m'étaient attribués, chacune relue puis fusionnée.",
      'Le défaut typique tenait à un seul caractère : une valeur comparée sans être déclarée comme variable liée.',
      "La majeure partie de mon temps sur ce chantier a été la vérification des écrans déjà " +
        "corrigés par l'équipe ; quelques tickets de correction m'ont aussi été attribués, dont " +
        'celui illustré en trace.',
    ],

    sondes: [
      {
        competence: 'c2',
        niveau: 2.0,
        ac: ['Comprendre les enjeux et moyens de sécurisation des données et du code'],
        justification:
          "La vulnérabilité ne venait d'aucune erreur visible : la requête fonctionnait et " +
          "retournait le bon résultat. Elle n'était simplement pas paramétrée. La sécurité du " +
          "code est une propriété qu'on ne constate pas à l'usage, seulement à la lecture.",
      },
      {
        competence: 'c3',
        niveau: 2.0,
        ac: ["Sécuriser les services et données d'un système"],
        justification:
          "Sécuriser l'accès aux données ne se joue pas seulement au niveau de " +
          "l'infrastructure ou des droits utilisateurs : ici, le point d'entrée était une " +
          'requête applicative.',
      },
      {
        competence: 'c4',
        niveau: 2.0,
        ac: ['Assurer la confidentialité des données (intégrité et sécurité)'],
        justification:
          "Une requête non paramétrée expose l'intégrité autant que la confidentialité : selon " +
          'la valeur transmise, elle peut retourner des données qui ne concernent pas ' +
          "l'utilisateur, ou modifier ce qui ne devait pas l'être.",
      },
    ],

    traces: [
      {
        titre: "Extrait de correction anonymisé — avant / après, un ticket qui m'était attribué",
        nature: 'Extrait de code',
        lien: './traces/a5-parametrage.txt',
        demontre:
          "Retapé à la main, pas une capture d'écran : les noms de champs sont génériques, sans " +
          "rapport avec les colonnes réelles. Il montre le principe (une valeur assemblée dans " +
          "la chaîne, puis passée en variable liée). Sa limite : je n'ai traité qu'une partie " +
          "des tickets de ce chantier moi-même — la majeure partie de mon temps sur A5 a été la " +
          'vérification des écrans déjà corrigés par le reste de l\'équipe.',
      },
    ],
  },
]

/* ════════════════ 4. LA MONTÉE EN COMPÉTENCE ════════════════
   30 points de la grille. Une bascule = un événement précis et daté où quelque
   chose a changé. Mets-y tes mots : un jury entend la différence entre un texte
   récité et un souvenir.
   ═════════════════════════════════════════════════════════════ */

export const monteeEnCompetence = [
  {
    competence: 'c1',
    niveauS4: 2.4,
    niveauS6: 2.6,
    auS4:
      "Mes tickets de maintenance, pendant les huit semaines du stage, portaient déjà sur une " +
      "application en production avec plusieurs versions en parallèle — mais chaque étape " +
      "était validée par mon tuteur. « Est-ce que ça marche » voulait dire : sans casser une " +
      'version que je ne voyais pas tourner, sous supervision proche.',
    auS6:
      "J'intègre du code dans une application ancienne utilisée par des collectivités. « Est-ce " +
      'que ça marche » veut maintenant dire : sans casser ce qui existait, de façon ' +
      "maintenable par quelqu'un d'autre, et utilisable par qui n'a pas écrit le code.",
    bascule:
      'En octobre, je voulais réutiliser une méthode existante qui remplit une liste ' +
      "déroulante depuis une énumération. Il fallait faire implémenter une interface à cette " +
      "énumération — utilisée partout dans l'application. La modification était techniquement " +
      "correcte et tenait en trois lignes. J'ai renoncé et réécrit la méthode dans ma propre " +
      "classe. Le coût d'un changement ne se mesure pas au nombre de lignes mais au nombre de " +
      'choses qui peuvent casser ailleurs.',
  },
  {
    competence: 'c2',
    niveauS4: null,
    niveauS6: 2.0,
    auS4:
      "Aucune mission de stage ne couvre cette compétence : le portefeuille ne retient que le " +
      "travail effectué en stage ou en alternance, et mes tickets du stage ne portaient pas sur " +
      "de l'optimisation.",
    auS6:
      "La sécurité du code est une propriété qu'on ne constate pas à l'usage : une requête peut " +
      "retourner le bon résultat et rester vulnérable. Je vérifie maintenant comment une requête " +
      "est écrite, pas seulement ce qu'elle retourne.",
    bascule:
      "En arrivant, j'ai été mis sur le test d'écrans dont les requêtes venaient d'être " +
      'sécurisées. Elles fonctionnaient, retournaient le bon résultat, et pourtant elles ' +
      "étaient vulnérables : une valeur n'était pas passée en paramètre. J'ai compris ce " +
      "jour-là qu'un code peut être faux sans jamais se tromper. Toute l'année l'a confirmé : " +
      'un caractère manquant, une injection ; un nom de variable de travers, une régression ' +
      'critique. Les plus petits écarts produisent les plus grosses conséquences.',
  },
  {
    competence: 'c3',
    niveauS4: null,
    niveauS6: 2.0,
    auS4:
      "Aucune mission de stage ne couvre cette compétence : mes tickets du stage portaient sur " +
      "des écrans applicatifs, pas sur des systèmes ou des serveurs.",
    auS6:
      "Je ne construis plus d'infrastructure, mais je vis avec : environnements multiples, " +
      "serveur d'intégration partagé, gestion de secrets. Le niveau 2 est le terminus du " +
      'parcours RA : je le consolide, je ne le dépasse pas.',
    bascule:
      "Fin juillet, mes tests ont cessé de s'exécuter en local, quel que soit le scénario : un " +
      "composant système utilisé pour le chiffrement des adresses applicatives n'était plus " +
      'trouvé, alors que le même code fonctionnait peu de temps avant — probablement à cause ' +
      "d'un changement d'environnement entre deux sessions de travail. En attendant de percer " +
      "la cause exacte, j'ai validé mes scénarios via les campagnes exécutées sur le serveur " +
      "plutôt qu'en local. Un environnement est une dépendance comme une autre.",
  },
  {
    competence: 'c4',
    niveauS4: 2.0,
    niveauS6: 2.0,
    auS4:
      "Mes premiers tickets du stage m'ont mis face à un modèle de données ancien, dans une " +
      "application déjà en production — sans avoir moi-même conçu ni documenté ce modèle.",
    auS6:
      'Je travaille dans un modèle de production ancien et fortement contraint, où la logique ' +
      "métier est parfois portée par la présence ou l'absence d'une date. Je lis un modèle par " +
      "ses contraintes avant d'essayer de l'alimenter.",
    bascule:
      "En cherchant pourquoi un écran affichait des éléments qu'il aurait dû exclure, j'ai " +
      "découvert que l'information n'était pas un indicateur mais une date : le critère " +
      "correct n'était pas une égalité, c'était l'absence de valeur. Depuis, quand un filtre " +
      "est faux, je vais lire comment l'information est réellement stockée avant de corriger " +
      'la requête.',
  },
  {
    competence: 'c5',
    niveauS4: 1.7,
    niveauS6: 1.8,
    auS4:
      'Ma toute première mission de stage portait sur un ticket dont la demande initiale ' +
      "semblait complète. J'ai dû élargir le périmètre moi-même en comprenant qu'un même " +
      "besoin existait ailleurs dans l'écran, sans que ce soit demandé au départ.",
    auS6:
      'Je reçois des demandes formulées en une phrase, parfois impossibles à tester en ' +
      "l'état. Une partie de mon travail consiste à reformuler le besoin et à rendre mon " +
      'avancement lisible.',
    bascule:
      'Sur une régression sévère, un bouton de mise à jour ne fonctionnait plus. Ma correction ' +
      "rendait la sélection d'un budget obligatoire : techniquement propre, avec message " +
      "d'avertissement et contrôle avant recherche. Une experte fonctionnelle m'a répondu que " +
      "ce n'était pas le principe de cet écran — mon contrôle inversait la logique métier. " +
      "J'ai tout retiré et refait dans l'autre sens. Un développement peut être irréprochable " +
      'et se tromper de problème.',
  },
  {
    competence: 'c6',
    niveauS4: 2.0,
    niveauS6: 2.3,
    auS4:
      "Mes corrections passaient par la validation d'une testeuse de l'équipe avant chaque " +
      "clôture de ticket : je découvrais qu'un travail individuel s'insère toujours dans une " +
      'vérification collective.',
    auS6:
      'Je rends compte de mon activité, je passe par des revues systématiques de mon tuteur ' +
      "avant chaque intégration, et je vais chercher la personne qui détient l'information " +
      'plutôt que de supposer.',
    bascule:
      "Les retours de mon tuteur portaient souvent sur des choses que je considérais comme " +
      'finies : nommage, commentaires inutiles, méthode trop longue à découper. Refaire ce ' +
      "travail était long, et au début je le prenais comme un désaveu. J'ai appris à le voir " +
      "comme une manière de progresser plutôt qu'un jugement sur ce que j'avais déjà fait.",
  },
]

/* ════════════════ 5. L'ITINÉRAIRE ════════════════ */

export const aTerre = {
  fil:
    "Deux temps du même parcours chez le même employeur. L'IUT Lyon 1 m'a donné un " +
    'référentiel de compétences. Ciril Group m\'a confronté à ce que la formation ne peut pas ' +
    "simuler : du code ancien, des utilisateurs réels, et des collègues qui relisent ce que " +
    "j'écris — d'abord huit semaines en stage, puis douze mois en alternance.",

  escales: [
    {
      lieu: 'IUT Lyon 1',
      periode: '2023 – 2024',
      quoi: 'B.U.T. Informatique, 1ʳᵉ année — tronc commun',
      cequejairetenu:
        'Le tronc commun m\'a fait découvrir large avant de me spécialiser : développement, ' +
        'bases de données, réseau, mais aussi des matières annexes comme le droit, la ' +
        'communication et la gestion. Le souvenir le plus net reste mes deux premiers ' +
        "projets : l'affichage et la gestion des horaires de vols d'un aéroport en C, puis " +
        'une gestion de vols avec détection de collisions, en Java avec interface graphique ' +
        'et structures de graphes.',
    },
    {
      lieu: 'Ciril Group',
      periode: '2025 – 2026',
      quoi: 'Stage (juin-juillet 2025) puis alternance — développeur produit, service Finances',
      cequejairetenu:
        "La production a changé ma définition de « fini ». Un développement n'est pas fini " +
        "quand il fonctionne, mais quand il a passé une revue, qu'il ne casse rien, et qu'un " +
        'autre saura le maintenir.',
    },
  ],

  apres:
    "Je poursuis en alternance chez Ciril Group, en formation d'ingénieur à CPE Lyon, " +
    "spécialité Informatique et Réseaux de Communication, en partenariat avec l'ITII de Lyon — " +
    "trois ans en apprentissage, au même rythme d'une semaine sur deux." +
    '\n\n' +
    "Continuer en alternance plutôt qu'en formation classique, c'est gagner de l'expérience " +
    'professionnelle tout en poursuivant mes études : ça rassure un employeur à la sortie, et ' +
    'ça compte aussi sur le salaire de départ. Rester chez Ciril Group prolonge en plus un ' +
    'cadre que je connais déjà, sur un produit réellement en service.',
}

/* ════════════════ 6. NOTICE ════════════════ */

export const carnet = {
  objectifs:
    'Ce portfolio doit permettre au jury de vérifier, sans avoir à chercher, quelles ' +
    'compétences du référentiel mes missions ont mobilisées, à quel niveau, et sur quelles ' +
    "preuves. Il sert aussi de support à mon bilan d'alternance.",

  choixDeLaForme:
    'Un portefeuille de compétences est un réseau. Chaque compétence est une ligne, chaque ' +
    'niveau une zone, chaque mission une station. Une mission qui mobilise plusieurs ' +
    "compétences est une correspondance : la forme montre d'elle-même qu'un projet ne se réduit " +
    'jamais à une seule compétence. Le terminus de chaque ligne est le niveau maximum que le ' +
    "parcours Réalisation d'applications conduit — et il n'est pas le même pour toutes.",

  choixTechniques:
    'React et Vite, en site statique publié sur GitHub Pages. Aucun gabarit : la mise en page, ' +
    "le routeur par fragment d'URL, le mode soutenance chronométré, les contrôles de conformité " +
    "au référentiel et les icônes sont écrits pour ce portfolio, sans bibliothèque de composants " +
    "ni de routage.",

  limites:
    'Ce portfolio ne montre pas mon code de production : il appartient à Ciril Group et les ' +
    'applications concernées servent des collectivités territoriales. Mes traces sont donc des ' +
    'extraits anonymisés, des descriptions de principe et des schémas.',
}

/* ════════════════ 7. ÉTAT DU PLAN ════════════════ */

export const etatDuLeve = {
  // Passe à `true` quand tes niveaux ont été relus, si possible avec ton tuteur.
  valide: false,
  dateDuLeve: A_REMPLIR('Date de ta relecture des niveaux'),
}

/* ════════════════ 8. CHEMIN DE SOUTENANCE — 5 min ════════════════ */

export const cheminSoutenance = [
  {
    ancre: 'notice',
    titre: 'Objectifs du portfolio et choix effectués',
    secondes: 40,
    aDire:
      '« Je vais maintenant présenter le bilan de mon alternance, et mon portfolio sera le ' +
      'support de ce bilan. » Puis : pourquoi un plan de réseau.',
  },
  {
    ancre: 'reseau',
    titre: 'Aperçu du plan et de la structure',
    secondes: 40,
    aDire:
      'Six lignes, trois zones. Insiste : trois lignes ont leur terminus en zone 2 parce que le ' +
      'parcours RA ne les mène pas au niveau 3. Précise aussi que ton S4 était surtout un ' +
      "échange, et que le stage du S4 a suivi juste après, en juin 2025, avant l'alternance.",
  },
  {
    ancre: '/ligne/c1',
    titre: "Les compétences travaillées pendant l'alternance",
    secondes: 110,
    aDire:
      'Cette étape ouvre la page de la ligne Réaliser. Enchaîne ensuite sur Optimiser puis ' +
      'Travailler en équipe avec la barre des lignes en haut. Trois lignes, pas six. Pour ' +
      "chacune : l'apprentissage critique cité, la mission qui le prouve, la bascule.",
  },
  {
    ancre: 'trajet',
    titre: 'La montée en compétence du S4 au S6',
    secondes: 70,
    aDire:
      "Le tableau montre les six progressions d'un coup. Puis ouvre la page Réaliser et " +
      "raconte sa bascule en entier (l'énumération) : c'est celle que tu peux situer avec " +
      'précision, mission et contexte inclus.',
  },
  {
    ancre: 'itineraire',
    titre: 'Bilan et projet post-BUT',
    secondes: 40,
    aDire:
      'Le fil rouge des deux escales, puis IRC à CPE Lyon en alternance chez Ciril — dis ' +
      'pourquoi cette spécialité précisément (voir aTerre.apres, à compléter).',
  },
]

/* Plan de démonstration : plus utilisé, tes vrais niveaux sont saisis. */
export const exempleDeLeve = {
  c1: { S4: 1.8, S6: 2.6 },
  c2: { S4: 1.2, S6: 2.1 },
  c3: { S4: 1.0, S6: 1.7 },
  c4: { S4: 1.4, S6: 2.0 },
  c5: { S4: 1.1, S6: 1.9 },
  c6: { S4: 1.5, S6: 2.4 },
}
