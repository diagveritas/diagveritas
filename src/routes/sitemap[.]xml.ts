import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { DIAGNOSTICS } from "@/lib/diagnostics-data";
import { CITIES } from "@/lib/cities-data";
import { GUIDES } from "@/lib/guides-data";

const BASE_URL = "https://diagveritas.fr";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const paths = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/diagnostics", priority: "0.9", changefreq: "monthly" },
          { path: "/simulateur", priority: "0.85", changefreq: "monthly" },
          { path: "/a-propos", priority: "0.6", changefreq: "yearly" },
          { path: "/contact", priority: "0.7", changefreq: "yearly" },
          { path: "/devis", priority: "0.9", changefreq: "monthly" },
          { path: "/zones", priority: "0.9", changefreq: "monthly" },
          { path: "/mentions-legales", priority: "0.2", changefreq: "yearly" },
          { path: "/guides", priority: "0.8", changefreq: "monthly" },
          {
            path: "/guides/prix-diagnostic-immobilier",
            priority: "0.85",
            changefreq: "monthly",
          },
          ...GUIDES.map((g) => ({
            path: `/guides/${g.slug}`,
            priority: "0.8",
            changefreq: "monthly" as const,
          })),
          ...DIAGNOSTICS.map((d) => ({
            path: `/diagnostics/${d.slug}`,
            priority: "0.8",
            changefreq: "monthly" as const,
          })),
          ...CITIES.map((c) => ({
            path: `/diagnostiqueur-immobilier/${c.slug}`,
            priority: "0.9",
            changefreq: "monthly" as const,
          })),
        ];

        const urls = paths
          .map(
            (e) =>
              `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
          )
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});