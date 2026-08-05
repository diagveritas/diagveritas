export interface GuideSection {
  h: string;
  p: string[];
  list?: string[];
}

export interface Guide {
  slug: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  seoTitle: string;
  seoDescription: string;
  lead: string;
  sections: GuideSection[];
  faq: { q: string; a: string }[];
}

export const GUIDES: Guide[] = [
  {
    slug: "dpe-obligatoire-location",
    eyebrow: "Guide location 2026",
    h1: "DPE obligatoire pour louer :",
    h1Accent: "ce que dit la loi en 2026",
    seoTitle: "DPE obligatoire pour louer en 2026 : règles et seuils",
    seoDescription:
      "Location : DPE obligatoire, interdiction des passoires thermiques G puis F, affichage sur l'annonce, sanctions et durée de validité. Guide clair par un diagnostiqueur certifié.",
    lead:
      "Depuis le 1er janvier 2025, un logement classé G ne peut plus être mis en location en France métropolitaine. Voici, concrètement, ce qu'un bailleur doit fournir en 2026, ce qu'il risque en cas de manquement et comment anticiper les prochaines échéances.",
    sections: [
      {
        h: "Le DPE est obligatoire dès l'annonce",
        p: [
          "Le diagnostic de performance énergétique doit être réalisé avant la mise en location et ses deux étiquettes — énergie et climat — doivent figurer sur l'annonce, quel que soit le support : agence, portail immobilier, vitrine ou petite annonce. Le DPE est ensuite annexé au bail dans le dossier de diagnostic technique.",
          "Depuis la réforme de 2021, le DPE est opposable : le locataire peut engager la responsabilité du bailleur si les informations sont erronées. C'est la raison pour laquelle il doit être réalisé par un diagnostiqueur certifié et assuré, selon la méthode 3CL-DPE.",
        ],
      },
      {
        h: "Les seuils d'interdiction de location",
        p: [
          "La loi Climat et Résilience échelonne l'interdiction de louer les logements les plus énergivores. Un logement sous le seuil n'est plus considéré comme décent : le locataire peut exiger des travaux en justice et le bail peut être contesté.",
        ],
        list: [
          "Depuis 2023 : logements consommant plus de 450 kWh/m²/an interdits à la location.",
          "Depuis le 1er janvier 2025 : les logements classés G sont interdits à la location.",
          "1er janvier 2028 : les logements classés F seront à leur tour interdits.",
          "1er janvier 2034 : les logements classés E seront concernés.",
        ],
      },
      {
        h: "Les autres diagnostics à joindre au bail",
        p: [
          "Le DPE n'est jamais seul. Pour une location vide, le dossier de diagnostic technique comprend également l'ERP (état des risques et pollutions), le mesurage Loi Boutin de la surface habitable, le CREP plomb pour un logement construit avant 1949, ainsi que les états de l'installation électrique et de l'installation gaz lorsqu'elles ont plus de 15 ans.",
          "En location meublée, la Loi Boutin ne s'applique pas, mais le DPE, l'ERP et les états électricité/gaz restent exigibles dans les mêmes conditions.",
        ],
      },
      {
        h: "Validité, gel des loyers et sanctions",
        p: [
          "Un DPE réalisé après le 1er juillet 2021 est valable 10 ans. Depuis août 2022, les loyers des logements classés F et G ne peuvent plus être augmentés, ni à la relocation, ni lors du renouvellement du bail, ni par indexation.",
          "L'absence de DPE ou l'affichage d'informations trompeuses dans une annonce expose à une amende administrative pouvant atteindre 3 000 € pour une personne physique et 15 000 € pour une personne morale.",
        ],
      },
      {
        h: "Que faire si votre logement est mal classé",
        p: [
          "Un DPE mal noté n'est pas une fatalité : isolation des combles, remplacement des menuiseries, changement du système de chauffage ou installation d'une ventilation performante permettent souvent de gagner une à deux classes. Un audit énergétique identifie le scénario de travaux le plus rentable.",
          "Avant d'engager des travaux, faites vérifier votre classement : un DPE ancien, réalisé avant la réforme de 2021, ne reflète plus la méthode de calcul actuelle.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on louer un logement classé G en 2026 ?",
        a: "Non. Depuis le 1er janvier 2025, un logement classé G est considéré comme énergétiquement indécent et ne peut plus faire l'objet d'un nouveau bail en France métropolitaine. Les baux en cours se poursuivent, mais le locataire peut exiger des travaux de mise en conformité.",
      },
      {
        q: "Le DPE est-il obligatoire pour une location meublée ?",
        a: "Oui. Le DPE est exigé pour toute location de logement à usage d'habitation, meublée ou non. Seule la Loi Boutin, qui mesure la surface habitable, ne s'applique pas au meublé.",
      },
      {
        q: "Combien de temps un DPE est-il valable pour une location ?",
        a: "10 ans pour un DPE réalisé depuis le 1er juillet 2021. Les DPE réalisés entre 2013 et juin 2021 ne sont plus valables : un nouveau diagnostic doit être établi avant toute nouvelle mise en location.",
      },
      {
        q: "Qui paie le DPE d'une location ?",
        a: "Le bailleur. Le coût du diagnostic ne peut pas être refacturé au locataire, ni intégré aux charges récupérables.",
      },
      {
        q: "Faut-il un nouveau DPE à chaque changement de locataire ?",
        a: "Non, tant que le DPE en cours de validité correspond au logement et qu'aucun travaux significatif n'a modifié ses performances. Il est simplement annexé à chaque nouveau bail.",
      },
    ],
  },
  {
    slug: "dpe-f-ou-g-que-faire",
    eyebrow: "Passoires thermiques",
    h1: "DPE classé F ou G :",
    h1Accent: "que faire concrètement ?",
    seoTitle: "DPE F ou G : que faire pour vendre ou louer ?",
    seoDescription:
      "Logement classé F ou G : audit énergétique obligatoire à la vente, interdiction de location, travaux prioritaires, aides et gain de classes. Le guide d'un diagnostiqueur certifié.",
    lead:
      "Recevoir une étiquette F ou G est une mauvaise nouvelle, pas une impasse. Selon que vous vendez ou que vous louez, les obligations diffèrent — et quelques travaux ciblés suffisent souvent à repasser au-dessus du seuil critique.",
    sections: [
      {
        h: "Vous vendez : l'audit énergétique est obligatoire",
        p: [
          "Depuis le 1er avril 2023, la vente d'une maison individuelle ou d'un immeuble en monopropriété classé F ou G impose la réalisation d'un audit énergétique réglementaire, remis à l'acquéreur dès la première visite. Cette obligation a été étendue aux logements classés E depuis le 1er janvier 2025.",
          "L'audit ne se contente pas de constater : il propose au moins deux scénarios de travaux, chiffrés, permettant d'atteindre au minimum la classe C ou B. Il ne remplace pas le DPE, il s'y ajoute.",
        ],
      },
      {
        h: "Vous louez : le calendrier d'interdiction",
        p: [
          "Les logements classés G sont interdits à la location depuis le 1er janvier 2025, les logements classés F le seront au 1er janvier 2028 et les logements classés E au 1er janvier 2034. Depuis 2022, le loyer d'un bien F ou G ne peut plus être augmenté, y compris à la relocation.",
          "Si un bail est en cours, il se poursuit, mais le locataire peut saisir le juge pour contraindre le bailleur à réaliser des travaux de mise en décence énergétique.",
        ],
      },
      {
        h: "Les travaux qui font gagner des classes",
        p: [
          "Tous les travaux ne se valent pas. Dans le bâti francilien ancien, ce sont presque toujours les mêmes leviers qui font basculer une étiquette :",
        ],
        list: [
          "Isolation des combles ou de la toiture : le meilleur rapport gain/prix, souvent 1 classe à elle seule.",
          "Remplacement d'une chaudière fioul ou d'un convecteur électrique par une pompe à chaleur : 1 à 2 classes.",
          "Isolation des murs par l'intérieur ou l'extérieur : forte amélioration, coût plus élevé.",
          "Menuiseries double ou triple vitrage : gain réel surtout en complément d'une isolation.",
          "Ventilation performante (VMC hygroréglable) : indispensable pour éviter les désordres après isolation.",
        ],
      },
      {
        h: "Vérifiez d'abord la fiabilité de votre DPE",
        p: [
          "Un DPE peut être pénalisé par des données manquantes : absence de justificatif d'isolation, système de chauffage mal renseigné, surface erronée. Le diagnostiqueur applique alors des valeurs par défaut, systématiquement défavorables.",
          "Rassemblez vos factures de travaux, vos notices d'équipements et les documents de copropriété avant la visite : cela suffit parfois à faire remonter un logement de G à F, voire de F à E.",
        ],
      },
    ],
    faq: [
      {
        q: "Peut-on vendre un logement classé G ?",
        a: "Oui. La vente d'un logement classé F ou G reste autorisée, sans travaux préalables. Seul l'audit énergétique réglementaire doit être remis à l'acquéreur potentiel dès la première visite pour une maison individuelle ou un immeuble en monopropriété.",
      },
      {
        q: "Combien coûte un audit énergétique ?",
        a: "Comptez généralement entre 500 et 1 000 € TTC selon la taille et la complexité du bien. Il est distinct du DPE et doit être réalisé par un professionnel qualifié.",
      },
      {
        q: "Peut-on contester un DPE ?",
        a: "Oui. Le DPE étant opposable depuis juillet 2021, vous pouvez demander une contre-visite ou une révision au diagnostiqueur si des éléments justificatifs n'ont pas été pris en compte. Fournir les factures de travaux est la démarche la plus efficace.",
      },
      {
        q: "Quelles aides pour sortir de la classe F ou G ?",
        a: "MaPrimeRénov' parcours accompagné, les certificats d'économies d'énergie, l'éco-prêt à taux zéro et la TVA à 5,5 % sur les travaux de rénovation énergétique. Les aides sont majorées lorsque les travaux permettent un saut d'au moins deux classes.",
      },
      {
        q: "Faut-il refaire le DPE après des travaux ?",
        a: "Oui, un nouveau DPE est nécessaire pour faire constater la nouvelle étiquette. C'est indispensable avant une remise en location d'un bien précédemment classé G.",
      },
    ],
  },
  {
    slug: "diagnostics-obligatoires-vente",
    eyebrow: "Guide vente",
    h1: "Diagnostics obligatoires",
    h1Accent: "pour vendre un bien",
    seoTitle: "Diagnostics obligatoires pour vendre en 2026 : la liste",
    seoDescription:
      "La liste complète des diagnostics obligatoires pour vendre une maison ou un appartement : DPE, amiante, plomb, gaz, électricité, termites, ERP, Carrez. Validités et sanctions.",
    lead:
      "Le dossier de diagnostic technique (DDT) doit être annexé à la promesse ou à l'acte de vente. Sa composition dépend de l'année de construction, du type de bien et de sa localisation. Voici la liste applicable en 2026.",
    sections: [
      {
        h: "Les diagnostics exigés dans tous les cas",
        p: [
          "Quel que soit le bien, deux diagnostics sont systématiques : le DPE, qui doit figurer dès l'annonce, et l'ERP, l'état des risques et pollutions, qui recense les risques naturels, miniers, technologiques, sismiques et le potentiel radon de la commune.",
          "L'ERP doit dater de moins de 6 mois au jour de la signature : c'est le diagnostic le plus souvent périmé au moment de l'acte.",
        ],
      },
      {
        h: "Les diagnostics liés à l'année de construction",
        p: [
          "Trois dates structurent l'ensemble du dossier :",
        ],
        list: [
          "Permis de construire antérieur au 1er juillet 1997 : repérage amiante des matériaux et produits de la liste A et B obligatoire.",
          "Construction antérieure au 1er janvier 1949 : constat de risque d'exposition au plomb (CREP) obligatoire.",
          "Installation intérieure de gaz ou d'électricité de plus de 15 ans : état de l'installation obligatoire, valable 3 ans.",
        ],
      },
      {
        h: "Les diagnostics liés au bien et à sa localisation",
        p: [
          "En copropriété, le mesurage Loi Carrez de la surface privative est obligatoire : une erreur de plus de 5 % permet à l'acquéreur d'exiger une réduction du prix. Dans les communes couvertes par un arrêté préfectoral — c'est le cas d'une grande partie de la Seine-Saint-Denis et de la Seine-et-Marne — l'état relatif à la présence de termites est exigé et n'est valable que 6 mois.",
          "Si le bien n'est pas raccordé au tout-à-l'égout, un contrôle de l'installation d'assainissement non collectif, réalisé par le SPANC, doit également être fourni.",
        ],
      },
      {
        h: "Ce que vous risquez en cas d'oubli",
        p: [
          "L'absence d'un diagnostic au dossier prive le vendeur de la clause d'exonération des vices cachés sur le point concerné. En pratique, l'acquéreur peut demander une réduction du prix ou l'annulation de la vente, et le notaire refusera le plus souvent de signer tant que le dossier est incomplet.",
          "Un DPE erroné engage la responsabilité du vendeur depuis que le document est opposable : d'où l'importance d'un diagnostiqueur certifié et couvert par une assurance RC professionnelle.",
        ],
      },
    ],
    faq: [
      {
        q: "Quels diagnostics pour vendre un appartement ?",
        a: "DPE, ERP, Loi Carrez, amiante si le permis est antérieur à juillet 1997, plomb si l'immeuble est antérieur à 1949, état de l'installation électrique et gaz si elles ont plus de 15 ans, et termites si la commune est concernée par un arrêté préfectoral.",
      },
      {
        q: "Quels diagnostics pour vendre une maison ?",
        a: "Les mêmes qu'un appartement, sans la Loi Carrez (réservée aux copropriétés), avec en plus le contrôle de l'assainissement non collectif si la maison n'est pas raccordée au réseau public.",
      },
      {
        q: "Quand faut-il réaliser les diagnostics ?",
        a: "Avant la mise en vente : le DPE doit apparaître dans l'annonce, et le dossier complet doit être annexé à la promesse de vente. Réaliser les diagnostics en amont évite de retarder la signature.",
      },
      {
        q: "Les diagnostics sont-ils à la charge du vendeur ?",
        a: "Oui, ils incombent au vendeur. Leur coût peut toutefois être intégré à la négociation globale de la transaction.",
      },
      {
        q: "Peut-on réutiliser des diagnostics d'une vente précédente ?",
        a: "Uniquement s'ils sont encore valides à la date de signature. C'est fréquemment le cas de l'amiante et de la Loi Carrez, rarement de l'ERP (6 mois) ou du termites (6 mois).",
      },
    ],
  },
  {
    slug: "duree-validite-diagnostics-immobiliers",
    eyebrow: "Référence",
    h1: "Durée de validité",
    h1Accent: "des diagnostics immobiliers",
    seoTitle: "Durée de validité des diagnostics immobiliers 2026",
    seoDescription:
      "DPE 10 ans, ERP 6 mois, termites 6 mois, électricité et gaz 3 ans, amiante et Carrez illimités : le tableau complet des validités, à la vente comme à la location.",
    lead:
      "Un diagnostic périmé le jour de la signature doit être refait, à vos frais. Voici les durées de validité applicables en 2026, et les pièges qui obligent le plus souvent à repasser une commande.",
    sections: [
      {
        h: "Les validités à connaître",
        p: ["Les durées diffèrent selon le diagnostic et, parfois, selon qu'il s'agit d'une vente ou d'une location :"],
        list: [
          "DPE : 10 ans (les DPE établis avant juillet 2021 ne sont plus valables).",
          "ERP : 6 mois — le plus souvent périmé au moment de l'acte.",
          "Termites : 6 mois.",
          "Électricité et gaz : 3 ans en vente, 6 ans en location.",
          "CREP plomb : 1 an en vente si présence de plomb, 6 ans en location, illimité si le constat est négatif.",
          "Amiante : illimité si le constat est négatif et réalisé après 2013, sinon repérage à refaire.",
          "Loi Carrez et Loi Boutin : illimité tant que le bien n'est pas modifié.",
        ],
      },
      {
        h: "Les pièges les plus fréquents",
        p: [
          "Le premier est l'ERP : six mois passent vite entre la mise en vente et la signature définitive. Le second concerne les constats amiante anciens : un rapport établi avant le 1er janvier 2013 ne répond plus au périmètre réglementaire actuel et doit être refait, même s'il était négatif.",
          "Le troisième piège vient des travaux : une rénovation qui modifie l'isolation, le chauffage ou la surface rend le DPE et les mesurages caducs dans les faits, même si leur date de validité court encore.",
        ],
      },
      {
        h: "Comment éviter de payer deux fois",
        p: [
          "Groupez la totalité des diagnostics sur une seule visite et lancez-les au moment de la mise en vente réelle, pas plusieurs mois avant. Si la transaction traîne, seuls l'ERP et le termites sont généralement à renouveler — pour un coût très limité comparé à un dossier complet refait.",
        ],
      },
    ],
    faq: [
      {
        q: "Combien de temps un DPE est-il valable ?",
        a: "10 ans, à condition qu'il ait été réalisé à partir du 1er juillet 2021. Les DPE plus anciens ne sont plus opposables et doivent être refaits.",
      },
      {
        q: "Quelle est la validité de l'ERP ?",
        a: "6 mois. C'est le diagnostic le plus souvent à renouveler avant la signature de l'acte authentique.",
      },
      {
        q: "Le diagnostic amiante est-il valable à vie ?",
        a: "Il est à durée illimitée lorsqu'il est négatif et réalisé après le 1er janvier 2013. Un constat positif impose un contrôle périodique de l'état de conservation des matériaux tous les 3 ans.",
      },
      {
        q: "Quelle est la validité du diagnostic électrique ?",
        a: "3 ans dans le cadre d'une vente et 6 ans dans le cadre d'une location.",
      },
      {
        q: "La Loi Carrez a-t-elle une date de péremption ?",
        a: "Non, tant qu'aucun travaux ne modifie la surface privative du lot. Un mesurage réalisé il y a dix ans reste valable si le bien est inchangé.",
      },
    ],
  },
  {
    slug: "amiante-avant-travaux",
    eyebrow: "Guide travaux",
    h1: "Repérage amiante avant travaux :",
    h1Accent: "obligations et démarches",
    seoTitle: "Repérage amiante avant travaux (RAAT) : obligations",
    seoDescription:
      "RAAT et RAAD : qui doit les commander, quand, selon quelle norme NF X 46-020, quelles sanctions et quels délais. Guide par un diagnostiqueur certifié en Île-de-France.",
    lead:
      "Toute rénovation d'un bâtiment dont le permis de construire est antérieur au 1er juillet 1997 impose un repérage amiante avant travaux. C'est une obligation du donneur d'ordre, et sa responsabilité pénale est directement engagée.",
    sections: [
      {
        h: "RAAT ou RAAD : quelle différence ?",
        p: [
          "Le RAAT (repérage amiante avant travaux) porte sur la zone concernée par l'opération : il identifie les matériaux amiantés susceptibles d'être touchés par les travaux. Le RAAD (repérage amiante avant démolition) est exhaustif : il couvre l'intégralité du bâtiment, y compris les parties inaccessibles en exploitation normale.",
          "Les deux répondent à la norme NF X 46-020 et impliquent, le plus souvent, des sondages destructifs et des prélèvements analysés en laboratoire accrédité.",
        ],
      },
      {
        h: "Qui doit le commander et quand",
        p: [
          "L'obligation pèse sur le donneur d'ordre : propriétaire, syndic, maître d'ouvrage ou entreprise générale. Le repérage doit être achevé avant la consultation des entreprises, afin que les devis intègrent le protocole de retrait ou d'encapsulage.",
          "Aucune entreprise sérieuse n'interviendra sans ce rapport : en cas d'accident, c'est le donneur d'ordre qui répond du défaut d'information.",
        ],
      },
      {
        h: "Sanctions et coût du manquement",
        p: [
          "L'absence de repérage avant travaux expose à une amende pouvant atteindre 9 000 € et, en cas d'exposition de travailleurs, à des poursuites pénales pour mise en danger d'autrui. Au-delà de la sanction, la découverte d'amiante en cours de chantier arrête le chantier, déclenche un désamiantage en urgence et fait exploser les délais et le budget.",
        ],
      },
      {
        h: "Où l'amiante se cache dans le bâti francilien",
        p: [
          "Dalles de sol vinyle-amiante et leur colle noire, plaques de fibrociment en toiture ou en bardage, conduits de fumée, calorifugeages de canalisations, enduits et colles de carrelage, joints de chaudière, faux plafonds : dans les immeubles des années 1950 à 1990, l'amiante est rarement là où on l'attend.",
        ],
      },
    ],
    faq: [
      {
        q: "Le repérage amiante avant travaux est-il obligatoire pour un particulier ?",
        a: "Oui. L'obligation vise le donneur d'ordre, qu'il soit professionnel ou particulier, dès lors que les travaux portent sur un bâtiment dont le permis de construire est antérieur au 1er juillet 1997.",
      },
      {
        q: "Quelle différence entre le diagnostic amiante de vente et le RAAT ?",
        a: "Le diagnostic de vente est visuel et limité aux matériaux des listes A et B. Le RAAT est bien plus étendu et comporte des sondages destructifs : il ne peut pas être remplacé par le rapport de vente.",
      },
      {
        q: "Combien coûte un RAAT ?",
        a: "À partir de 350 € TTC pour une opération limitée. Le prix dépend du nombre de sondages, de la surface concernée et du nombre de prélèvements envoyés en laboratoire.",
      },
      {
        q: "Combien de temps faut-il pour obtenir le rapport ?",
        a: "Comptez généralement de 3 à 7 jours ouvrés : la visite est rapide, mais l'analyse des prélèvements par un laboratoire accrédité conditionne le délai final.",
      },
      {
        q: "Que faire si de l'amiante est détectée ?",
        a: "Les travaux doivent être confiés à une entreprise certifiée en retrait ou en encapsulage, selon un plan de retrait déposé auprès de l'inspection du travail et de la CARSAT. Le rapport de repérage sert de base à ce plan.",
      },
    ],
  },
  {
    slug: "diagnostics-obligatoires-location",
    eyebrow: "Guide bailleurs",
    h1: "Diagnostics obligatoires",
    h1Accent: "pour louer un logement",
    seoTitle: "Diagnostics obligatoires pour louer : la liste 2026",
    seoDescription:
      "Location vide ou meublée : DPE, ERP, Loi Boutin, plomb, électricité et gaz. Liste complète, validités, différences meublé/vide et sanctions pour le bailleur.",
    lead:
      "Le dossier de diagnostic technique doit être annexé au bail dès la signature. Sa composition dépend du type de location et de l'ancienneté du logement : voici ce qu'un bailleur doit fournir en 2026.",
    sections: [
      {
        h: "Le socle commun à toutes les locations",
        p: [
          "Trois documents sont exigés quel que soit le logement : le DPE, affiché dès l'annonce et annexé au bail ; l'ERP, valable 6 mois ; et, pour une location vide, le mesurage Loi Boutin de la surface habitable, mentionné obligatoirement dans le contrat.",
        ],
      },
      {
        h: "Ce qui s'ajoute selon l'ancienneté du bien",
        p: ["Comme en vente, l'année de construction commande le reste du dossier :"],
        list: [
          "Logement antérieur à 1949 : CREP plomb obligatoire, valable 6 ans en location (illimité si négatif).",
          "Installation électrique de plus de 15 ans : état de l'installation intérieure, valable 6 ans.",
          "Installation gaz de plus de 15 ans : état de l'installation intérieure, valable 6 ans.",
          "Immeuble avec permis antérieur à juillet 1997 : le DAPP (dossier amiante parties privatives) doit être tenu à disposition du locataire.",
        ],
      },
      {
        h: "Meublé et vide : les différences",
        p: [
          "En location meublée, la Loi Boutin ne s'applique pas : la surface habitable n'a pas à être mesurée réglementairement, mais le logement doit respecter la surface minimale de décence de 9 m². Tous les autres diagnostics — DPE, ERP, plomb, électricité, gaz — restent exigibles à l'identique.",
        ],
      },
      {
        h: "Décence énergétique : le point de vigilance 2026",
        p: [
          "Un logement classé G ne peut plus être loué depuis le 1er janvier 2025, et les logements F seront concernés au 1er janvier 2028. Les loyers des biens F et G sont par ailleurs gelés depuis août 2022. Faire réaliser un DPE à jour avant toute mise en location est donc devenu un préalable, pas une formalité.",
        ],
      },
    ],
    faq: [
      {
        q: "Quels diagnostics fournir au locataire ?",
        a: "DPE, ERP, mesurage Loi Boutin (location vide), CREP plomb pour un logement d'avant 1949, et états des installations électrique et gaz lorsqu'elles ont plus de 15 ans. L'ensemble est annexé au bail.",
      },
      {
        q: "Que risque un bailleur qui ne fournit pas les diagnostics ?",
        a: "Le locataire peut demander une diminution du loyer ou la résiliation du bail, et le bailleur perd la protection contre les vices cachés. L'absence de DPE dans une annonce est en outre passible d'une amende administrative pouvant aller jusqu'à 3 000 €.",
      },
      {
        q: "Faut-il refaire les diagnostics à chaque nouveau locataire ?",
        a: "Non, tant qu'ils sont valides. Seul l'ERP, valable 6 mois, doit en pratique être renouvelé à chaque nouvelle mise en location.",
      },
      {
        q: "La Loi Boutin s'applique-t-elle au meublé ?",
        a: "Non. Le mesurage Loi Boutin ne concerne que la location vide à usage de résidence principale.",
      },
      {
        q: "Combien coûte un pack diagnostics location ?",
        a: "Un pack DPE + ERP + Loi Boutin démarre autour de 190 € TTC pour un appartement standard, et augmente selon la surface et l'ajout éventuel des états électricité et gaz.",
      },
    ],
  },
];

export function guideBySlug(slug: string) {
  return GUIDES.find((g) => g.slug === slug);
}
