import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CITIES } from "@/lib/cities-data";
import { Breadcrumbs, breadcrumbJsonLd } from "@/components/breadcrumbs";

const SITE_URL = "https://diagveritas.fr";

export const Route = createFileRoute("/zones")({
  head: () => {
    const url = `${SITE_URL}/zones`;
    const title = "Zones d'intervention Île-de-France | DIAG VERITAS";
    const description =
      "Diagnostiqueur immobilier certifié à Livry-Gargan intervenant en Île-de-France (93, 77, 95) et dans l'Oise (60). Une page dédiée par commune.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", href: "/" },
              { name: "Zones d'intervention" },
            ]),
          ),
        },
      ],
    };
  },
  component: ZonesPage,
});

function ZonesPage() {
  const byDept = CITIES.reduce<Record<string, typeof CITIES>>((acc, c) => {
    (acc[c.department] ||= []).push(c);
    return acc;
  }, {});

  return (
    <div>
      <section className="border-b border-gold/20 bg-gradient-to-b from-card/60 to-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[{ name: "Accueil", href: "/" }, { name: "Zones d'intervention" }]}
          />
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold">
            <MapPin className="h-3.5 w-3.5" /> Zones d'intervention
          </div>
          <h1 className="mt-6 font-display text-4xl leading-tight text-foreground sm:text-5xl md:text-6xl">
            Diagnostiqueur immobilier
            <br />
            <span className="gold-gradient-text">dans toute votre région</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base text-muted-foreground sm:text-lg">
            DIAG VERITAS intervient sans surcoût de déplacement dans plus de 15 villes
            d'Île-de-France, de Seine-et-Marne et de l'Oise. Cliquez sur votre commune
            pour découvrir notre expertise locale, les diagnostics obligatoires et nos tarifs.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        {Object.entries(byDept).map(([dept, cities]) => (
          <div key={dept} className="mb-16 last:mb-0">
            <SectionHeading align="left" eyebrow={`Département — ${cities[0].departmentCode}`} title={dept} />
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {cities.map((c) => (
                <Link
                  key={c.slug}
                  to="/diagnostiqueur-immobilier/$ville"
                  params={{ ville: c.slug }}
                  className="group rounded-sm border border-gold/20 bg-card p-6 transition-all hover:border-gold/60 hover:shadow-[var(--shadow-gold)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="font-display text-xl text-foreground">{c.name}</div>
                    <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {c.postalCode} · {c.population}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">{c.intro}</p>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}