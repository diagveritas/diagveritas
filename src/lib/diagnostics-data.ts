import {
  Zap,
  Flame,
  ShieldAlert,
  Bug,
  Leaf,
  Ruler,
  Home,
  Droplets,
  FileText,
  type LucideIcon,
} from "lucide-react";

export interface Diagnostic {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  priceFrom: number;
  validity: string;
  obligation: string;
  description: string;
  details: string[];
  seoTitle: string;
  seoDescription: string;
  faq?: { q: string; a: string }[];
}

export const DIAGNOSTICS: Diagnostic[] = [
  {
    slug: "dpe",
    name: "DPE — Diagnostic de Performance Énergétique",
    short: "Classe énergie & climat de A à G, obligatoire pour toute vente ou location.",
    icon: Leaf,
    priceFrom: 99,
    validity: "10 ans",
    obligation: "Vente & location de tout logement",
    description:
      "Le DPE évalue la consommation d'énergie et l'impact climatique d'un logement. Il attribue deux étiquettes (énergie et GES) de A à G et doit figurer sur toute annonce immobilière.",
    details: [
      "Réalisé selon la méthode 3CL-DPE 2021 en vigueur",
      "Étiquettes énergie et GES obligatoires sur les annonces",
      "Recommandations de travaux d'amélioration chiffrées",
      "Validité : 10 ans (sauf DPE réalisés avant 2021)",
    ],
    seoTitle: "DPE Seine-Saint-Denis & Île-de-France — Diagnostic Performance Énergétique | DIAG VERITAS",
    seoDescription:
      "DPE certifié à Livry-Gargan, en Seine-Saint-Denis, Île-de-France et Oise. Diagnostiqueur certifié Bureau Veritas, résultats rapides, à partir de 99€.",
  },
  {
    slug: "amiante",
    name: "Diagnostic Amiante",
    short: "Repérage des matériaux contenant de l'amiante dans les biens construits avant 1997.",
    icon: ShieldAlert,
    priceFrom: 89,
    validity: "Illimitée si négatif",
    obligation: "Permis de construire antérieur au 1er juillet 1997",
    description:
      "Le diagnostic amiante identifie les matériaux et produits contenant de l'amiante afin de protéger les occupants et intervenants futurs.",
    details: [
      "Repérage visuel et prélèvements si nécessaires",
      "Rapport détaillé avec localisation et état de conservation",
      "Obligatoire pour toute vente de bien construit avant le 01/07/1997",
      "Validité illimitée en l'absence d'amiante",
    ],
    seoTitle: "Diagnostic Amiante Livry-Gargan & Île-de-France | DIAG VERITAS",
    seoDescription:
      "Repérage amiante avant vente ou travaux. Diagnostiqueur certifié à Livry-Gargan, intervention en Seine-Saint-Denis, Île-de-France et Oise. Devis rapide.",
  },
  {
    slug: "plomb",
    name: "CREP — Constat de Risque d'Exposition au Plomb",
    short: "Détection du plomb dans les peintures des logements antérieurs à 1949.",
    icon: Droplets,
    priceFrom: 99,
    validity: "1 an (vente) — 6 ans (location)",
    obligation: "Biens construits avant le 1er janvier 1949",
    description:
      "Le CREP identifie la présence de plomb dans les revêtements et peintures anciennes, un enjeu majeur de santé publique pour les enfants.",
    details: [
      "Mesure par appareil à fluorescence X",
      "Localisation précise des revêtements concernés",
      "Obligatoire pour tout bien construit avant 1949",
      "Validité 1 an en vente, 6 ans en location",
    ],
    seoTitle: "Diagnostic Plomb (CREP) Livry-Gargan & Île-de-France | DIAG VERITAS",
    seoDescription:
      "Constat de risque d'exposition au plomb (CREP) pour vente ou location. Diagnostiqueur certifié en Seine-Saint-Denis, Île-de-France et Oise.",
  },
  {
    slug: "electricite",
    name: "Diagnostic Électricité",
    short: "État de l'installation intérieure d'électricité de plus de 15 ans.",
    icon: Zap,
    priceFrom: 89,
    validity: "3 ans (vente) — 6 ans (location)",
    obligation: "Installations de plus de 15 ans",
    description:
      "Le diagnostic électricité vérifie la conformité et la sécurité de l'installation électrique intérieure, indispensable pour prévenir les risques d'accidents domestiques.",
    details: [
      "Vérification des 87 points de contrôle réglementaires",
      "Contrôle du dispositif différentiel, mise à la terre, protection contre les surintensités",
      "Rapport avec anomalies classées par ordre d'urgence",
      "Validité 3 ans en vente, 6 ans en location",
    ],
    seoTitle: "Diagnostic Électricité Livry-Gargan & Île-de-France | DIAG VERITAS",
    seoDescription:
      "Diagnostic électrique certifié pour vente et location. Intervention rapide à Livry-Gargan, en Seine-Saint-Denis, Île-de-France et Oise.",
  },
  {
    slug: "gaz",
    name: "Diagnostic Gaz",
    short: "État de l'installation intérieure de gaz de plus de 15 ans.",
    icon: Flame,
    priceFrom: 89,
    validity: "3 ans (vente) — 6 ans (location)",
    obligation: "Installations de plus de 15 ans",
    description:
      "Le diagnostic gaz évalue la sécurité de l'installation intérieure de gaz naturel. Il concerne la tuyauterie, la ventilation, le raccordement et les appareils.",
    details: [
      "Contrôle de l'étanchéité et de la ventilation",
      "Vérification des appareils raccordés",
      "Détection des anomalies présentant un danger grave et immédiat",
      "Validité 3 ans en vente, 6 ans en location",
    ],
    seoTitle: "Diagnostic Gaz Livry-Gargan & Île-de-France | DIAG VERITAS",
    seoDescription:
      "Diagnostic gaz certifié pour vente ou location. Diagnostiqueur immobilier à Livry-Gargan, intervention en Seine-Saint-Denis, Île-de-France et Oise.",
  },
  {
    slug: "termites",
    name: "Diagnostic Termites & États Parasitaires",
    short: "Détection de la présence de termites dans les zones à risque.",
    icon: Bug,
    priceFrom: 99,
    validity: "6 mois",
    obligation: "Zones délimitées par arrêté préfectoral",
    description:
      "Ce diagnostic identifie la présence éventuelle de termites et autres agents biologiques de dégradation du bois. Obligatoire dans les zones classées à risque.",
    details: [
      "Examen visuel de l'ensemble des bois et matériaux",
      "Sondage manuel non destructif",
      "Rapport détaillé conforme à la norme NF P 03-201",
      "Validité 6 mois",
    ],
    seoTitle: "Diagnostic Termites Île-de-France & Oise | DIAG VERITAS",
    seoDescription:
      "Diagnostic termites en zone préfectorale à risque. Intervention à Livry-Gargan, en Seine-Saint-Denis, Île-de-France et Oise. Diagnostiqueur certifié.",
  },
  {
    slug: "erp",
    name: "ERP — État des Risques et Pollutions",
    short: "Information sur les risques naturels, miniers, technologiques et pollution des sols.",
    icon: FileText,
    priceFrom: 25,
    validity: "6 mois",
    obligation: "Tous biens en zone à risque définie par arrêté",
    description:
      "L'ERP informe l'acquéreur ou le locataire de l'exposition du bien aux risques naturels, miniers, technologiques, sismiques, radon et pollution des sols.",
    details: [
      "Recensement des risques référencés au niveau communal",
      "Documents officiels de la préfecture consultés",
      "Obligatoire dans toutes les communes concernées",
      "Validité 6 mois",
    ],
    seoTitle: "ERP — État des Risques et Pollutions Île-de-France & Oise | DIAG VERITAS",
    seoDescription:
      "État des Risques et Pollutions (ERP) réalisé rapidement pour vente ou location. Intervention en Seine-Saint-Denis, Île-de-France et Oise.",
  },
  {
    slug: "loi-boutin",
    name: "Surface habitable — Loi Boutin",
    short: "Mesurage de la surface habitable obligatoire pour toute location de logement vide.",
    icon: Home,
    priceFrom: 79,
    validity: "Illimitée sans travaux",
    obligation: "Location non meublée à titre de résidence principale",
    description:
      "La Loi Boutin impose de mentionner la surface habitable dans les baux d'habitation vide. Un mesurage précis vous protège en cas de litige.",
    details: [
      "Mesurage selon l'article R.111-2 du CCH",
      "Exclusion des combles non aménagés, sous-sols, terrasses",
      "Attestation détaillée pièce par pièce",
      "Validité illimitée sans travaux modifiant la surface",
    ],
    seoTitle: "Loi Boutin — Surface habitable Livry-Gargan & Île-de-France | DIAG VERITAS",
    seoDescription:
      "Mesurage Loi Boutin pour location non meublée. Diagnostiqueur immobilier certifié à Livry-Gargan, Seine-Saint-Denis, Île-de-France et Oise.",
  },
  {
    slug: "loi-carrez",
    name: "Surface privative — Loi Carrez",
    short: "Mesurage de la surface privative obligatoire pour la vente en copropriété.",
    icon: Ruler,
    priceFrom: 79,
    validity: "Illimitée sans travaux",
    obligation: "Vente d'un lot en copropriété",
    description:
      "La Loi Carrez impose de mentionner la surface privative dans tout acte de vente d'un lot de copropriété. Une erreur supérieure à 5% permet à l'acquéreur d'exiger une baisse de prix.",
    details: [
      "Mesurage précis conforme à la Loi n°96-1107",
      "Exclusion des surfaces d'une hauteur inférieure à 1,80 m",
      "Attestation opposable en cas de litige",
      "Validité illimitée sans travaux modifiant la surface",
    ],
    seoTitle: "Loi Carrez — Surface privative Livry-Gargan & Île-de-France | DIAG VERITAS",
    seoDescription:
      "Mesurage Loi Carrez pour vente en copropriété. Diagnostiqueur certifié Bureau Veritas à Livry-Gargan, Seine-Saint-Denis, Île-de-France et Oise.",
  },
  {
    slug: "pppt",
    name: "PPPT — Projet de Plan Pluriannuel de Travaux",
    short: "Plan de travaux obligatoire pour les copropriétés de plus de 15 ans (loi Climat & Résilience).",
    icon: FileText,
    priceFrom: 690,
    validity: "10 ans (mise à jour tous les 10 ans)",
    obligation: "Copropriétés à usage partiel ou total d'habitation de plus de 15 ans",
    description:
      "Le PPPT identifie les travaux nécessaires à la sauvegarde de l'immeuble et à l'amélioration de sa performance énergétique sur les 10 années à venir. Il est obligatoire depuis la loi Climat & Résilience selon un calendrier lié à la taille de la copropriété.",
    details: [
      "Analyse du bâti, des équipements et des consommations",
      "Liste hiérarchisée des travaux sur 10 ans avec estimation budgétaire",
      "Échéancier de mise en œuvre et priorisation énergétique",
      "Vote en assemblée générale des copropriétaires",
    ],
    seoTitle: "PPPT copropriété Île-de-France & Oise — Plan Pluriannuel de Travaux | DIAG VERITAS",
    seoDescription:
      "PPPT loi Climat & Résilience pour votre copropriété. Diagnostiqueur certifié à Livry-Gargan, intervention Seine-Saint-Denis, Île-de-France et Oise. Devis rapide.",
  },
  {
    slug: "dtg",
    name: "DTG — Diagnostic Technique Global",
    short: "Analyse complète de l'état d'un immeuble en copropriété, obligatoire dans plusieurs cas.",
    icon: FileText,
    priceFrom: 990,
    validity: "10 ans",
    obligation: "Immeubles > 10 ans mis en copropriété, ou sur vote AG",
    description:
      "Le DTG évalue l'état apparent des parties communes, la situation du syndicat, les obligations réglementaires et fournit un plan pluriannuel de travaux. Il éclaire les copropriétaires sur la santé technique et financière de leur immeuble.",
    details: [
      "État apparent des parties communes et équipements",
      "Analyse des améliorations possibles de gestion technique",
      "Diagnostic de performance énergétique de l'immeuble",
      "Évaluation des travaux à prévoir dans les 10 ans",
    ],
    seoTitle: "DTG — Diagnostic Technique Global copropriété | DIAG VERITAS Île-de-France",
    seoDescription:
      "DTG pour copropriété en Île-de-France et Oise : analyse complète du bâti, équipements et travaux à prévoir. Diagnostiqueur certifié Bureau Veritas.",
  },
  {
    slug: "dpe-immeuble",
    name: "DPE Immeuble — Diagnostic collectif",
    short: "DPE à l'échelle d'un immeuble entier — obligatoire pour toutes les copropriétés selon échéancier.",
    icon: Leaf,
    priceFrom: 490,
    validity: "10 ans",
    obligation: "Copropriétés à usage principal d'habitation (calendrier loi Climat)",
    description:
      "Le DPE collectif évalue la performance énergétique de l'immeuble entier. Il est obligatoire pour toutes les copropriétés selon un calendrier progressif (2024 : > 200 lots, 2025 : 50 à 200 lots, 2026 : < 50 lots).",
    details: [
      "Méthode 3CL-DPE 2021 appliquée à l'ensemble du bâtiment",
      "Étiquettes énergie et GES de l'immeuble collectif",
      "Recommandations de travaux à l'échelle de la copropriété",
      "Base indispensable au PPPT et au plan de rénovation",
    ],
    seoTitle: "DPE Immeuble collectif copropriété | DIAG VERITAS Île-de-France & Oise",
    seoDescription:
      "DPE collectif obligatoire pour copropriétés en Île-de-France et Oise. Diagnostiqueur certifié Bureau Veritas — méthode 3CL-DPE 2021, rapport rapide.",
  },
  {
    slug: "amiante-avant-travaux",
    name: "RAAT — Repérage Amiante Avant Travaux",
    short: "Repérage amiante obligatoire avant tous travaux sur immeuble bâti (permis avant 07/1997).",
    icon: ShieldAlert,
    priceFrom: 350,
    validity: "Réalisé avant chaque intervention",
    obligation: "Tous travaux sur bâti antérieur au 1er juillet 1997",
    description:
      "Le Repérage Amiante Avant Travaux (RAAT) est imposé par le Code du travail (article R.4412-97) et la norme NF X 46-020. Il protège les travailleurs intervenant sur un bâtiment susceptible de contenir de l'amiante, sous peine de sanctions pénales pour le donneur d'ordre.",
    details: [
      "Repérage conforme à la norme NF X 46-020",
      "Prélèvements et analyses en laboratoire COFRAC",
      "Rapport avec cartographie et localisation précise des MPCA",
      "Obligatoire avant toute rénovation, désamiantage ou intervention",
    ],
    seoTitle: "RAAT — Repérage Amiante Avant Travaux Île-de-France | DIAG VERITAS",
    seoDescription:
      "Repérage Amiante Avant Travaux (RAAT) certifié en Île-de-France et Oise. Norme NF X 46-020, laboratoire COFRAC, rapport rapide. Devis gratuit.",
  },
  {
    slug: "amiante-avant-demolition",
    name: "RAAD — Repérage Amiante Avant Démolition",
    short: "Repérage exhaustif imposé avant toute démolition — le plus complet des diagnostics amiante.",
    icon: ShieldAlert,
    priceFrom: 550,
    validity: "Réalisé avant chaque démolition",
    obligation: "Toute démolition de bâtiment antérieur au 1er juillet 1997",
    description:
      "Le RAAD est un repérage exhaustif et destructif de l'ensemble des matériaux susceptibles de contenir de l'amiante avant démolition. Il est encadré par le Code du travail et la norme NF X 46-020, et engage la responsabilité pénale du maître d'ouvrage.",
    details: [
      "Repérage exhaustif de tous les MPCA (listes A, B et C)",
      "Sondages destructifs autorisés",
      "Prélèvements analysés en laboratoire COFRAC",
      "Rapport détaillé nécessaire au dossier de démolition",
    ],
    seoTitle: "RAAD — Repérage Amiante Avant Démolition Île-de-France | DIAG VERITAS",
    seoDescription:
      "Repérage Amiante Avant Démolition (RAAD) certifié en Île-de-France et Oise. Norme NF X 46-020, exhaustif, rapport conforme. Devis rapide.",
  },
];

export const CONTACT = {
  phone: "06 72 29 73 62",
  phoneRaw: "+33672297362",
  email: "contact.diagveritas@gmail.com",
  address: "14 rue Eugène Massé",
  postalCode: "93190",
  city: "Livry-Gargan",
  hours: "Lun — Sam : 8h — 19h",
};

export const DIAGNOSTIC_FAQ: Record<string, { q: string; a: string }[]> = {
  dpe: [
    { q: "Combien de temps est valable un DPE ?", a: "Un DPE réalisé selon la méthode 3CL-DPE 2021 est valable 10 ans. Les DPE réalisés entre 2013 et 2017 ont expiré le 31/12/2022, et ceux de 2018 à mi-2021 expirent le 31/12/2024." },
    { q: "Le DPE est-il obligatoire pour une location ?", a: "Oui. Depuis 2023, les logements classés G+ sont interdits à la location, G en 2025, F en 2028, E en 2034. Le DPE doit être affiché dès l'annonce, sous peine d'amende." },
    { q: "Quelle différence entre le DPE et l'audit énergétique ?", a: "Le DPE est un état des lieux, l'audit énergétique (obligatoire pour la vente d'un F ou G depuis 2023) propose plusieurs scénarios chiffrés de travaux permettant d'atteindre la classe B." },
    { q: "Le DPE peut-il être contesté ?", a: "Oui. Le DPE est opposable depuis juillet 2021 : l'acquéreur ou le locataire peut engager la responsabilité du vendeur, du bailleur ou du diagnostiqueur en cas d'erreur." },
    { q: "Faut-il un DPE pour une maison neuve ?", a: "Oui, systématiquement lors de la réception de travaux d'un logement neuf et lors de toute vente ou location ultérieure." },
    { q: "Combien coûte un DPE avec DIAG VERITAS ?", a: "À partir de 99€ TTC pour un appartement standard. Le tarif dépend de la surface, du type de bien et du groupement de diagnostics — devis ferme sous 24h." },
  ],
  amiante: [
    { q: "Quels biens sont concernés par le diagnostic amiante ?", a: "Tout bien dont le permis de construire a été délivré avant le 1er juillet 1997, en cas de vente. Pour la location, seul le DAPP (Dossier Amiante Parties Privatives) est requis." },
    { q: "Que se passe-t-il si de l'amiante est détecté ?", a: "Le rapport précise l'état de conservation (score 1, 2 ou 3). Un score 3 impose des travaux de retrait ou de confinement dans un délai réglementé." },
    { q: "Quelle est la validité du diagnostic amiante ?", a: "Illimitée si le rapport conclut à l'absence d'amiante (rapports postérieurs à 2013). Pour les rapports antérieurs, un nouveau diagnostic est exigé." },
    { q: "Le diagnostic amiante inclut-il des prélèvements ?", a: "Oui si des matériaux suspects sont identifiés visuellement. Les prélèvements sont analysés en laboratoire COFRAC accrédité." },
    { q: "Différence entre DAPP, DTA, RAAT et RAAD ?", a: "DAPP = parties privatives (location). DTA = parties communes (immeubles collectifs). RAAT = avant travaux. RAAD = avant démolition, le plus exhaustif." },
    { q: "Combien coûte un diagnostic amiante ?", a: "À partir de 89€ TTC. Coût d'analyse en laboratoire en sus si prélèvements nécessaires (30 à 80€ par échantillon)." },
  ],
  plomb: [
    { q: "Quels biens nécessitent un CREP ?", a: "Tous les logements construits avant le 1er janvier 1949, en cas de vente ou de location — indépendamment de la présence supposée ou avérée de plomb." },
    { q: "Comment se déroule un diagnostic plomb ?", a: "Le diagnostiqueur utilise un appareil à fluorescence X pour mesurer la concentration de plomb dans chaque revêtement. La mesure est non destructive et sans danger." },
    { q: "Quelle est la durée de validité du CREP ?", a: "1 an en cas de vente, 6 ans en cas de location, si la présence de plomb est constatée. Illimitée si le rapport conclut à l'absence de plomb (< 1 mg/cm²)." },
    { q: "Que faire en cas de plomb détecté ?", a: "Le propriétaire doit informer les occupants et engager des travaux si l'état est dégradé (risque d'ingestion pour les enfants). L'obligation de travaux dépend du classement des unités de diagnostic." },
    { q: "Le CREP est-il obligatoire pour les parties communes ?", a: "Oui pour les immeubles collectifs d'avant 1949 : le syndic doit faire réaliser un CREP des parties communes (couloirs, cages d'escaliers)." },
    { q: "Combien coûte un diagnostic plomb ?", a: "À partir de 99€ TTC pour un appartement standard. Tarif dépendant du nombre de pièces et de la surface — devis rapide." },
  ],
  electricite: [
    { q: "Quand le diagnostic électricité est-il obligatoire ?", a: "Pour toute vente ou location d'un logement dont l'installation électrique a plus de 15 ans." },
    { q: "Quels points sont contrôlés ?", a: "87 points réglementaires : présence d'un disjoncteur différentiel 30 mA, prise de terre, protection contre les surintensités, matériel vétuste, adaptation à l'usage." },
    { q: "Que faire en cas d'anomalie ?", a: "Aucune obligation légale de travaux pour une vente ou une location, mais les anomalies sont opposables. Les anomalies avec danger grave et immédiat doivent être signalées." },
    { q: "Quelle est la validité du diagnostic électrique ?", a: "3 ans pour une vente, 6 ans pour une location." },
    { q: "Le diagnostic électrique est-il destructif ?", a: "Non. Il s'agit d'un contrôle visuel et fonctionnel, sans démontage ni ouverture des équipements sous tension." },
    { q: "Combien coûte le diagnostic électricité ?", a: "À partir de 89€ TTC. Regroupé avec le diagnostic gaz, le tarif est optimisé (pack élec + gaz)." },
  ],
  gaz: [
    { q: "Le diagnostic gaz est-il obligatoire pour toutes les énergies ?", a: "Non, uniquement pour les installations de gaz naturel (canalisé) de plus de 15 ans. Pas de diagnostic obligatoire pour le propane en citerne." },
    { q: "Que contrôle le diagnostic gaz ?", a: "L'état des tuyauteries fixes, du raccordement des appareils, de la ventilation des locaux et du bon fonctionnement des appareils raccordés." },
    { q: "Une anomalie oblige-t-elle à des travaux ?", a: "Une anomalie DGI (danger grave et immédiat) entraîne la coupure immédiate du gaz par GRDF. Les autres anomalies sont opposables mais sans obligation de travaux." },
    { q: "Combien de temps est valable le diagnostic gaz ?", a: "3 ans en vente, 6 ans en location." },
    { q: "Comment se prépare la visite ?", a: "Assurez l'accès à la chaudière, aux tuyauteries apparentes et à la ventilation. Prévoir 30 à 45 minutes en moyenne." },
    { q: "Combien coûte le diagnostic gaz ?", a: "À partir de 89€ TTC. Pack DPE + électricité + gaz à tarif préférentiel — devis rapide." },
  ],
  termites: [
    { q: "Ma commune est-elle en zone termites ?", a: "En Île-de-France, de nombreuses communes du 93, 77 et 94 sont classées par arrêté préfectoral (dont Livry-Gargan, Sevran, Aulnay, Montfermeil, Bondy). Nous vérifions systématiquement l'arrêté en vigueur." },
    { q: "Que faire si des termites sont détectés ?", a: "Une déclaration en mairie est obligatoire sous 1 mois. Le traitement doit être réalisé par une entreprise spécialisée." },
    { q: "Combien de temps est valable le diagnostic termites ?", a: "6 mois seulement — attention à la temporalité entre compromis et acte authentique." },
    { q: "Le diagnostic termites inclut-il tous les insectes xylophages ?", a: "Non. Il concerne uniquement les termites. Les capricornes, vrillettes, lyctus font l'objet d'un état parasitaire complémentaire (souvent proposé en pack)." },
    { q: "Le diagnostic est-il destructif ?", a: "Non, il est basé sur un examen visuel et un sondage manuel non destructif des bois accessibles." },
    { q: "Combien coûte un diagnostic termites ?", a: "À partir de 99€ TTC pour un appartement, davantage pour une maison — devis ferme sous 24h." },
  ],
  erp: [
    { q: "L'ERP est-il obligatoire partout ?", a: "Oui pour toute vente ou location dans une commune concernée par un PPRN, PPRT, PPRM, zone de sismicité, potentiel radon ou pollution des sols — pratiquement toutes les communes IDF et Oise." },
    { q: "Quelle est la validité de l'ERP ?", a: "6 mois seulement — l'ERP doit être annexé à la promesse de vente et à l'acte authentique." },
    { q: "Puis-je réaliser l'ERP moi-même ?", a: "Techniquement oui, mais toute erreur ou omission engage votre responsabilité. Notre ERP est réalisé sur la base des arrêtés préfectoraux et communaux actualisés." },
    { q: "L'ERP couvre-t-il le radon ?", a: "Oui, le radon fait partie des risques à mentionner depuis 2018 pour les communes en zone à potentiel radon de niveau 3." },
    { q: "Que contient concrètement le rapport ?", a: "Une fiche synthétique reprenant les risques référencés au niveau communal + copies des arrêtés + plans de zonage." },
    { q: "Combien coûte un ERP ?", a: "À partir de 25€ TTC — souvent offert dans nos packs de diagnostics." },
  ],
  "loi-boutin": [
    { q: "Quand la Loi Boutin s'applique-t-elle ?", a: "Pour toute location vide (non meublée) à titre de résidence principale. Elle ne s'applique pas aux meublés (Loi ALUR / surface habitable au sens Carrez adaptée)." },
    { q: "Différence entre Loi Boutin et Loi Carrez ?", a: "Boutin = surface habitable (habitable au sens du Code de la construction) pour la location. Carrez = surface privative (avec certaines annexes) pour la vente en copropriété." },
    { q: "Une erreur de mesure entraîne-t-elle une sanction ?", a: "Une erreur > 5% permet au locataire de demander une réduction de loyer proportionnelle pendant toute la durée du bail." },
    { q: "Quels espaces sont exclus ?", a: "Combles non aménagés, caves, sous-sols, remises, garages, terrasses, balcons, loggias, parties d'une hauteur < 1,80 m." },
    { q: "La Loi Boutin est-elle valable à vie ?", a: "Oui, tant qu'aucun travaux ne modifie la surface habitable du logement." },
    { q: "Combien coûte un mesurage Loi Boutin ?", a: "À partir de 79€ TTC. Souvent groupé avec le DPE pour une location." },
  ],
  "loi-carrez": [
    { q: "Quels biens sont concernés par la Loi Carrez ?", a: "Uniquement les lots en copropriété d'une surface d'au moins 8 m². Les maisons individuelles ne sont pas concernées." },
    { q: "Que se passe-t-il en cas d'erreur de surface ?", a: "Une erreur supérieure à 5% permet à l'acquéreur d'exiger une baisse de prix proportionnelle dans l'année suivant l'acte authentique." },
    { q: "Quels espaces compte-t-on en Loi Carrez ?", a: "Toutes les surfaces closes et couvertes d'une hauteur ≥ 1,80 m, hors caves, garages, balcons, terrasses, sous-sols et combles non aménagés." },
    { q: "Quelle est la validité de la Loi Carrez ?", a: "Illimitée, tant qu'aucun travaux ne modifie la surface." },
    { q: "Puis-je faire le mesurage moi-même ?", a: "Oui, mais votre responsabilité est engagée. Un mesurage réalisé par un diagnostiqueur certifié est opposable." },
    { q: "Combien coûte un mesurage Loi Carrez ?", a: "À partir de 79€ TTC, souvent inclus dans nos packs vente." },
  ],
  pppt: [
    { q: "Quelles copropriétés sont concernées ?", a: "Toutes les copropriétés à usage partiel ou total d'habitation de plus de 15 ans, selon calendrier : > 200 lots depuis 2023, 51-200 lots depuis 2024, ≤ 50 lots depuis 2025." },
    { q: "Quelle est la différence entre PPPT et DTG ?", a: "Le DTG est un audit technique global. Le PPPT est plus opérationnel : liste hiérarchisée et chiffrée des travaux sur 10 ans, votée en AG." },
    { q: "Le PPPT est-il obligatoire ou facultatif ?", a: "Obligatoire au titre de la loi Climat & Résilience du 22 août 2021. Il doit être présenté en AG et actualisé tous les 10 ans." },
    { q: "Qui peut réaliser un PPPT ?", a: "Un diagnostiqueur, un bureau d'études ou un architecte qualifié. DIAG VERITAS dispose des certifications nécessaires." },
    { q: "Que contient le PPPT ?", a: "État du bâti, analyse énergétique (DPE collectif), liste des travaux nécessaires sur 10 ans hiérarchisés, estimation budgétaire, calendrier." },
    { q: "Combien coûte un PPPT ?", a: "À partir de 690€ TTC, selon la taille de la copropriété et la complexité — devis sur mesure." },
  ],
  dtg: [
    { q: "Quand le DTG est-il obligatoire ?", a: "Pour les immeubles de plus de 10 ans mis en copropriété, et pour les copropriétés faisant l'objet d'une procédure pour insalubrité. Facultatif sur vote de l'AG." },
    { q: "Que contient un DTG ?", a: "État apparent des parties communes, situation du syndicat, analyse des améliorations, DPE de l'immeuble et plan pluriannuel de travaux." },
    { q: "Quelle différence entre DTG et audit global ?", a: "Le DTG est encadré par la loi ALUR et normé. L'audit global est plus libre et peut être plus poussé selon le prestataire." },
    { q: "Le DTG est-il opposable ?", a: "Il engage la responsabilité du prestataire et sert de base à l'information des futurs acquéreurs." },
    { q: "Quelle est sa validité ?", a: "10 ans, ou jusqu'à la réalisation de travaux majeurs modifiant l'état de l'immeuble." },
    { q: "Combien coûte un DTG ?", a: "À partir de 990€ TTC, selon la taille de la copropriété — devis sur mesure." },
  ],
  "dpe-immeuble": [
    { q: "Toutes les copropriétés doivent-elles réaliser un DPE collectif ?", a: "Oui, selon calendrier progressif : > 200 lots depuis 2024, 51-200 lots en 2025, ≤ 50 lots en 2026." },
    { q: "DPE collectif ou DPE individuel ?", a: "Le DPE collectif porte sur l'ensemble de l'immeuble. Les DPE individuels par logement restent obligatoires pour vente/location de chaque lot." },
    { q: "Peut-on utiliser le DPE collectif pour un lot ?", a: "Oui, sous conditions strictes (bâtiment homogène), un DPE individuel peut être généré à partir du DPE collectif — c'est un des grands avantages du dispositif." },
    { q: "Combien coûte un DPE collectif ?", a: "À partir de 490€ TTC pour une petite copropriété, jusqu'à plusieurs milliers d'euros selon la taille et le nombre de bâtiments." },
    { q: "Le DPE immeuble impose-t-il des travaux ?", a: "Non directement, mais il alimente le PPPT et le plan pluriannuel de rénovation énergétique." },
    { q: "Combien de temps est-il valable ?", a: "10 ans, sauf travaux d'amélioration significatifs." },
  ],
  "amiante-avant-travaux": [
    { q: "Qui est responsable du RAAT ?", a: "Le donneur d'ordre (maître d'ouvrage) est responsable. À défaut de RAAT, sa responsabilité pénale est engagée en cas d'exposition des travailleurs." },
    { q: "Quels travaux nécessitent un RAAT ?", a: "Tous les travaux sur bâtiment antérieur au 01/07/1997 : rénovation, réhabilitation, percement, dépose d'éléments, désamiantage." },
    { q: "Le RAAT est-il différent du DTA ou du DAPP ?", a: "Oui. Le DTA / DAPP couvre la vente ou la location ; le RAAT est spécifique aux travaux et beaucoup plus détaillé (sondages destructifs possibles)." },
    { q: "Quelle norme s'applique ?", a: "NF X 46-020 (bâti) — norme en vigueur pour tous les repérages amiante avant travaux et démolition." },
    { q: "Combien de temps est valable un RAAT ?", a: "Il est spécifique à chaque intervention : un nouveau RAAT est requis pour chaque projet de travaux." },
    { q: "Combien coûte un RAAT ?", a: "À partir de 350€ TTC. Le tarif final dépend de la surface, du nombre de zones et des prélèvements." },
  ],
  "amiante-avant-demolition": [
    { q: "Qu'est-ce qui distingue le RAAD des autres repérages ?", a: "C'est le repérage le plus exhaustif. Il inclut la liste C (matériaux inaccessibles), avec sondages destructifs autorisés partout dans le bâtiment." },
    { q: "Est-il obligatoire pour toute démolition ?", a: "Oui, pour tout bâtiment antérieur au 1er juillet 1997. Sans RAAD, la démolition est illégale et le maître d'ouvrage engage sa responsabilité pénale." },
    { q: "Quels documents fournit-on à la fin ?", a: "Rapport complet avec cartographie, résultats d'analyses COFRAC, quantitatifs et recommandations pour le retrait." },
    { q: "Combien de temps le RAAD est-il valable ?", a: "Il est réalisé spécifiquement avant chaque démolition et n'a pas de durée de validité classique." },
    { q: "Peut-on démolir sans amiante détecté ?", a: "Si le RAAD conclut à l'absence d'amiante, la démolition peut se poursuivre dans le cadre du droit commun." },
    { q: "Combien coûte un RAAD ?", a: "À partir de 550€ TTC, selon la surface et la complexité du bâtiment — devis sur mesure." },
  ],
};