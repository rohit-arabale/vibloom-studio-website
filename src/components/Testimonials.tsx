import { Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { TESTIMONIALS } from "@/data/portfolio";

/** Renders nothing until real testimonials are added in src/data/portfolio.ts. */
const Testimonials = () => {
  if (TESTIMONIALS.length === 0) return null;
  return (
    <section className="section-pad bg-white" aria-labelledby="testimonials-heading">
      <div className="container">
        <Reveal>
          <SectionHeading eyebrow="Testimonials" title={<span id="testimonials-heading">What Our Clients Say</span>} />
        </Reveal>
        <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <li key={`${t.name}-${t.quote.slice(0, 12)}`}>
              <Reveal className="h-full">
                <figure className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50 p-7">
                  <Quote className="h-6 w-6 text-brand-600" aria-hidden="true" />
                  <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-slate-700">{t.quote}</blockquote>
                  <figcaption className="mt-5 text-sm">
                    <span className="font-bold text-ink-900">{t.name}</span>
                    {(t.role || t.business) && (
                      <span className="block text-slate-500">{[t.role, t.business].filter(Boolean).join(", ")}</span>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials;
