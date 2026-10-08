import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { LogoMark } from "@/components/Logo";
import { PROJECTS } from "@/data/portfolio";

const Portfolio = () => {
  const projects = PROJECTS.filter((p) => p.title.trim());
  if (projects.length === 0) return null;

  return (
    <section id="portfolio" className="section-pad scroll-mt-20 bg-white" aria-labelledby="portfolio-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title={<span id="portfolio-heading">What We've Built</span>}
            description="Digital presence projects delivered for real businesses."
          />
        </Reveal>

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <li key={project.title}>
              <Reveal delay={i * 90} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-glow">
                  <div className="relative aspect-[16/10] overflow-hidden bg-ink-900">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={`${project.title} website homepage`}
                        loading="lazy"
                        decoding="async"
                        width={1100}
                        height={526}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="relative flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-800 via-ink-900 to-ink-950" role="img" aria-label={`${project.title} project`}>
                        <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-500/20 blur-3xl" aria-hidden="true" />
                        <div className="relative flex flex-col items-center gap-3 text-center">
                          <LogoMark tile className="h-14 w-14" />
                          <span className="font-display text-xl font-extrabold text-white">{project.title}</span>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">{project.category}</p>
                    <h3 className="mt-2 text-xl font-extrabold text-ink-900">{project.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{project.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project tags">
                      {project.tags.map((tag) => (
                        <li key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
                      >
                        Visit {project.title} <span className="sr-only">(opens in a new tab)</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;
