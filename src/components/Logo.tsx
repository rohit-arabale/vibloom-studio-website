import { useId } from "react";
import { cn } from "@/lib/utils";

const NAVY = "#0C101E";

/** Petal and gap outlines, drawn in a 512 x 512 space. */
const LEFT_PETAL = "M256.0 436.0 C333.9 321.0 191.8 191.5 92.6 184.4 C58.7 277.9 119.2 460.4 256.0 436.0 Z";
const RIGHT_PETAL = "M256.0 436.0 C392.8 460.4 453.3 277.9 419.4 184.4 C320.2 191.5 178.1 321.0 256.0 436.0 Z";
const GAP = "M256.0 436.0 C374.0 371.4 329.2 148.8 256.0 77.0 C182.8 148.8 138.0 371.4 256.0 436.0 Z";
const MIDDLE_PETAL = "M256.0 436.0 C360.0 373.9 320.5 160.0 256.0 91.0 C191.5 160.0 152.0 373.9 256.0 436.0 Z";

interface LogoMarkProps {
  className?: string;
  /** Draw the navy rounded-square app-icon tile behind the mark. */
  tile?: boolean;
}

/** Vibloom Studio symbol: three petals blooming upward with a spark above. Works on any background. */
export const LogoMark = ({ className, tile = false }: LogoMarkProps) => {
  const uid = useId().replace(/:/g, "");
  const shapes = (
    <>
      <defs>
        <linearGradient id={`vl-a-${uid}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="rgb(255,70,0)" />
          <stop offset="1" stopColor="rgb(255,120,10)" />
        </linearGradient>
        <linearGradient id={`vl-b-${uid}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="rgb(255,140,0)" />
          <stop offset="1" stopColor="rgb(255,200,80)" />
        </linearGradient>
        <linearGradient id={`vl-c-${uid}`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="rgb(255,100,0)" />
          <stop offset="1" stopColor="rgb(255,160,30)" />
        </linearGradient>
        <mask id={`vl-m-${uid}`} maskUnits="userSpaceOnUse" x="0" y="0" width="512" height="512">
          <rect width="512" height="512" fill="#fff" />
          <path d={GAP} fill="#000" />
        </mask>
      </defs>
      <g mask={`url(#vl-m-${uid})`}>
        <path d={LEFT_PETAL} fill={`url(#vl-a-${uid})`} />
        <path d={RIGHT_PETAL} fill={`url(#vl-b-${uid})`} />
      </g>
      <path d={MIDDLE_PETAL} fill={`url(#vl-c-${uid})`} />
      <circle cx="256" cy="58" r="15" fill="#FFC145" />
    </>
  );

  if (tile) {
    return (
      <svg viewBox="0 0 512 512" className={className} aria-hidden="true" focusable="false">
        <rect width="512" height="512" rx="115" fill={NAVY} />
        <g transform="translate(51 44) scale(0.8)">{shapes}</g>
      </svg>
    );
  }

  return (
    <svg viewBox="70 38 372 410" className={className} aria-hidden="true" focusable="false">
      {shapes}
    </svg>
  );
};

interface LogoProps {
  className?: string;
  /** "light" is for dark backgrounds (white wordmark). "dark" is for light backgrounds. */
  tone?: "light" | "dark";
}

/** Full logo lockup: symbol + "VIBLOOM / STUDIO" wordmark. */
const Logo = ({ className, tone = "light" }: LogoProps) => (
  <span className={cn("inline-flex items-center gap-3", className)}>
    <LogoMark className="h-11 w-auto shrink-0" />
    <span className="flex flex-col leading-none">
      <span
        className={cn(
          "font-display text-[1.4rem] font-extrabold uppercase tracking-[0.07em]",
          tone === "light" ? "text-white" : "text-ink-900"
        )}
      >
        Vibloom
      </span>
      <span className="mt-1.5 text-[0.62rem] font-bold uppercase tracking-[0.62em] text-[#FF6A00]">Studio</span>
    </span>
  </span>
);

export default Logo;
