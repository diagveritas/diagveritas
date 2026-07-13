import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/diagnostics-data";

export function MobileCallButton() {
  return (
    <a
      href={`tel:${CONTACT.phoneRaw}`}
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-gold px-5 py-3 font-medium text-primary-foreground shadow-[0_10px_40px_-10px_oklch(0.78_0.13_85/0.6)] sm:hidden"
      aria-label="Appeler DIAG VERITAS"
    >
      <Phone className="h-5 w-5" /> Appeler
    </a>
  );
}