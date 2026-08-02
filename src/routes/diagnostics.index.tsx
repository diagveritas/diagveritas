import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, FileText } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { DIAGNOSTICS } from "@/lib/diagnostics-data";
import { CITIES } from "@/lib/cities-data";
import { Breadcrumbs, breadcrumbJsonLd, SITE_URL } from "@/components/breadcrumbs";

const URL_PAGE = `${SITE_URL}/diagnostics`;
const TITLE = "Diagnostics immobiliers obligatoires | DIAG VERITAS";
const DESCRIPTION =
  "DPE, amiante, plomb, électricité, gaz, termites, ERP, Loi Boutin et Loi Carrez en Île-de-France et dans l'Oise. Diagnostiqueur certifié Bureau Veritas.";

export const Route = createFileRoute("/diagnostics/")({
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
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Diagnostics immobiliers obligatoires — DIAG VERITAS",
          itemListElement: DIAGNOSTICS.map((d, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: d.name.split("—")[0].trim(),
            url: `${SITE_URL}/diagnostics/${d.slug}`,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbJsonLd([{ name: "Accueil", href: "/" }, { name: "Diagnostics" }]),
        ),
      },
    ],
  }),
  component: DiagnosticsIndex,
});

function DiagnosticsIndex() {
  const topCities = CITIES.slice(0, 12);

  return (
    <div>
      <section className="border-b border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Diagnostics" }]} />
          <div className="mt-8">
            <SectionHeading
              eyebrow="Nos prestations"
              title="Diagnostics immobiliers obligatoires"
              description="Une expertise complète, réalisée par un diagnostiqueur certifié Bureau Veritas, en Île-de-France et dans l'Oise."
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIAGNOSTICS.map((d) => {
            const Icon = d.icon;
            return (
              <Link
                key={d.slug}
                to="/diagnostics/$slug"
                params={{ slug: d.slug }}
                className="group flex flex-col rounded-sm border border-gold/15 bg-card p-8 transition-all hover:border-gold/60 hover:shadow-[var(--shadow-gold)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold/40 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-6 font-display text-xl text-foreground">
                  {d.name.split("—")[0].trim()}
                </h2>
                <p className="mt-3 flex-1 text-sm text-muted-foreground">{d.short}</p>
                <div className="mt-6 flex items-center justify-between text-xs uppercase tracking-widest">
                  <span className="text-gold">à partir de {d.priceFrom}€</span>
                  <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* MAILLAGE INTERNE */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2">
          <Link
            to="/simulateur"
            className="group flex items-start gap-4 rounded-sm border border-gold/25 bg-card p-6 transition-colors hover:border-gold/60"
          >
            <Compass className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <span>
              <span className="block font-display text-lg text-foreground">
                Quels diagnostics sont obligatoires pour mon bien ?
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                Simulateur gratuit — réponse en 7 questions.
              </span>
            </span>
          </Link>
          <Link
            to="/guides/prix-diagnostic-immobilier"
            className="group flex items-start gap-4 rounded-sm border border-gold/25 bg-card p-6 transition-colors hover:border-gold/60"
          >
            <FileText className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <span>
              <span className="block font-display text-lg text-foreground">
                Prix d'un diagnostic immobilier en 2026
              </span>
              <span className="mt-1 block text-sm text-muted-foreground">
                Tarifs détaillés par diagnostic et par pack.
              </span>
            </span>
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="font-display text-xl text-foreground">
            Nos diagnostics, ville par ville
          </h2>
          <ul className="mt-5 flex flex-wrap gap-2">
            {topCities.map((c) => (
              <li key={c.slug}>
                <Link
                  to="/diagnostiqueur-immobilier/$ville"
                  params={{ ville: c.slug }}
                  className="inline-block rounded-full border border-gold/25 px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-gold/70 hover:text-gold"
                >
                  {c.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/zones"
                className="inline-block rounded-full border border-gold/50 px-3 py-1.5 text-xs uppercase tracking-widest text-gold"
              >
                Toutes les villes
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
