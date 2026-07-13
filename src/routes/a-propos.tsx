import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, Award, Users, Target, Handshake } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Diagnostiqueur immobilier certifié à Livry-Gargan | DIAG VERITAS" },
      {
        name: "description",
        content:
          "DIAG VERITAS, entreprise de diagnostics immobiliers basée à Livry-Gargan (93). Diagnostiqueur certifié Bureau Veritas, assurance RC Pro, plus de 10 ans d'expérience en Île-de-France et dans l'Oise.",
      },
      { property: "og:title", content: "À propos de DIAG VERITAS" },
      {
        property: "og:description",
        content: "Certifications, assurances et engagements de votre diagnostiqueur immobilier.",
      },
      { property: "og:url", content: "/a-propos" },
    ],
    links: [{ rel: "canonical", href: "/a-propos" }],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: Target, title: "Précision", text: "Une méthode rigoureuse à chaque étape, du repérage au rapport final." },
  { icon: Handshake, title: "Transparence", text: "Tarifs clairs, sans surprise, et rapport pédagogique remis rapidement." },
  { icon: Users, title: "Proximité", text: "Un interlocuteur unique, disponible et à l'écoute de vos contraintes." },
];

function AboutPage() {
  return (
    <div>
      <section className="border-b border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Qui sommes-nous"
            title="DIAG VERITAS, la confiance d'un diagnostic exact"
            description="Depuis plus de 10 ans, nous accompagnons particuliers, agences immobilières et notaires en Île-de-France et dans l'Oise avec la même exigence de fiabilité."
          />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-3xl text-foreground">Notre histoire</h2>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                Créée à Livry-Gargan, DIAG VERITAS est née de la volonté d'apporter aux
                propriétaires et professionnels de l'immobilier une prestation à la hauteur
                des enjeux : sécurité des occupants, valeur des biens, conformité légale.
              </p>
              <p>
                Chaque diagnostic est réalisé par un professionnel certifié, formé
                continuellement aux évolutions réglementaires (méthode 3CL-DPE 2021,
                normes NF X 46-020, arrêtés préfectoraux).
              </p>
              <p>
                Notre zone d'intervention couvre l'ensemble de la Seine-Saint-Denis, la
                région Île-de-France et le département de l'Oise.
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl text-foreground">Nos valeurs</h2>
            <ul className="mt-6 space-y-6">
              {VALUES.map((v) => {
                const Icon = v.icon;
                return (
                  <li key={v.title} className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/50 text-gold">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-display text-lg text-foreground">{v.title}</div>
                      <div className="text-sm text-muted-foreground">{v.text}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Certifications & garanties"
            title="Un cadre légal irréprochable"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Certifié Bureau Veritas",
                text: "Certification pour l'ensemble des diagnostics : DPE, amiante, plomb, électricité, gaz, termites.",
              },
              {
                icon: Award,
                title: "Accréditation COFRAC",
                text: "Organisme accrédité selon la norme NF EN ISO/IEC 17024 pour la certification de personnes.",
              },
              {
                icon: ShieldCheck,
                title: "Assurance RC Pro",
                text: "Responsabilité civile professionnelle couvrant toutes les prestations réalisées.",
              },
            ].map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-sm border border-gold/20 bg-card p-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold/50 text-gold">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-display text-xl text-foreground">{c.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 rounded-sm border border-gold/20 bg-card p-8">
            <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
              <div>
                <div className="text-xs uppercase tracking-widest text-gold">Partenaire</div>
                <h3 className="mt-2 font-display text-2xl text-foreground">Bureau Veritas</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  Leader mondial des services d'inspection et de certification, Bureau
                  Veritas certifie nos compétences de diagnostiqueur immobilier pour
                  l'ensemble de nos prestations réglementaires.
                </p>
              </div>
              <div className="flex items-center justify-center rounded-sm border border-dashed border-gold/40 bg-background p-10">
                <div className="text-center">
                  <div className="font-display text-3xl text-gold">Bureau Veritas</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    Certification n° [à compléter]
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl text-foreground sm:text-4xl">
          Discutons de votre projet
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
          Une équipe à taille humaine, un interlocuteur unique, une réponse sous 24h.
        </p>
        <div className="mt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-sm border border-gold/60 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold hover:text-primary-foreground"
          >
            Nous contacter
          </Link>
        </div>
      </section>
    </div>
  );
}