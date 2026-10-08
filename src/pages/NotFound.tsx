import PageHero from "@/components/PageHero";
import ButtonLink from "@/components/ButtonLink";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const NotFound = () => {
  useDocumentMeta("Page not found", "The page you're looking for doesn't exist.");
  return (
    <>
      <PageHero eyebrow="Error 404" title="This page doesn't exist." description="The link may be broken or the page may have moved. Head back to the homepage or tell us what you were looking for." />
      <section className="bg-white py-14">
        <div className="container flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/" className="bg-ink-900 text-white shadow-none hover:bg-ink-800">Back to Home</ButtonLink>
          <ButtonLink to="/contact" variant="secondary-light" arrow={false}>Contact Vibloom</ButtonLink>
        </div>
      </section>
    </>
  );
};

export default NotFound;
