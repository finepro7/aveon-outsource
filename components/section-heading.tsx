import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  subtitle,
  title,
  description,
  alignment = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-3xl space-y-4",
        alignment === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {subtitle && (
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-lg">{description}</p>
      )}
    </div>
  );
}