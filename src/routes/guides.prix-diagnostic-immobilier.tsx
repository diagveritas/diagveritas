import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, HelpCircle, Check } from "lucide-react";
import { Breadcrumbs, breadcrumbJsonLd, SITE_URL } from "@/components/breadcrumbs";
import { CONTACT, DIAGNOSTICS } from "@/lib/diagnostics-data";
import { trackCall, trackQuoteCta } from "@/lib/track";

const URL_PATH = "/guides/prix-diagnostic-immobilier";
const TITLE = "Prix diagnostic immobilier 2026 : tarifs et devis | DIAG VERITAS";
const DESCRIPTION =
  "Combien coûte un diagnostic immobilier ? Prix du DPE, amiante, plomb, gaz, électricité, ERP et packs vente/location en Île-de-France, avec les facteurs qui font varier le tarif.";

const FACTORS = [
  {
    t: "La surface du bien",
    d: "Un studio de 25 m² et une maison de 180 m² ne demandent ni le même temps de repérage ni le même nombre de mesures. La surface est le premier facteur de prix, notamment pour le DPE, la Loi Carrez et la Loi Boutin.",
  },
  {
    t: "L'année de construction",
    d: "Un permis de construire antérieur au 1er juillet 1997 impose le repérage amiante ; un bien construit avant 1949 impose le CREP plomb. Deux diagnostics supplémentaires qui pèsent directement sur le devis.",
  },
  {
    t: "Le nombre de diagnostics groupés",
    d: "Regrouper les diagnostics dans une seule visite réduit fortement le coût unitaire : un pack vente complet revient nettement moins cher que la somme des diagnostics commandés séparément.",
  },
  {
    t: "Vente ou location",
    d: "Une location demande moins de diagnostics (DPE, ERP, Loi Boutin, plomb et parfois électricité/gaz) qu'une vente, où l'amiante et la Loi Carrez s'ajoutent le plus souvent.",
  },
  {
    t: "Le type de bien",
    d: "Appartement en copropriété, maison individuelle, local commercial ou immeuble entier : le périmètre technique change, et certains diagnostics collectifs (DPE immeuble, PPPT, DTG) ne concernent que les copropriétés.",
  },
  {
    t: "La localisation",
    d: "Chez DIAG VERITAS, aucun frais de déplacement n'est facturé en Seine-Saint-Denis, Seine-et-Marne, Val-d'Oise et dans l'Oise : le prix affiché est le prix payé.",
  },
];

const FAQ = [
  {
    q: "Combien coûte un diagnostic immobilier en 2026 ?",
    a: "Comptez à partir de 99 € TTC pour un DPE seul et de 250 à 450 € TTC pour un pack vente complet sur un appartement en Île-de-France. Le prix dépend de la surface, de l'année de construction et du nombre de diagnostics à réaliser.",
  },
  {
    q: "Le prix d'un diagnostic immobilier est-il réglementé ?",
    a: "Non. Les tarifs des diagnostics immobiliers sont libres : seuls la méthode, la certification du diagnostiqueur et le contenu du rapport sont encadrés par la loi. Comparer plusieurs devis reste donc pertinent, à condition de vérifier la certification et l'assurance RC Pro.",
  },
  {
    q: "Qui paie les diagnostics immobiliers ?",
    a: "Le vendeur pour une vente, le bailleur pour une location. Les diagnostics doivent être remis à l'acquéreur ou au locataire au plus tard à la signature, et le DPE doit être disponible dès l'annonce immobilière.",
  },
  {
    q: "Peut-on payer moins cher en commandant les diagnostics séparément ?",
    a: "Non, c'est généralement l'inverse. Une visite unique mutualise le déplacement et le temps de repérage : un pack est presque toujours moins cher que le cumul des prestations commandées à l'unité.",
  },
  {
    q: "Un devis de diagnostic immobilier est-il payant ?",
    a: "Non. Chez DIAG VERITAS, le devis est gratuit, ferme et transmis sous 24 h. Il détaille chaque diagnostic, sa durée de validité et le prix TTC, sans frais annexes.",
  },
  {
    q: "Combien de temps un diagnostic reste-t-il valable ?",
    a: "10 ans pour le DPE (sauf réédition réglementaire), 3 ans pour le diagnostic électricité et gaz en vente, 6 mois pour le termites, 6 mois pour l'ERP, illimité pour l'amiante et la Loi Carrez lorsque le constat est négatif ou inchangé. Une bonne planification évite de payer deux fois.",
  },
];

export const Route = createFileRoute("/guides/prix-diagnostic-immobilier")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: "Prix diagnostic immobilier 2026 : le guide" },
      {
        property: "og:description",
        content: "Tarifs DPE, amiante, plomb, gaz, électricité et packs vente/location en Île-de-France.",
      },
      { property: "og:url", content: `${SITE_URL}${URL_PATH}` },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${URL_PATH}` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Prix d'un diagnostic immobilier en 2026 : tarifs détaillés",
          description: DESCRIPTION,
          inLanguage: "fr-FR",
          author: { "@type": "Organization", name: "DIAG VERITAS" },
          publisher: { "@id": `${SITE_URL}/#business` },
          mainEntityOfPage: `${SITE_URL}${URL_PATH}`,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([
            { name: "Accueil", href: "/" },
            { name: "Guides", href: URL_PATH },
            { name: "Prix diagnostic immobilier" },
          ]),
        ),
      },
    ],
  }),
  component: GuidePrixPage,
});

function GuidePrixPage() {
  return (
    <div>
      <section className="border-b border-gold/15 bg-card/40">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Prix diagnostic immobilier" },
            ]}
          />
          <div className="mt-6 text-xs uppercase tracking-[0.25em] text-gold">Guide 2026</div>
          <h1 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-5xl">
            Prix d'un diagnostic immobilier :<br />
            <span className="gold-gradient-text">ce qui fait varier le tarif</span>
          </h1>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">
            Vous vendez ou louez un bien en Île-de-France et cherchez à savoir combien coûte
            un diagnostic immobilier ? Voici les tarifs réels pratiqués par DIAG VERITAS,
            diagnostiqueur certifié Bureau Veritas, et les six facteurs qui font monter ou
            baisser la facture.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl text-foreground sm:text-3xl">
          Tarifs par diagnostic
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Prix TTC à partir de, pour un logement standard. Un devis ferme est établi sous 24 h
          selon la surface et l'ancienneté du bien.
        </p>
        <div className="mt-8 overflow-x-auto rounded-sm border border-gold/20">
          <table className="w-full text-left text-sm">
            <caption className="sr-only">
              Prix indicatifs des diagnostics immobiliers DIAG VERITAS
            </caption>
            <thead className="bg-card text-xs uppercase tracking-widest text-gold">
              <tr>
                <th scope="col" className="px-5 py-4">Diagnostic</th>
                <th scope="col" className="px-5 py-4">À partir de</th>
                <th scope="col" className="px-5 py-4">Validité</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gold/10">
              {DIAGNOSTICS.map((d) => (
                <tr key={d.slug} className="bg-background/60">
                  <th scope="row" className="px-5 py-4 font-normal text-foreground">
                    <Link
                      to="/diagnostics/$slug"
                      params={{ slug: d.slug }}
                      className="hover:text-gold"
                    >
                      {d.name.split("—")[0].trim()}
                    </Link>
                  </th>
                  <td className="px-5 py-4 text-gold">{d.priceFrom} €</td>
                  <td className="px-5 py-4 text-muted-foreground">{d.validity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="mt-16 font-display text-2xl text-foreground sm:text-3xl">
          Les 6 facteurs qui déterminent le prix
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {FACTORS.map((f) => (
            <div key={f.t} className="rounded-sm border border-gold/20 bg-card p-6">
              <h3 className="flex items-start gap-3 font-display text-lg text-foreground">
                <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                {f.t}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>

        <h2 className="mt-16 font-display text-2xl text-foreground sm:text-3xl">
          Combien coûte un pack complet ?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Pour une <strong className="text-foreground">vente d'appartement</strong> en
          copropriété construit avant 1997, le pack habituel réunit DPE, ERP, amiante, Loi
          Carrez, électricité et gaz : comptez en général de 350 à 450 € TTC selon la surface.
          Pour une <strong className="text-foreground">location</strong>, le pack DPE + ERP +
          Loi Boutin démarre nettement plus bas. Sur une{" "}
          <strong className="text-foreground">maison individuelle</strong>, l'absence de Loi
          Carrez est compensée par un temps de repérage plus long et, selon l'arrêté
          préfectoral, par le diagnostic termites.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          Pas sûr de la liste applicable à votre bien ? Notre{" "}
          <Link to="/simulateur" className="text-gold underline-offset-4 hover:underline">
            simulateur de diagnostics obligatoires
          </Link>{" "}
          vous la donne en 7 questions, puis prépare votre demande de devis. Vous pouvez aussi
          consulter{" "}
          <Link to="/diagnostics" className="text-gold underline-offset-4 hover:underline">
            le détail de chaque diagnostic
          </Link>{" "}
          ou la page de{" "}
          <Link to="/zones" className="text-gold underline-offset-4 hover:underline">
            votre commune d'intervention
          </Link>
          .
        </p>

        <div className="mt-16 rounded-sm border border-gold/30 bg-gradient-to-br from-card to-background p-10 text-center">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            Votre devis gratuit sous 24 h
          </h2>
          <p className="mt-3 text-muted-foreground">
            Prix ferme, sans frais de déplacement, sans engagement.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/devis"
              onClick={() => trackQuoteCta("guide:prix")}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:opacity-90"
            >
              Demander un devis
            </Link>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              onClick={() => trackCall("guide:prix")}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/50 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold/10"
            >
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/15 bg-card/40">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            Questions fréquentes sur les prix
          </h2>
          <dl className="mt-10 divide-y divide-gold/15 rounded-sm border border-gold/20 bg-card">
            {FAQ.map((f) => (
              <div key={f.q} className="p-6 sm:p-8">
                <dt className="flex items-start gap-3 font-display text-lg text-foreground">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{f.q}</span>
                </dt>
                <dd className="mt-3 pl-8 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </div>
  );
}
