import { ChevronRight } from "lucide-react";

export interface Crumb {
  name: string;
  href?: string;
}

export const SITE_URL = "https://diagveritas.fr";

/** JSON-LD BreadcrumbList à injecter dans head().scripts */
export function breadcrumbJsonLd(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href ? { item: `${SITE_URL}${c.href}` } : {}),
    })),
  };
}

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Fil d'Ariane" className="text-xs text-muted-foreground">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((c, i) => (
          <li key={c.name} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight className="h-3 w-3 text-gold/60" aria-hidden="true" />}
            {c.href ? (
              <a href={c.href} className="uppercase tracking-widest hover:text-gold">
                {c.name}
              </a>
            ) : (
              <span aria-current="page" className="uppercase tracking-widest text-gold">
                {c.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
