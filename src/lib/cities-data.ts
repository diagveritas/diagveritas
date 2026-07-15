import { CONTACT } from "./diagnostics-data";

export interface City {
  slug: string;
  name: string;
  postalCode: string;
  department: string;
  departmentCode: string;
  distanceKm: number;
  population: string;
  intro: string;
  context: string;
  neighborhoods: string[];
  properties: string;
  focus: string;
}

export const CITIES: City[] = [
  {
    slug: "livry-gargan",
    name: "Livry-Gargan",
    postalCode: "93190",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 0,
    population: "44 000 habitants",
    intro:
      "Basé au cœur de Livry-Gargan, DIAG VERITAS est votre diagnostiqueur immobilier de proximité. Certifié Bureau Veritas, notre cabinet intervient sur toute la commune sous 48h pour vos ventes, locations et travaux.",
    context:
      "Livry-Gargan est notre ville d'implantation. Nous connaissons parfaitement le parc immobilier local : pavillons meulière du début du XXᵉ siècle du centre-ville, immeubles collectifs autour de la mairie et du RER Gargan, lotissements pavillonnaires de l'Abbaye et de Danton, résidences plus récentes de Poudrerie. Cette proximité nous permet de proposer des interventions ultra-rapides et un tarif sans surcoût de déplacement.",
    neighborhoods: ["Centre-ville", "Danton", "Poudrerie", "Gargan", "L'Abbaye", "Jacob"],
    properties:
      "Pavillons en meulière, maisons de ville, appartements en copropriété et petits collectifs — tous concernés par le DPE, le diagnostic électrique et l'ERP.",
    focus:
      "Livry-Gargan est en zone préfectorale termites : ce diagnostic est obligatoire pour toute vente. Nous le réalisons systématiquement en pack pour éviter les allers-retours.",
  },
  {
    slug: "le-raincy",
    name: "Le Raincy",
    postalCode: "93340",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 3,
    population: "14 500 habitants",
    intro:
      "Diagnostiqueur immobilier certifié au Raincy : DIAG VERITAS intervient sous 48h sur toute la commune pour vos ventes et locations. Tarifs transparents, rapports fiables, expérience du bâti raincéen.",
    context:
      "Le Raincy se distingue par ses hôtels particuliers, ses villas d'architecte et son bâti souvent antérieur à 1949 — ce qui déclenche systématiquement le CREP (plomb). De nombreuses toitures et bâtiments d'origine peuvent également contenir de l'amiante (permis antérieurs au 01/07/1997). Notre expertise du quartier de la gare, de l'avenue de la Résistance et des rues résidentielles nous permet de réaliser un diagnostic précis et complet.",
    neighborhoods: ["Centre — Église Notre-Dame", "Gare RER", "Plateau", "Fauvettes"],
    properties:
      "Villas anciennes, maisons bourgeoises, hôtels particuliers, quelques copropriétés récentes — bâti à forte valeur nécessitant un diagnostic irréprochable.",
    focus:
      "Vu l'ancienneté du bâti raincéen, le DPE, le CREP plomb et le diagnostic amiante sont quasi systématiques pour une vente.",
  },
  {
    slug: "les-pavillons-sous-bois",
    name: "Les Pavillons-sous-Bois",
    postalCode: "93320",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 2,
    population: "23 500 habitants",
    intro:
      "DIAG VERITAS, votre diagnostiqueur immobilier aux Pavillons-sous-Bois. Diagnostics certifiés Bureau Veritas, intervention rapide sur toute la commune, à quelques minutes de Livry-Gargan.",
    context:
      "Les Pavillons-sous-Bois est une commune limitrophe de Livry-Gargan, ce qui nous permet d'intervenir dans la journée. La ville est caractérisée par un tissu pavillonnaire dense, quelques copropriétés autour de la gare et du canal de l'Ourcq. Nombre de biens ont plus de 15 ans : le diagnostic électrique et le diagnostic gaz sont donc courants.",
    neighborhoods: ["Centre-ville", "Gare", "Bords de canal", "Foch"],
    properties:
      "Pavillons de banlieue, petites copropriétés, maisons de ville — parc largement concerné par le DPE, l'électricité et l'ERP.",
    focus:
      "Zone termites : ne négligez pas ce diagnostic obligatoire pour toute mutation.",
  },
  {
    slug: "bondy",
    name: "Bondy",
    postalCode: "93140",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 4,
    population: "55 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Bondy : DIAG VERITAS réalise DPE, amiante, plomb, électricité, gaz, ERP et Loi Carrez pour vos ventes et locations. Rapport rapide, tarif fixe.",
    context:
      "Bondy présente un parc immobilier mixte : centre ancien autour de la mairie et du canal, grands ensembles résidentiels, pavillons du Nord et copropriétés récentes. Sur les biens en copropriété, la Loi Carrez est incontournable ; sur les logements avant 1949, le CREP plomb est obligatoire. Notre proximité (4 km depuis Livry-Gargan) garantit une intervention rapide.",
    neighborhoods: ["Centre-ville", "Bondy Nord", "Mainguy", "Noue Caillet"],
    properties:
      "Immeubles en copropriété, résidences récentes, pavillons — Loi Carrez, DPE et ERP quasi systématiques.",
    focus:
      "Pour les ventes en copropriété, DIAG VERITAS regroupe DPE + Loi Carrez + ERP + électricité en un seul rendez-vous.",
  },
  {
    slug: "aulnay-sous-bois",
    name: "Aulnay-sous-Bois",
    postalCode: "93600",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 5,
    population: "89 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Aulnay-sous-Bois. Interventions DPE, amiante, plomb, gaz, électricité, termites et ERP sous 48h, à tarifs transparents.",
    context:
      "Aulnay-sous-Bois est une des plus grandes villes de Seine-Saint-Denis, au parc immobilier très varié : quartier pavillonnaire du Vieux-Pays et de Nonneville, grands ensembles de la Rose des Vents, résidences plus récentes du Gros Saule. Nombre d'immeubles collectifs datent des années 1960-70 : le diagnostic amiante et le DPE sont incontournables.",
    neighborhoods: ["Vieux-Pays", "Nonneville", "Rose des Vents", "Gros Saule", "Chanteloup"],
    properties:
      "Pavillons, grands ensembles, copropriétés récentes, maisons de ville — tout le bâti est couvert.",
    focus:
      "Sur les copropriétés d'avant 1997, prévoyez systématiquement le repérage amiante avant vente.",
  },
  {
    slug: "tremblay-en-france",
    name: "Tremblay-en-France",
    postalCode: "93290",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 10,
    population: "36 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Tremblay-en-France : DIAG VERITAS se déplace sous 48h pour vos diagnostics obligatoires (DPE, amiante, plomb, électricité, gaz, termites, ERP).",
    context:
      "Tremblay-en-France regroupe un centre-ville ancien (Vieux-Pays), des lotissements pavillonnaires (Cottages, Vert-Galant) et de grandes copropriétés récentes. La proximité de l'aéroport Paris-CDG et des zones d'activité génère une forte demande de diagnostics pour biens locatifs — DPE et Loi Boutin sont notre quotidien sur la commune.",
    neighborhoods: ["Vieux-Pays", "Vert-Galant", "Cottages", "Cité-Jardin", "Grand-Ensemble"],
    properties:
      "Pavillons, résidences, grands ensembles récents et logements locatifs — DPE, Loi Boutin et électricité en priorité.",
    focus:
      "Nous proposons un pack location complet (DPE + ERP + Loi Boutin + électricité + gaz) à tarif préférentiel.",
  },
  {
    slug: "villeparisis",
    name: "Villeparisis",
    postalCode: "77270",
    department: "Seine-et-Marne",
    departmentCode: "77",
    distanceKm: 8,
    population: "26 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier à Villeparisis (77). DPE, amiante, plomb, gaz, électricité, ERP, Loi Boutin et Loi Carrez — rapports rapides et certifiés.",
    context:
      "Villeparisis est une commune résidentielle de Seine-et-Marne, à la frontière du 93. Le tissu urbain associe pavillons individuels, petits collectifs et copropriétés autour de la gare RER. Le diagnostic électrique et le DPE sont particulièrement demandés sur ce marché familial dynamique.",
    neighborhoods: ["Centre-ville", "Gare", "Petit Parc", "Norville"],
    properties:
      "Maisons individuelles, petits collectifs et copropriétés — DPE, électricité et Loi Carrez récurrents.",
    focus:
      "Vente en copropriété : nous groupons DPE + Loi Carrez + ERP + électricité pour éviter les frais additionnels.",
  },
  {
    slug: "chelles",
    name: "Chelles",
    postalCode: "77500",
    department: "Seine-et-Marne",
    departmentCode: "77",
    distanceKm: 6,
    population: "55 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Chelles (77) : DIAG VERITAS réalise l'ensemble des diagnostics obligatoires vente et location, avec intervention sous 48h.",
    context:
      "Chelles est l'une des plus grandes villes de Seine-et-Marne. Le parc immobilier est très hétérogène : centre historique autour de l'abbaye, quartier pavillonnaire des Coudreaux, grands ensembles de la Grande Prairie, résidences modernes du Mont-Chalâts. La proximité (6 km de Livry-Gargan) permet des interventions dans la journée.",
    neighborhoods: ["Centre — Abbaye", "Coudreaux", "Mont-Chalâts", "Grande Prairie", "Aulnoy"],
    properties:
      "Maisons anciennes, pavillons, copropriétés modernes — bâti souvent antérieur à 1997 nécessitant l'amiante.",
    focus:
      "Pour les biens du centre historique, prévoyez plomb (CREP) et amiante avant toute mise en vente.",
  },
  {
    slug: "sevran",
    name: "Sevran",
    postalCode: "93270",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 4,
    population: "51 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Sevran. Nous couvrons DPE, amiante, plomb, électricité, gaz, termites et ERP dans toute la commune.",
    context:
      "Sevran présente un parc varié : centre ancien, quartier pavillonnaire de Freinville, grands ensembles des Beaudottes et de Rougemont, résidences neuves. Le programme de rénovation urbaine impacte de nombreux biens : DPE et diagnostic amiante sont particulièrement demandés.",
    neighborhoods: ["Centre", "Freinville", "Beaudottes", "Rougemont", "Perrin"],
    properties:
      "Pavillons, immeubles collectifs, résidences en copropriété — parc largement soumis au DPE et à l'amiante.",
    focus:
      "Interventions groupées pour bailleurs et agences : DPE + électricité + gaz + Loi Boutin en un seul rendez-vous.",
  },
  {
    slug: "villemomble",
    name: "Villemomble",
    postalCode: "93250",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 4,
    population: "30 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Villemomble : DIAG VERITAS intervient sous 48h pour DPE, plomb, amiante, gaz, électricité, ERP et mesurages Loi Carrez / Loi Boutin.",
    context:
      "Villemomble est une commune résidentielle très prisée, avec un bâti souvent ancien (nombreuses maisons meulière et pavillons d'avant-guerre). Le CREP plomb est fréquent, tout comme l'amiante sur les biens antérieurs à 1997. Nombre de copropriétés autour du centre imposent également la Loi Carrez.",
    neighborhoods: ["Centre", "Gare RER", "Château", "Coteaux"],
    properties:
      "Maisons meulière, pavillons, copropriétés — bâti ancien nécessitant plomb, amiante et électricité.",
    focus:
      "Notre pack vente combine tous les diagnostics d'un bien ancien à Villemomble en une seule visite.",
  },
  {
    slug: "rosny-sous-bois",
    name: "Rosny-sous-Bois",
    postalCode: "93110",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 5,
    population: "46 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Rosny-sous-Bois. Diagnostics obligatoires pour vente et location, rapport remis rapidement.",
    context:
      "Rosny-sous-Bois combine un centre-ville dynamique, des quartiers pavillonnaires (Boissière, Pré-Gentil) et de vastes copropriétés récentes (Nations-Unies, Bois-Perrier). Nous intervenons aussi bien pour les particuliers que pour les agences et les syndics.",
    neighborhoods: ["Centre", "Bois-Perrier", "Nations-Unies", "Boissière", "Pré-Gentil"],
    properties:
      "Pavillons, grandes copropriétés, résidences neuves — DPE, Loi Carrez et ERP quotidiens.",
    focus:
      "Pour les copropriétés récentes, le DPE et la Loi Carrez restent obligatoires malgré la qualité du bâti.",
  },
  {
    slug: "montfermeil",
    name: "Montfermeil",
    postalCode: "93370",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 3,
    population: "27 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Montfermeil : DIAG VERITAS couvre toute la commune sous 48h — DPE, amiante, plomb, électricité, gaz, termites et ERP.",
    context:
      "Montfermeil est un voisin direct de Livry-Gargan. Le bâti est essentiellement pavillonnaire, avec un centre historique et de grandes copropriétés (Bosquets, Franceville). Zone termites, elle requiert ce diagnostic pour toute vente.",
    neighborhoods: ["Centre", "Bosquets", "Franceville", "Notre-Dame-des-Anges"],
    properties:
      "Pavillons, copropriétés collectives, maisons anciennes — plomb et amiante fréquents.",
    focus:
      "Zone termites obligatoire : nous intégrons systématiquement le diagnostic termites au pack vente.",
  },
  {
    slug: "clichy-sous-bois",
    name: "Clichy-sous-Bois",
    postalCode: "93390",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 4,
    population: "29 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Clichy-sous-Bois. Diagnostics DPE, amiante, plomb, gaz, électricité, ERP et termites — tarifs fixes annoncés.",
    context:
      "Clichy-sous-Bois est engagée dans un vaste programme de rénovation urbaine. Nous accompagnons particuliers et bailleurs sociaux sur les diagnostics amiante et plomb, ainsi que les DPE avant travaux.",
    neighborhoods: ["Bas-Clichy", "Haut-Clichy", "Chêne Pointu", "Bois du Temple"],
    properties:
      "Copropriétés en rénovation, pavillons, logements sociaux — DPE et amiante prioritaires.",
    focus:
      "Diagnostics avant travaux (amiante, plomb) : notre spécialité pour les copropriétés en rénovation.",
  },
  {
    slug: "meaux",
    name: "Meaux",
    postalCode: "77100",
    department: "Seine-et-Marne",
    departmentCode: "77",
    distanceKm: 25,
    population: "56 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Meaux (77) : DIAG VERITAS se déplace sans surcoût pour vos diagnostics obligatoires vente et location.",
    context:
      "Meaux est la principale ville du nord-est de Seine-et-Marne. Le centre historique compte beaucoup de biens antérieurs à 1949 (plomb obligatoire). Les copropriétés en périphérie sont largement post-1997 mais restent soumises au DPE et à la Loi Carrez.",
    neighborhoods: ["Centre historique", "Beauval", "Pierre-Collinet", "Dunant"],
    properties:
      "Maisons anciennes, grandes copropriétés, résidences en périphérie — plomb, DPE et Loi Carrez récurrents.",
    focus:
      "Centre historique : CREP plomb et amiante obligatoires — nous les traitons en une visite.",
  },
  {
    slug: "chantilly",
    name: "Chantilly",
    postalCode: "60500",
    department: "Oise",
    departmentCode: "60",
    distanceKm: 30,
    population: "11 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Chantilly (60). Intervention rapide sur toute la commune pour vos diagnostics obligatoires vente et location.",
    context:
      "Chantilly est reconnue pour son patrimoine architectural exceptionnel. Nombre de villas et hôtels particuliers datent d'avant 1949 : CREP plomb et amiante sont incontournables. La Loi Carrez s'applique à toutes les copropriétés du centre-ville.",
    neighborhoods: ["Centre — Château", "Gouvieux", "Bois Saint-Denis", "Verdun"],
    properties:
      "Villas anciennes, hôtels particuliers, copropriétés bourgeoises — bâti à forte valeur, diagnostics complets.",
    focus:
      "Bâti d'avant-guerre : DPE, plomb, amiante et Loi Carrez systématiques pour toute vente.",
  },
  {
    slug: "senlis",
    name: "Senlis",
    postalCode: "60300",
    department: "Oise",
    departmentCode: "60",
    distanceKm: 40,
    population: "16 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Senlis (60) : DIAG VERITAS couvre toute la commune, du centre médiéval aux résidences récentes.",
    context:
      "Senlis est une ville d'art et d'histoire. Le centre médiéval concentre des biens souvent classés, antérieurs à 1949, avec plomb quasi systématique. Les zones périphériques offrent des pavillons plus récents mais toujours soumis au DPE et à l'ERP.",
    neighborhoods: ["Centre médiéval", "Cathédrale", "Ordener", "Villevert"],
    properties:
      "Maisons de caractère, biens de centre-ville protégés, pavillons — plomb et amiante fréquents.",
    focus:
      "Pour les biens du centre historique, DIAG VERITAS produit des rapports adaptés aux spécificités patrimoniales.",
  },
  {
    slug: "creil",
    name: "Creil",
    postalCode: "60100",
    department: "Oise",
    departmentCode: "60",
    distanceKm: 45,
    population: "35 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Creil (60). DPE, amiante, plomb, électricité, gaz, ERP et mesurages — sous 48h.",
    context:
      "Creil est un pôle immobilier dynamique de l'Oise, avec un centre-ville ancien, des copropriétés récentes et une forte demande locative. Le DPE et la Loi Boutin sont notre quotidien sur la commune.",
    neighborhoods: ["Centre", "Gare", "Rouher", "Cavée"],
    properties:
      "Copropriétés récentes, pavillons, logements locatifs — DPE, ERP et Loi Boutin en priorité.",
    focus:
      "Pack location : DPE + ERP + Loi Boutin + électricité en un rendez-vous, tarif préférentiel.",
  },
  {
    slug: "beauvais",
    name: "Beauvais",
    postalCode: "60000",
    department: "Oise",
    departmentCode: "60",
    distanceKm: 80,
    population: "56 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Beauvais (60) : DIAG VERITAS intervient sur toute la préfecture de l'Oise pour l'ensemble des diagnostics réglementaires.",
    context:
      "Beauvais combine un centre médiéval remarquable (cathédrale) et des quartiers plus récents. Les biens du centre datent souvent d'avant 1949 : plomb obligatoire. Les copropriétés modernes en périphérie relèvent surtout du DPE et de la Loi Carrez.",
    neighborhoods: ["Centre — Cathédrale", "Saint-Jean", "Argentine", "Marissel"],
    properties:
      "Maisons anciennes de centre-ville, copropriétés en périphérie — plomb, DPE et Loi Carrez fréquents.",
    focus:
      "Notre intervention couvre toute la ville sans surcoût — un devis clair sous 24h.",
  },
];

export function cityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export const CONTACT_ORIGIN_CITY = CONTACT.city;