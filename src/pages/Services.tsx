import PageHero from "@/components/PageHero";
import ServicesSection from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const Services = () => {
  useDocumentMeta(
    "Digital Services: Websites, Marketing, Automation, AI & Analytics",
    "Website development, apps, SEO, Google and Meta Ads, business automation, AI, Power BI and Excel dashboards, CRM and branding. Vibloom's digital services under one roof."
  );
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything to <span className="text-gradient">build, automate and grow.</span></>}
        description="Websites and apps, marketing, automation, analytics, business systems, branding and AI, organised so you can start where your business needs it most."
      />
      <ServicesSection variant="full" />
      <Process />
      <CTA />
    </>
  );
};

export default Services;
