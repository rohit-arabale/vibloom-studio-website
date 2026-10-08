import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}

const SectionHeading = ({ eyebrow, title, description, align = "center", tone = "light", className }: SectionHeadingProps) => (
  <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
    {eyebrow && <span className={tone === "dark" ? "eyebrow-dark" : "eyebrow-light"}>{eyebrow}</span>}
    <h2
      className={cn(
        "mt-4 text-3xl font-extrabold leading-[1.12] sm:text-4xl lg:text-[2.75rem]",
        tone === "dark" ? "text-white" : "text-ink-900"
      )}
    >
      {title}
    </h2>
    {description && (
      <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", tone === "dark" ? "text-slate-300" : "text-slate-600")}>
        {description}
      </p>
    )}
  </div>
);

export default SectionHeading;
