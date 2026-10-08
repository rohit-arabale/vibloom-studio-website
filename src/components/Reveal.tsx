import type { ReactNode, CSSProperties } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** Fades and slides content in when it enters the viewport. */
const Reveal = ({ children, className, delay = 0 }: RevealProps) => {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;
  return (
    <div ref={ref} style={style} className={cn("reveal", visible && "is-visible", className)}>
      {children}
    </div>
  );
};

export default Reveal;
