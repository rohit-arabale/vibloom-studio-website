import { BarChart3, Bot, Globe, Megaphone, Users, Workflow, ArrowUpRight } from "lucide-react";
import ButtonLink from "@/components/ButtonLink";
import { LogoMark } from "@/components/Logo";
import { CTA, TAGLINE } from "@/config/site";

const NODES = [
  { label: "Website", icon: Globe, x: 50, y: 9, delay: "0s" },
  { label: "Marketing", icon: Megaphone, x: 84, y: 29, delay: "0.8s" },
  { label: "Automation", icon: Workflow, x: 84, y: 71, delay: "1.6s" },
  { label: "Analytics", icon: BarChart3, x: 50, y: 91, delay: "0.4s" },
  { label: "AI", icon: Bot, x: 16, y: 71, delay: "1.2s" },
  { label: "CRM", icon: Users, x: 16, y: 29, delay: "2s" },
];

const HeroVisual = () => (
  <div className="relative mx-auto aspect-square w-full max-w-[460px]" role="img" aria-label="Diagram of Vibloom connecting website, marketing, automation, analytics, AI and CRM into one digital ecosystem">
    <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id="hub-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FF8A00" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#FF8A00" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#hub-glow)" className="animate-glow-pulse" />
      <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
      <circle cx="50" cy="50" r="26" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3" />
      {NODES.map((n) => (
        <line
          key={n.label}
          x1="50"
          y1="50"
          x2={n.x}
          y2={n.y}
          stroke="#FFA41C"
          strokeOpacity="0.55"
          strokeWidth="0.45"
          strokeDasharray="1.6 1.6"
          className="animate-flow"
        />
      ))}
    </svg>

    <div className="absolute left-1/2 top-1/2 flex h-[22%] w-[22%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-ink-800/80 shadow-glow backdrop-blur">
      <LogoMark tile className="h-[70%] w-[70%]" />
    </div>

    {NODES.map((n) => {
      const Icon = n.icon;
      return (
        <div
          key={n.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
        >
          <div
            className="glass animate-float inline-flex items-center gap-1.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-lg sm:gap-2 sm:px-3.5 sm:py-2 sm:text-xs"
            style={{ animationDelay: n.delay }}
          >
            <Icon className="h-3.5 w-3.5 text-brand-400" aria-hidden="true" />
            {n.label}
          </div>
        </div>
      );
    })}

    <div className="glass absolute bottom-0 right-0 hidden w-36 rounded-2xl p-3 sm:block">
      <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-wider text-slate-300">
        <span>Overview</span>
        <ArrowUpRight className="h-3 w-3 text-brand-400" aria-hidden="true" />
      </div>
      <svg viewBox="0 0 100 40" className="mt-2 h-10 w-full" aria-hidden="true" focusable="false">
        <polyline points="0,32 16,26 32,29 48,18 64,21 80,10 100,6" fill="none" stroke="#FFA41C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <p className="mt-1 text-[10px] text-slate-400">Illustrative graphic</p>
    </div>
  </div>
);

const STEPS = ["Build", "Digitize", "Automate", "Market", "Analyze", "Grow"];

const Hero = () => (
  <section className="relative overflow-hidden bg-ink-950" aria-labelledby="hero-heading">
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-sky2/10 blur-[120px]" />
      <div
        className="absolute inset-0 bg-grid-faint opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
        style={{ backgroundSize: "56px 56px" }}
      />
    </div>

    <div className="container relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-28">
      <div className="animate-fade-up">
        <span className="eyebrow-dark">Digital Growth &amp; Transformation</span>
        <h1 id="hero-heading" className="mt-5 text-[2.5rem] font-extrabold leading-[1.05] text-white sm:text-6xl lg:text-[4.25rem]">
          Your Business.
          <br />
          <span className="text-gradient">Digitally Transformed.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
          Vibloom helps businesses build their digital presence, attract customers, automate operations, understand their data, and grow with technology.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <ButtonLink to="/contact">{CTA.primary}</ButtonLink>
          <ButtonLink to="/services" variant="secondary-dark" arrow={false}>
            {CTA.secondary}
          </ButtonLink>
        </div>

        <div className="mt-10">
          <p className="font-display text-sm font-semibold tracking-wide text-slate-200">{TAGLINE}</p>
          <ol className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2 text-xs font-medium text-slate-400" aria-label="The Vibloom framework">
            {STEPS.map((step, i) => (
              <li key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">{step}</span>
                {i < STEPS.length - 1 && <span aria-hidden="true" className="text-brand-500">&rarr;</span>}
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="animate-fade-up [animation-delay:150ms]">
        <HeroVisual />
      </div>
    </div>
  </section>
);

export default Hero;
