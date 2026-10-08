import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ButtonLink from "@/components/ButtonLink";
import { PROCESS_STEPS } from "@/data/content";
import { CTA } from "@/config/site";

const Process = () => (
  <section className="section-pad bg-slate-50" aria-labelledby="process-heading">
    <div className="container">
      <Reveal>
        <SectionHeading eyebrow="How We Work" title={<span id="process-heading">A simple process, built around your business.</span>} />
      </Reveal>

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {PROCESS_STEPS.map((step, i) => (
          <li key={step.title}>
            <Reveal delay={i * 70} className="h-full">
              <div className="relative h-full rounded-3xl border border-slate-200 bg-white p-6 transition-colors hover:border-brand-500/50">
                <span className="font-display text-sm font-extrabold text-brand-700">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-lg font-extrabold uppercase tracking-[0.1em] text-ink-900">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{step.description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>

      <Reveal className="mt-10 flex justify-center">
        <ButtonLink to="/contact" className="bg-ink-900 text-white shadow-none hover:bg-ink-800">
          {CTA.buildFuture}
        </ButtonLink>
      </Reveal>
    </div>
  </section>
);

export default Process;
