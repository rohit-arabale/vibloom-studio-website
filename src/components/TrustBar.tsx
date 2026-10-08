import { TRUST_ITEMS } from "@/data/services";

const TrustBar = () => (
  <section aria-label="What Vibloom helps businesses achieve" className="border-y border-white/10 bg-ink-900">
    <div className="container py-6 sm:py-7">
      <ul className="grid grid-cols-2 gap-x-4 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
        {TRUST_ITEMS.map(({ label, icon: Icon }) => (
          <li key={label} className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400">
              <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
            </span>
            <span className="text-[13px] font-semibold leading-tight text-slate-200 sm:text-sm">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TrustBar;
