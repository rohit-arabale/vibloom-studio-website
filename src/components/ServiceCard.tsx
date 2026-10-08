import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Check, ChevronDown } from "lucide-react";
import type { ServiceCategory } from "@/data/services";
import { cn } from "@/lib/utils";

const PREVIEW_COUNT = 5;

interface ServiceCardProps {
  category: ServiceCategory;
  /** Show every service without a toggle (used on the Services page). */
  expanded?: boolean;
  /** Show the "Explore" link (used on the homepage). */
  showExplore?: boolean;
}

const ServiceCard = ({ category, expanded = false, showExplore = false }: ServiceCardProps) => {
  const [open, setOpen] = useState(false);
  const { id, title, description, icon: Icon, services } = category;
  const canToggle = !expanded && services.length > PREVIEW_COUNT;
  const visible = expanded || open ? services : services.slice(0, PREVIEW_COUNT);
  const listId = `${id}-services`;

  return (
    <article
      id={id}
      className="group flex h-full scroll-mt-28 flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-glow sm:p-7"
    >
      <div className="flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-brand-400 transition-transform duration-300 group-hover:scale-105">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        {showExplore && (
          <Link
            to={`/services#${id}`}
            aria-label={`Explore ${title} services`}
            className="inline-flex items-center gap-1 rounded-full text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800"
          >
            Explore <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>

      <h3 className="mt-5 text-xl font-extrabold text-ink-900">{title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{description}</p>

      <ul id={listId} className="mt-5 space-y-2.5">
        {visible.map((service) => (
          <li key={service} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" aria-hidden="true" />
            {service}
          </li>
        ))}
      </ul>

      {canToggle && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={listId}
          className="mt-5 inline-flex items-center gap-1.5 self-start rounded-full text-sm font-semibold text-brand-700 transition-colors hover:text-brand-800 focus-visible:outline-brand-600"
        >
          {open ? "Show less" : `Show all ${services.length}`}
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")} aria-hidden="true" />
        </button>
      )}
    </article>
  );
};

export default ServiceCard;
