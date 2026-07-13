import { DIAGNOSTICS, type Diagnostic } from "./diagnostics-data";

export type Operation = "vente" | "location";
export type PropertyType = "appartement" | "maison";
export type YesNo = "oui" | "non";
export type YesNoUnknown = "oui" | "non" | "inconnu";
export type GasAnswer = "oui" | "non" | "aucun";

export interface SimulatorAnswers {
  operation: Operation;
  propertyType: PropertyType;
  year: number;
  copro: YesNo;
  elec15: YesNoUnknown;
  gas15: GasAnswer;
  termites: YesNoUnknown;
}

export interface RequiredDiagnostic {
  diagnostic: Diagnostic;
  reason: string;
  status: "required" | "toVerify";
}

function bySlug(slug: string): Diagnostic {
  const d = DIAGNOSTICS.find((x) => x.slug === slug);
  if (!d) throw new Error(`Unknown diagnostic slug: ${slug}`);
  return d;
}

export function computeDiagnostics(a: SimulatorAnswers): RequiredDiagnostic[] {
  const results: RequiredDiagnostic[] = [];
  const currentYear = new Date().getFullYear();
  const isOld = currentYear - a.year >= 15;

  results.push({
    diagnostic: bySlug("dpe"),
    reason: "Obligatoire pour toute vente ou location de logement.",
    status: "required",
  });
  results.push({
    diagnostic: bySlug("erp"),
    reason: "État des Risques et Pollutions requis dans toutes les zones concernées.",
    status: "required",
  });

  if (a.year < 1949) {
    results.push({
      diagnostic: bySlug("plomb"),
      reason: `Bien construit avant 1949 (${a.year}) — CREP obligatoire.`,
      status: "required",
    });
  }

  if (a.year < 1997) {
    results.push({
      diagnostic: bySlug("amiante"),
      reason: `Permis de construire probablement antérieur au 01/07/1997 (${a.year}).`,
      status: "required",
    });
  }

  if (a.elec15 === "oui") {
    results.push({
      diagnostic: bySlug("electricite"),
      reason: "Installation électrique de plus de 15 ans.",
      status: "required",
    });
  } else if (a.elec15 === "inconnu" && isOld) {
    results.push({
      diagnostic: bySlug("electricite"),
      reason: "Bien de plus de 15 ans — à vérifier lors de la visite.",
      status: "toVerify",
    });
  }

  if (a.gas15 === "oui") {
    results.push({
      diagnostic: bySlug("gaz"),
      reason: "Installation gaz de plus de 15 ans.",
      status: "required",
    });
  }

  if (a.operation === "location") {
    results.push({
      diagnostic: bySlug("loi-boutin"),
      reason: "Mesurage Loi Boutin requis pour toute location non meublée.",
      status: "required",
    });
  }

  if (a.operation === "vente" && a.copro === "oui") {
    results.push({
      diagnostic: bySlug("loi-carrez"),
      reason: "Vente d'un lot en copropriété — mesurage Loi Carrez obligatoire.",
      status: "required",
    });
  }

  if (a.termites === "oui") {
    results.push({
      diagnostic: bySlug("termites"),
      reason: "Commune sous arrêté préfectoral termites.",
      status: "required",
    });
  } else if (a.termites === "inconnu") {
    results.push({
      diagnostic: bySlug("termites"),
      reason: "À vérifier auprès de la mairie — zone préfectorale possible.",
      status: "toVerify",
    });
  }

  return results;
}

export function summarize(a: SimulatorAnswers): string {
  const op = a.operation === "vente" ? "Vente" : "Location";
  const bien = a.propertyType === "appartement" ? "Appartement" : "Maison";
  const copro = a.copro === "oui" ? "copropriété" : "hors copropriété";
  return `${op} · ${bien} · ${a.year} · ${copro}`;
}