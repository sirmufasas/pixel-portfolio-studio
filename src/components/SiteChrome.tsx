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
          ? "bg-background/80 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Khomba Group of Companies"
            className="h-11 w-11 rounded-full object-cover ring-1 ring-gold/40 group-hover:ring-gold transition-all"
          />
          <span className="hidden sm:flex flex-col leading-none">
            <span className="font-serif text-xl tracking-wide text-foreground">
              Khomba<span className="text-gold">.</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
              Group of Companies
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`relative px-4 py-2 text-sm tracking-wide transition-colors ${
                  active ? "text-gold" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {n.label}
                <span
                  className={`absolute left-4 right-4 bottom-1 h-px bg-gold transition-transform origin-left ${
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
    <footer className="relative mt-32 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="KGC" className="h-12 w-12 rounded-full object-cover ring-1 ring-gold/40" />
            <div className="leading-tight">
              <div className="font-serif text-xl">Khomba<span className="text-gold">.</span></div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Group of Companies</div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground max-w-sm">
            A portfolio of brands built on excellence, trust, and craft.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Explore</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
            <li><Link to="/work" className="hover:text-gold transition-colors">Our Companies</Link></li>
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.25em] text-gold mb-4">Contact</div>
          <p className="text-sm text-muted-foreground">
            For partnerships and inquiries.<br />
            <a href="mailto:hello@khombagroup.com" className="text-foreground hover:text-gold transition-colors">
              hello@khombagroup.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Khomba Group of Companies. All rights reserved.</span>
          <span className="tracking-[0.2em] uppercase">Crafted with care</span>
        </div>
      </div>
    </footer>
  );
}
