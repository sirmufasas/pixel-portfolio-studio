import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/kgc-logo.jpeg";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Khomba Group of Companies"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-navy/15 group-hover:ring-gold transition-all"
          />
          <span className="hidden sm:block font-serif text-xl text-navy tracking-tight">
            Khomba<span className="text-gold">.</span>
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative px-4 py-2 text-sm tracking-wide transition-colors ${
                  active ? "text-navy" : "text-foreground/60 hover:text-navy"
                }`}
              >
                {n.label}
                <span
                  className={`absolute left-4 right-4 -bottom-0.5 h-px bg-gold transition-transform origin-left duration-500 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-32 bg-navy text-cream">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20 grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <img src={logo} alt="KGC" className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40" />
            <div className="leading-tight">
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
            <li><Link to="/" className="text-cream/80 hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/work" className="text-cream/80 hover:text-gold transition-colors">Our Companies</Link></li>
            <li><Link to="/about" className="text-cream/80 hover:text-gold transition-colors">About</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-5">Get in touch</div>
          <a href="mailto:hello@khombagroup.com" className="text-lg text-cream hover:text-gold transition-colors">
            hello@khombagroup.com
          </a>
          <p className="mt-3 text-sm text-cream/60">For partnerships and inquiries.</p>
        </div>
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-cream/50">
          <span>© {new Date().getFullYear()} Khomba Group of Companies. All rights reserved.</span>
          <span className="tracking-[0.25em] uppercase">Crafted with care</span>
        </div>
      </div>
    </footer>
  );
}
