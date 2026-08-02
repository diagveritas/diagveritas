import { createFileRoute } from "@tanstack/react-router";
import { CONTACT } from "@/lib/diagnostics-data";
import { Breadcrumbs, breadcrumbJsonLd, SITE_URL } from "@/components/breadcrumbs";

const URL_PAGE = `${SITE_URL}/mentions-legales`;
const TITLE = "Mentions légales | DIAG VERITAS";
const DESCRIPTION =
  "Mentions légales de DIAG VERITAS, diagnostiqueur immobilier certifié à Livry-Gargan : éditeur, hébergement, certifications, assurance RC Pro et données personnelles.";

export const Route = createFileRoute("/mentions-legales")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL_PAGE },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: URL_PAGE }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]),
        ),
      },
    ],
  }),
  component: LegalPage,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-display text-2xl text-foreground">{title}</h2>
      <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

function LegalPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Mentions légales" }]} />
      <h1 className="mt-8 font-display text-4xl leading-tight text-foreground sm:text-5xl">
        Mentions légales
      </h1>
      <p className="mt-5 text-base text-muted-foreground">
        Informations légales relatives au site diagveritas.fr et au cabinet DIAG VERITAS,
        diagnostiqueur immobilier certifié en Île-de-France et dans l'Oise.
      </p>

      <Block title="Éditeur du site">
        <p>
          <strong className="text-foreground">DIAG VERITAS</strong> — cabinet de diagnostics
          immobiliers.
          <br />
          Siège : {CONTACT.address}, {CONTACT.postalCode} {CONTACT.city}, France.
          <br />
          Téléphone :{" "}
          <a href={`tel:${CONTACT.phoneRaw}`} className="text-gold hover:opacity-80">
            {CONTACT.phone}
          </a>
          <br />
          E-mail :{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-gold hover:opacity-80">
            {CONTACT.email}
          </a>
        </p>
        <p>
          Responsable de la publication : le représentant légal de DIAG VERITAS. Numéro SIRET et
          identifiant de TVA communiqués sur simple demande et figurant sur chaque devis et facture.
        </p>
      </Block>

      <Block title="Certifications et assurance">
        <p>
          DIAG VERITAS exerce sous certification de personnes délivrée par{" "}
          <strong className="text-foreground">Bureau Veritas Certification</strong>, organisme
          accrédité COFRAC, pour l'ensemble des diagnostics réglementaires (DPE, amiante, plomb,
          électricité, gaz, termites, ERP, mesurage).
        </p>
        <p>
          Le cabinet est couvert par une assurance responsabilité civile professionnelle conforme à
          l'article L. 271-6 du Code de la construction et de l'habitation. Attestations de
          certification et d'assurance transmises sur demande.
        </p>
      </Block>

      <Block title="Hébergement">
        <p>
          Le site est hébergé sur une infrastructure cloud européenne. Les coordonnées de
          l'hébergeur sont communiquées sur demande écrite adressée à {CONTACT.email}.
        </p>
      </Block>

      <Block title="Propriété intellectuelle">
        <p>
          L'ensemble des contenus du site (textes, visuels, structure, code) est la propriété
          exclusive de DIAG VERITAS. Toute reproduction, représentation ou adaptation, totale ou
          partielle, est interdite sans autorisation écrite préalable.
        </p>
      </Block>

      <Block title="Données personnelles (RGPD)">
        <p>
          Les informations transmises via les formulaires de contact et de demande de devis sont
          utilisées uniquement pour traiter votre demande et établir un devis. Elles ne sont ni
          revendues ni cédées à des tiers, et sont conservées le temps nécessaire au suivi
          commercial puis aux obligations comptables.
        </p>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement,
          de limitation et d'opposition. Pour l'exercer, écrivez à{" "}
          <a href={`mailto:${CONTACT.email}`} className="text-gold hover:opacity-80">
            {CONTACT.email}
          </a>
          .
        </p>
      </Block>

      <Block title="Cookies et mesure d'audience">
        <p>
          Le site n'utilise pas de cookie publicitaire. Seules des mesures d'audience anonymisées
          peuvent être collectées afin d'améliorer la navigation et la qualité du service.
        </p>
      </Block>

      <Block title="Médiation et litiges">
        <p>
          En cas de litige, une solution amiable sera recherchée en priorité. À défaut, les
          tribunaux français sont seuls compétents. Le consommateur peut recourir gratuitement à un
          médiateur de la consommation, dont les coordonnées sont indiquées sur demande.
        </p>
      </Block>
    </div>
  );
}
