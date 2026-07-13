import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && (
        <div className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl leading-tight text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">{description}</p>
      )}
      <div
        className={cn(
          "mt-6 h-px w-16 bg-gold",
          align === "center" && "mx-auto",
        )}
      />
    </div>
  );
}