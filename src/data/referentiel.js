/**
 * RÉFÉRENTIEL NATIONAL — B.U.T. INFORMATIQUE
 * Parcours « Réalisation d'applications : conception, développement, validation »
 *
 * ⚠️  NE PAS REFORMULER LE CONTENU DE CE FICHIER.
 *
 * La grille d'évaluation du portfolio attribue 25 points sur 100 au « lien avec les
 * compétences du référentiel », et son niveau le plus haut exige des compétences
 * « telles que formulées dans le référentiel ». Toute reformulation, même élégante,
 * fait perdre des points. Les intitulés ci-dessous sont donc recopiés à l'identique.
 *
 * Sources :
 *  - Fiche RNCP35475 (France Compétences) — « BUT Informatique : Réalisation
 *    d'applications : conception, développement, validation ». Université Claude
 *    Bernard Lyon 1 y figure comme certificateur. Blocs BC01 à BC11.
 *  - Programme National B.U.T. Informatique 2022 (Ministère de l'Enseignement
 *    supérieur, de la Recherche et de l'Innovation), section « Référentiel de
 *    compétences — Parcours A », vérifié mot pour mot le 24/08/2026. C'est la
 *    version la plus récente et la plus complète : elle a remplacé les
 *    composantes essentielles et plusieurs apprentissages critiques (surtout
 *    aux niveaux 2 et 3) présents dans l'annexe 2019 utilisée jusque-là.
 *
 * La fiche RNCP35475 arrive à échéance le 31/08/2026, remplacée par RNCP41588.
 * Le contenu ci-dessous a déjà été mis à jour sur le Programme National 2022,
 * donc aligné sur ce que la nouvelle fiche reprendra vraisemblablement.
 */

export const PARCOURS = {
  mention: 'B.U.T. Informatique',
  parcours: "Réalisation d'applications : conception, développement, validation",
  sigle: 'RA',
  etablissement: 'IUT Lyon 1 — Université Claude Bernard Lyon 1',
  rncp: 'RNCP35475',
}

/**
 * PLAFOND DE PARCOURS — le point que la plupart des portfolios manquent.
 *
 * Le parcours RA ne conduit pas les six compétences au niveau 3. Trois s'arrêtent
 * au niveau 2. Revendiquer un niveau 3 sur « Conduire un projet » se verrait
 * immédiatement en soutenance. Sur la carte, ce plafond est tracé comme une
 * « limite de levé » : au-delà, l'eau n'est pas sondée par ce parcours.
 */

export const COMPETENCES = [
  {
    id: 'c1',
    numero: 1,
    bloc: 'RNCP35475BC01',
    nom: "Réaliser un développement d'application",
    verbe: 'Réaliser',
    niveauMaxParcours: 3,
    enonce:
      "Développer — c'est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.",
    composantes: [
      'en respectant les besoins décrits par le client',
      'en appliquant les principes algorithmiques',
      'en veillant à la qualité du code et à sa documentation',
      'en choisissant les ressources techniques appropriées',
    ],
    situations: [
      'Élaborer une application informatique',
      'Faire évoluer une application informatique',
      'Maintenir en conditions opérationnelles une application informatique',
    ],
    niveaux: [
      {
        n: 1,
        intitule: 'Développer des applications informatiques simples',
        ac: [
          'Implémenter des conceptions simples',
          'Élaborer des conceptions simples',
          'Faire des essais et évaluer leurs résultats en regard des spécifications',
          'Développer des interfaces utilisateurs',
        ],
      },
      {
        n: 2,
        intitule: "Partir des exigences et aller jusqu'à une application complète",
        ac: [
          'Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences',
          "Appliquer des principes d'accessibilité et d'ergonomie",
          'Adopter de bonnes pratiques de conception et de programmation',
          "Vérifier et valider la qualité de l'application par les tests",
        ],
      },
      {
        n: 3,
        // Formulation confirmée à la fois par le relevé de notes S5 de l'IUT
        // Lyon 1 (« UE5-1 BC1-N3 Adapter des appli. sur un ensemble de
        // supports ») et par le Programme National 2022 lui-même.
        intitule: 'Adapter des applications sur un ensemble de supports (embarqué, web, mobile, IoT…)',
        ac: [
          'Choisir et implémenter les architectures adaptées',
          'Faire évoluer une application existante',
          'Intégrer des solutions dans un environnement de production',
        ],
      },
    ],
  },

  {
    id: 'c2',
    numero: 2,
    bloc: 'RNCP35475BC02',
    nom: 'Optimiser des applications informatiques',
    verbe: 'Optimiser',
    niveauMaxParcours: 3,
    enonce:
      "Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources...",
    composantes: [
      'en formalisant et modélisant des situations complexes',
      'en recensant les algorithmes et les structures de données usuels',
      "en s'appuyant sur des schémas de raisonnement",
      'en justifiant les choix et validant les résultats',
    ],
    situations: [
      'Améliorer les performances des programmes dans des contextes contraints',
      "Limiter l'impact environnemental d'une application informatique",
      'Mettre en place des applications informatiques adaptées et efficaces',
    ],
    niveaux: [
      {
        n: 1,
        intitule: 'Appréhender et construire des algorithmes',
        ac: [
          'Analyser un problème avec méthode (découpage en éléments algorithmiques simples, structure de données...)',
          'Comparer des algorithmes pour des problèmes classiques (tris simples, recherche...)',
          "Formaliser et mettre en œuvre des outils mathématiques pour l'informatique",
        ],
      },
      {
        n: 2,
        intitule: 'Sélectionner les algorithmes adéquats pour répondre à un problème donné',
        ac: [
          'Choisir des structures de données complexes adaptées au problème',
          'Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle...)',
          'Comprendre les enjeux et moyens de sécurisation des données et du code',
          'Évaluer l\'impact environnemental et sociétal des solutions proposées',
        ],
      },
      {
        n: 3,
        intitule: 'Analyser et optimiser des applications',
        ac: [
          "Anticiper les résultats de diverses métriques (temps d'exécution, occupation mémoire, montée en charge...)",
          "Profiler, analyser et justifier le comportement d'un code existant",
          "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel...)",
        ],
      },
    ],
  },

  {
    id: 'c3',
    numero: 3,
    bloc: 'RNCP35475BC03',
    nom: 'Administrer des systèmes informatiques communicants complexes',
    verbe: 'Administrer',
    niveauMaxParcours: 2,
    enonce:
      "Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation.",
    composantes: [
      "en sécurisant le système d'information",
      'en appliquant les normes en vigueur et les bonnes pratiques architecturales et de sécurité',
      'en offrant une qualité de service optimale',
      "en assurant la continuité d'activité",
    ],
    situations: [
      'Déployer une nouvelle architecture technique',
      'Améliorer une infrastructure existante',
      'Sécuriser les applications et les services',
    ],
    niveaux: [
      {
        n: 1,
        intitule: 'Installer et configurer un poste de travail',
        ac: [
          "Identifier les différents composants (matériels et logiciels) d'un système numérique",
          "Utiliser les fonctionnalités de base d'un système multitâches / multiutilisateurs",
          "Installer et configurer un système d'exploitation et des outils de développement",
          "Configurer un poste de travail dans un réseau d'entreprise",
        ],
      },
      {
        n: 2,
        intitule: 'Déployer des services dans une architecture réseau',
        ac: [
          'Concevoir et développer des applications communicantes',
          'Utiliser des serveurs et des services réseaux virtualisés',
          "Sécuriser les services et données d'un système",
        ],
      },
      {
        n: 3,
        horsParcours: true,
        intitule:
          'Faire évoluer et maintenir un système informatique communicant en conditions opérationnelles',
        ac: [
          "Créer des processus de traitement automatisé (solution de gestion de configuration et de parc, intégration et déploiement continu...)",
          'Configurer un serveur et des services réseaux de manière avancée (virtualisation...)',
          'Appliquer une politique de sécurité au niveau de l\'infrastructure',
          "Déployer et maintenir un réseau d'organisation en fonction de ses besoins",
        ],
      },
    ],
  },

  {
    id: 'c4',
    numero: 4,
    bloc: 'RNCP35475BC04',
    nom: "Gérer des données de l'information",
    verbe: 'Gérer',
    niveauMaxParcours: 2,
    enonce:
      "Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise.",
    composantes: [
      'en respectant les réglementations sur le respect de la vie privée et la protection des données personnelles',
      "en respectant les enjeux économiques, sociétaux et écologiques de l'utilisation du stockage de données, ainsi que les différentes infrastructures (data centers, cloud, etc.)",
      "en s'appuyant sur des bases mathématiques",
      'en assurant la cohérence et la qualité',
    ],
    situations: [
      'Lancer un nouveau projet',
      'Sécuriser des données',
      'Exploiter des données pour la prise de décisions',
    ],
    niveaux: [
      {
        n: 1,
        intitule:
          "Concevoir et mettre en place une base de données à partir d'un cahier des charges client",
        ac: [
          "Mettre à jour et interroger une base de données relationnelle (en requêtes directes ou à travers une application)",
          'Visualiser des données',
          "Concevoir une base de données relationnelle à partir d'un cahier des charges",
        ],
      },
      {
        n: 2,
        intitule:
          'Optimiser une base de données, interagir avec une application et mettre en œuvre la sécurité',
        ac: [
          "Optimiser les modèles de données de l'entreprise",
          'Assurer la sécurité des données (intégrité et confidentialité)',
          'Organiser la restitution de données à travers la programmation et la visualisation',
          'Manipuler des données hétérogènes',
        ],
      },
    ],
  },

  {
    id: 'c5',
    numero: 5,
    bloc: 'RNCP35475BC05',
    nom: 'Conduire un projet',
    verbe: 'Conduire',
    niveauMaxParcours: 2,
    enonce:
      'Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.',
    composantes: [
      'en adoptant une démarche proactive, créative et critique',
      'en respectant les règles juridiques et les normes en vigueur',
      "en communiquant efficacement avec les différents acteurs d'un projet",
      'en sensibilisant à une gestion éthique, responsable, durable et interculturelle',
    ],
    situations: [
      'Lancer un nouveau projet',
      'Piloter le maintien d\'un projet en condition opérationnelle',
      "Faire évoluer un système d'information",
    ],
    niveaux: [
      {
        n: 1,
        intitule: 'Identifier les besoins métiers des clients et des utilisateurs',
        ac: [
          "Appréhender les besoins du client et de l'utilisateur",
          'Mettre en place les outils de gestion de projet',
          "Identifier les acteurs et les différentes phases d'un cycle de développement",
        ],
      },
      {
        n: 2,
        intitule:
          'Appliquer une démarche de suivi de projet en fonction des besoins métiers des clients et des utilisateurs',
        ac: [
          "Identifier les processus présents dans une organisation en vue d'améliorer les systèmes d'information",
          "Formaliser les besoins du client et de l'utilisateur",
          "Identifier les critères de faisabilité d'un projet informatique",
          'Définir et mettre en œuvre une démarche de suivi de projet',
        ],
      },
    ],
  },

  {
    id: 'c6',
    numero: 6,
    bloc: 'RNCP35475BC06',
    nom: 'Travailler dans une équipe informatique',
    verbe: 'Collaborer',
    niveauMaxParcours: 3,
    enonce:
      'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',
    composantes: [
      'en inscrivant sa démarche au sein d\'une équipe pluridisciplinaire',
      'en accompagnant la mise en œuvre des évolutions informatiques',
      'en veillant au respect des contraintes juridiques',
      'en développant une communication efficace et collaborative',
    ],
    situations: [
      'Lancer un nouveau projet',
      "Organiser son travail en relation avec celui de son équipe",
      "Élaborer, gérer et transmettre de l'information",
    ],
    niveaux: [
      {
        n: 1,
        intitule: 'Identifier ses aptitudes pour travailler dans une équipe',
        ac: [
          "Appréhender l'écosystème numérique",
          'Découvrir les aptitudes requises selon les différents secteurs informatiques',
          "Identifier les statuts, les fonctions et les rôles de chaque membre d'une équipe pluridisciplinaire",
          'Acquérir les compétences interpersonnelles pour travailler en équipe',
        ],
      },
      {
        n: 2,
        intitule: 'Situer son rôle et ses missions au sein d\'une équipe informatique',
        ac: [
          "Comprendre la diversité, la structure et la dimension de l'informatique dans une organisation (ESN, DSI,…)",
          'Appliquer une démarche pour intégrer une équipe informatique au sein d\'une organisation',
          'Mobiliser les compétences interpersonnelles pour travailler dans une équipe informatique',
          'Rendre compte de son activité professionnelle',
        ],
      },
      {
        n: 3,
        intitule: 'Manager une équipe informatique',
        ac: [
          'Organiser et partager une veille technologique et informationnelle',
          "Identifier les enjeux de l'économie de l'innovation numérique",
          "Guider la conduite du changement informatique au sein d'une organisation",
          'Accompagner le management de projet informatique',
        ],
      },
    ],
  },
]

/**
 * Compétences transversales (blocs BC07 à BC11 de la fiche RNCP35475).
 * Les consignes demandent de tenir compte « notamment des blocs de compétences ».
 * Elles sont rarement citées dans un portfolio étudiant : les mentionner coûte peu
 * et montre que le référentiel a été lu en entier.
 */
export const TRANSVERSALES = [
  {
    bloc: 'RNCP35475BC07',
    nom: 'Usages des outils numériques',
    enonce:
      "Utiliser les outils numériques de référence et les règles de sécurité informatique pour acquérir, traiter, produire et diffuser de l'information ainsi que pour collaborer en interne et en externe.",
  },
  {
    bloc: 'RNCP35475BC08',
    nom: "Exploitation de données à des fins d'analyse",
    enonce:
      'Identifier, sélectionner et analyser avec esprit critique diverses ressources dans son domaine de spécialité pour documenter un sujet et synthétiser ces données en vue de leur exploitation. Développer une argumentation avec esprit critique.',
  },
  {
    bloc: 'RNCP35475BC09',
    nom: 'Expression et communication écrites et orales',
    enonce:
      "Se servir aisément des différents registres d'expression écrite et orale de la langue française. Communiquer par oral et par écrit, de façon claire et non-ambiguë, dans au moins une langue étrangère.",
  },
  {
    bloc: 'RNCP35475BC10',
    nom: "Action en responsabilité au sein d'une organisation professionnelle",
    enonce:
      "Situer son rôle et sa mission au sein d'une organisation pour s'adapter et prendre des initiatives. Analyser ses actions en situation professionnelle, s'autoévaluer pour améliorer sa pratique. Prendre en compte des problématiques liées aux situations de handicap, à l'accessibilité et à la conception universelle.",
  },
  {
    bloc: 'RNCP35475BC11',
    nom: "Positionnement vis à vis d'un champ professionnel",
    enonce:
      "Identifier et situer les champs professionnels potentiellement en relation avec les acquis et la mention ainsi que les parcours possibles pour y accéder. Caractériser et valoriser son identité, ses compétences et son projet professionnel en fonction d'un contexte.",
  },
]

/**
 * Intitulés d'unité d'enseignement tels qu'ils figurent sur les relevés de notes
 * de l'IUT Lyon 1 (S1, S2 et S5 d'Enzo Saccone). Ils sont parfois tronqués sur le
 * document ; la version complète est donnée ici. Sert à montrer au jury que les
 * compétences citées sont bien celles de SON établissement.
 */
export const INTITULES_UE_LYON1 = {
  'c1-1': { ue: 'UE1-1 / UE2-1', libelle: 'BC1-N1 Développer des applications informatiques simples' },
  'c2-1': { ue: 'UE1-2 / UE2-2', libelle: 'BC2-N1 Appréhender et construire des algorithmes' },
  'c3-1': { ue: 'UE1-3 / UE2-3', libelle: 'BC3-N1 Installer et configurer un poste de travail' },
  'c4-1': { ue: 'UE1-4 / UE2-4', libelle: 'BC4-N1 Concevoir et mettre en place une base de données' },
  'c5-1': { ue: 'UE1-5', libelle: 'BC5-N1 Identifier les besoins métiers des clients et des utilisateurs' },
  'c6-1': { ue: 'UE1-6', libelle: 'BC6-N1 Identifier ses aptitudes pour travailler en équipe' },
  'c1-3': { ue: 'UE5-1', libelle: 'BC1-N3 Adapter des applications sur un ensemble de supports' },
  'c2-3': { ue: 'UE5-2', libelle: 'BC2-N3 Analyser et optimiser des applications' },
  'c6-3': { ue: 'UE5-6', libelle: 'BC6-N3 Manager une équipe informatique' },
}

export const parCompetence = Object.fromEntries(COMPETENCES.map((c) => [c.id, c]))

/** Retourne le libellé de niveau du référentiel pour une compétence + un niveau. */
export function intituleNiveau(competenceId, n) {
  const c = parCompetence[competenceId]
  if (!c) return null
  return c.niveaux.find((niv) => niv.n === Math.floor(n))?.intitule ?? null
}

/** Tous les apprentissages critiques d'une compétence, à plat, avec leur niveau. */
export function apprentissagesCritiques(competenceId) {
  const c = parCompetence[competenceId]
  if (!c) return []
  return c.niveaux.flatMap((niv) =>
    niv.ac.map((libelle) => ({ libelle, niveau: niv.n, horsParcours: !!niv.horsParcours })),
  )
}
