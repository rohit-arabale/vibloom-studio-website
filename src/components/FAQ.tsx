import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/data/content";

const FAQ = () => (
  <section id="faq" className="section-pad scroll-mt-20 bg-slate-50" aria-labelledby="faq-heading">
    <div className="container max-w-3xl">
      <Reveal>
        <SectionHeading eyebrow="FAQ" title={<span id="faq-heading">Questions, answered.</span>} />
      </Reveal>
      <Reveal className="mt-10">
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 shadow-soft data-[state=open]:border-brand-500/50"
            >
              <AccordionTrigger className="gap-4 py-5 text-left text-base font-bold text-ink-900 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-relaxed text-slate-600">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </div>
  </section>
);

export default FAQ;
