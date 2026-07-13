import { createFileRoute } from "@tanstack/react-router";
import { Simulator } from "@/components/simulator";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/simulateur")({
  head: () => ({
    meta: [
      {
        title:
          "Simulateur — Quels diagnostics immobiliers sont obligatoires ? | DIAG VERITAS",
      },
      {
        name: "description",
        content:
          "Simulateur gratuit : découvrez en 2 minutes les diagnostics immobiliers obligatoires pour votre vente ou location en Île-de-France et Oise. DPE, amiante, plomb, électricité, gaz, termites, Loi Boutin, Loi Carrez.",
      },
      {
        property: "og:title",
        content: "Simulateur diagnostics immobiliers obligatoires — DIAG VERITAS",
      },
      {
        property: "og:description",
        content:
          "En 7 questions simples, identifiez les diagnostics obligatoires pour votre bien.",
      },
      { property: "og:url", content: "/simulateur" },
    ],
    links: [{ rel: "canonical", href: "/simulateur" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Simulateur diagnostics obligatoires — DIAG VERITAS",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        }),
      },
    ],
  }),
  component: SimulateurPage,
});

function SimulateurPage() {
  return (
    <div>
      <section className="border-b border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <SectionHeading
            eyebrow="Simulateur gratuit"
            title="Quels diagnostics sont obligatoires ?"
            description="Répondez à 7 questions simples pour identifier en quelques secondes les diagnostics immobiliers requis par la réglementation française."
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <Simulator />
      </section>
    </div>
  );
}