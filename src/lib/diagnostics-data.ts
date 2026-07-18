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