import { Link, useLocation } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";
import { hasWhatsApp } from "@/config/contact";
import { whatsappUrl } from "@/lib/whatsapp";

/** Floating contact button. WhatsApp when a number is configured, otherwise a link to the contact page. */
const FloatingContact = () => {
  const { pathname } = useLocation();
  const base =
    "fixed bottom-5 right-5 z-40 inline-flex h-14 items-center justify-center rounded-full shadow-[0_12px_30px_-8px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950";
  const style = { bottom: "max(1.25rem, env(safe-area-inset-bottom))" } as const;

  if (hasWhatsApp) {
    return (
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Vibloom on WhatsApp"
        style={style}
        className={`${base} w-14 bg-[#25D366] text-white`}
      >
        <MessageCircle className="h-6 w-6" aria-hidden="true" />
      </a>
    );
  }

  if (pathname === "/contact") return null;

  return (
    <Link
      to="/contact"
      aria-label="Contact Vibloom"
      style={style}
      className={`${base} gap-2 bg-brand-500 px-5 text-sm font-semibold text-ink-950`}
    >
      <Mail className="h-5 w-5" aria-hidden="true" />
      <span className="hidden sm:inline">Talk to Vibloom</span>
    </Link>
  );
};

export default FloatingContact;
