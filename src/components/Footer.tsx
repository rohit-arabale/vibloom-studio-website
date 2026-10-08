import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import Logo from "@/components/Logo";
import {
  ADDRESS, COMPANY_NAME, EMAIL, FACEBOOK, INSTAGRAM, LINKEDIN, PHONE, YOUTUBE, hasPhone, mailtoHref, telHref,
} from "@/config/contact";
import { TAGLINE } from "@/config/site";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Industries", to: "/industries" },
      { label: "Portfolio", to: "/#portfolio" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Websites", to: "/services#build" },
      { label: "Apps", to: "/services#build" },
      { label: "Automation", to: "/services#automate" },
      { label: "SEO", to: "/services#grow" },
      { label: "Marketing", to: "/services#grow" },
      { label: "Analytics", to: "/services#analyze" },
      { label: "AI", to: "/services#ai-technology" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Digital Transformation", to: "/solutions#digital-transformation" },
      { label: "Business Automation", to: "/solutions#business-automation" },
      { label: "Business Intelligence", to: "/solutions#business-intelligence" },
      { label: "AI Solutions", to: "/solutions#ai-solutions" },
    ],
  },
];

const SOCIALS = [
  { label: "Instagram", href: INSTAGRAM, icon: Instagram },
  { label: "LinkedIn", href: LINKEDIN, icon: Linkedin },
  { label: "Facebook", href: FACEBOOK, icon: Facebook },
  { label: "YouTube", href: YOUTUBE, icon: Youtube },
].filter((s) => s.href);

const Footer = () => (
  <footer className="border-t border-white/10 bg-ink-950 text-slate-300">
    <div className="container pb-24 pt-14 lg:pt-16">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
        <div>
          <Link to="/" aria-label="Vibloom Studio home" className="inline-block rounded-lg">
            <Logo />
          </Link>
          <p className="mt-4 font-display text-sm font-semibold tracking-wide text-brand-300">{TAGLINE}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-400">
            Vibloom is a digital growth and transformation company. We bring technology, marketing, automation, analytics and AI together to help businesses grow.
          </p>
          {SOCIALS.length > 0 && (
            <ul className="mt-6 flex gap-3" aria-label="Social media">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${COMPANY_NAME} on ${label}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-slate-300 transition-colors hover:border-brand-400/60 hover:bg-white/5 hover:text-brand-300"
                  >
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">{col.title}</h2>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="text-sm text-slate-400 transition-colors hover:text-brand-300">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
          <div>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                <a href={mailtoHref} className="text-slate-400 transition-colors [overflow-wrap:anywhere] hover:text-brand-300">
                  {EMAIL}
                </a>
              </li>
              {hasPhone && (
                <li className="flex items-start gap-2.5">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  <a href={telHref} className="text-slate-400 transition-colors hover:text-brand-300">
                    {PHONE}
                  </a>
                </li>
              )}
              {ADDRESS && (
                <li className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  <span className="text-slate-400">{ADDRESS}</span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        <Link to="/privacy" className="transition-colors hover:text-brand-300">
          Privacy Policy
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
