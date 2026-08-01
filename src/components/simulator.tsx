import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Phone, RotateCcw, ShieldCheck, AlertTriangle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/diagnostics-data";
import {
  computeDiagnostics,
  summarize,
  type SimulatorAnswers,
  type Operation,
  type PropertyType,
  type YesNo,
  type YesNoUnknown,
  type GasAnswer,
} from "@/lib/simulator-logic";

type PartialAnswers = Partial<SimulatorAnswers>;

const CURRENT_YEAR = new Date().getFullYear();

const STEPS = [
  "operation",
  "propertyType",
  "year",
  "copro",
  "elec15",
  "gas15",
  "termites",
] as const;

type StepKey = (typeof STEPS)[number];

export function Simulator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<PartialAnswers>({});
  const [done, setDone] = useState(false);

  const currentKey: StepKey = STEPS[step];

  const canNext = useMemo(() => {
    const v = answers[currentKey];
    if (currentKey === "year") {
      const n = Number(v);
      return Number.isFinite(n) && n >= 1800 && n <= CURRENT_YEAR;
    }
    return v !== undefined;
  }, [answers, currentKey]);

  function pick<K extends StepKey>(key: K, value: SimulatorAnswers[K]) {
    setAnswers((a) => ({ ...a, [key]: value }));
  }

  function next() {
    if (!canNext) return;
    if (step === STEPS.length - 1) {
      setDone(true);
    } else {
      setStep((s) => s + 1);
    }
  }

  function prev() {
    if (step > 0) setStep((s) => s - 1);
  }

  function reset() {
    setAnswers({});
    setStep(0);
    setDone(false);
  }

  if (done) {
    return <Result answers={answers as SimulatorAnswers} onReset={reset} />;
  }

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <div className="rounded-sm border border-gold/25 bg-card p-6 sm:p-10">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs uppercase tracking-widest text-muted-foreground">
          <span>Étape {step + 1} / {STEPS.length}</span>
          <span className="text-gold">{Math.round(progress)}%</span>
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-secondary">
          <div
            className="h-full bg-gold transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div key={currentKey} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
        <Step
          stepKey={currentKey}
          answers={answers}
          onPick={pick}
          onAdvance={next}
        />
      </div>

      <div className="mt-10 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <button
          type="button"
          onClick={prev}
          disabled={step === 0}
          className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold/40 px-6 py-3 text-sm uppercase tracking-widest text-foreground/80 transition-colors hover:bg-gold/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" /> Précédent
        </button>
        <button
          type="button"
          onClick={next}
          disabled={!canNext}
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-gold)] transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-30 disabled:shadow-none"
        >
          {step === STEPS.length - 1 ? "Voir mes diagnostics" : "Suivant"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

function Step({
  stepKey,
  answers,
  onPick,
  onAdvance,
}: {
  stepKey: StepKey;
  answers: PartialAnswers;
  onPick: <K extends StepKey>(key: K, value: SimulatorAnswers[K]) => void;
  onAdvance: () => void;
}) {
  switch (stepKey) {
    case "operation":
      return (
        <QuestionChoice
          title="Vente ou location ?"
          subtitle="Le type d'opération conditionne plusieurs diagnostics."
          value={answers.operation}
          options={[
            { value: "vente" as Operation, label: "Vente" },
            { value: "location" as Operation, label: "Location" },
          ]}
          onPick={(v) => onPick("operation", v)}
          onAdvance={onAdvance}
        />
      );
    case "propertyType":
      return (
        <QuestionChoice
          title="Appartement ou maison ?"
          value={answers.propertyType}
          options={[
            { value: "appartement" as PropertyType, label: "Appartement" },
            { value: "maison" as PropertyType, label: "Maison" },
          ]}
          onPick={(v) => onPick("propertyType", v)}
          onAdvance={onAdvance}
        />
      );
    case "year":
      return (
        <div>
          <QuestionTitle title="Année de construction du bien" subtitle="Elle détermine les diagnostics amiante et plomb." />
          <div className="mx-auto mt-8 max-w-xs">
            <label htmlFor="sim-year" className="sr-only">
              Année de construction du bien
            </label>
            <input
              id="sim-year"
              type="number"
              inputMode="numeric"
              aria-describedby="sim-year-help"
              min={1800}
              max={CURRENT_YEAR}
              placeholder="ex. 1978"
              value={answers.year ?? ""}
              onChange={(e) => {
                const n = Number(e.target.value);
                onPick("year", Number.isFinite(n) ? n : (undefined as never));
              }}
              className="w-full rounded-sm border border-gold/40 bg-background px-4 py-4 text-center font-display text-3xl text-foreground focus:border-gold focus:outline-none"
            />
            <p id="sim-year-help" className="mt-3 text-center text-xs text-muted-foreground">
              Entre 1800 et {CURRENT_YEAR}
            </p>
          </div>
        </div>
      );
    case "copro":
      return (
        <QuestionChoice
          title="Le bien est-il en copropriété ?"
          subtitle="Nécessaire pour déterminer la Loi Carrez."
          value={answers.copro}
          options={[
            { value: "oui" as YesNo, label: "Oui" },
            { value: "non" as YesNo, label: "Non" },
          ]}
          onPick={(v) => onPick("copro", v)}
          onAdvance={onAdvance}
        />
      );
    case "elec15":
      return (
        <QuestionChoice
          title="L'installation électrique a-t-elle plus de 15 ans ?"
          value={answers.elec15}
          options={[
            { value: "oui" as YesNoUnknown, label: "Oui" },
            { value: "non" as YesNoUnknown, label: "Non" },
            { value: "inconnu" as YesNoUnknown, label: "Je ne sais pas" },
          ]}
          onPick={(v) => onPick("elec15", v)}
          onAdvance={onAdvance}
        />
      );
    case "gas15":
      return (
        <QuestionChoice
          title="L'installation de gaz a-t-elle plus de 15 ans ?"
          value={answers.gas15}
          options={[
            { value: "oui" as GasAnswer, label: "Oui" },
            { value: "non" as GasAnswer, label: "Non" },
            { value: "aucun" as GasAnswer, label: "Pas de gaz" },
          ]}
          onPick={(v) => onPick("gas15", v)}
          onAdvance={onAdvance}
        />
      );
    case "termites":
      return (
        <QuestionChoice
          title="Le bien est-il dans une commune sous arrêté préfectoral termites ?"
          subtitle="Information disponible en mairie ou en préfecture."
          value={answers.termites}
          options={[
            { value: "oui" as YesNoUnknown, label: "Oui" },
            { value: "non" as YesNoUnknown, label: "Non" },
            { value: "inconnu" as YesNoUnknown, label: "Je ne sais pas" },
          ]}
          onPick={(v) => onPick("termites", v)}
          onAdvance={onAdvance}
        />
      );
  }
}

function QuestionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <h3 className="font-display text-2xl text-foreground sm:text-3xl">{title}</h3>
      {subtitle && (
        <p className="mt-3 text-sm text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}

function QuestionChoice<T extends string>({
  title,
  subtitle,
  value,
  options,
  onPick,
  onAdvance,
}: {
  title: string;
  subtitle?: string;
  value: T | undefined;
  options: { value: T; label: string }[];
  onPick: (v: T) => void;
  onAdvance: () => void;
}) {
  return (
    <div>
      <QuestionTitle title={title} subtitle={subtitle} />
      <div
        role="radiogroup"
        aria-label={title}
        className={cn(
          "mx-auto mt-8 grid max-w-2xl gap-3",
          options.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3",
        )}
      >
        {options.map((opt) => {
          const selected = value === opt.value;
          return (
            <button
              key={opt.value}
              type="button"
              role="radio"
              aria-checked={selected}
              onClick={() => {
                onPick(opt.value);
                setTimeout(onAdvance, 180);
              }}
              className={cn(
                "group relative flex items-center justify-center gap-2 rounded-sm border px-6 py-6 text-base font-medium transition-all",
                selected
                  ? "border-gold bg-gold/10 text-gold shadow-[var(--shadow-gold)]"
                  : "border-gold/25 bg-background text-foreground/85 hover:border-gold/60 hover:bg-gold/5",
              )}
            >
              {selected && <CheckCircle2 className="h-4 w-4" />}
              {opt.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Result({ answers, onReset }: { answers: SimulatorAnswers; onReset: () => void }) {
  const items = useMemo(() => computeDiagnostics(answers), [answers]);
  const required = items.filter((i) => i.status === "required");
  const toVerify = items.filter((i) => i.status === "toVerify");
  const slugs = required.map((i) => i.diagnostic.slug).join(",");

  return (
    <div className="animate-in fade-in duration-500">
      <div className="rounded-sm border border-gold/30 bg-card p-6 sm:p-10">
        <div className="flex flex-col gap-4 border-b border-gold/20 pb-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-xs uppercase tracking-[0.28em] text-gold">Votre résultat</div>
            <h3 className="mt-2 font-display text-2xl text-foreground sm:text-3xl">
              Vos diagnostics obligatoires
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">{summarize(answers)}</p>
          </div>
          <button
            type="button"
            onClick={onReset}
            className="inline-flex items-center gap-2 self-start rounded-sm border border-gold/40 px-4 py-2 text-xs uppercase tracking-widest text-foreground/80 hover:bg-gold/10"
          >
            <RotateCcw className="h-3.5 w-3.5" /> Recommencer
          </button>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {required.map(({ diagnostic: d, reason }) => {
            const Icon = d.icon;
            return (
              <Link
                key={d.slug}
                to="/diagnostics/$slug"
                params={{ slug: d.slug }}
                className="group flex gap-4 rounded-sm border border-gold/20 bg-background p-5 transition-all hover:border-gold/60 hover:shadow-[var(--shadow-gold)]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/40 text-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-display text-base text-foreground">
                    {d.name.split("—")[0].trim()}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{reason}</p>
                  <div className="mt-2 text-[11px] uppercase tracking-widest text-gold">
                    à partir de {d.priceFrom}€
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {toVerify.length > 0 && (
          <div className="mt-8">
            <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-gold/80">
              <AlertTriangle className="h-4 w-4" /> À vérifier
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {toVerify.map(({ diagnostic: d, reason }) => {
                const Icon = d.icon;
                return (
                  <div
                    key={d.slug}
                    className="flex gap-4 rounded-sm border border-dashed border-gold/30 bg-background p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-sm border border-gold/30 text-gold/80">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="font-display text-base text-foreground">
                        {d.name.split("—")[0].trim()}
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">{reason}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="mt-8 rounded-sm border border-gold/30 bg-gold/5 p-5 text-sm text-foreground/85">
          <div className="flex gap-3">
            <ShieldCheck className="h-5 w-5 shrink-0 text-gold" />
            <p>
              Ce résultat est fourni à titre indicatif. Les obligations peuvent varier selon
              les caractéristiques du bien et la réglementation en vigueur. Contactez
              DIAG VERITAS pour une vérification gratuite et un devis personnalisé.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={`/devis${slugs ? `?diagnostics=${encodeURIComponent(slugs)}` : ""}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-widest text-primary-foreground shadow-[var(--shadow-gold)] hover:opacity-90"
          >
            Demander un devis
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`tel:${CONTACT.phoneRaw}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm border border-gold/50 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold/10"
          >
            <Phone className="h-4 w-4" /> Appeler maintenant
          </a>
        </div>
      </div>
    </div>
  );
}