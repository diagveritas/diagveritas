import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ShieldCheck, Award, Clock, MapPin, ArrowRight, Star, Compass, HelpCircle } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { SectionHeading } from "@/components/section-heading";
import { CallbackCta } from "@/components/callback-cta";
import { GUIDES } from "@/lib/guides-data";
import { CONTACT, DIAGNOSTICS } from "@/lib/diagnostics-data";
import { CITIES } from "@/lib/cities-data";
import { trackCall, trackQuoteCta } from "@/lib/track";

const HOME_FAQ = [
  {
    q: "Quels diagnostics immobiliers sont obligatoires pour vendre en Île-de-France ?",
    a: "Pour une vente, le DPE et l'ERP sont systématiques. S'y ajoutent le diagnostic électrique et le diagnostic gaz si les installations ont plus de 15 ans, l'amiante si le permis de construire est antérieur au 1er juillet 1997, le CREP plomb si le bien est antérieur à 1949, la Loi Carrez en copropriété, et le diagnostic termites dans les communes classées par arrêté préfectoral. Notre simulateur gratuit établit la liste exacte pour votre bien.",
  },
  {
    q: "Combien coûte un diagnostic immobilier chez DIAG VERITAS ?",
    a: "Un DPE démarre à 99 € TTC et un diagnostic amiante à 89 € TTC. Les packs vente ou location, qui regroupent plusieurs diagnostics en une seule visite, sont nettement plus économiques que des prestations séparées. Le devis est gratuit, ferme et transmis sous 24 h, sans frais de déplacement en Île-de-France et dans l'Oise.",
  },
  {
    q: "En combien de temps intervenez-vous et recevez-vous le rapport ?",
    a: "Nous intervenons sous 48 h ouvrées sur l'ensemble de notre zone. Les rapports sont transmis par e-mail au format PDF, souvent le jour même de la visite pour les diagnostics simples (DPE, Loi Carrez, Loi Boutin), et sous 24 à 48 h pour les diagnostics avec prélèvements.",
  },
  {
    q: "Vos diagnostics sont-ils opposables devant un notaire ?",
    a: "Oui. DIAG VERITAS est certifié par Bureau Veritas Certification, organisme accrédité COFRAC, et couvert par une assurance responsabilité civile professionnelle conforme à l'article L. 271-6 du Code de la construction et de l'habitation. Nos rapports sont donc directement recevables par les notaires, agences et locataires.",
  },
  {
    q: "Intervenez-vous dans l'Oise et à Paris sans frais supplémentaires ?",
    a: "Oui. Livry-Gargan, la Seine-Saint-Denis, la Seine-et-Marne, le Val-d'Oise, Paris et le sud de l'Oise sont couverts sans surcoût de déplacement. Chaque commune desservie dispose d'une page dédiée détaillant les diagnostics à prévoir localement.",
  },
  {
    q: "Combien de temps mon DPE reste-t-il valable ?",
    a: "Un DPE réalisé depuis le 1er juillet 2021 est valable 10 ans. Les DPE antérieurs ne sont plus valides et doivent être refaits selon la méthode 3CL-DPE 2021. Un DPE est également à refaire après des travaux modifiant significativement la performance énergétique du logement.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Diagnostic immobilier Livry-Gargan (93) — DPE dès 99 €",
      },
      {
        name: "description",
        content:
          "Diagnostiqueur certifié Bureau Veritas : DPE dès 99 €, amiante, plomb, gaz, électricité, ERP en Île-de-France et Oise. Intervention 48 h, devis gratuit sous 24 h.",
      },
      {
        property: "og:title",
        content: "Diagnostic immobilier Livry-Gargan (93) — DPE dès 99 €",
      },
      {
        property: "og:description",
        content:
          "DPE, amiante, plomb, gaz, électricité en Île-de-France et Oise. Diagnostiqueur certifié Bureau Veritas. Devis gratuit sous 24 h.",
      },
      { property: "og:url", content: "https://diagveritas.fr/" },
    ],
    links: [
      { rel: "canonical", href: "https://diagveritas.fr/" },
      { rel: "preload", as: "image", href: heroImage, fetchPriority: "high" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: HOME_FAQ.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

const REASONS = [
  {
    icon: ShieldCheck,
    title: "Certifié Bureau Veritas",
    text: "Toutes nos certifications sont à jour et vérifiables auprès des organismes accrédités COFRAC.",
  },
  {
    icon: Award,
    title: "Assurance RC Pro",
    text: "Une assurance responsabilité civile professionnelle couvre chacune de nos interventions.",
  },
  {
    icon: Clock,
    title: "Intervention sous 48h",
    text: "Rapports remis rapidement, souvent le jour même de la visite pour ne pas retarder votre projet.",
  },
  {
    icon: MapPin,
    title: "Île-de-France & Oise",
    text: "Livry-Gargan, Seine-Saint-Denis, Paris, banlieue et département de l'Oise couverts sans surcoût.",
  },
];

const REVIEWS = [
  {
    name: "Sophie L.",
    role: "Vendeuse — Livry-Gargan",
    text: "Prestation impeccable et très rapide. Les rapports étaient clairs, le diagnostiqueur pédagogue. Je recommande vivement DIAG VERITAS.",
  },
  {
    name: "Marc D.",
    role: "Agent immobilier — Aulnay-sous-Bois",
    text: "Un partenaire fiable pour tous nos mandats en Seine-Saint-Denis. Ponctuels, professionnels, et toujours de bon conseil.",
  },
  {
    name: "Isabelle R.",
    role: "Bailleur — Chantilly (60)",
    text: "J'ai fait appel à DIAG VERITAS pour un pack location. Excellent rapport qualité-prix et suivi irréprochable.",
  },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Façade haussmannienne éclairée — DIAG VERITAS diagnostics immobiliers"
            width={1920}
            height={1280}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/85 to-background" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-gold">
              <ShieldCheck className="h-3.5 w-3.5" /> Certifié Bureau Veritas
            </div>
            <h1 className="font-display text-4xl leading-[1.05] text-foreground sm:text-6xl md:text-7xl">
              Diagnostics immobiliers
              <br />
              <span className="gold-gradient-text">certifiés & rapides</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              DIAG VERITAS accompagne particuliers, agences et notaires en Île-de-France et
              dans l'Oise. DPE, amiante, plomb, électricité, gaz, termites, ERP, Loi Boutin
              et Loi Carrez — réalisés avec précision par un diagnostiqueur certifié.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/devis"
                onClick={() => trackQuoteCta("home:hero")}
                className="group inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:opacity-90"
              >
                Demander un devis
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={`tel:${CONTACT.phoneRaw}`}
                onClick={() => trackCall("home:hero")}
                className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/50 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-gold transition-colors hover:bg-gold/10"
              >
                <Phone className="h-4 w-4" /> {CONTACT.phone}
              </a>
            </div>

            <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                ["10+", "années d'expérience"],
                ["2 500+", "diagnostics réalisés"],
                ["4.9/5", "satisfaction clients"],
                ["48h", "délai moyen"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl text-gold">{n}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS BAR */}
      <section className="border-y border-gold/20 bg-card/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 py-8 sm:px-6 lg:px-8">
          {[
            "Certifié Bureau Veritas",
            "Accrédité COFRAC",
            "Assurance RC Pro AXA",
            "Norme NF X 46-020",
            "Méthode 3CL-DPE 2021",
          ].map((label) => (
            <div
              key={label}
              className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground"
            >
              <ShieldCheck className="h-4 w-4 text-gold" /> {label}
            </div>
          ))}
        </div>
      </section>

      {/* DIAGNOSTICS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <SectionHeading
          eyebrow="Nos prestations"
          title="Tous les diagnostics obligatoires"
          description="Neuf diagnostics réglementaires, réalisés en une seule visite pour simplifier vos démarches de vente ou de location."
        />
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DIAGNOSTICS.map((d) => {
            const Icon = d.icon;
            return (
              <Link
                key={d.slug}
                to="/diagnostics/$slug"
                params={{ slug: d.slug }}
                className="group relative flex flex-col rounded-sm border border-gold/15 bg-card p-8 transition-all hover:border-gold/60 hover:shadow-[var(--shadow-gold)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-gold/40 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-xl text-foreground">
                  {d.name.split("—")[0].trim()}
                </h3>
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

      {/* SIMULATEUR CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-sm border border-gold/40 bg-gradient-to-br from-card via-background to-card p-8 sm:p-12">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-gold">
                <Compass className="h-4 w-4" /> Simulateur gratuit
              </div>
              <h3 className="font-display text-2xl text-foreground sm:text-4xl">
                Pas sûr des diagnostics obligatoires <br className="hidden sm:block" />
                <span className="gold-gradient-text">pour votre bien ?</span>
              </h3>
              <p className="mt-4 text-sm text-muted-foreground sm:text-base">
                Répondez à 7 questions simples et obtenez instantanément la liste des
                diagnostics requis par la réglementation française.
              </p>
            </div>
            <Link
              to="/simulateur"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90"
            >
              Trouver mes diagnostics obligatoires
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* POURQUOI */}
      <section className="border-y border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <SectionHeading
            eyebrow="Pourquoi nous choisir"
            title="La confiance, notre première mission"
          />
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {REASONS.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 text-gold">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg text-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AVIS */}
      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <SectionHeading eyebrow="Ils nous font confiance" title="Avis de nos clients" />
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {REVIEWS.map((r) => (
            <figure
              key={r.name}
              className="rounded-sm border border-gold/15 bg-card p-8"
            >
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-foreground/90">
                « {r.text} »
              </blockquote>
              <figcaption className="mt-6">
                <div className="text-sm font-medium text-foreground">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-gold/15 bg-background">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Questions fréquentes"
            title="Diagnostic immobilier : vos questions"
            description="Les réponses aux questions que nos clients nous posent le plus souvent avant une vente ou une location."
          />
          <dl className="mt-12 divide-y divide-gold/15 rounded-sm border border-gold/20 bg-card">
            {HOME_FAQ.map((f) => (
              <div key={f.q} className="p-6 sm:p-8">
                <dt className="flex items-start gap-3 font-display text-lg text-foreground">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{f.q}</span>
                </dt>
                <dd className="mt-3 pl-8 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap gap-4 text-xs uppercase tracking-widest">
            <Link to="/guides/prix-diagnostic-immobilier" className="text-gold hover:opacity-80">
              Guide : prix d'un diagnostic immobilier →
            </Link>
            <Link to="/diagnostics" className="text-gold hover:opacity-80">
              Tous les diagnostics obligatoires →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {GUIDES.slice(0, 3).map((g) => (
              <Link
                key={g.slug}
                to="/guides/$slug"
                params={{ slug: g.slug }}
                className="rounded-sm border border-gold/20 bg-card p-5 transition-colors hover:border-gold/60"
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{g.eyebrow}</div>
                <div className="mt-2 font-display text-base text-foreground">
                  {g.h1} {g.h1Accent}
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center text-xs uppercase tracking-widest">
            <Link to="/guides" className="text-gold hover:opacity-80">
              Tous nos guides pratiques →
            </Link>
          </div>
          <div className="mt-14">
            <CallbackCta source="home:callback" />
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="border-y border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Zones d'intervention"
            title="Île-de-France & Oise"
            description="Nous intervenons sans surcoût dans toute la région parisienne et le sud de l'Oise."
          />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {CITIES.map((c) => (
              <Link
                key={c.slug}
                to="/diagnostiqueur-immobilier/$ville"
                params={{ ville: c.slug }}
                className="rounded-full border border-gold/30 px-4 py-2 text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-gold/70 hover:text-gold"
              >
                {c.name}
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/zones"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:opacity-80"
            >
              Voir toutes les zones d'intervention <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="rounded-sm border border-gold/30 bg-gradient-to-br from-card to-background p-10 text-center sm:p-16">
          <h2 className="font-display text-3xl text-foreground sm:text-5xl">
            Un projet immobilier ?<br />
            <span className="gold-gradient-text">Parlons-en dès aujourd'hui.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground">
            Devis gratuit sous 24h, rendez-vous rapide, tarifs transparents.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/devis"
              onClick={() => trackQuoteCta("home:footer")}
              className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:opacity-90"
            >
              Demande de devis
            </Link>
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              onClick={() => trackCall("home:footer")}
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
