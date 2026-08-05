import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "@/lib/diagnostics-data";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/diagnostics", label: "Diagnostics" },
  { to: "/simulateur", label: "Simulateur" },
  { to: "/zones", label: "Zones" },
  { to: "/guides", label: "Guides" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/20 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold/60 bg-background">
            <span className="font-display text-xl leading-none text-gold">DV</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide text-foreground">DIAG VERITAS</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold/80">Diagnostics certifiés</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-foreground/85 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/devis"
            className="text-sm text-foreground/85 transition-colors hover:text-gold"
            activeProps={{ className: "text-gold" }}
          >
            Devis
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className={cn(
              "hidden items-center gap-2 rounded-sm border border-gold/60 px-4 py-2 text-sm font-medium text-gold transition-all hover:bg-gold hover:text-primary-foreground sm:inline-flex",
            )}
          >
            <Phone className="h-4 w-4" /> {CONTACT.phone}
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-gold/40 text-gold lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-gold/20 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {[...NAV, { to: "/devis", label: "Demande de devis" }].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-sm px-3 py-3 text-sm text-foreground/85 hover:bg-secondary hover:text-gold"
                activeProps={{ className: "text-gold bg-secondary" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT.phoneRaw}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Appeler maintenant
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}