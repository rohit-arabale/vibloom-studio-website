import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ButtonLink from "@/components/ButtonLink";
import { SOLUTIONS } from "@/data/content";

const Solutions = () => (
  <section id="solutions" className="section-pad scroll-mt-20 bg-white" aria-labelledby="solutions-heading">
    <div className="container">
      <Reveal>
        <SectionHeading
          eyebrow="Solutions"
          title={<span id="solutions-heading">Solutions built around business outcomes.</span>}
          description="Services are the tools. Solutions are how we combine them to solve a real business problem."
        />
      </Reveal>

      <ul className="mt-12 grid gap-6 lg:grid-cols-2">
        {SOLUTIONS.map(({ id, title, summary, icon: Icon, includes, outcome }, i) => (
          <li key={id}>
            <Reveal delay={(i % 2) * 80} className="h-full">
              <article
                id={id}
                className="group h-full scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:border-brand-500/50 hover:shadow-glow sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-brand-400">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold text-ink-900">{title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{summary}</p>
                  </div>
                </div>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 rounded-2xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <span className="font-bold text-ink-900">Outcome: </span>
                  {outcome}
                </p>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>

      <Reveal className="mt-10 flex justify-center">
        <ButtonLink to="/contact">Talk to Vibloom</ButtonLink>
      </Reveal>
    </div>
  </section>
);

export default Solutions;
