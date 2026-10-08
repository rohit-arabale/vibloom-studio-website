import PageHero from "@/components/PageHero";
import Solutions from "@/components/Solutions";
import AutomationSection from "@/components/AutomationSection";
import AISection from "@/components/AISection";
import AnalyticsSection from "@/components/AnalyticsSection";
import CTA from "@/components/CTA";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const SolutionsPage = () => {
  useDocumentMeta(
    "Business Solutions: Digital Transformation, Automation, BI & AI",
    "Digital transformation, business automation, business intelligence and AI solutions from Vibloom, combined around real business outcomes."
  );
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title={<>Solutions that move your business <span className="text-gradient">forward.</span></>}
        description="We combine technology, marketing, automation, analytics and AI into solutions that solve a specific business problem, not a list of disconnected services."
      />
      <Solutions />
      <AutomationSection />
      <AISection />
      <AnalyticsSection />
      <CTA />
    </>
  );
};

export default SolutionsPage;
