import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import logo from "@/assets/kgc-logo.jpeg";

const WHATSAPP_NUMBER = "27000000000"; // TODO: replace with real number

const nav = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/policy", label: "Policy" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/90 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10 h-16 sm:h-20 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group min-w-0">
          <img
            src={logo}
            alt="Khomba Group of Companies"
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover ring-1 ring-navy/15 group-hover:ring-gold transition-all shrink-0"
          />
          <span className="font-serif text-lg sm:text-xl text-navy tracking-tight truncate">
            Khomba<span className="text-gold">.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative px-3 lg:px-4 py-2 text-sm tracking-wide transition-colors ${
                  active ? "text-navy" : "text-foreground/60 hover:text-navy"
                }`}
              >
                {n.label}
                <span
                  className={`absolute left-3 right-3 lg:left-4 lg:right-4 -bottom-0.5 h-px bg-gold transition-transform origin-left duration-500 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
          className="md:hidden h-10 w-10 grid place-items-center rounded-full text-navy hover:bg-navy/5 transition-colors"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-500 ease-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-5 pb-6 pt-2 flex flex-col gap-1 border-t border-border">
          {nav.map((n, i) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`py-3 px-2 font-serif text-2xl transition-colors ${
                  active ? "text-gold" : "text-navy hover:text-gold"
                }`}
                style={{ animation: open ? `float-up 0.4s ${i * 0.05}s both` : undefined }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function WhatsAppFab() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello Khomba Group,"
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-gold text-navy grid place-items-center shadow-[0_15px_40px_-10px_rgba(20,30,80,0.4)] hover:scale-110 hover:rotate-6 transition-transform"
    >
      <span aria-hidden className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
      <MessageCircle className="relative h-6 w-6" />
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-24 sm:mt-32 bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 sm:py-20 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="KGC" className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40 shrink-0" />
            <div className="leading-tight min-w-0">
              <div className="font-serif text-2xl">Khomba<span className="text-gold">.</span></div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-cream/60">Group of Companies</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-cream/70 max-w-sm leading-relaxed">
            A portfolio of distinguished brands built on craft, integrity, and a relentless standard of quality.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Explore</div>
          <ul className="space-y-3 text-sm">
            {nav.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-cream/80 hover:text-gold transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Get in touch</div>
          <a href="mailto:hello@khombagroup.com" className="text-lg text-cream hover:text-gold transition-colors break-all">
            hello@khombagroup.com
          </a>
          <p className="mt-3 text-sm text-cream/60">For partnerships and inquiries.</p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Khomba Group of Companies. All rights reserved.</span>
          <Link to="/policy" className="tracking-[0.25em] uppercase hover:text-gold transition-colors">
            Terms &amp; Policies
          </Link>
        </div>
      </div>
    </footer>
  );
}
