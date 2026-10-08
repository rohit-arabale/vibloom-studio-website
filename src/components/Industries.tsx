import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ButtonLink from "@/components/ButtonLink";
import { INDUSTRIES } from "@/data/content";

interface IndustriesProps {
  /** "full" shows descriptions (Industries page); "home" shows compact tiles. */
  variant?: "home" | "full";
}

const Industries = ({ variant = "home" }: IndustriesProps) => {
  const full = variant === "full";
  return (
    <section id="industries" className="section-pad scroll-mt-20 bg-slate-50" aria-labelledby="industries-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Industries"
            title={<span id="industries-heading">Built for Businesses of Every Kind.</span>}
            description="Every business is different. We build digital solutions around the way your business actually works."
          />
        </Reveal>

        <ul className={full ? "mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" : "mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"}>
          {INDUSTRIES.map(({ title, description, icon: Icon }, i) => (
            <li key={title}>
              <Reveal delay={(i % 6) * 50} className="h-full">
                <div
                  className={
                    full
                      ? "flex h-full gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/50"
                      : "flex h-full flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-500/50 hover:shadow-soft sm:p-5"
                  }
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-brand-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className={full ? "text-base font-extrabold text-ink-900" : "text-sm font-bold leading-tight text-ink-900"}>{title}</h3>
                    {full && <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {!full && (
          <Reveal className="mt-10 flex justify-center">
            <ButtonLink to="/industries" variant="secondary-light">
              See How We Help
            </ButtonLink>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Industries;
