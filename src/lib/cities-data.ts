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
  // ============================================================
  // Seine-Saint-Denis (93) — extension
  // ============================================================
  {
    slug: "noisy-le-sec",
    name: "Noisy-le-Sec",
    postalCode: "93130",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 6,
    population: "45 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Noisy-le-Sec : DIAG VERITAS couvre toute la commune pour vos DPE, amiante, plomb, gaz, électricité et mesurages, avec intervention sous 48h.",
    context:
      "Noisy-le-Sec associe un centre historique reconstruit après-guerre, des cités pavillonnaires (Merlan, Béthisy) et de vastes copropriétés le long du RER E. Le bâti pré-1997 impose un diagnostic amiante fréquent, notamment sur les collectifs des années 60-70.",
    neighborhoods: ["Centre — Mairie", "Merlan", "Béthisy", "Boissière", "Londeau"],
    properties:
      "Pavillons de la reconstruction, copropriétés RER E, résidences neuves du quartier Ourcq — DPE, amiante et Loi Carrez récurrents.",
    focus:
      "Sur les copropriétés d'avant 1997, prévoyez systématiquement le repérage amiante avant vente.",
  },
  {
    slug: "pantin",
    name: "Pantin",
    postalCode: "93500",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 10,
    population: "60 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Pantin (93). Diagnostics obligatoires vente/location : intervention rapide du Grand Paris jusqu'aux Quatre-Chemins.",
    context:
      "Pantin est une ville en pleine mutation, avec de nombreuses opérations d'aménagement autour du canal de l'Ourcq et des Grands Moulins. On y trouve des lofts en anciennes usines (amiante fréquent), des immeubles haussmanniens (plomb) et des copropriétés neuves du secteur Hoche.",
    neighborhoods: ["Église", "Quatre-Chemins", "Hoche", "Grands Moulins", "Petit Pantin"],
    properties:
      "Lofts industriels reconvertis, haussmanniens, immeubles neufs — DPE, amiante, plomb et Loi Carrez incontournables.",
    focus:
      "Pour les lofts issus d'anciennes usines, le repérage amiante avant travaux (RAAT) est très souvent exigé.",
  },
  {
    slug: "bobigny",
    name: "Bobigny",
    postalCode: "93000",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 7,
    population: "55 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Bobigny : DIAG VERITAS intervient en préfecture de Seine-Saint-Denis pour tous vos diagnostics vente et location.",
    context:
      "Chef-lieu du 93, Bobigny concentre de grandes copropriétés des années 60-80 (Karl-Marx, Hector-Berlioz), des pavillons anciens de l'Abreuvoir et des programmes neufs du secteur Édouard-Vaillant. L'amiante et le DPE sont notre quotidien sur la commune.",
    neighborhoods: ["Centre — Préfecture", "Karl-Marx", "Abreuvoir", "Édouard-Vaillant", "Étoile"],
    properties:
      "Grandes copropriétés années 60-80, pavillons, résidences neuves — amiante et DPE prioritaires.",
    focus:
      "Nous accompagnons syndics et bailleurs sur les diagnostics groupés (DPE collectif, amiante des parties communes).",
  },
  {
    slug: "saint-denis",
    name: "Saint-Denis",
    postalCode: "93200",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 15,
    population: "113 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Saint-Denis. Interventions DPE, amiante, plomb, électricité, gaz et Loi Carrez sur toute la ville.",
    context:
      "Saint-Denis, plus grande commune du 93, présente un bâti extrêmement varié : centre médiéval autour de la basilique (plomb systématique), grandes copropriétés de la Plaine, cité du Franc-Moisin, immeubles neufs de Pleyel. L'ancienneté du bâti impose amiante et plomb sur la majorité des ventes.",
    neighborhoods: ["Basilique", "La Plaine", "Franc-Moisin", "Pleyel", "Floréal"],
    properties:
      "Immeubles anciens, cités des années 60, résidences neuves de la Plaine — plomb, amiante et DPE quasi systématiques.",
    focus:
      "Zone Grand Paris Express : nombreuses ventes en cours — nous garantissons un rapport DPE sous 5 jours.",
  },
  {
    slug: "aubervilliers",
    name: "Aubervilliers",
    postalCode: "93300",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 12,
    population: "88 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Aubervilliers : DIAG VERITAS réalise tous les diagnostics obligatoires vente et location, avec un tarif sans surcoût de déplacement.",
    context:
      "Aubervilliers connaît une forte transformation urbaine (Fort d'Aubervilliers, Campus Condorcet). On y trouve des immeubles industriels reconvertis, des cités populaires (Émile-Dubois, Villette-Quatre-Chemins) et des programmes récents. Le DPE et l'amiante sont incontournables sur le parc existant.",
    neighborhoods: ["Centre — Villette", "Quatre-Chemins", "Fort", "Landy", "Émile-Dubois"],
    properties:
      "Anciens ateliers, cités, résidences neuves du Fort — amiante, DPE et Loi Carrez incontournables.",
    focus:
      "Sur les biens issus de la reconversion industrielle, prévoyez amiante et plomb en amont de toute vente.",
  },
  {
    slug: "drancy",
    name: "Drancy",
    postalCode: "93700",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 8,
    population: "70 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Drancy. DPE, amiante, plomb, gaz, électricité, ERP et mesurages — intervention rapide sous 48h.",
    context:
      "Drancy concentre un tissu pavillonnaire dense (quartiers de l'Économie et de la Muette), des cités des années 30-60 (Cité de la Muette) et des programmes récents. L'amiante et le plomb sont fréquents sur le bâti d'avant 1949.",
    neighborhoods: ["Centre", "Économie", "Muette", "Avenir-Parisien", "Cité-Jardin"],
    properties:
      "Pavillons, cité HBM classée, résidences neuves — plomb, amiante et DPE réguliers.",
    focus:
      "Pour les biens de la Cité-Jardin, expertise dédiée au bâti HBM protégé.",
  },
  {
    slug: "le-bourget",
    name: "Le Bourget",
    postalCode: "93350",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 10,
    population: "17 000 habitants",
    intro:
      "Diagnostiqueur immobilier au Bourget : DIAG VERITAS intervient sur toute la commune, à proximité immédiate de l'aéroport historique.",
    context:
      "Le Bourget mêle pavillons anciens, petits collectifs et programmes neufs autour de la future ligne 17 du Grand Paris Express. Le diagnostic électrique est très demandé sur les biens locatifs autour de la gare RER.",
    neighborhoods: ["Centre — Gare", "Verdun", "Champ-de-Manœuvre"],
    properties:
      "Pavillons, petits collectifs, résidences futures Grand Paris — DPE, électricité et ERP prioritaires.",
    focus:
      "Zone de bruit aéroportuaire : l'ERP renseigne le PEB (Plan d'Exposition au Bruit), à ne pas oublier.",
  },
  {
    slug: "epinay-sur-seine",
    name: "Épinay-sur-Seine",
    postalCode: "93800",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 18,
    population: "56 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Épinay-sur-Seine. Diagnostics obligatoires vente/location — tarif transparent.",
    context:
      "Épinay-sur-Seine associe résidentiel pavillonnaire (Béatus, Blumenthal), grands ensembles (Orgemont, La Source) et programmes neufs. Le CREP plomb est fréquent sur les pavillons anciens du centre.",
    neighborhoods: ["Centre", "Orgemont", "La Source", "Béatus", "Blumenthal"],
    properties:
      "Pavillons anciens, grands ensembles, résidences neuves — plomb, DPE et amiante récurrents.",
    focus:
      "Sur les grands ensembles, DIAG VERITAS propose des DPE collectifs pour syndics.",
  },
  {
    slug: "saint-ouen",
    name: "Saint-Ouen-sur-Seine",
    postalCode: "93400",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 14,
    population: "51 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Saint-Ouen-sur-Seine : DIAG VERITAS intervient pour vos diagnostics obligatoires DPE, amiante, plomb et mesurages.",
    context:
      "Saint-Ouen se distingue par ses Puces, ses lofts industriels reconvertis (Docks, Landy) et un tissu haussmannien préservé. Le bâti d'avant 1949 est majoritaire : plomb, amiante et Loi Carrez sont incontournables.",
    neighborhoods: ["Vieux Saint-Ouen", "Docks", "Landy", "Puces", "Michelet"],
    properties:
      "Lofts industriels, haussmanniens, ateliers d'artistes reconvertis — amiante, plomb et Loi Carrez systématiques.",
    focus:
      "Pour les biens des Docks, RAAT (amiante avant travaux) souvent exigé par le syndic.",
  },
  {
    slug: "neuilly-sur-marne",
    name: "Neuilly-sur-Marne",
    postalCode: "93330",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 7,
    population: "35 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Neuilly-sur-Marne. Diagnostics DPE, amiante, plomb, gaz, électricité, ERP — intervention sous 48h.",
    context:
      "Neuilly-sur-Marne présente un cadre résidentiel prisé le long de la Marne. Pavillons du Fauvet, copropriétés du centre, grandes résidences du Chênay et de Maison-Blanche : le DPE et la Loi Carrez sont majoritaires.",
    neighborhoods: ["Centre", "Fauvet", "Chênay", "Maison-Blanche", "Bords de Marne"],
    properties:
      "Pavillons résidentiels, copropriétés récentes, maisons de ville — DPE et Loi Carrez récurrents.",
    focus:
      "Zone humide (bord de Marne) : ERP inclut le risque inondation — à intégrer systématiquement.",
  },
  {
    slug: "gagny",
    name: "Gagny",
    postalCode: "93220",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 5,
    population: "40 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Gagny : DIAG VERITAS intervient rapidement sur toute la commune pour vos diagnostics obligatoires.",
    context:
      "Gagny est une ville pavillonnaire résidentielle voisine de Livry-Gargan. Le bâti mêle maisons meulière du début XXe (plomb fréquent), pavillons d'après-guerre et copropriétés récentes autour de la gare RER E.",
    neighborhoods: ["Centre", "Chénay", "Jean-Bouin", "Franceville", "Maison-Blanche"],
    properties:
      "Maisons meulière, pavillons, copropriétés RER E — plomb et DPE fréquents.",
    focus:
      "Zone termites : diagnostic obligatoire pour toute vente sur la commune.",
  },
  {
    slug: "noisy-le-grand",
    name: "Noisy-le-Grand",
    postalCode: "93160",
    department: "Seine-Saint-Denis",
    departmentCode: "93",
    distanceKm: 10,
    population: "68 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Noisy-le-Grand. Diagnostics vente/location — Mont d'Est, centre et zones résidentielles.",
    context:
      "Noisy-le-Grand associe le pôle tertiaire du Mont d'Est, les grands ensembles emblématiques (Arènes de Picasso, Palacio d'Abraxas) et un tissu pavillonnaire au sud. Les copropriétés post-1980 relèvent surtout du DPE et de la Loi Carrez.",
    neighborhoods: ["Mont d'Est", "Arènes de Picasso", "Centre", "Champy", "Butte-Verte"],
    properties:
      "Copropriétés post-1980, grands ensembles emblématiques, pavillons du sud — DPE et Loi Carrez prioritaires.",
    focus:
      "Pour les copropriétés architecturales, mesurage Carrez soigné (formes complexes).",
  },
  // ============================================================
  // Seine-et-Marne (77) — extension
  // ============================================================
  {
    slug: "vaires-sur-marne",
    name: "Vaires-sur-Marne",
    postalCode: "77360",
    department: "Seine-et-Marne",
    departmentCode: "77",
    distanceKm: 8,
    population: "14 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Vaires-sur-Marne : DIAG VERITAS intervient sur toute la commune pour vos diagnostics DPE, électricité, gaz et mesurages.",
    context:
      "Vaires-sur-Marne est une commune résidentielle prisée pour sa base nautique. Le tissu pavillonnaire domine, avec quelques petites copropriétés autour de la gare. Le DPE et l'électricité sont notre quotidien.",
    neighborhoods: ["Centre — Gare", "Base nautique", "Bois de Vaires"],
    properties:
      "Pavillons, petits collectifs — DPE, électricité et ERP réguliers.",
    focus:
      "Zone inondable partielle (bord de Marne) : l'ERP renseigne le PPRI communal.",
  },
  {
    slug: "torcy",
    name: "Torcy",
    postalCode: "77200",
    department: "Seine-et-Marne",
    departmentCode: "77",
    distanceKm: 12,
    population: "23 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Torcy (77). Diagnostics obligatoires vente/location — Marne-la-Vallée sans surcoût.",
    context:
      "Torcy est l'un des pôles urbains de Marne-la-Vallée. Grandes copropriétés années 80-90, pavillons résidentiels du Vieux-Torcy et programmes neufs du centre commercial. DPE et Loi Carrez sont majoritaires.",
    neighborhoods: ["Vieux-Torcy", "Centre — RER", "Arche-Guédon", "Beauregard"],
    properties:
      "Copropriétés années 80-90, pavillons anciens, résidences neuves — DPE et Loi Carrez prioritaires.",
    focus:
      "Pour les copropriétés d'avant 1997, RAAT (amiante avant travaux) souvent exigé pour ravalement.",
  },
  {
    slug: "champs-sur-marne",
    name: "Champs-sur-Marne",
    postalCode: "77420",
    department: "Seine-et-Marne",
    departmentCode: "77",
    distanceKm: 11,
    population: "26 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Champs-sur-Marne : DIAG VERITAS intervient à Cité Descartes et sur toute la commune pour vos diagnostics obligatoires.",
    context:
      "Champs-sur-Marne abrite la Cité Descartes (pôle universitaire) et un tissu résidentiel varié : pavillons du Bois-de-Grâce, copropriétés récentes des Deux-Parcs. Marché locatif étudiant très dynamique — DPE et Loi Boutin sont prioritaires.",
    neighborhoods: ["Cité Descartes", "Bois-de-Grâce", "Deux-Parcs", "Nesle"],
    properties:
      "Studios étudiants, pavillons, copropriétés récentes — DPE, Loi Boutin et électricité fréquents.",
    focus:
      "Marché locatif étudiant : pack location (DPE + ERP + Loi Boutin + électricité) à tarif préférentiel.",
  },
  {
    slug: "noisiel",
    name: "Noisiel",
    postalCode: "77186",
    department: "Seine-et-Marne",
    departmentCode: "77",
    distanceKm: 12,
    population: "16 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Noisiel. Diagnostics vente/location dans toute la commune de Marne-la-Vallée.",
    context:
      "Noisiel est une ville-parc au patrimoine industriel remarquable (ancienne chocolaterie Menier). Copropriétés années 80, pavillons du Luzard, résidences neuves. Le DPE et l'amiante restent prioritaires sur le bâti pré-1997.",
    neighborhoods: ["Centre — Luzard", "Menier", "Sablons", "Deux-Parcs"],
    properties:
      "Copropriétés années 80, pavillons, patrimoine Menier — DPE, amiante et Loi Carrez récurrents.",
    focus:
      "Copropriétés Marne-la-Vallée : DPE collectif souvent demandé par les syndics.",
  },
  {
    slug: "lagny-sur-marne",
    name: "Lagny-sur-Marne",
    postalCode: "77400",
    department: "Seine-et-Marne",
    departmentCode: "77",
    distanceKm: 15,
    population: "22 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Lagny-sur-Marne : DIAG VERITAS intervient rapidement pour vos DPE, amiante, plomb et mesurages.",
    context:
      "Lagny-sur-Marne conserve un centre médiéval remarquable autour de l'abbatiale. Nombre de biens d'avant 1949 imposent le CREP plomb. Les copropriétés récentes du secteur Saint-Jean relèvent surtout du DPE.",
    neighborhoods: ["Centre — Abbatiale", "Saint-Jean", "Orme-Bossu", "Gare"],
    properties:
      "Maisons de centre-ville, copropriétés récentes, pavillons — plomb et DPE fréquents.",
    focus:
      "Centre historique : CREP plomb et amiante systématiques avant vente.",
  },
  {
    slug: "pontault-combault",
    name: "Pontault-Combault",
    postalCode: "77340",
    department: "Seine-et-Marne",
    departmentCode: "77",
    distanceKm: 20,
    population: "38 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Pontault-Combault. Diagnostics obligatoires vente et location, tarif fixe annoncé.",
    context:
      "Pontault-Combault est une commune pavillonnaire dynamique. Copropriétés récentes du Domaine du Golf, pavillons du centre, résidences neuves de la ZAC des Longs Prés : le DPE et la Loi Carrez sont incontournables.",
    neighborhoods: ["Centre", "Domaine du Golf", "Longs Prés", "Grange"],
    properties:
      "Pavillons, copropriétés récentes, résidences neuves — DPE, Loi Carrez et ERP majoritaires.",
    focus:
      "Pack vente : DPE + ERP + Loi Carrez + électricité, remis sous 48h.",
  },
  {
    slug: "bussy-saint-georges",
    name: "Bussy-Saint-Georges",
    postalCode: "77600",
    department: "Seine-et-Marne",
    departmentCode: "77",
    distanceKm: 20,
    population: "27 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Bussy-Saint-Georges : DIAG VERITAS intervient sur toute la commune de Marne-la-Vallée, sans surcoût.",
    context:
      "Bussy-Saint-Georges est une ville-nouvelle presque intégralement post-1990. Bâti récent : le DPE est majoritaire, la Loi Carrez incontournable sur les copropriétés. Peu d'amiante ou plomb.",
    neighborhoods: ["Centre — RER", "Chanteloup", "Golf", "Rentilly"],
    properties:
      "Résidences post-1990, pavillons neufs, copropriétés modernes — DPE et Loi Carrez majoritaires.",
    focus:
      "Bâti récent : DPE souvent en classe C-D, favorable pour la vente.",
  },
  {
    slug: "mitry-mory",
    name: "Mitry-Mory",
    postalCode: "77290",
    department: "Seine-et-Marne",
    departmentCode: "77",
    distanceKm: 15,
    population: "20 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Mitry-Mory. Diagnostics DPE, amiante, plomb, gaz, électricité, ERP — intervention sous 48h.",
    context:
      "Mitry-Mory est une commune résidentielle proche de l'aéroport CDG. Pavillons du centre, copropriétés récentes de Mitry-le-Neuf, hameaux plus anciens. Le DPE et l'ERP (bruit aéroportuaire) sont prioritaires.",
    neighborhoods: ["Mitry — Centre", "Mitry-le-Neuf", "Mory", "Acacias"],
    properties:
      "Pavillons, copropriétés récentes, hameaux — DPE, électricité et ERP fréquents.",
    focus:
      "Zone PEB : l'ERP renseigne le Plan d'Exposition au Bruit (aéroport CDG).",
  },
  // ============================================================
  // Val-d'Oise (95) — extension
  // ============================================================
  {
    slug: "sarcelles",
    name: "Sarcelles",
    postalCode: "95200",
    department: "Val-d'Oise",
    departmentCode: "95",
    distanceKm: 18,
    population: "59 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Sarcelles (95) : DIAG VERITAS intervient sur tout le Val-d'Oise pour vos diagnostics obligatoires vente et location.",
    context:
      "Sarcelles associe le grand ensemble emblématique des Flanades, des pavillons anciens (Chauffour) et des programmes récents. Le bâti collectif des années 60 impose amiante et DPE sur la majorité des ventes.",
    neighborhoods: ["Flanades", "Chauffour", "Village", "Rosiers"],
    properties:
      "Grand ensemble, pavillons anciens, résidences neuves — amiante et DPE prioritaires.",
    focus:
      "Copropriétés Flanades : DPE collectif et amiante des parties communes systématiquement demandés.",
  },
  {
    slug: "garges-les-gonesse",
    name: "Garges-lès-Gonesse",
    postalCode: "95140",
    department: "Val-d'Oise",
    departmentCode: "95",
    distanceKm: 15,
    population: "43 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Garges-lès-Gonesse. Diagnostics vente et location — tarif transparent, rapport rapide.",
    context:
      "Garges-lès-Gonesse compte de grandes copropriétés (Dame-Blanche, Muette) et un tissu pavillonnaire (Vieux-Garges). Ville en rénovation urbaine : les diagnostics avant travaux (amiante, plomb) sont notre spécialité.",
    neighborhoods: ["Dame-Blanche", "Muette", "Vieux-Garges", "Basses-Bauves"],
    properties:
      "Grandes copropriétés années 60-70, pavillons anciens — amiante, plomb et DPE quotidiens.",
    focus:
      "Diagnostics avant travaux (amiante, plomb) : notre expertise pour les copropriétés en rénovation.",
  },
  {
    slug: "gonesse",
    name: "Gonesse",
    postalCode: "95500",
    department: "Val-d'Oise",
    departmentCode: "95",
    distanceKm: 14,
    population: "26 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Gonesse (95) : DIAG VERITAS intervient sur toute la commune, du centre historique à la Fauconnière.",
    context:
      "Gonesse conserve un centre historique (cathédrale Saint-Pierre-Saint-Paul) et des extensions plus récentes (Fauconnière, Saint-Blin). Bâti d'avant 1949 fréquent : CREP plomb systématique dans le centre.",
    neighborhoods: ["Centre — Cathédrale", "Fauconnière", "Saint-Blin", "Marronniers"],
    properties:
      "Maisons anciennes, copropriétés récentes, pavillons — plomb, DPE et Loi Carrez fréquents.",
    focus:
      "Centre historique : CREP plomb et amiante quasi systématiques avant vente.",
  },
  {
    slug: "villiers-le-bel",
    name: "Villiers-le-Bel",
    postalCode: "95400",
    department: "Val-d'Oise",
    departmentCode: "95",
    distanceKm: 17,
    population: "28 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Villiers-le-Bel. Diagnostics obligatoires vente/location dans tout le 95.",
    context:
      "Villiers-le-Bel présente un village ancien (Village, Puits-la-Marlière) et de grandes copropriétés (Derrière-les-Murs, Cerisaie). Le DPE, l'amiante et le plomb sont les diagnostics les plus demandés.",
    neighborhoods: ["Village", "Derrière-les-Murs", "Cerisaie", "Puits-la-Marlière"],
    properties:
      "Maisons anciennes du village, grandes copropriétés — plomb, amiante et DPE prioritaires.",
    focus:
      "Zone termites Val-d'Oise partielle : vérification systématique avant vente.",
  },
  {
    slug: "argenteuil",
    name: "Argenteuil",
    postalCode: "95100",
    department: "Val-d'Oise",
    departmentCode: "95",
    distanceKm: 22,
    population: "110 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Argenteuil : DIAG VERITAS intervient sur la plus grande ville du Val-d'Oise pour tous vos diagnostics.",
    context:
      "Argenteuil combine un centre ancien (Notre-Dame), les grands ensembles du Val-Sud et du Val-Nord, des pavillons résidentiels d'Orgemont et des programmes neufs des berges de Seine. DPE, amiante et Loi Carrez sont notre quotidien.",
    neighborhoods: ["Centre — Notre-Dame", "Val-Sud", "Val-Nord", "Orgemont", "Berges de Seine"],
    properties:
      "Immeubles anciens, grands ensembles, résidences berges de Seine — plomb, amiante, DPE et Loi Carrez majoritaires.",
    focus:
      "Berges de Seine : ERP renseigne systématiquement le risque inondation (PPRI).",
  },
  {
    slug: "ermont",
    name: "Ermont",
    postalCode: "95120",
    department: "Val-d'Oise",
    departmentCode: "95",
    distanceKm: 22,
    population: "29 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Ermont. Diagnostics vente/location — DPE, amiante, plomb, gaz, électricité, ERP.",
    context:
      "Ermont est une commune résidentielle pavillonnaire. Le centre concentre quelques copropriétés autour de la gare, entourées de pavillons anciens. DPE, électricité et Loi Carrez sont majoritaires.",
    neighborhoods: ["Centre — Gare", "Balzac", "Passerelle", "Cernay"],
    properties:
      "Pavillons, petites copropriétés — DPE, Loi Carrez et électricité fréquents.",
    focus:
      "Sur pavillon ancien : pack vente DPE + amiante + plomb + électricité en une visite.",
  },
  {
    slug: "enghien-les-bains",
    name: "Enghien-les-Bains",
    postalCode: "95880",
    department: "Val-d'Oise",
    departmentCode: "95",
    distanceKm: 22,
    population: "12 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Enghien-les-Bains : DIAG VERITAS intervient dans la seule ville thermale d'Île-de-France pour vos diagnostics de bien de standing.",
    context:
      "Enghien-les-Bains est réputée pour son lac, ses villas d'architecte et son casino. Bâti à forte valeur : villas anciennes (plomb, amiante), copropriétés bourgeoises. Nous produisons des rapports adaptés au haut de gamme.",
    neighborhoods: ["Centre — Lac", "Casino", "Villas", "Coteaux"],
    properties:
      "Villas anciennes, hôtels particuliers, copropriétés bourgeoises — plomb, amiante et Loi Carrez systématiques.",
    focus:
      "Bâti à forte valeur : rapports détaillés avec photos et repérages soignés pour agences prestige.",
  },
  {
    slug: "montmorency",
    name: "Montmorency",
    postalCode: "95160",
    department: "Val-d'Oise",
    departmentCode: "95",
    distanceKm: 20,
    population: "22 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Montmorency. Diagnostics obligatoires vente/location — tarif clair, intervention 48h.",
    context:
      "Montmorency est une ville résidentielle historique (collégiale Saint-Martin). Nombre de biens datent d'avant 1949 : plomb systématique. Villas des Coteaux, pavillons du centre, copropriétés récentes de Champeaux.",
    neighborhoods: ["Centre — Collégiale", "Coteaux", "Champeaux", "Filles-Dieu"],
    properties:
      "Villas anciennes, pavillons, copropriétés récentes — plomb, amiante et DPE fréquents.",
    focus:
      "Bâti historique : CREP plomb et amiante quasi systématiques pour vente.",
  },
  // ============================================================
  // Oise (60) — extension
  // ============================================================
  {
    slug: "compiegne",
    name: "Compiègne",
    postalCode: "60200",
    department: "Oise",
    departmentCode: "60",
    distanceKm: 70,
    population: "40 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Compiègne (60) : DIAG VERITAS intervient dans la sous-préfecture pour l'ensemble des diagnostics réglementaires.",
    context:
      "Compiègne conserve un centre historique remarquable (palais, hôtel de ville). Bâti d'avant 1949 fréquent : plomb et amiante systématiques. Copropriétés récentes en périphérie (Royallieu).",
    neighborhoods: ["Centre — Palais", "Royallieu", "Clos-des-Roses", "Bellicart"],
    properties:
      "Maisons anciennes, hôtels particuliers, copropriétés récentes — plomb, amiante et Loi Carrez fréquents.",
    focus:
      "Centre historique classé : rapports adaptés aux exigences patrimoniales.",
  },
  {
    slug: "nogent-sur-oise",
    name: "Nogent-sur-Oise",
    postalCode: "60180",
    department: "Oise",
    departmentCode: "60",
    distanceKm: 45,
    population: "20 000 habitants",
    intro:
      "DIAG VERITAS, diagnostiqueur immobilier certifié à Nogent-sur-Oise. Diagnostics obligatoires vente et location — tarif fixe.",
    context:
      "Nogent-sur-Oise est une commune résidentielle du bassin creillois. Pavillons anciens du centre, copropriétés récentes de la Commanderie, résidences neuves du parc Hébert. DPE et Loi Carrez majoritaires.",
    neighborhoods: ["Centre", "Commanderie", "Hébert", "Rouher"],
    properties:
      "Pavillons, copropriétés récentes, résidences neuves — DPE et Loi Carrez majoritaires.",
    focus:
      "Marché locatif dynamique : pack location complet à tarif préférentiel.",
  },
  {
    slug: "montataire",
    name: "Montataire",
    postalCode: "60160",
    department: "Oise",
    departmentCode: "60",
    distanceKm: 48,
    population: "13 000 habitants",
    intro:
      "Diagnostiqueur immobilier à Montataire (60) : DIAG VERITAS intervient sur toute la commune pour vos DPE, amiante, plomb et mesurages.",
    context:
      "Montataire est marquée par son passé industriel (Usinor). Pavillons anciens, cités ouvrières, quelques copropriétés récentes. Le bâti pré-1997 impose amiante et plomb sur la majorité des ventes.",
    neighborhoods: ["Centre", "Cité — Usinor", "Larris-Millot", "Grand-Air"],
    properties:
      "Cités ouvrières, pavillons, copropriétés — plomb, amiante et DPE prioritaires.",
    focus:
      "Patrimoine industriel : RAAT (amiante avant travaux) souvent exigé sur les anciennes cités.",
  },
];

export function cityBySlug(slug: string): City | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export const CONTACT_ORIGIN_CITY = CONTACT.city;