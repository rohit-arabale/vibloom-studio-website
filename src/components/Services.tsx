import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ButtonLink from "@/components/ButtonLink";
import { SERVICE_CATEGORIES } from "@/data/services";
import { CTA } from "@/config/site";

interface ServicesProps {
  /** "full" shows every service expanded (Services page); "home" shows previews with Explore links. */
  variant?: "home" | "full";
}

const Services = ({ variant = "home" }: ServicesProps) => {
  const full = variant === "full";
  return (
    <section id="services" className="section-pad scroll-mt-20 bg-slate-50" aria-labelledby="services-heading">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title={<span id="services-heading">Our Digital Capabilities</span>}
            description="From building your digital foundation to automating and scaling your business, we provide end-to-end digital solutions."
          />
        </Reveal>

        <ul className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {SERVICE_CATEGORIES.map((category, i) => (
            <li key={category.id}>
              <Reveal delay={(i % 4) * 70} className="h-full">
                <ServiceCard category={category} expanded={full} showExplore={!full} />
              </Reveal>
            </li>
          ))}
        </ul>

        {!full && (
          <Reveal className="mt-10 flex justify-center">
            <ButtonLink to="/services" variant="secondary-light">
              {CTA.secondary}
            </ButtonLink>
          </Reveal>
        )}
      </div>
    </section>
  );
};

export default Services;
