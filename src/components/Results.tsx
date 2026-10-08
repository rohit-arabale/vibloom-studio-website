import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { RESULTS } from "@/data/content";

const Results = () => (
  <section className="section-pad bg-white" aria-labelledby="results-heading">
    <div className="container">
      <Reveal>
        <SectionHeading
          eyebrow="Outcomes"
          title={<span id="results-heading">Technology Should Do More Than Look Good.</span>}
          description="We measure our work by what it changes in your business."
        />
      </Reveal>
      <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {RESULTS.map(({ title, description, icon: Icon }, i) => (
          <li key={title}>
            <Reveal delay={(i % 4) * 60} className="h-full">
              <div className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:bg-white hover:shadow-card">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/15 text-brand-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-extrabold text-ink-900">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Results;
