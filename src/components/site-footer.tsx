import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { CONTACT, DIAGNOSTICS } from "@/lib/diagnostics-data";
import { CITIES } from "@/lib/cities-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/20 bg-card">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/60">
                <span className="font-display text-xl leading-none text-gold">DV</span>
              </div>
              <div className="font-display text-lg tracking-wide">DIAG VERITAS</div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Diagnostics immobiliers certifiés en Île-de-France et dans l'Oise. Fiabilité, précision, tranquillité.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-gold/80">
              <ShieldCheck className="h-4 w-4" /> Certifié Bureau Veritas
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">Diagnostics</h3>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {DIAGNOSTICS.slice(0, 6).map((d) => (
                <li key={d.slug}>
                  <Link
                    to="/diagnostics/$slug"
                    params={{ slug: d.slug }}
                    className="transition-colors hover:text-gold"
                  >
                    {d.name.split("—")[0].trim()}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/diagnostics" className="transition-colors hover:text-gold">
                  Voir tous les diagnostics →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">Zones desservies</h3>
            <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
              {CITIES.slice(0, 8).map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/diagnostiqueur-immobilier/$ville"
                    params={{ ville: c.slug }}
                    className="transition-colors hover:text-gold"
                  >
                    Diagnostiqueur {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/zones" className="transition-colors hover:text-gold">
                  Toutes les zones →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-gold">Contact</h3>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`tel:${CONTACT.phoneRaw}`} className="hover:text-gold">
                  {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-gold break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {CONTACT.address}<br />
                  {CONTACT.postalCode} {CONTACT.city}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 gold-divider" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} DIAG VERITAS. Tous droits réservés.</div>
          <div>SIRET & assurance RC Pro conformes à la législation.</div>
        </div>
      </div>
    </footer>
  );
}