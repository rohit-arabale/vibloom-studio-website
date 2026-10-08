import { Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { ANALYTICS_ITEMS } from "@/data/content";

const BARS = [38, 54, 46, 68, 60, 82, 74, 92];
const KPIS = [
  { label: "Sales", value: "1,240" },
  { label: "Leads", value: "386" },
  { label: "Conversion", value: "12.4%" },
];

const AnalyticsSection = () => (
  <section id="analytics" className="section-pad scroll-mt-20 bg-slate-50" aria-labelledby="analytics-heading">
    <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Analytics"
            title={<span id="analytics-heading">Turn Your Business Data Into Decisions.</span>}
            description="We connect your sales, marketing, finance, inventory and customer data and present it in dashboards and reports that update on their own."
          />
        </Reveal>
        <Reveal delay={100}>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {ANALYTICS_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-[15px] font-medium text-slate-700">
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-700">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={150}>
        <div
          className="rounded-[2rem] bg-ink-900 p-5 shadow-card sm:p-7"
          role="img"
          aria-label="Illustration of a business dashboard with key performance indicators and a bar chart, using demo data"
        >
          <div className="flex items-center justify-between">
            <p className="font-display text-sm font-bold text-white">Business Overview</p>
            <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-300">Demo data</span>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3" aria-hidden="true">
            {KPIS.map((k) => (
              <div key={k.label} className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-4">
                <p className="text-[11px] font-medium uppercase tracking-wider text-slate-400">{k.label}</p>
                <p className="mt-1 font-display text-lg font-extrabold text-white sm:text-2xl">{k.value}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4" aria-hidden="true">
            <svg viewBox="0 0 240 110" className="h-32 w-full sm:h-40" focusable="false">
              <defs>
                <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FFC145" />
                  <stop offset="100%" stopColor="#FF4D00" stopOpacity="0.7" />
                </linearGradient>
              </defs>
              {[20, 45, 70, 95].map((y) => (
                <line key={y} x1="0" x2="240" y1={y} y2={y} stroke="rgba(255,255,255,0.07)" strokeWidth="1" />
              ))}
              {BARS.map((h, i) => (
                <rect key={i} x={8 + i * 29} y={105 - h} width="18" height={h} rx="4" fill="url(#bar-grad)" />
              ))}
              <polyline
                points={BARS.map((h, i) => `${17 + i * 29},${100 - h - 8}`).join(" ")}
                fill="none"
                stroke="#FFFFFF"
                strokeOpacity="0.75"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AnalyticsSection;
