import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, Check, Phone, ArrowLeft } from "lucide-react";
import { CONTACT, DIAGNOSTICS } from "@/lib/diagnostics-data";

export const Route = createFileRoute("/diagnostics/$slug")({
  loader: ({ params }) => {
    const diag = DIAGNOSTICS.find((d) => d.slug === params.slug);
    if (!diag) throw notFound();
    return { diag };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Diagnostic introuvable — DIAG VERITAS" }, { name: "robots", content: "noindex" }] };
    }
    const { diag } = loaderData;
    return {
      meta: [
        { title: diag.seoTitle },
        { name: "description", content: diag.seoDescription },
        { property: "og:title", content: diag.seoTitle },
        { property: "og:description", content: diag.seoDescription },
        { property: "og:url", content: `/diagnostics/${diag.slug}` },
        { property: "og:type", content: "article" },
      ],
      links: [{ rel: "canonical", href: `/diagnostics/${diag.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: diag.name,
            description: diag.description,
            provider: { "@type": "LocalBusiness", name: "DIAG VERITAS" },
            areaServed: ["Île-de-France", "Seine-Saint-Denis", "Oise"],
            offers: {
              "@type": "Offer",
              price: diag.priceFrom,
              priceCurrency: "EUR",
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: diag.priceFrom,
                priceCurrency: "EUR",
              },
            },
          }),
        },
      ],
    };
  },
  component: DiagnosticDetail,
  notFoundComponent: DiagNotFound,
});

function DiagNotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-32 text-center">
      <h1 className="font-display text-4xl text-foreground">Diagnostic introuvable</h1>
      <p className="mt-4 text-muted-foreground">Ce diagnostic n'existe pas dans notre catalogue.</p>
      <Link
        to="/diagnostics"
        className="mt-8 inline-flex items-center gap-2 text-gold hover:opacity-80"
      >
        <ArrowLeft className="h-4 w-4" /> Retour aux diagnostics
      </Link>
    </div>
  );
}

function DiagnosticDetail() {
  const { diag } = Route.useLoaderData();
  const Icon = diag.icon;
  const others = DIAGNOSTICS.filter((d) => d.slug !== diag.slug).slice(0, 3);

  return (
    <div>
      <section className="border-b border-gold/15 bg-card/40">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <Link
            to="/diagnostics"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:opacity-80"
          >
            <ArrowLeft className="h-3 w-3" /> Tous les diagnostics
          </Link>
          <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm border border-gold/50 text-gold">
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-gold">Diagnostic</div>
              <h1 className="mt-2 font-display text-3xl leading-tight text-foreground sm:text-5xl">
                {diag.name}
              </h1>
            </div>
          </div>
          <p className="mt-8 max-w-3xl text-base text-muted-foreground sm:text-lg">
            {diag.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            ["Tarif", `à partir de ${diag.priceFrom}€`],
            ["Validité", diag.validity],
            ["Obligation", diag.obligation],
          ].map(([k, v]) => (
            <div
              key={k}
              className="rounded-sm border border-gold/20 bg-card p-6"
            >
              <div className="text-xs uppercase tracking-widest text-gold">{k}</div>
              <div className="mt-2 text-lg text-foreground">{v}</div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            Ce que comprend la prestation
          </h2>
          <ul className="mt-8 space-y-4">
          {diag.details.map((line: string) => (
              <li key={line} className="flex gap-3 text-foreground/90">
                <Check className="mt-1 h-5 w-5 shrink-0 text-gold" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-16 rounded-sm border border-gold/30 bg-gradient-to-br from-card to-background p-10 text-center">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            Besoin d'un devis pour ce diagnostic ?
          </h2>
          <p className="mt-3 text-muted-foreground">Réponse sous 24h, sans engagement.</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/devis"
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:opacity-90"
            >
              Demander un devis
            </Link>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/50 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold/10"
            >
              <Phone className="h-4 w-4" /> {CONTACT.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">Autres diagnostics</h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {others.map((d) => {
              const OtherIcon = d.icon;
              return (
                <Link
                  key={d.slug}
                  to="/diagnostics/$slug"
                  params={{ slug: d.slug }}
                  className="group flex items-center gap-4 rounded-sm border border-gold/15 bg-card p-6 transition-all hover:border-gold/60"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold/40 text-gold">
                    <OtherIcon className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-foreground">{d.name.split("—")[0].trim()}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gold transition-transform group-hover:translate-x-0.5" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}