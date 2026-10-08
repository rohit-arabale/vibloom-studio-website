import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { AUTOMATION_FLOW } from "@/data/content";

const AutomationSection = () => (
  <section id="automation" className="section-pad scroll-mt-20 bg-white" aria-labelledby="automation-heading">
    <div className="container">
      <Reveal>
        <SectionHeading
          eyebrow="Automation"
          title={<span id="automation-heading">Stop Doing Manually What Technology Can Do Automatically.</span>}
          description="One enquiry can trigger the whole chain: capture, CRM, reply, follow-up, payment, invoice, feedback and reporting, without anyone retyping the same details."
        />
      </Reveal>

      <Reveal className="mt-12">
        <div className="rounded-[2rem] bg-ink-900 p-5 shadow-card sm:p-8">
          <ol className="relative grid gap-3 sm:grid-cols-3 lg:grid-cols-9 lg:gap-2">
            {AUTOMATION_FLOW.map((step, i) => (
              <li key={step} className="relative">
                <div className="flex h-full items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 lg:flex-col lg:items-start lg:gap-2 lg:p-3">
                  <span
                    className="inline-flex h-8 w-8 shrink-0 animate-glow-pulse items-center justify-center rounded-full bg-brand-500/15 font-display text-xs font-extrabold text-brand-300"
                    style={{ animationDelay: `${i * 0.35}s` }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold leading-tight text-white lg:text-[13px]">{step}</span>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-xs text-slate-400">Example workflow. Every business is different, so we design the flow around yours.</p>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AutomationSection;
