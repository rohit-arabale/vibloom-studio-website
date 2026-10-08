import { Instagram, Linkedin, Facebook, Youtube, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";
import {
  ADDRESS, EMAIL, FACEBOOK, INSTAGRAM, LINKEDIN, PHONE, YOUTUBE, hasPhone, hasWhatsApp, mailtoHref, telHref,
} from "@/config/contact";
import { whatsappUrl } from "@/lib/whatsapp";

const NEXT_STEPS = [
  "We read your enquiry and understand your business.",
  "We reply by email or WhatsApp with questions or suggestions.",
  "We recommend what to build, automate and improve first.",
];

const ContactSection = () => {
  const socials = [
    { label: "Instagram", href: INSTAGRAM, icon: Instagram },
    { label: "LinkedIn", href: LINKEDIN, icon: Linkedin },
    { label: "Facebook", href: FACEBOOK, icon: Facebook },
    { label: "YouTube", href: YOUTUBE, icon: Youtube },
  ].filter((s) => s.href);

  const rows = [
    { label: "Email", value: EMAIL, href: mailtoHref, icon: Mail, show: true },
    { label: "WhatsApp", value: "Chat with us on WhatsApp", href: whatsappUrl(), icon: MessageCircle, show: hasWhatsApp },
    { label: "Phone", value: PHONE, href: telHref, icon: Phone, show: hasPhone },
    { label: "Location", value: ADDRESS, href: "", icon: MapPin, show: !!ADDRESS },
  ].filter((r) => r.show);

  return (
    <section id="contact" className="section-pad scroll-mt-20 bg-white" aria-labelledby="contact-heading">
      <div className="container grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="min-w-0">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title={<span id="contact-heading">Start a Conversation</span>}
              description="Tell us where your business is today and what you want to achieve. We'll help you identify what to build, automate, improve and grow."
            />
          </Reveal>

          <Reveal delay={100}>
            <ul className="mt-8 space-y-3">
              {rows.map(({ label, value, href, icon: Icon }) => (
                <li key={label} className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-brand-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        {...(label === "WhatsApp" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="text-[15px] font-semibold text-ink-900 transition-colors [overflow-wrap:anywhere] hover:text-brand-700"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-[15px] font-semibold text-ink-900">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <h3 className="mt-8 text-sm font-extrabold uppercase tracking-[0.14em] text-ink-900">What happens next</h3>
            <ol className="mt-3 space-y-2.5">
              {NEXT_STEPS.map((step, i) => (
                <li key={step} className="flex gap-3 text-[15px] leading-relaxed text-slate-600">
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-xs font-extrabold text-brand-700">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            {socials.length > 0 && (
              <ul className="mt-8 flex gap-3" aria-label="Vibloom on social media">
                {socials.map(({ label, href, icon: Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Vibloom on ${label}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-ink-900 transition-colors hover:border-brand-600 hover:text-brand-700"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </Reveal>
        </div>

        <div className="min-w-0">
          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
