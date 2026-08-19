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
 * Volontairement réduite : 8 stations au lieu de 14, deux phrases par
 * justification au lieu de cinq. Le jury a 22 minutes et n'en consacre que 5 au
 * portfolio. Ce qui est court est lu ; ce qui est long est survolé.
 *
 * Retiré, et récupérable si tu y tiens : les quatre stations séparées de Matane
 * (fusionnées en une), les deux SAÉ de la forge non identifiées (vides), et les
 * justifications à cinq phrases.
 */

export const A_REMPLIR = (indice) => ({
  __aRemplir: indice,
  toString: () => `⟨à compléter : ${indice}⟩`,
})

/* ── Dépôts ───────────────────────────────────────────────────────────────
   Publics et ouvrables par le jury : github.com/Sawuto
   Privés, jamais affichés en lien : les dépôts GitHub Classroom du Cégep et la
   forge Lyon 1, dont les URL contiennent parfois le compte d'un camarade.
   ───────────────────────────────────────────────────────────────────────── */

export const NOTE_ACCES_GITHUB =
  "Dépôt privé de GitHub Classroom — ni le jury ni un recruteur ne peuvent l'ouvrir."

export const depotsPublics = {
  ajax: {
    nom: 'Mini-projet AJAX — collection de mangas et animés',
    url: 'https://github.com/Sawuto/matane-ajax-2025',
  },
  videotheque: {
    nom: 'Vidéothèque — application Java de gestion de films',
    url: 'https://github.com/Sawuto/matane-videotheque',
  },
  aventurier: { nom: 'Aventurier Java', url: 'https://github.com/Sawuto/Aventurier_Java' },
  camel: { nom: 'Intégration Camel', url: 'https://github.com/Sawuto/camel_bd' },
  activemq: { nom: 'Preuve de concept ActiveMQ', url: 'https://github.com/Sawuto/ActiveMQ' },
  geocachesService: {
    nom: 'Service géocaches',
    url: 'https://github.com/Sawuto/geocaches_service-_fichiers-dans-un-r-pertoire',
  },
  geocacheApi: {
    nom: 'API géocaches',
    url: 'https://github.com/Sawuto/fichiers-dans-un-r-pertoire',
  },
}

// ⚠️ Aucun dépôt de la forge Lyon 1 n'est sous ton compte : tu ne peux pas en
//    changer la visibilité seul. `grandsae` est la SAÉ Dév. Avancé du S5.
export const depots = {
  grandSae: {
    nom: 'SAÉ Développement avancé',
    url: 'https://forge.univ-lyon1.fr/p2310628/grandsae',
  },
}

/* ⚠️ Formulation exacte : certificat de RÉUSSITE DE COURS Cisco Networking
   Academy, pas la certification CCNA 200-301 qui passe par un examen distinct. */
export const certification = {
  intitule: 'CCNA : Enterprise Networking, Security & Automation',
  programme: 'Cisco Networking Academy',
  delivrePar: 'Cégep de Matane',
  date: '30 mai 2025',
}

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
    "applications de gestion financière des collectivités territoriales. Un an d'études au " +
    'Québec entre-temps.',

  liens: [
    { libelle: 'Courriel', url: A_REMPLIR('mailto:…') },
    { libelle: 'GitHub', url: 'https://github.com/Sawuto' },
    { libelle: 'LinkedIn', url: A_REMPLIR('URL, ou retire cette ligne') },
    { libelle: 'CV (PDF)', url: A_REMPLIR('./cv.pdf — dépose le fichier dans /public') },
  ],
}

/* ════════════════ 2. LES DEUX LEVÉS ════════════════ */

export const leves = [
  {
    id: 'S4',
    nom: 'Levé S4',
    annee: '2024 – 2025',
    lieu: 'Cégep de Matane — Québec',
    resume:
      "Deuxième année en échange universitaire. Pas de stage S4 : une année d'études à " +
      "l'étranger, en pédagogie par projets, avec une dominante réseaux et développement web.",
  },
  {
    id: 'S6',
    nom: 'Levé S6',
    annee: '2025 – 2026',
    lieu: 'Ciril Group — Lyon',
    resume:
      'Alternance de douze mois au service Finances, une semaine sur deux, comme développeur ' +
      "produit. Au moins dix-huit demandes de fusion livrées sur l'année, toutes relues et " +
      'approuvées. Le levé porte aussi la SAÉ Développement avancé du semestre 5.',
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
      "reproductible. J'ai développé un écran unique capable de lancer n'importe quelle " +
      'édition en saisissant ses paramètres, construits dynamiquement à partir du code de ' +
      "l'édition choisie. J'ai livré dans la même logique un second écran, de consultation " +
      'des traces serveur, avec une classe générique réutilisable et une classe spécifique.',

    contexte:
      'Base de code ancienne et volumineuse, plusieurs générations de code coexistantes, ' +
      'application en service chez des collectivités. Contrainte : ne rien casser.',

    technique: ['Java', 'Oracle', 'SQL', 'Introspection de classes', 'GitLab'],

    resultats: [
      'Écran validé en revue fin octobre 2025, étendu ensuite à toutes les éditions visées.',
      "Second écran livré, séparé en une classe générique et une classe spécifique à l'application.",
      "Conception de la table de correspondance entre une édition et sa classe, avec son script de création puis un script de migration conditionnel pour renommer ses colonnes.",
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
        ac: [
          "Concevoir une base de données relationnelle à partir d'un cahier des charges",
          "Optimiser les modèles de données de l'entreprise",
        ],
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
        titre: A_REMPLIR("Capture de l'écran de lancement, sur données factices"),
        nature: "Capture d'écran",
        lien: A_REMPLIR('./traces/a1-ecran.png'),
        demontre: A_REMPLIR(
          'Ce que la capture prouve et sa limite. ⚠️ Accord du tuteur entreprise, et aucune ' +
            'donnée de collectivité visible.',
        ),
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
      'fabriquer des données valides dans un modèle relationnel fortement contraint, puis de ' +
      'les supprimer sans casser les dépendances.',

    contexte:
      "Suite exécutée par le serveur d'intégration continue. L'environnement de test était " +
      'trop pauvre en données pour être représentatif, ce qui produisait des échecs ' +
      'inexistants en conditions réelles.',

    technique: [
      'TypeScript',
      A_REMPLIR('Le framework de test e2e — Playwright ? Cypress ?'),
      'Intégration continue',
      'Oracle',
    ],

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
    ],

    traces: [
      {
        titre: A_REMPLIR('Un scénario de test commenté'),
        nature: 'Extrait de code',
        lien: A_REMPLIR('./traces/a2-scenario.pdf'),
        demontre: A_REMPLIR('Ce que ça prouve, et sa limite'),
      },
    ],
  },

  {
    id: 'a3',
    code: 'A3',
    leve: 'S6',
    // ── TON POINT TECHNIQUE DE SOUTENANCE ──
    intitule: 'Pipeline automatisé de diagnostic des échecs de tests',
    organisation: 'Ciril Group — service Finances',
    lieu: 'Lyon',
    periode: 'juillet 2026',
    role: 'Conception et réalisation, à mon initiative',

    descriptif:
      "Les échecs de la suite de tests étaient analysés à la main, un par un. J'ai automatisé " +
      'le cycle complet : récupération du rapport, classement de chaque échec entre test ' +
      'instable et régression applicative probable, relance en direct, tentative de correction ' +
      "quand le diagnostic identifie un défaut simple, vérification, et brouillon de ticket. " +
      "Aucun ticket n'est soumis automatiquement : un écran de revue impose une validation " +
      'manuelle, un par un.',

    contexte:
      "Décision de conception assumée : l'automatisation peut lire, analyser, corriger et " +
      "proposer, mais tout ce qui devient visible par quelqu'un d'autre passe par une " +
      "validation humaine. C'est ce qui rend l'outil acceptable dans une équipe.",

    technique: [
      'Node.js',
      'PowerShell',
      'Stockage chiffré des secrets',
      "API d'intégration continue",
      'Interface web locale',
    ],

    resultats: [
      'Cycle complet automatisé, du rapport au brouillon de ticket, avec résumé envoyé par courriel.',
      'Aucun secret en clair : jeton et identifiants chiffrés, liés au compte et à la machine.',
      "Script de contrôle de santé du pipeline lui-même, pour détecter une panne de l'automatisation avant plusieurs jours de silence.",
      "Un seul défaut systémique identifié derrière plusieurs échecs distincts — un décalage d'index causé par l'ajout d'un composant sur un écran partagé — corrigé sur sept fichiers de test.",
    ],

    sondes: [
      {
        competence: 'c1',
        niveau: 2.8,
        ac: [
          'Choisir et implémenter les architectures adaptées',
          "Réaliser un audit d'une application",
          'Intégrer des solutions dans un environnement de production',
        ],
        justification:
          "C'est la mission où j'ai conçu une architecture de bout en bout plutôt que " +
          "d'intervenir dans une existante. Le choix structurant — l'automatisation propose, " +
          "l'humain valide — est un choix d'architecture avant d'être un choix technique.",
      },
      {
        competence: 'c2',
        niveau: 2.7,
        ac: [
          "Profiler et analyser le comportement d'un code existant",
          'Identifier les solutions techniques pour gérer la montée en charge des applications',
        ],
        justification:
          "J'ai remplacé une interrogation continue du serveur par une surveillance qui ne " +
          "déclenche la vérification qu'à la fin d'un build : même réactivité, beaucoup moins " +
          'de charge. Et la classification instable / régression analyse le comportement ' +
          "historique d'un test plutôt que son échec ponctuel.",
      },
      {
        competence: 'c3',
        niveau: 2.0,
        ac: ["Sécuriser les services et données d'un système"],
        justification:
          "Le pipeline manipule un jeton d'API et des identifiants applicatifs. Je les ai " +
          'placés dans un stockage chiffré lié au compte et à la machine, au lieu de les ' +
          'laisser dans des fichiers de configuration.',
      },
      {
        competence: 'c6',
        niveau: 2.5,
        ac: [
          'Organiser et partager une veille technologique et informationnelle',
          "Guider la conduite du changement informatique au sein d'une organisation",
        ],
        justification:
          "Cette mission n'a pas été demandée : j'ai identifié un travail répétitif et proposé " +
          "de l'automatiser. Introduire une automatisation dans une équipe est une conduite du " +
          'changement, et la validation humaine est pour cela une contrainte de conception, pas ' +
          'une option.',
      },
    ],

    traces: [
      {
        titre: 'Compte rendu de mise en place du pipeline',
        nature: 'Document technique',
        lien: A_REMPLIR("./traces/a3-compte-rendu.pdf — tu l'as déjà écrit, exporte-le"),
        demontre:
          'Ce document prouve la démarche, et surtout les points de vigilance déclarés — dont ' +
          'un blocage non résolu et assumé. Sa limite : il décrit ce que le pipeline fait, pas ' +
          'la qualité du code qui le réalise.',
      },
      {
        titre: A_REMPLIR('Schéma du pipeline'),
        nature: "Schéma d'architecture",
        lien: A_REMPLIR("./traces/a3-schema.png — à dessiner, ça vaut le coup pour l'oral"),
        demontre: A_REMPLIR(
          "Un schéma montre les choix d'architecture d'un coup d'œil. C'est le meilleur " +
            'support pour ton point technique.',
        ),
      },
    ],
  },

  {
    id: 'a4',
    code: 'A4',
    leve: 'S6',
    intitule: "Maintenance corrective de l'application en production",
    organisation: 'Ciril Group — service Finances',
    lieu: 'Lyon',
    // ⚠️ Un ticket que tu m'as montré est résolu le 31/07/2025, avant le 25 août.
    //    Étais-tu chez Ciril avant, en stage d'été ?
    periode: A_REMPLIR('Période réelle — voir la remarque dans le fichier'),
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
    ],

    traces: [
      {
        titre: A_REMPLIR('Avant / après du filtrage, sur données factices'),
        nature: "Capture d'écran",
        lien: A_REMPLIR('./traces/a4-avant-apres.png'),
        demontre: A_REMPLIR('Ce que la comparaison prouve, et sa limite'),
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
      A_REMPLIR('Combien des tickets du chantier étaient les tiens ?'),
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
        titre: A_REMPLIR('Extrait de correction anonymisé, avant / après'),
        nature: 'Extrait de code',
        lien: A_REMPLIR('./traces/a5-parametrage.pdf'),
        demontre: A_REMPLIR(
          'Trois lignes suffisent : la condition avant, la condition après, et pourquoi le ' +
            'caractère manquant rendait la requête vulnérable. ⚠️ Masque les noms de tables.',
        ),
      },
    ],
  },

  /* SAÉ Développement avancé, semestre 5 — coefficient 50 dans CHACUNE des trois
     UE de niveau 3. La pièce académique la plus lourde de ton BUT3 : à remplir
     avant tout le reste. */
  {
    id: 'sae',
    code: 'C1',
    leve: 'S6',
    intitule: A_REMPLIR('Sujet exact de la SAÉ Développement avancé'),
    organisation: 'IUT Lyon 1 — SAÉ Développement avancé, semestre 5',
    lieu: 'Villeurbanne',
    periode: A_REMPLIR('Période'),
    role: A_REMPLIR("Ton rôle et la taille de l'équipe"),

    descriptif: A_REMPLIR("3 phrases : le besoin, ce que l'application fait, pour qui"),

    contexte:
      "Situation d'apprentissage et d'évaluation du semestre 5, portant le coefficient 50 dans " +
      "les trois unités d'enseignement de niveau 3 du parcours. C'est le support académique de " +
      'la validation de ces trois niveaux.',

    technique: [A_REMPLIR('Back-end, front-end, base de données')],
    resultats: [A_REMPLIR('Ce que le projet livrait, et ce qui fonctionnait')],

    sondes: [
      {
        competence: 'c1',
        niveau: 2.5,
        ac: [
          'Développer des applications sur des supports spécifiques',
          "Utiliser des patrons de conception pour le développement d'applications cohérentes",
        ],
        justification: A_REMPLIR(
          "Le niveau 3 s'intitule « Adapter des applications sur un ensemble de supports ». " +
            "Quels supports visiez-vous, et quel choix d'architecture cela a-t-il imposé ?",
        ),
      },
      {
        competence: 'c2',
        niveau: 2.4,
        ac: ["Profiler et analyser le comportement d'un code existant"],
        justification: A_REMPLIR(
          "Le niveau 3 s'intitule « Analyser et optimiser des applications ». Qu'avez-vous " +
            "mesuré, et qu'avez-vous changé après l'avoir mesuré ?",
        ),
      },
      {
        competence: 'c6',
        niveau: 2.3,
        ac: ['Organiser et partager une veille technologique et informationnelle'],
        justification: A_REMPLIR(
          "Sur une SAÉ, « manager une équipe » n'est pas hiérarchique : comment l'équipe " +
            "s'est-elle organisée, et comment avez-vous partagé ce que chacun découvrait ?",
        ),
      },
    ],

    traces: [
      {
        titre: 'Dépôt de la SAÉ Développement avancé',
        nature: 'Dépôt Git — forge Lyon 1',
        lien: A_REMPLIR('Un artefact public de ta contribution'),
        lienPublic: A_REMPLIR("./traces/c1-sae.pdf — schéma d'architecture + liste de tes commits"),
        demontre: A_REMPLIR(
          'Le schéma montre les choix, la liste de tes commits montre ton périmètre réel dans ' +
            "l'équipe. Les deux ensemble valent mieux que le dépôt.",
        ),
      },
    ],
  },

  {
    id: 'b1',
    code: 'B1',
    leve: 'S4',
    intitule: 'Réseaux, sécurité et automatisation réseau',
    organisation: "Cégep de Matane — Techniques de l'informatique",
    lieu: 'Matane, Québec',
    periode: 'automne 2024 – hiver 2025',
    role: 'Étudiant en échange — laboratoires et travaux pratiques',

    descriptif:
      'Routage et commutation, réseaux évolutifs, administration de serveurs, dans le cursus ' +
      "Cisco Networking Academy. Le volet automatisation est le premier endroit où j'ai " +
      "rencontré l'idée de piloter une infrastructure par du code — celle que je retrouve " +
      'aujourd\'hui chez Ciril Group.',

    contexte:
      "C'est la partie de mon parcours la plus éloignée du parcours Réalisation " +
      "d'applications, et c'est ce qui la rend utile : elle m'a mené au terminus de la " +
      "compétence Administrer avant même l'alternance.",

    technique: ['Commutation et routage', 'Sécurité réseau', 'Automatisation réseau', 'Serveurs'],

    resultats: [
      'Réussite du cours CCNA : Enterprise Networking, Security & Automation, le 30 mai 2025.',
      "Objectif « Effectuer le déploiement de dispositifs d'interconnexion de réseaux informatiques » validé comme atteint au bulletin.",
      'Routage et commutation : 92 sur 100 pour une moyenne de groupe de 81. Réseaux évolutifs : 93 pour 79.',
    ],

    sondes: [
      {
        competence: 'c3',
        niveau: 2.0,
        ac: [
          'Utiliser des serveurs et des services réseaux virtualisés',
          "Sécuriser les services et données d'un système",
          "Configurer un poste de travail dans un réseau d'entreprise",
        ],
        justification:
          "Le déploiement de dispositifs d'interconnexion réseau est un objectif formellement " +
          'validé au bulletin, et il correspond mot pour mot au niveau 2 de cette compétence — ' +
          'terminus du parcours RA. Elle a donc été menée à son terme au Québec.',
      },
      {
        competence: 'c6',
        niveau: 1.5,
        ac: ["Appréhender l'écosystème numérique"],
        justification:
          'Suivre un cursus de certification industrielle, dans un autre pays et un autre ' +
          "système d'évaluation, m'a fait découvrir que les métiers de l'infrastructure ont " +
          'leurs propres référentiels, indépendants de mon diplôme.',
      },
    ],

    traces: [
      {
        titre: 'Certificat CCNA : Enterprise Networking, Security & Automation',
        nature: 'Certificat — Cisco Networking Academy',
        lien: A_REMPLIR('./traces/b1-ccna.pdf — dépose le PDF tel quel, 5 minutes'),
        demontre:
          'Ma seule preuve à la fois vérifiable, publique et non soumise à confidentialité. Sa ' +
          "limite, que je préfère dire avant qu'on me la demande : c'est un certificat de " +
          'réussite de cours, pas la certification CCNA 200-301, qui passe par un examen Cisco ' +
          'distinct.',
      },
    ],
  },

  {
    id: 'b2',
    code: 'B2',
    leve: 'S4',
    intitule: 'Projets de développement au Cégep de Matane',
    organisation: "Cégep de Matane — Techniques de l'informatique",
    lieu: 'Matane, Québec',
    periode: 'automne 2024 – hiver 2025',
    role: 'Étudiant en échange — projets individuels et en équipe',

    descriptif:
      "Une pédagogie organisée autour de projets à rendre plutôt que d'examens, sur quatre " +
      'terrains : le web interactif avec des échanges asynchrones, le multijoueurs où plusieurs ' +
      "clients partagent un état, l'intégration de données entre systèmes hétérogènes, et une " +
      "application Java structurée en couches. J'ai conçu et rédigé la spécification d'un " +
      "protocole d'échange avant d'écrire le code du projet multijoueurs.",

    contexte:
      'Les quatre dépôts liés ci-dessous sont publics et ouvrables sans compte, contrairement ' +
      'aux dépôts de devoirs du Cégep.',

    technique: ['JavaScript', 'PHP', 'Java', 'JavaFX', 'PostgreSQL', 'Apache Camel', 'ActiveMQ'],

    resultats: [
      'Programmation web interactive : 97 sur 100 pour une moyenne de groupe de 72. Programmation de jeux : 94 pour 74.',
      "Protocole d'échange multijoueurs conçu et spécifié dans un document avant développement.",
      "Chaîne d'intégration complète : lecture de fichiers déposés dans un répertoire, circulation via un courtier de messages, exposition en service et en API.",
      "Application Java séparée en modèle, vue, contrôleur et couche d'accès aux données, avec tests unitaires.",
    ],

    sondes: [
      {
        competence: 'c1',
        niveau: 2.0,
        ac: [
          "Utiliser des patrons de conception pour le développement d'applications cohérentes",
          "Vérifier et valider la qualité de l'application par les tests",
          'Développer des interfaces utilisateurs',
        ],
        justification:
          "Le découpage modèle-vue-contrôleur est appliqué explicitement dans l'arborescence " +
          'plutôt que sous-entendu, et les tests unitaires portent sur la partie où une erreur ' +
          "serait invisible à l'œil. C'est vérifiable par quiconque ouvre le dépôt.",
      },
      {
        competence: 'c3',
        niveau: 1.9,
        ac: ['Concevoir et développer des applications communicantes'],
        justification:
          "J'ai spécifié le protocole avant d'écrire le code : quels messages, quel format, qui " +
          "les émet. Sur la chaîne d'intégration, les composants ne s'appellent pas directement " +
          "mais échangent par un intermédiaire — c'est la première fois que le découplage était " +
          "le sujet et non un effet de bord.",
      },
      {
        competence: 'c4',
        niveau: 1.8,
        ac: [
          'Manipuler des données hétérogènes',
          'Organiser la restitution de données à travers la programmation et la visualisation',
        ],
        justification:
          'Faire circuler des données depuis des fichiers vers une base puis vers une API, en ' +
          'passant par un courtier de messages, est littéralement la manipulation de sources ' +
          'hétérogènes. Je retrouve la même logique chez Ciril Group.',
      },
      {
        competence: 'c2',
        niveau: 1.7,
        ac: ['Choisir des structures de données complexes adaptées au problème'],
        justification: A_REMPLIR(
          "Quel problème de synchronisation ou d'état partagé as-tu réellement rencontré sur le " +
            "multijoueurs, et comment l'as-tu résolu ?",
        ),
      },
    ],

    traces: [
      {
        titre: depotsPublics.aventurier.nom,
        nature: 'Dépôt Git public',
        lien: depotsPublics.aventurier.url,
        demontre:
          'Public et documenté : le jury peut vérifier lui-même la séparation en couches, les ' +
          'tests et les instructions de compilation. Sa limite : le projet est de taille ' +
          'modeste, donc il prouve la rigueur de structure, pas la capacité à la tenir sur une ' +
          'base de code de production.',
      },
      {
        titre: depotsPublics.videotheque.nom,
        nature: 'Dépôt Git public',
        lien: depotsPublics.videotheque.url,
        demontre:
          "On y vérifie le schéma de la base et une couche d'accès aux données isolée : ni la " +
          'vue ni le modèle ne contiennent de SQL, si bien que changer de système de stockage ' +
          "ne demanderait de réécrire qu'une seule classe.",
      },
      {
        titre: depotsPublics.ajax.nom,
        nature: 'Dépôt Git public — republié depuis le dépôt de cours',
        lien: depotsPublics.ajax.url,
        demontre:
          "Le mécanisme d'échange asynchrone tient dans deux fichiers. Sa limite, que le dépôt " +
          'annonce lui-même : la couche de présentation reprend un modèle HTML libre. Ce projet ' +
          "démontre le traitement asynchrone, pas la conception de l'interface.",
      },
      {
        titre: depotsPublics.camel.nom,
        nature: 'Dépôt Git public',
        lien: depotsPublics.camel.url,
        demontre: A_REMPLIR(
          "Dis quelle route d'intégration ce dépôt contient et quel problème de découplage elle " +
            'résout. ⚠️ Ajoute-lui une description sur GitHub, sinon le jury ne voit qu\'un dossier.',
        ),
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
    niveauS4: 2.0,
    niveauS6: 2.8,
    auS4:
      "J'écrivais des applications qui répondaient à un énoncé. « Est-ce que ça marche » se " +
      "posait sur ma machine, avec mes données, dans un projet dont j'étais l'unique auteur.",
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
    niveauS4: 1.7,
    niveauS6: 2.7,
    auS4:
      "J'optimisais quand on me le demandait, en comparant des algorithmes sur des cas " +
      "fournis. Analyser du code que je n'avais pas écrit ne faisait pas partie de mon travail.",
    auS6:
      "Je pars d'un symptôme et je remonte à la cause. Et je me méfie du nombre de symptômes : " +
      'plusieurs échecs distincts sont souvent une seule cause.',
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
    niveauS4: 2.0,
    niveauS6: 2.0,
    auS4:
      "C'est au Québec que cette compétence a été menée à son terme : routage, commutation, " +
      "administration de serveurs, et l'objectif de déploiement de dispositifs " +
      "d'interconnexion réseau validé comme atteint.",
    auS6:
      "Je ne construis plus d'infrastructure, mais je vis avec : environnements multiples, " +
      "serveur d'intégration partagé, gestion de secrets. Le niveau 2 est le terminus du " +
      'parcours RA : je le consolide, je ne le dépasse pas.',
    bascule:
      "Fin juillet, mes tests ont cessé de fonctionner localement, tous, sans qu'une ligne de " +
      "code ait changé : un exécutable appelé par le programme n'était plus trouvé, " +
      "probablement après une mise à jour du poste. J'ai documenté le blocage et mis le sujet " +
      "en pause plutôt que de le contourner à l'aveugle. Un environnement est une dépendance " +
      'comme une autre.',
  },
  {
    competence: 'c4',
    niveauS4: 1.8,
    niveauS6: 2.0,
    auS4:
      "Je concevais et j'interrogeais des bases dans des exercices où le modèle était petit, " +
      "propre, et fait pour l'exercice.",
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
    niveauS4: 1.3,
    niveauS6: 1.9,
    auS4:
      "Les projets arrivaient avec un énoncé, un périmètre et une date. Je n'avais pas à " +
      'établir ce qui était demandé.',
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
    niveauS4: 1.8,
    niveauS6: 2.5,
    auS4:
      'Je travaillais en équipe entre étudiants, avec une note commune. Personne ne dépendait ' +
      'de mon code après la remise.',
    auS6:
      'Je rends compte de mon activité, je passe par des revues, je vais chercher la personne ' +
      "qui détient l'information plutôt que de supposer, et j'ai proposé un chantier qu'on ne " +
      "m'avait pas demandé.",
    bascule:
      "Quand j'ai automatisé le diagnostic des échecs de tests, l'outil pouvait créer les " +
      "tickets tout seul : c'était fait. J'ai délibérément ajouté un écran de validation " +
      "manuelle, ticket par ticket, parce qu'un ticket est vu par d'autres personnes. C'est la " +
      "première fois que j'ai conçu une limite volontaire dans mon propre outil pour qu'il soit " +
      "acceptable par l'équipe.",
  },
]

/* ════════════════ 5. L'ITINÉRAIRE ════════════════ */

export const aTerre = {
  fil:
    "Trois endroits, trois façons d'apprendre l'informatique. L'IUT Lyon 1 m'a donné un " +
    "référentiel de compétences. Le Cégep de Matane m'a mis dans une pédagogie par projets, " +
    "avec une dominante réseaux que le parcours Réalisation d'applications n'aborde pas de la " +
    "même façon. Ciril Group m'a confronté à ce que ni l'un ni l'autre ne peut simuler : du " +
    "code ancien, des utilisateurs réels, et des collègues qui relisent ce que j'écris. Un fil " +
    "relie les deux derniers : l'automatisation, rencontrée au Québec comme une idée et " +
    'retrouvée chez Ciril comme un besoin.',

  escales: [
    {
      lieu: 'IUT Lyon 1',
      periode: '2023 – 2024',
      quoi: 'B.U.T. Informatique, 1ʳᵉ année — tronc commun',
      cequejairetenu: A_REMPLIR('Une chose précise apprise en 1ʳᵉ année, pas un bilan'),
    },
    {
      lieu: 'Cégep de Matane',
      pays: 'Québec, Canada',
      periode: '2024 – 2025',
      quoi:
        "Échange universitaire — Techniques de l'informatique, 23,33 unités acquises, et " +
        'réussite du cours CCNA Enterprise Networking, Security & Automation',
      cequejairetenu: A_REMPLIR(
        "Ton élément le plus distinctif : qu'est-ce qui se fait différemment là-bas ? Le " +
          "rapport au code, à l'évaluation, au travail d'équipe ?",
      ),
    },
    {
      lieu: 'Ciril Group',
      periode: '2025 – 2026',
      quoi: 'Alternance — développeur produit, service Finances',
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
    "Ce choix découle de ce que le plan montre. Mon parcours s'est construit sur deux moitiés : " +
    'une année au Québec centrée sur les réseaux, une année chez Ciril Group centrée sur le ' +
    "développement et les données. Le parcours Réalisation d'applications conduit la compétence " +
    '« Administrer des systèmes informatiques communicants » au niveau 2, et je l\'ai atteint au ' +
    "Québec : c'est le terminus de cette ligne. La spécialité Informatique et Réseaux de " +
    "Communication est celle qui la prolonge sans me faire abandonner l'autre moitié.",
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

  choixTechniques: A_REMPLIR(
    'React et Vite, site statique publié sur GitHub Pages. Précise ce que tu as écrit ou ' +
      'adapté toi-même.',
  ),

  limites:
    'Ce portfolio ne montre pas mon code de production : il appartient à Ciril Group et les ' +
    'applications concernées servent des collectivités territoriales. Les traces issues de ' +
    "l'alternance sont donc des extraits anonymisés et des schémas. Les dépôts de mes projets " +
    "académiques sont fermés par politique d'établissement : j'ai republié sur des dépôts " +
    'publics ceux dont le code est de moi.',
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
      'parcours RA ne les mène pas au niveau 3. Précise aussi que ton S4 était un échange, donc ' +
      'sans mission de stage.',
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
      "Le tableau montre les six progressions d'un coup. Puis ouvre UNE page de ligne et " +
      "raconte sa bascule en entier : celle de Réaliser (l'énumération) ou celle de Conduire " +
      'un projet (le revirement métier, qui contient une erreur assumée).',
  },
  {
    ancre: 'itineraire',
    titre: 'Bilan et projet post-BUT',
    secondes: 40,
    aDire:
      "Le fil rouge des trois escales, puis IRC à CPE Lyon en alternance chez Ciril. L'argument " +
      'fort est le terminus : Administrer est à son plafond dans le parcours RA, et IRC la ' +
      'prolonge sans faire abandonner le développement.',
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
