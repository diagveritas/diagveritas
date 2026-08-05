import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, HelpCircle } from "lucide-react";
import { Breadcrumbs, breadcrumbJsonLd, SITE_URL } from "@/components/breadcrumbs";
import { CallbackCta } from "@/components/callback-cta";
import { GUIDES, guideBySlug } from "@/lib/guides-data";
import type { Guide, GuideSection } from "@/lib/guides-data";

export const Route = createFileRoute("/guides/$slug")({
  loader: ({ params }) => {
    const guide = guideBySlug(params.slug);
    if (!guide) throw notFound();
    return { guide };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Guide introuvable | DIAG VERITAS" }, { name: "robots", content: "noindex" }],
      };
    }
    const { guide } = loaderData;
    const url = `${SITE_URL}/guides/${params.slug}`;
    return {
      meta: [
        { title: `${guide.seoTitle} | DIAG VERITAS` },
        { name: "description", content: guide.seoDescription },
        { property: "og:title", content: guide.seoTitle },
        { property: "og:description", content: guide.seoDescription },
        { property: "og:url", content: url },
        { property: "og:type", content: "article" },
        { property: "og:locale", content: "fr_FR" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: guide.seoTitle,
            description: guide.seoDescription,
            inLanguage: "fr-FR",
            author: { "@type": "Organization", name: "DIAG VERITAS" },
            publisher: { "@id": `${SITE_URL}/#business` },
            mainEntityOfPage: url,
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: guide.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", href: "/" },
              { name: "Guides", href: "/guides" },
              { name: guide.eyebrow },
            ]),
          ),
        },
      ],
    };
  },
  component: GuidePage,
});

function GuidePage() {
  const { guide } = Route.useLoaderData() as { guide: Guide };
  const others = GUIDES.filter((g) => g.slug !== guide.slug).slice(0, 3);

  return (
    <div>
      <section className="border-b border-gold/15 bg-card/40">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Guides", href: "/guides" },
              { name: guide.eyebrow },
            ]}
          />
          <div className="mt-6 text-xs uppercase tracking-[0.25em] text-gold">{guide.eyebrow}</div>
          <h1 className="mt-3 font-display text-3xl leading-tight text-foreground sm:text-5xl">
            {guide.h1}
            <br />
            <span className="gold-gradient-text">{guide.h1Accent}</span>
          </h1>
          <p className="mt-6 text-base text-muted-foreground sm:text-lg">{guide.lead}</p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {guide.sections.map((s: GuideSection) => (
          <section key={s.h} className="mt-12 first:mt-0">
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">{s.h}</h2>
            {s.p.map((p: string) => (
              <p key={p.slice(0, 40)} className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {p}
              </p>
            ))}
            {s.list && (
              <ul className="mt-6 space-y-3 rounded-sm border border-gold/20 bg-card p-6">
                {s.list.map((li: string) => (
                  <li key={li} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                    <span>{li}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <div className="mt-16">
          <CallbackCta source={`guide:${guide.slug}`} />
        </div>

        <p className="mt-10 text-sm text-muted-foreground">
          Pour savoir précisément quels diagnostics s'appliquent à votre bien, utilisez notre{" "}
          <Link to="/simulateur" className="text-gold underline-offset-4 hover:underline">
            simulateur en 7 questions
          </Link>
          , consultez{" "}
          <Link to="/guides/prix-diagnostic-immobilier" className="text-gold underline-offset-4 hover:underline">
            les prix par diagnostic
          </Link>{" "}
          ou la page de{" "}
          <Link to="/zones" className="text-gold underline-offset-4 hover:underline">
            votre commune
          </Link>
          .
        </p>
      </article>

      <section className="border-t border-gold/15 bg-card/40">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl text-foreground sm:text-3xl">Questions fréquentes</h2>
          <dl className="mt-10 divide-y divide-gold/15 rounded-sm border border-gold/20 bg-card">
            {guide.faq.map((f: { q: string; a: string }) => (
              <div key={f.q} className="p-6 sm:p-8">
                <dt className="flex items-start gap-3 font-display text-lg text-foreground">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <span>{f.q}</span>
                </dt>
                <dd className="mt-3 pl-8 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
              </div>
            ))}
          </dl>

          <h2 className="mt-16 font-display text-2xl text-foreground sm:text-3xl">
            À lire également
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {others.map((g) => (
              <li key={g.slug}>
                <Link
                  to="/guides/$slug"
                  params={{ slug: g.slug }}
                  className="block h-full rounded-sm border border-gold/20 bg-background p-5 transition-colors hover:border-gold/60"
                >
                  <div className="text-[10px] uppercase tracking-[0.22em] text-gold">{g.eyebrow}</div>
                  <div className="mt-2 font-display text-base text-foreground">{g.seoTitle}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
