import type { City } from "./cities-data";
import { CONTACT } from "./diagnostics-data";

/** FAQ locale — chaque réponse est construite à partir des données réelles de la commune. */
export function cityFaq(city: City) {
  const dep = `${city.department} (${city.departmentCode})`;
  const quartiers = city.neighborhoods.slice(0, 4).join(", ");
  return [
    {
      q: `Quel est le prix d'un DPE à ${city.name} ?`,
      a: `À ${city.name} (${city.postalCode}), un DPE démarre à 99 € TTC pour un appartement standard et à 129 € TTC pour une maison. Aucun frais de déplacement n'est ajouté : ${city.name} se situe à ${city.distanceKm} km de notre cabinet de Livry-Gargan. Le devis ferme est transmis sous 24 h.`,
    },
    {
      q: `Sous quel délai intervenez-vous à ${city.name} ?`,
      a: `Nous intervenons sous 48 h ouvrées à ${city.name}, et souvent dès le lendemain de votre appel : la commune est à ${city.distanceKm} km de notre siège, ce qui nous permet de placer plusieurs rendez-vous par jour sur ${dep}. Pour un DPE, une Loi Carrez ou une Loi Boutin, le rapport est fréquemment remis le jour même.`,
    },
    {
      q: `Quels diagnostics sont obligatoires pour vendre à ${city.name} ?`,
      a: `Pour une vente à ${city.name} : DPE, ERP, diagnostic électrique (installation de plus de 15 ans), diagnostic gaz (installation de plus de 15 ans), repérage amiante si le permis de construire est antérieur au 1er juillet 1997, CREP plomb si le bien est antérieur à 1949, et Loi Carrez en copropriété. ${city.focus}`,
    },
    {
      q: `Quels diagnostics pour louer un logement à ${city.name} ?`,
      a: `Pour une location à ${city.name}, le bailleur doit fournir le DPE, l'ERP, le mesurage Loi Boutin (location vide), le CREP plomb pour un bien d'avant 1949, ainsi que les états de l'installation électrique et gaz lorsqu'elles ont plus de 15 ans. Le DPE doit apparaître dès la publication de l'annonce.`,
    },
    {
      q: `Dans quels quartiers de ${city.name} intervenez-vous ?`,
      a: `Sur l'ensemble de la commune, notamment ${quartiers}${city.neighborhoods.length > 4 ? " et les secteurs limitrophes" : ""}. Nous couvrons les maisons individuelles comme les copropriétés, y compris les diagnostics collectifs (DPE immeuble, PPPT, DTG) pour les syndics de ${city.name}.`,
    },
    {
      q: `Le bâti de ${city.name} impose-t-il des diagnostics particuliers ?`,
      a: `${city.properties} ${city.focus}`,
    },
    {
      q: `Êtes-vous certifié pour intervenir à ${city.name} ?`,
      a: `Oui. DIAG VERITAS est certifié Bureau Veritas pour l'ensemble des diagnostics réglementaires, accrédité COFRAC et couvert par une assurance responsabilité civile professionnelle conforme à la législation. Nos rapports sont opposables et directement transmissibles à votre notaire ou à votre agence de ${city.name}.`,
    },
    {
      q: `Comment obtenir un devis pour un bien à ${city.name} ?`,
      a: `Appelez le ${CONTACT.phone} pour un chiffrage immédiat, remplissez le formulaire de devis en ligne, ou utilisez le simulateur pour identifier en 7 questions les diagnostics obligatoires de votre bien à ${city.name}. Réponse sous 24 h, sans engagement.`,
    },
  ];
}

/** Étapes de l'intervention, contextualisées à la commune. */
export function citySteps(city: City) {
  return [
    {
      t: "1. Devis sous 24 h",
      d: `Vous nous indiquez l'adresse à ${city.name}, la surface et l'année de construction : nous établissons un devis ferme, tout compris, sans frais de déplacement.`,
    },
    {
      t: "2. Rendez-vous sous 48 h",
      d: `Nous fixons la visite selon vos disponibilités, y compris le samedi. ${city.name} étant à ${city.distanceKm} km de notre cabinet, les créneaux de dernière minute sont fréquents.`,
    },
    {
      t: "3. Visite technique",
      d: `Comptez 45 min à 2 h selon le bien et le nombre de diagnostics. Nous relevons l'ensemble des points réglementaires sur place, avec matériel certifié.`,
    },
    {
      t: "4. Rapport opposable",
      d: `Le rapport est transmis par e-mail, généralement le jour même ou sous 48 h, prêt à être remis à votre notaire, votre agence ou votre locataire.`,
    },
  ];
}
