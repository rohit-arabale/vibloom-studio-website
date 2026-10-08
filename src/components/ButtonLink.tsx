import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary-dark" | "secondary-light";

const VARIANTS: Record<Variant, string> = {
  primary: "btn-primary",
  "secondary-dark": "btn-secondary-dark",
  "secondary-light": "btn-secondary-light",
};

interface ButtonLinkProps {
  children: ReactNode;
  variant?: Variant;
  /** Internal route (uses client-side navigation). */
  to?: string;
  /** External or mailto/tel/WhatsApp URL. */
  href?: string;
  arrow?: boolean;
  className?: string;
  ariaLabel?: string;
}

/** Link styled as a button. Use `to` for pages and `href` for external links. */
const ButtonLink = ({ children, variant = "primary", to, href, arrow = true, className, ariaLabel }: ButtonLinkProps) => {
  const classes = cn(VARIANTS[variant], "group", className);
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />}
    </>
  );
  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {content}
      </Link>
    );
  }
  const external = !!href && /^https?:/i.test(href);
  return (
    <a
      href={href}
      className={classes}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {content}
    </a>
  );
};

export default ButtonLink;
