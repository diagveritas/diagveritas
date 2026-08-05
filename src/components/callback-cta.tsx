import { Link } from "@tanstack/react-router";
import { Phone, Clock, ShieldCheck, BadgeEuro } from "lucide-react";
import { CONTACT } from "@/lib/diagnostics-data";
import { trackCall, trackQuoteCta } from "@/lib/track";

/** Bloc de conversion : rappel rapide, réassurance, double appel à l'action. */
export function CallbackCta({
  source,
  title = "Besoin d'un chiffrage tout de suite ?",
  subtitle = "Appelez-nous : nous donnons un prix au téléphone en moins de 3 minutes. Vous préférez écrire ? Nous rappelons sous 1 h ouvrée.",
}: {
  source: string;
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="rounded-sm border border-gold/30 bg-gradient-to-br from-card to-background p-8 sm:p-10">
      <h2 className="font-display text-2xl text-foreground sm:text-3xl">{title}</h2>
      <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">{subtitle}</p>
      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        <a
          href={`tel:${CONTACT.phoneRaw}`}
          onClick={() => trackCall(source)}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90"
        >
          <Phone className="h-4 w-4" /> {CONTACT.phone}
        </a>
        <Link
          to="/devis"
          onClick={() => trackQuoteCta(source)}
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/50 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold/10"
        >
          Être rappelé
        </Link>
      </div>
      <ul className="mt-8 grid gap-4 border-t border-gold/20 pt-6 text-xs uppercase tracking-widest text-muted-foreground sm:grid-cols-3">
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0 text-gold" /> Rappel sous 1 h ouvrée
        </li>
        <li className="flex items-center gap-2">
          <BadgeEuro className="h-4 w-4 shrink-0 text-gold" /> Prix ferme, sans frais cachés
        </li>
        <li className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 shrink-0 text-gold" /> Certifié Bureau Veritas
        </li>
      </ul>
    </div>
  );
}
