import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import ButtonLink from "@/components/ButtonLink";
import { CTA, NAV_LINKS } from "@/config/site";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll and support Escape while the menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled || open
          ? "border-white/10 bg-ink-950/90 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          : "border-transparent bg-ink-950"
      )}
    >
      <div className="container flex h-16 items-center justify-between lg:h-[4.5rem]">
        <Link to="/" aria-label="Vibloom Studio home" className="rounded-lg focus-visible:outline-brand-400">
          <Logo />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ButtonLink to="/contact" className="hidden px-5 py-2.5 sm:inline-flex" arrow={false}>
            {CTA.nav}
          </ButtonLink>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink-950 lg:hidden">
          <nav aria-label="Mobile navigation" className="container flex max-h-[calc(100dvh-4rem)] flex-col gap-1 overflow-y-auto py-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "rounded-xl px-4 py-3.5 text-base font-medium transition-colors",
                    isActive ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
            <ButtonLink to="/contact" className="mt-3 w-full">
              {CTA.nav}
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
