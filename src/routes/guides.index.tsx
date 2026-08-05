import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs, breadcrumbJsonLd, SITE_URL } from "@/components/breadcrumbs";
import { SectionHeading } from "@/components/section-heading";
import { CallbackCta } from "@/components/callback-cta";
import { GUIDES } from "@/lib/guides-data";

const TITLE = "Guides diagnostic immobilier : vente, location, DPE";
const DESCRIPTION =
  "Guides pratiques d'un diagnostiqueur certifié : diagnostics obligatoires pour vendre ou louer, DPE et passoires thermiques, validité des diagnostics, amiante avant travaux, prix.";

export const Route = createFileRoute("/guides/")({
  head: () => ({
    meta: [
      { title: `${TITLE} | DIAG VERITAS` },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: `${SITE_URL}/guides` },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/guides` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([{ name: "Accueil", href: "/" }, { name: "Guides" }]),
        ),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Guides diagnostic immobilier",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Prix d'un diagnostic immobilier",
              url: `${SITE_URL}/guides/prix-diagnostic-immobilier`,
            },
            ...GUIDES.map((g, i) => ({
              "@type": "ListItem",
              position: i + 2,
              name: g.seoTitle,
              url: `${SITE_URL}/guides/${g.slug}`,
            })),
          ],
        }),
      },
    ],
  }),
  component: GuidesIndex,
});

function GuidesIndex() {
  return (
    <div>
      <section className="border-b border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Guides" }]} />
          <h1 className="mt-6 font-display text-3xl leading-tight text-foreground sm:text-5xl">
            Guides du diagnostic immobilier
          </h1>
          <p className="mt-6 max-w-3xl text-base text-muted-foreground sm:text-lg">
            Obligations, délais, validités, prix et pièges à éviter : tout ce qu'il faut savoir
            avant de vendre, de louer ou d'engager des travaux, expliqué par un diagnostiqueur
            certifié Bureau Veritas intervenant en Île-de-France et dans l'Oise.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading align="left" eyebrow="Tous les guides" title="Nos guides pratiques" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            to="/guides/prix-diagnostic-immobilier"
            className="group flex h-full flex-col rounded-sm border border-gold/20 bg-card p-6 transition-colors hover:border-gold/60"
          >
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold">Tarifs 2026</div>
            <h2 className="mt-3 font-display text-xl text-foreground">
              Prix d'un diagnostic immobilier
            </h2>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">
              Tarifs par diagnostic, coût d'un pack vente ou location, et les six facteurs qui
              font varier la facture.
            </p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
              Lire le guide <ArrowRight className="h-3.5 w-3.5" />
            </span>
          </Link>
          {GUIDES.map((g) => (
            <Link
              key={g.slug}
              to="/guides/$slug"
              params={{ slug: g.slug }}
              className="group flex h-full flex-col rounded-sm border border-gold/20 bg-card p-6 transition-colors hover:border-gold/60"
            >
              <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{g.eyebrow}</div>
              <h2 className="mt-3 font-display text-xl text-foreground">
                {g.h1} {g.h1Accent}
              </h2>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{g.seoDescription}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold">
                Lire le guide <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-16">
          <CallbackCta source="guides:index" />
        </div>
      </section>
    </div>
  );
}
