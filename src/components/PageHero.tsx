import type { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
}

/** Compact dark hero used at the top of inner pages. */
const PageHero = ({ eyebrow, title, description }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-ink-950" aria-labelledby="page-heading">
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute -right-24 -top-24 h-[380px] w-[380px] rounded-full bg-brand-500/20 blur-[110px]" />
      <div className="absolute inset-0 bg-grid-faint opacity-50 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" style={{ backgroundSize: "56px 56px" }} />
    </div>
    <div className="container relative py-14 sm:py-20 lg:py-24">
      <div className="max-w-3xl animate-fade-up">
        <span className="eyebrow-dark">{eyebrow}</span>
        <h1 id="page-heading" className="mt-5 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">{description}</p>
      </div>
    </div>
  </section>
);

export default PageHero;
