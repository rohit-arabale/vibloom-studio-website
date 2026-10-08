import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import FAQ from "@/components/FAQ";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const Contact = () => {
  useDocumentMeta(
    "Contact",
    "Talk to Vibloom about your website, marketing, automation, analytics or AI project. Tell us where your business is today and we'll suggest what to build, automate and improve."
  );
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's talk about <span className="text-gradient">your business.</span></>}
        description="Tell us where your business is today and what you'd like to achieve. We'll help you work out what to build, automate, improve and grow."
      />
      <ContactSection />
      <FAQ />
    </>
  );
};

export default Contact;
