import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { WHY_POINTS } from "@/data/content";

const WhyVibloom = () => (
  <section className="section-pad bg-white" aria-labelledby="why-heading">
    <div className="container">
      <Reveal>
        <SectionHeading eyebrow="Why Vibloom" title={<span id="why-heading">Why Businesses Choose Vibloom</span>} />
      </Reveal>

      <ul className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_POINTS.map(({ title, description, icon: Icon }, i) => (
          <li key={title}>
            <Reveal delay={i * 60}>
              <div className="flex gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white text-brand-700 shadow-soft">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-xs font-extrabold tracking-[0.14em] text-brand-700">{String(i + 1).padStart(2, "0")}</p>
                  <h3 className="mt-1 text-lg font-extrabold text-ink-900">{title}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{description}</p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default WhyVibloom;
