import PageHero from "@/components/PageHero";
import IndustriesSection from "@/components/Industries";
import WhyVibloom from "@/components/WhyVibloom";
import CTA from "@/components/CTA";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const Industries = () => {
  useDocumentMeta(
    "Industries We Serve",
    "Vibloom builds digital solutions for retail, restaurants, healthcare, education, real estate, travel, e-commerce, startups, local businesses and more."
  );
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={<>Digital solutions for <span className="text-gradient">every kind of business.</span></>}
        description="From local shops and clinics to startups and established companies, we shape the solution around how your business actually works."
      />
      <IndustriesSection variant="full" />
      <WhyVibloom />
      <CTA />
    </>
  );
};

export default Industries;
