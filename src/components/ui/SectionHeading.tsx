import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em]",
          align === "center" && "justify-center",
          light ? "text-gold-300" : "text-gold-600",
        )}
      >
        <span className="h-px w-8 bg-current/60" />
        {eyebrow}
        {align === "center" && <span className="h-px w-8 bg-current/60" />}
      </div>
      <h2
        className={cn(
          "font-display mt-4 text-balance text-4xl leading-[1.1] sm:text-5xl",
          light ? "text-cream-50" : "text-ink-900",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-cream-100/80" : "text-ink-700/90",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
