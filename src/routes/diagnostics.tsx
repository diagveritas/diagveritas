import { createFileRoute, Link, Outlet, useMatches } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { DIAGNOSTICS } from "@/lib/diagnostics-data";

export const Route = createFileRoute("/diagnostics")({
  head: () => ({
    meta: [
      {
        title: "Diagnostics immobiliers Île-de-France & Oise — DPE, amiante, plomb… | DIAG VERITAS",
      },
      {
        name: "description",
        content:
          "Tous les diagnostics immobiliers obligatoires réalisés par DIAG VERITAS à Livry-Gargan et en Île-de-France : DPE, amiante, plomb, électricité, gaz, termites, ERP, Loi Boutin, Loi Carrez.",
      },
      {
        property: "og:title",
        content: "Diagnostics immobiliers en Île-de-France & Oise — DIAG VERITAS",
      },
      {
        property: "og:description",
        content: "9 diagnostics réglementaires réalisés en une seule visite. Devis gratuit.",
      },
      { property: "og:url", content: "https://diagveritas.fr/diagnostics" },
    ],
    links: [{ rel: "canonical", href: "https://diagveritas.fr/diagnostics" }],
  }),
  component: DiagnosticsLayout,
});

function DiagnosticsLayout() {
  const matches = useMatches();
  const isChild = matches.some((m) => m.routeId === "/diagnostics/$slug");
  if (isChild) return <Outlet />;
  return <DiagnosticsIndex />;
}

function DiagnosticsIndex() {
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