import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhatWeDo from "@/components/WhatWeDo";
import Services from "@/components/Services";
import TransformationJourney from "@/components/TransformationJourney";
import AutomationSection from "@/components/AutomationSection";
import AISection from "@/components/AISection";
import AnalyticsSection from "@/components/AnalyticsSection";
import Results from "@/components/Results";
import Industries from "@/components/Industries";
import WhyVibloom from "@/components/WhyVibloom";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import ContactSection from "@/components/ContactSection";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const Index = () => {
  useDocumentMeta();
  return (
    <>
      <Hero />
      <TrustBar />
      <WhatWeDo />
      <Services />
      <TransformationJourney />
      <AutomationSection />
      <AISection />
      <AnalyticsSection />
      <Results />
      <Industries />
      <WhyVibloom />
      <Process />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
      <ContactSection />
    </>
  );
};

export default Index;
