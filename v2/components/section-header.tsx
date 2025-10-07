import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  kicker?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ title, subtitle, kicker, align = "left", className }: SectionHeaderProps) {
  const centered = align === "center";
  return (
    <div className={cn("mb-8", centered ? "text-center" : "text-left", className)}>
      {kicker ? (
        <span className="inline-flex items-center rounded-full border bg-accent/60 px-2 py-0.5 text-[11px] font-medium text-accent-foreground">
          {kicker}
        </span>
      ) : null}
      <h2 className={cn("mt-2 text-3xl font-semibold tracking-tight", centered && "mx-auto")}>
        <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle ? (
        <p className={cn("mt-2 text-sm text-muted-foreground", centered ? "mx-auto max-w-prose" : "max-w-prose")}>{subtitle}</p>
      ) : null}
      <div className={cn("mt-3 h-[2px] w-10 rounded bg-primary/30", centered && "mx-auto")} />
    </div>
  );
}

export default SectionHeader;