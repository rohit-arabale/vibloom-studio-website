import { Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ButtonLink from "@/components/ButtonLink";
import { AI_USES } from "@/data/content";
import { CTA } from "@/config/site";

const AISection = () => (
  <section id="ai" className="section-pad relative scroll-mt-20 overflow-hidden bg-ink-950" aria-labelledby="ai-heading">
    <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[480px] rounded-full bg-sky2/10 blur-[130px]" aria-hidden="true" />
    <div className="pointer-events-none absolute -left-40 bottom-0 h-[420px] w-[420px] rounded-full bg-brand-500/10 blur-[130px]" aria-hidden="true" />

    <div className="container relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <div>
        <Reveal>
          <SectionHeading
            align="left"
            tone="dark"
            eyebrow="AI Solutions"
            title={<span id="ai-heading">Make AI Work for Your Business.</span>}
            description="We help businesses use AI where it saves time and improves service, from answering customers to qualifying leads and processing documents, with people kept in the loop."
          />
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {AI_USES.map(({ label, icon: Icon }) => (
              <li key={label} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm font-medium text-slate-200">
                <Icon className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink to="/solutions#ai-solutions">{CTA.aiExplore}</ButtonLink>
          </div>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div className="glass mx-auto w-full max-w-md rounded-3xl p-5 shadow-glow sm:p-6" role="img" aria-label="Illustration of an AI assistant qualifying a customer enquiry and handing it to a team member">
          <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/15 text-brand-300">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-bold text-white">AI Assistant</p>
              <p className="text-xs text-slate-400">Illustrative example</p>
            </div>
          </div>
          <div className="mt-5 space-y-3 text-sm" aria-hidden="true">
            <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-white/10 px-4 py-2.5 text-slate-100">
              Hi, I'd like to know more about your services.
            </div>
            <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-md bg-brand-500/15 px-4 py-2.5 text-slate-100">
              Happy to help. What type of business do you run, and what would you like to improve?
            </div>
            <div className="ml-auto w-fit max-w-[85%] rounded-2xl rounded-br-md bg-white/10 px-4 py-2.5 text-slate-100">
              We run a clinic and want more online bookings.
            </div>
            <div className="rounded-2xl border border-dashed border-brand-400/40 px-4 py-2.5 text-xs text-brand-300">
              Lead qualified &rarr; added to CRM &rarr; handed to your team
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AISection;
