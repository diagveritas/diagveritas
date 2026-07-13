import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Send, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CONTACT, DIAGNOSTICS } from "@/lib/diagnostics-data";

export const Route = createFileRoute("/devis")({
  head: () => ({
    meta: [
      { title: "Demande de devis — Diagnostic immobilier Île-de-France & Oise | DIAG VERITAS" },
      {
        name: "description",
        content:
          "Recevez votre devis diagnostic immobilier gratuit sous 24h. DPE, amiante, plomb, électricité, gaz, termites, ERP, Loi Boutin, Loi Carrez à Livry-Gargan et Île-de-France.",
      },
      { property: "og:title", content: "Demande de devis — DIAG VERITAS" },
      {
        property: "og:description",
        content: "Devis gratuit et réponse en moins de 24h.",
      },
      { property: "og:url", content: "/devis" },
    ],
    links: [{ rel: "canonical", href: "/devis" }],
  }),
  component: DevisPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nom requis").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(6, "Téléphone invalide").max(30),
  propertyType: z.string().min(1, "Type de bien requis"),
  surface: z.string().max(20).optional(),
  address: z.string().trim().min(5, "Adresse requise").max(255),
  diagnostics: z.array(z.string()).min(1, "Sélectionnez au moins un diagnostic"),
  message: z.string().max(1000).optional(),
});

function DevisPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [preselected, setPreselected] = useState<Set<string> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      setPreselected(new Set());
      return;
    }
    const params = new URLSearchParams(window.location.search);
    const raw = params.get("diagnostics");
    const slugs = raw ? raw.split(",").map((s) => s.trim()).filter(Boolean) : [];
    setPreselected(
      new Set(
        DIAGNOSTICS.filter((d) => slugs.includes(d.slug)).map((d) =>
          d.name.split("—")[0].trim(),
        ),
      ),
    );
  }, []);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data = {
      name: (fd.get("name") || "") as string,
      email: (fd.get("email") || "") as string,
      phone: (fd.get("phone") || "") as string,
      propertyType: (fd.get("propertyType") || "") as string,
      surface: (fd.get("surface") || "") as string,
      address: (fd.get("address") || "") as string,
      diagnostics: fd.getAll("diagnostics") as string[],
      message: (fd.get("message") || "") as string,
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setErrors({});
    const d = parsed.data;
    const subject = encodeURIComponent(`Demande de devis — ${d.name}`);
    const body = encodeURIComponent(
      [
        `Nom: ${d.name}`,
        `Email: ${d.email}`,
        `Téléphone: ${d.phone}`,
        ``,
        `Type de bien: ${d.propertyType}`,
        `Surface: ${d.surface || "non précisée"}`,
        `Adresse: ${d.address}`,
        ``,
        `Diagnostics souhaités:`,
        ...d.diagnostics.map((x) => ` - ${x}`),
        ``,
        `Message:`,
        d.message || "(aucun)",
      ].join("\n"),
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div>
      <section className="border-b border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Devis gratuit"
            title="Demande de devis"
            description="Complétez le formulaire ci-dessous, nous vous transmettons votre devis personnalisé sous 24h."
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        {sent ? (
          <div className="rounded-sm border border-gold/40 bg-card p-12 text-center">
            <ShieldCheck className="mx-auto h-12 w-12 text-gold" />
            <h2 className="mt-6 font-display text-2xl text-foreground">
              Demande envoyée !
            </h2>
            <p className="mt-3 text-muted-foreground">
              Votre client mail vient de s'ouvrir. Nous vous répondons sous 24h.
            </p>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="space-y-8 rounded-sm border border-gold/20 bg-card p-6 sm:p-10"
            noValidate
          >
            <div>
              <h3 className="font-display text-lg text-gold">Vos coordonnées</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Field label="Nom & prénom" name="name" error={errors.name} />
                <Field label="Téléphone" name="phone" type="tel" error={errors.phone} />
                <Field
                  label="Email"
                  name="email"
                  type="email"
                  error={errors.email}
                  className="sm:col-span-2"
                />
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg text-gold">Votre bien</h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold">
                    Type de bien
                  </label>
                  <select
                    name="propertyType"
                    defaultValue=""
                    className="mt-2 w-full rounded-sm border border-gold/30 bg-background px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none"
                  >
                    <option value="">Sélectionnez</option>
                    <option>Appartement</option>
                    <option>Maison</option>
                    <option>Local commercial</option>
                    <option>Immeuble</option>
                    <option>Autre</option>
                  </select>
                  {errors.propertyType && (
                    <div className="mt-1 text-xs text-destructive">{errors.propertyType}</div>
                  )}
                </div>
                <Field label="Surface (m²)" name="surface" error={errors.surface} />
                <Field
                  label="Adresse du bien"
                  name="address"
                  error={errors.address}
                  className="sm:col-span-2"
                />
              </div>
            </div>

            <div>
              <h3 className="font-display text-lg text-gold">Diagnostics souhaités</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {DIAGNOSTICS.map((d) => (
                  <label
                    key={`${d.slug}-${preselected ? "ready" : "init"}`}
                    className="flex cursor-pointer items-start gap-3 rounded-sm border border-gold/20 bg-background p-4 text-sm transition-colors hover:border-gold/60"
                  >
                    <input
                      type="checkbox"
                      name="diagnostics"
                      value={d.name.split("—")[0].trim()}
                      defaultChecked={preselected?.has(d.name.split("—")[0].trim()) ?? false}
                      className="mt-0.5 h-4 w-4 accent-[var(--gold)]"
                    />
                    <span className="text-foreground/90">{d.name.split("—")[0].trim()}</span>
                  </label>
                ))}
              </div>
              {errors.diagnostics && (
                <div className="mt-2 text-xs text-destructive">{errors.diagnostics}</div>
              )}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-gold">
                Message (optionnel)
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Précisez vos délais, contraintes, etc."
                className="mt-2 w-full rounded-sm border border-gold/30 bg-background px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:opacity-90"
            >
              <Send className="h-4 w-4" /> Envoyer la demande
            </button>
            <p className="text-center text-xs text-muted-foreground">
              Vos données ne sont utilisées que pour vous recontacter, jamais transmises.
            </p>
          </form>
        )}
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="block text-xs uppercase tracking-widest text-gold">{label}</label>
      <input
        name={name}
        type={type}
        className="mt-2 w-full rounded-sm border border-gold/30 bg-background px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none"
      />
      {error && <div className="mt-1 text-xs text-destructive">{error}</div>}
    </div>
  );
}