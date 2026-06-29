import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-main.jpg";
import kimsImg from "@/assets/work-kimsglamlab.png";
import safeguardImg from "@/assets/work-safeguard.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Khomba Group of Companies — A Portfolio of Premium Brands" },
      { name: "description", content: "Khomba Group of Companies is a portfolio of distinguished businesses built on craft, integrity, and excellence." },
      { property: "og:title", content: "Khomba Group of Companies" },
      { property: "og:description", content: "A portfolio of premium brands and businesses." },
    ],
  }),
  component: HomePage,
});

const companies = [
  {
    n: "01",
    name: "Kim's Glam Lab",
    tag: "Beauty & Cosmetics",
    img: kimsImg,
    url: "https://kimsglamlab.netlify.app/",
    blurb: "Elevate your glow. A boutique beauty brand crafting confidence.",
  },
  {
    n: "02",
    name: "Safeguard Security Solutions",
    tag: "Security & Protection",
    img: safeguardImg,
    url: "https://safeguardsecuritysolutions.netlify.app/",
    blurb: "Guarding what matters most. Professional security services you can trust.",
  },
];

function HomePage() {
  return (
    <div>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 radial-vignette" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-20 w-full">
          <div className="max-w-4xl animate-float-up">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-gold">
              <span className="h-px w-8 bg-gold" /> Khomba Group of Companies
            </span>
            <h1 className="mt-8 font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.95]">
              A Portfolio
              <br />
              <span className="gradient-gold-text italic">of Excellence</span>
              <br />
              Built to Endure.
            </h1>
            <p className="mt-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
              We invest in, build, and grow distinguished brands across beauty,
              security, and beyond — united by craft, integrity, and a relentless
              standard of quality.
            </p>
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 bg-gold text-primary-foreground px-7 py-4 rounded-full text-sm font-medium tracking-wide hover:gap-3 transition-all"
              >
                Explore Our Companies
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-border px-7 py-4 rounded-full text-sm tracking-wide hover:border-gold hover:text-gold transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground animate-shimmer">
          Scroll
        </div>
      </section>

      {/* FEATURED COMPANIES */}
      <section className="relative py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-20">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Brands</span>
              <h2 className="mt-4 font-serif text-5xl sm:text-6xl md:text-7xl leading-[1]">
                Companies <span className="italic gradient-gold-text">crafted</span>
                <br />with intention.
              </h2>
            </div>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 text-sm tracking-wide text-foreground hover:text-gold transition-colors"
            >
              View all
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {companies.map((c) => (
              <a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl border border-border bg-card aspect-[4/3]">
                  <img
                    src={c.img}
                    alt={c.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute top-6 left-6 text-xs tracking-[0.3em] text-gold">{c.n}</div>
                  <div className="absolute top-6 right-6 h-10 w-10 rounded-full border border-gold/50 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                  </div>
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="font-serif text-3xl group-hover:text-gold transition-colors">{c.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.blurb}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground whitespace-nowrap mt-2">
                    {c.tag}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-32 px-6 lg:px-10 border-t border-border">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Our Principles</span>
          <h2 className="mt-4 font-serif text-5xl md:text-6xl max-w-3xl leading-[1.05]">
            Every Khomba brand is built on the <span className="italic gradient-gold-text">same foundation.</span>
          </h2>

          <div className="mt-20 grid gap-px bg-border md:grid-cols-3 rounded-2xl overflow-hidden border border-border">
            {[
              { t: "Craft", d: "Built with care, refined through obsession with detail." },
              { t: "Integrity", d: "We earn trust the only way — by deserving it." },
              { t: "Endurance", d: "Designed to outlast trends, recessions, and noise." },
              { t: "Service", d: "Customers come first. Always. Without exception." },
              { t: "Standards", d: "If it isn't excellent, it doesn't leave the door." },
              { t: "Growth", d: "Reinvesting in the brands and people that built us." },
            ].map((v) => (
              <div key={v.t} className="bg-background p-10 hover:bg-card transition-colors">
                <div className="text-gold font-serif text-2xl">{v.t}</div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
