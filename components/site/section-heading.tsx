import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  invert?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
  className,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "max-w-3xl space-y-5",
        centered && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "font-mono text-[0.72rem] font-semibold uppercase tracking-[0.32em]",
          invert ? "text-white/54" : "text-[#355884]/56"
        )}
      >
        {eyebrow}
      </div>
      <div className="space-y-4">
        <h2
          className={cn(
            "font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-5xl lg:text-[3.65rem]",
            invert ? "text-white" : "text-foreground"
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "max-w-2xl text-base leading-8 md:text-lg",
            centered && "mx-auto",
            invert ? "text-white/68" : "text-foreground/70"
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
