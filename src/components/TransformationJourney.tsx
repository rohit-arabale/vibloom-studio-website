import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { JOURNEY_STEPS } from "@/data/content";

const TransformationJourney = () => (
  <section className="section-pad relative overflow-hidden bg-ink-900" aria-labelledby="journey-heading">
    <div className="pointer-events-none absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-brand-500/10 blur-[120px]" aria-hidden="true" />
    <div className="container relative">
      <Reveal>
        <SectionHeading
          tone="dark"
          eyebrow="Digital Transformation Journey"
          title={<span id="journey-heading">From manual to connected, in six steps.</span>}
          description="A clear path from where your business is today to a modern, automated and growth-oriented digital business."
        />
      </Reveal>

      <ol
        className="relative mt-14 grid gap-9 before:absolute before:bottom-6 before:left-[1.4rem] before:top-6 before:w-px before:bg-gradient-to-b before:from-brand-400/60 before:to-sky2/20 lg:grid-cols-6 lg:gap-5 lg:before:bottom-auto lg:before:left-8 lg:before:right-8 lg:before:top-[1.4rem] lg:before:h-px lg:before:w-auto lg:before:bg-gradient-to-r"
      >
        {JOURNEY_STEPS.map((step, i) => (
          <li key={step.title} className="relative pl-16 lg:pl-0">
            <Reveal delay={i * 80}>
              <span className="absolute left-0 top-0 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-400/40 bg-ink-800 font-display text-sm font-extrabold text-brand-300 shadow-glow lg:relative">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-lg font-extrabold uppercase tracking-[0.1em] text-white lg:mt-5">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default TransformationJourney;
