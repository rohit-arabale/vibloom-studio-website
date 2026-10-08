import Reveal from "@/components/Reveal";
import ButtonLink from "@/components/ButtonLink";
import { EMAIL, hasWhatsApp, mailtoHref } from "@/config/contact";
import { CTA as CTA_LABELS } from "@/config/site";
import { whatsappUrl } from "@/lib/whatsapp";

const CTA = () => (
  <section className="relative overflow-hidden bg-ink-950" aria-labelledby="cta-heading">
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute left-1/2 top-0 h-[360px] w-[720px] -translate-x-1/2 rounded-full bg-brand-500/20 blur-[130px]" />
      <div className="absolute inset-0 bg-grid-faint opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" style={{ backgroundSize: "56px 56px" }} />
    </div>
    <div className="container relative py-16 text-center sm:py-24">
      <Reveal>
        <h2 id="cta-heading" className="mx-auto max-w-3xl text-3xl font-extrabold leading-[1.1] text-white sm:text-5xl">
          Ready to Grow Your <span className="text-gradient">Business Digitally?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Tell us where your business is today. We'll help you identify what to build, automate, improve and grow.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <ButtonLink to="/contact">{CTA_LABELS.conversation}</ButtonLink>
          {hasWhatsApp ? (
            <ButtonLink href={whatsappUrl()} variant="secondary-dark" arrow={false}>
              Message Us on WhatsApp
            </ButtonLink>
          ) : (
            <ButtonLink href={mailtoHref} variant="secondary-dark" arrow={false} ariaLabel={`Email ${EMAIL}`}>
              Email Us
            </ButtonLink>
          )}
        </div>
      </Reveal>
    </div>
  </section>
);

export default CTA;
