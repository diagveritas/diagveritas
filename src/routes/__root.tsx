import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { MobileCallButton } from "@/components/mobile-call";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Diagnostic immobilier Livry-Gargan, Seine-Saint-Denis & Île-de-France | DIAG VERITAS" },
      {
        name: "description",
        content:
          "DIAG VERITAS, diagnostiqueur immobilier certifié Bureau Veritas à Livry-Gargan. DPE, amiante, plomb, électricité, gaz, termites, ERP, Loi Boutin, Loi Carrez en Île-de-France et Oise. Devis gratuit.",
      },
      { name: "author", content: "DIAG VERITAS" },
      { property: "og:title", content: "Diagnostic immobilier Livry-Gargan, Seine-Saint-Denis & Île-de-France | DIAG VERITAS" },
      {
        property: "og:description",
        content:
          "DIAG VERITAS, diagnostiqueur immobilier certifié Bureau Veritas à Livry-Gargan. DPE, amiante, plomb, électricité, gaz, termites, ERP, Loi Boutin, Loi Carrez en Île-de-France et Oise. Devis gratuit.",
      },
      { property: "og:site_name", content: "DIAG VERITAS" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Diagnostic immobilier Livry-Gargan, Seine-Saint-Denis & Île-de-France | DIAG VERITAS" },
      { name: "twitter:description", content: "DIAG VERITAS, diagnostiqueur immobilier certifié Bureau Veritas à Livry-Gargan. DPE, amiante, plomb, électricité, gaz, termites, ERP, Loi Boutin, Loi Carrez en Île-de-France et Oise. Devis gratuit." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Fn9TM3HyYPaZr71XAIETM0iPwRQ2/social-images/social-1783969386076-file_00000000d61871fdac69d623da5a6388.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/Fn9TM3HyYPaZr71XAIETM0iPwRQ2/social-images/social-1783969386076-file_00000000d61871fdac69d623da5a6388.webp" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "ProfessionalService"],
          "@id": "https://diagveritas.fr/#business",
          name: "DIAG VERITAS",
          alternateName: "Diag Veritas Diagnostic Immobilier",
          url: "https://diagveritas.fr",
          logo: "https://diagveritas.fr/favicon.ico",
          image: "https://diagveritas.fr/favicon.ico",
          description:
            "Diagnostics immobiliers certifiés en Île-de-France et dans l'Oise : DPE, amiante, plomb, électricité, gaz, termites, ERP, Loi Boutin, Loi Carrez.",
          telephone: "+33672297362",
          email: "contact.diagveritas@gmail.com",
          address: {
            "@type": "PostalAddress",
            streetAddress: "14 rue Eugène Massé",
            postalCode: "93190",
            addressLocality: "Livry-Gargan",
            addressRegion: "Île-de-France",
            addressCountry: "FR",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 48.9186,
            longitude: 2.5384,
          },
          priceRange: "€€",
          areaServed: [
            { "@type": "AdministrativeArea", name: "Seine-Saint-Denis" },
            { "@type": "AdministrativeArea", name: "Seine-et-Marne" },
            { "@type": "AdministrativeArea", name: "Val-d'Oise" },
            { "@type": "AdministrativeArea", name: "Île-de-France" },
            { "@type": "AdministrativeArea", name: "Oise" },
          ],
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "08:00",
              closes: "19:00",
            },
          ],
          knowsAbout: [
            "DPE", "Diagnostic amiante", "CREP plomb", "Diagnostic électricité",
            "Diagnostic gaz", "Diagnostic termites", "ERP", "Loi Boutin", "Loi Carrez",
            "PPPT", "DTG", "DPE collectif", "RAAT", "RAAD"
          ],
          hasCredential: [
            { "@type": "EducationalOccupationalCredential", name: "Certification Bureau Veritas" },
            { "@type": "EducationalOccupationalCredential", name: "Accréditation COFRAC" }
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": "https://diagveritas.fr/#website",
          url: "https://diagveritas.fr",
          name: "DIAG VERITAS",
          inLanguage: "fr-FR",
          publisher: { "@id": "https://diagveritas.fr/#business" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <MobileCallButton />
    </QueryClientProvider>
  );
}
