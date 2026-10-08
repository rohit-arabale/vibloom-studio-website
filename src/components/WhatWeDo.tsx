import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { PILLARS } from "@/data/services";

const WhatWeDo = () => (
  <section className="section-pad bg-white" aria-labelledby="what-we-do-heading">
    <div className="container">
      <Reveal>
        <SectionHeading
          eyebrow="What Vibloom Does"
          title={<span id="what-we-do-heading">Everything Your Business Needs to Grow Digitally.</span>}
          description="From your first website to advanced automation, analytics, marketing and AI, Vibloom brings the digital tools, technology and expertise your business needs under one roof."
        />
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map(({ title, description, icon: Icon }, i) => (
          <li key={title}>
            <Reveal delay={i * 70} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-glow">
                <span className="absolute right-6 top-5 font-display text-5xl font-extrabold text-slate-100 transition-colors group-hover:text-brand-500/15" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-brand-400">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 text-lg font-extrabold uppercase tracking-[0.12em] text-ink-900">{title}</h3>
                <p className="relative mt-2 text-[15px] leading-relaxed text-slate-600">{description}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhatWeDo;
