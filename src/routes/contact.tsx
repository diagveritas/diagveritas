import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CONTACT } from "@/lib/diagnostics-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Diagnostic immobilier Livry-Gargan | DIAG VERITAS" },
      {
        name: "description",
        content:
          "Contactez DIAG VERITAS à Livry-Gargan (93) pour vos diagnostics immobiliers en Seine-Saint-Denis, Île-de-France et Oise. Téléphone, email, plan et formulaire.",
      },
      { property: "og:title", content: "Contact — DIAG VERITAS" },
      {
        property: "og:description",
        content: "Diagnostiqueur immobilier à Livry-Gargan — Île-de-France & Oise.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Nom trop court").max(100),
  email: z.string().trim().email("Email invalide").max(255),
  phone: z.string().trim().min(6, "Téléphone invalide").max(30),
  message: z.string().trim().min(5, "Message trop court").max(1000),
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        errs[i.path[0] as string] = i.message;
      });
      setErrors(errs);
      return;
    }
    setErrors({});
    const subject = encodeURIComponent(`Contact site — ${parsed.data.name}`);
    const body = encodeURIComponent(
      `Nom: ${parsed.data.name}\nEmail: ${parsed.data.email}\nTéléphone: ${parsed.data.phone}\n\n${parsed.data.message}`,
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div>
      <section className="border-b border-gold/15 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Contact"
            title="Parlons de votre projet"
            description="Téléphone, email ou formulaire — nous vous répondons sous 24h."
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">Coordonnées</h2>
            <ul className="mt-8 space-y-6">
              <li className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/50 text-gold">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold">Téléphone</div>
                  <a
                    href={`tel:${CONTACT.phoneRaw}`}
                    className="mt-1 block text-lg text-foreground hover:text-gold"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/50 text-gold">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold">Email</div>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-1 block break-all text-lg text-foreground hover:text-gold"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/50 text-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold">Adresse</div>
                  <div className="mt-1 text-lg text-foreground">
                    {CONTACT.address}
                    <br />
                    {CONTACT.postalCode} {CONTACT.city}
                  </div>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/50 text-gold">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-gold">Horaires</div>
                  <div className="mt-1 text-lg text-foreground">{CONTACT.hours}</div>
                </div>
              </li>
            </ul>

            <div className="mt-10 overflow-hidden rounded-sm border border-gold/20">
              <iframe
                title="Localisation DIAG VERITAS Livry-Gargan"
                src="https://www.google.com/maps?q=14+rue+Eugene+Masse+93190+Livry-Gargan&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block border-0"
              />
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
              Envoyer un message
            </h2>
            {sent ? (
              <div className="mt-8 rounded-sm border border-gold/40 bg-card p-8 text-center">
                <div className="text-lg text-gold">Merci !</div>
                <p className="mt-2 text-sm text-muted-foreground">
                  Votre client mail vient de s'ouvrir. Nous vous répondons sous 24h.
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
                <Field label="Nom & prénom" name="name" error={errors.name} />
                <Field label="Email" name="email" type="email" error={errors.email} />
                <Field label="Téléphone" name="phone" type="tel" error={errors.phone} />
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="mt-2 w-full rounded-sm border border-gold/30 bg-background px-4 py-3 text-sm text-foreground focus:border-gold focus:outline-none"
                  />
                  {errors.message && (
                    <div className="mt-1 text-xs text-destructive">{errors.message}</div>
                  )}
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:opacity-90"
                >
                  <Send className="h-4 w-4" /> Envoyer
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
}) {
  return (
    <div>
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