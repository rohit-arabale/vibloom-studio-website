import PageHero from "@/components/PageHero";
import { EMAIL, mailtoHref } from "@/config/contact";
import { useDocumentMeta } from "@/hooks/useDocumentMeta";

const Privacy = () => {
  useDocumentMeta("Privacy Policy", "How Vibloom handles the information you share when you contact us.");
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="How we handle the information you share with us." />
      <section className="section-pad bg-white">
        <div className="container max-w-3xl space-y-8 text-base leading-relaxed text-slate-700">
          <div>
            <h2 className="text-2xl font-extrabold text-ink-900">What we collect</h2>
            <p className="mt-3">
              When you use our contact form, you may share your name, business name, email address, phone number, business type and a message. You choose what to include.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink-900">How the contact form works</h2>
            <p className="mt-3">
              The form prepares your enquiry as a WhatsApp message or an email on your own device. It is sent only when you press send in WhatsApp or your email app, so this website does not store your enquiry on its own servers.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink-900">How we use your information</h2>
            <p className="mt-3">
              We use the details you send us only to reply to your enquiry and to discuss your project. We do not sell your personal information.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink-900">Third-party services</h2>
            <p className="mt-3">
              This website loads fonts from Google Fonts and is hosted by a third-party hosting provider, which may process technical data such as your IP address. WhatsApp and email providers handle messages under their own privacy policies.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-ink-900">Your choices</h2>
            <p className="mt-3">
              You can ask us to access, correct or delete the information you have shared by writing to{" "}
              <a href={mailtoHref} className="font-semibold text-brand-700 underline underline-offset-2">{EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
