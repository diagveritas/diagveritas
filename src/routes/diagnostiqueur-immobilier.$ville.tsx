import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Phone, MapPin, ShieldCheck, Clock, Building2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CITIES, cityBySlug } from "@/lib/cities-data";
import { CONTACT, DIAGNOSTICS } from "@/lib/diagnostics-data";

const SITE_URL = "https://diagveritas.lovable.app";

export const Route = createFileRoute("/diagnostiqueur-immobilier/$ville")({
  loader: ({ params }) => {
    const city = cityBySlug(params.ville);
    if (!city) throw notFound();
    return { city };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Ville non trouvée | DIAG VERITAS" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { city } = loaderData;
    const url = `${SITE_URL}/diagnostiqueur-immobilier/${params.ville}`;
    const title = `Diagnostiqueur immobilier ${city.name} (${city.postalCode}) — DPE, amiante, plomb | DIAG VERITAS`;
    const description = `Diagnostic immobilier à ${city.name} : DPE, amiante, plomb, électricité, gaz, termites, ERP, Loi Boutin & Carrez. Diagnostiqueur certifié Bureau Veritas, intervention sous 48h. Devis gratuit.`;

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { name: "geo.placename", content: city.name },
        { name: "geo.region", content: `FR-${city.departmentCode}` },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_FR" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": `${url}#business`,
            name: `DIAG VERITAS — Diagnostiqueur immobilier ${city.name}`,
            image: `${SITE_URL}/favicon.ico`,
            url,
            telephone: CONTACT.phoneRaw,
            email: CONTACT.email,
            priceRange: "€€",
            address: {
              "@type": "PostalAddress",
              streetAddress: CONTACT.address,
              postalCode: CONTACT.postalCode,
              addressLocality: CONTACT.city,
              addressRegion: "Île-de-France",
              addressCountry: "FR",
            },
            areaServed: {
              "@type": "City",
              name: city.name,
              address: {
                "@type": "PostalAddress",
                postalCode: city.postalCode,
                addressLocality: city.name,
                addressRegion: city.department,
                addressCountry: "FR",
              },
            },
            openingHours: "Mo-Sa 08:00-19:00",
            sameAs: [`${SITE_URL}`],
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Diagnostic immobilier",
            name: `Diagnostic immobilier à ${city.name}`,
            description,
            provider: { "@type": "LocalBusiness", name: "DIAG VERITAS", telephone: CONTACT.phoneRaw },
            areaServed: { "@type": "City", name: city.name },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Diagnostics obligatoires",
              itemListElement: DIAGNOSTICS.map((d) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: d.name.split("—")[0].trim() },
                priceCurrency: "EUR",
                price: d.priceFrom,
              })),
            },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
              { "@type": "ListItem", position: 2, name: "Zones", item: `${SITE_URL}/zones` },
              { "@type": "ListItem", position: 3, name: city.name, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: CityPage,
});

function CityPage() {
  const { city } = Route.useLoaderData();
  const nearby = CITIES.filter((c) => c.slug !== city.slug)
    .sort((a, b) => Math.abs(a.distanceKm - city.distanceKm) - Math.abs(b.distanceKm - city.distanceKm))
    .slice(0, 6);

  return (
    <div>
      {/* HERO */}
      <section className="relative border-b border-gold/20 bg-gradient-to-b from-card/60 to-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
            <Link to="/" className="hover:text-gold">Accueil</Link>
            <span>/</span>
            <Link to="/zones" className="hover:text-gold">Zones</Link>
            <span>/</span>
            <span className="text-gold">{city.name}</span>
          </nav>
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold">
            <MapPin className="h-3.5 w-3.5" /> {city.name} ({city.postalCode}) — {city.department}
          </div>
          <h1 className="mt-6 font-display text-4xl leading-[1.05] text-foreground sm:text-5xl md:text-6xl">
            Diagnostiqueur immobilier
            <br />
            <span className="gold-gradient-text">à {city.name}</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base text-muted-foreground sm:text-lg">{city.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/devis"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90"
            >
              Devis gratuit pour {city.name} <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/50 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold/10"
            >
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </a>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              [<ShieldCheck className="h-4 w-4" key="s" />, "Certifié Bureau Veritas"],
              [<Clock className="h-4 w-4" key="c" />, "Intervention sous 48h"],
              [<MapPin className="h-4 w-4" key="m" />, `${city.distanceKm} km de notre siège`],
              [<Building2 className="h-4 w-4" key="b" />, city.population],
            ].map(([icon, label], i) => (
              <div key={i} className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                <span className="text-gold">{icon}</span> {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SectionHeading
              align="left"
              eyebrow="Notre expertise locale"
              title={`Diagnostic immobilier à ${city.name}`}
            />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{city.context}</p>
              <p><strong className="text-foreground">Parc immobilier concerné :</strong> {city.properties}</p>
              <p className="rounded-sm border border-gold/30 bg-card p-5 text-sm">
                <strong className="text-gold">À noter à {city.name} :</strong> {city.focus}
              </p>
            </div>
            <h3 className="mt-10 font-display text-xl text-foreground">Quartiers couverts</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {city.neighborhoods.map((q) => (
                <li
                  key={q}
                  className="rounded-full border border-gold/25 px-3 py-1.5 text-xs uppercase tracking-widest text-muted-foreground"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-sm border border-gold/30 bg-card p-6">
            <h3 className="font-display text-lg text-foreground">Diagnostics à {city.name}</h3>
            <ul className="mt-4 space-y-3">
              {DIAGNOSTICS.map((d) => (
                <li key={d.slug}>
                  <Link
                    to="/diagnostics/$slug"
                    params={{ slug: d.slug }}
                    className="flex items-start gap-2 text-sm text-muted-foreground hover:text-gold"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>
                      {d.name.split("—")[0].trim()}{" "}
                      <span className="text-xs text-gold">dès {d.priceFrom}€</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/devis"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-4 py-3 text-xs font-semibold uppercase tracking-widest text-primary-foreground hover:opacity-90"
            >
              Devis {city.name}
            </Link>
          </aside>
        </div>
      </section>

      {/* NEARBY */}
      <section className="border-t border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Villes voisines"
            title="Nous intervenons également autour de vous"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nearby.map((c) => (
              <Link
                key={c.slug}
                to="/diagnostiqueur-immobilier/$ville"
                params={{ ville: c.slug }}
                className="group flex items-center justify-between rounded-sm border border-gold/20 bg-background p-5 transition-all hover:border-gold/60"
              >
                <div>
                  <div className="font-display text-lg text-foreground">{c.name}</div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {c.postalCode} · {c.department}
                  </div>
                </div>
                <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="rounded-sm border border-gold/30 bg-gradient-to-br from-card to-background p-10 text-center sm:p-14">
          <h2 className="font-display text-3xl text-foreground sm:text-4xl">
            Diagnostic immobilier à {city.name} ?<br />
            <span className="gold-gradient-text">Devis gratuit sous 24h.</span>
          </h2>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/devis"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:opacity-90"
            >
              Demander un devis
            </Link>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/50 px-8 py-4 text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold/10"
            >
              <Phone className="h-4 w-4" /> Appeler maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}