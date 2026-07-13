import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { DIAGNOSTICS } from "@/lib/diagnostics-data";

export const Route = createFileRoute("/tarifs")({
  head: () => ({
    meta: [
      { title: "Tarifs diagnostics immobiliers — Île-de-France & Oise | DIAG VERITAS" },
      {
        name: "description",
        content:
          "Tarifs transparents pour tous les diagnostics immobiliers : DPE, amiante, plomb, électricité, gaz, termites, ERP, Loi Boutin, Loi Carrez. Devis gratuit en 24h.",
      },
      { property: "og:title", content: "Tarifs diagnostics immobiliers — DIAG VERITAS" },
      {
        property: "og:description",
        content: "Prix indicatifs par diagnostic, forfaits vente et location avantageux.",
      },
      { property: "og:url", content: "/tarifs" },
    ],
    links: [{ rel: "canonical", href: "/tarifs" }],
  }),
  component: TarifsPage,
});

const PACKS = [
  {
    title: "Pack Location",
    subtitle: "Bien loué",
    price: 199,
    inclus: ["DPE", "Diagnostic Électricité", "Diagnostic Gaz", "ERP", "Loi Boutin (mesurage)"],
  },
  {
    title: "Pack Vente",
    subtitle: "Le plus demandé",
    price: 349,
    highlight: true,
    inclus: [
      "DPE",
      "Amiante",
      "Plomb (CREP)",
      "Diagnostic Électricité",
      "Diagnostic Gaz",
      "ERP",
      "Loi Carrez (mesurage)",
    ],
  },
  {
    title: "Pack Vente + Termites",
    subtitle: "Zones à risque",
    price: 429,
    inclus: ["Tous les diagnostics du Pack Vente", "Diagnostic Termites inclus"],
  },
];

function TarifsPage() {
  return (
    <div>
      <section className="border-b border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tarifs transparents"
            title="Nos prix indicatifs"
            description="Les tarifs varient selon la surface, la localisation et le nombre de diagnostics groupés. Demandez votre devis personnalisé pour un prix ferme."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl text-foreground sm:text-3xl">Packs recommandés</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {PACKS.map((p) => (
            <div
              key={p.title}
              className={
                "flex flex-col rounded-sm border p-8 " +
                (p.highlight
                  ? "border-gold bg-gradient-to-br from-card to-background shadow-[var(--shadow-gold)]"
                  : "border-gold/20 bg-card")
              }
            >
              {p.highlight && (
                <div className="mb-4 inline-flex w-fit rounded-full bg-gold px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground">
                  Populaire
                </div>
              )}
              <div className="text-xs uppercase tracking-widest text-gold">{p.subtitle}</div>
              <h3 className="mt-2 font-display text-2xl text-foreground">{p.title}</h3>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-xs text-muted-foreground">à partir de</span>
                <span className="ml-1 font-display text-4xl text-gold">{p.price}€</span>
              </div>
              <ul className="mt-8 flex-1 space-y-3 text-sm">
                {p.inclus.map((i) => (
                  <li key={i} className="flex gap-2 text-foreground/90">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> {i}
                  </li>
                ))}
              </ul>
              <Link
                to="/devis"
                className="mt-8 inline-flex items-center justify-center rounded-sm border border-gold/60 py-3 text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold hover:text-primary-foreground"
              >
                Demander un devis
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">
            Tarifs à l'unité
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Prix indicatifs TTC pour un appartement standard. Devis personnalisé sur demande.
          </p>
          <div className="mt-8 overflow-hidden rounded-sm border border-gold/20">
            <table className="w-full text-left text-sm">
              <thead className="bg-secondary text-gold">
                <tr>
                  <th className="px-6 py-4 font-medium uppercase tracking-widest text-xs">
                    Diagnostic
                  </th>
                  <th className="px-6 py-4 font-medium uppercase tracking-widest text-xs">
                    Validité
                  </th>
                  <th className="px-6 py-4 text-right font-medium uppercase tracking-widest text-xs">
                    À partir de
                  </th>
                </tr>
              </thead>
              <tbody>
                {DIAGNOSTICS.map((d, i) => (
                  <tr
                    key={d.slug}
                    className={i % 2 ? "bg-card" : "bg-card/50"}
                  >
                    <td className="px-6 py-4 text-foreground">
                      <Link
                        to="/diagnostics/$slug"
                        params={{ slug: d.slug }}
                        className="hover:text-gold"
                      >
                        {d.name.split("—")[0].trim()}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">{d.validity}</td>
                    <td className="px-6 py-4 text-right font-medium text-gold">
                      {d.priceFrom}€
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">
            * Tarifs susceptibles de varier selon la surface, l'ancienneté et la localisation.
            Contactez-nous pour un devis ferme et gratuit.
          </p>
        </div>
      </section>
    </div>
  );
}