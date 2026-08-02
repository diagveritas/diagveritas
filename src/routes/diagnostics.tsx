import { createFileRoute, Outlet } from "@tanstack/react-router";

// Route de layout pure : aucune balise head ici, sinon les pages enfants
// hériteraient d'un second <link rel="canonical"> (les links sont concaténés).
export const Route = createFileRoute("/diagnostics")({
  component: () => <Outlet />,
});
  return (
    <div>
      <section className="border-b border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos prestations"
            title="Diagnostics immobiliers obligatoires"
            description="Une expertise complète, réalisée par un diagnostiqueur certifié Bureau Veritas."
          />
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
      </section>
    </div>
  );
}