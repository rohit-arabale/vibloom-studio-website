import { Cpu, LineChart, Megaphone, Workflow, Brain } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhyVibloom from "@/components/WhyVibloom";
import TransformationJourney from "@/components/TransformationJourney";
import CTA from "@/components/CTA";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const BRINGS = [
  { label: "Technology", icon: Cpu },
  { label: "Marketing", icon: Megaphone },
  { label: "Automation", icon: Workflow },
  { label: "Analytics", icon: LineChart },
  { label: "AI", icon: Brain },
];

const About = () => {
  useDocumentMeta(
    "About Vibloom",
    "Vibloom is a digital growth and transformation company bringing technology, marketing, automation, analytics and AI together to help businesses grow."
  );
  return (
    <>
      <PageHero
        eyebrow="About Vibloom"
        title={<>Built on one belief: every business deserves <span className="text-gradient">the tools to grow.</span></>}
        description="Vibloom is a digital growth and transformation company for businesses that want to build, digitize, automate and grow."
      />

      <section className="section-pad bg-white" aria-labelledby="about-heading">
        <div className="container grid items-start gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <h2 id="about-heading" className="text-3xl font-extrabold leading-tight text-ink-900 sm:text-4xl">
              One partner for the whole digital picture.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
              <p>
                Vibloom was built with a simple belief: every business deserves access to the technology, digital tools and strategies that can help it grow.
              </p>
              <p>
                We bring together technology, marketing, automation, analytics and AI to help businesses build stronger digital foundations and operate more efficiently.
              </p>
              <p>
                Instead of treating every service as a separate solution, we look at the business as a whole, identifying what should be built, what can be automated, what needs to improve and where technology can create the biggest impact.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-3xl bg-ink-900 p-7 shadow-card sm:p-8">
              <h3 className="font-display text-sm font-extrabold uppercase tracking-[0.14em] text-brand-300">What we bring together</h3>
              <ul className="mt-5 space-y-3">
                {BRINGS.map(({ label, icon: Icon }) => (
                  <li key={label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white">
                    <Icon className="h-5 w-5 text-brand-400" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-display text-sm font-semibold text-slate-300">Build. Digitize. Automate. Grow.</p>
            </div>
          </Reveal>
        </div>
      </section>

      <WhyVibloom />
      <TransformationJourney />
      <CTA />
    </>
  );
};

export default About;
