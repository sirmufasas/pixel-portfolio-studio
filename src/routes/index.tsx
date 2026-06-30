import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, MousePointer2 } from "lucide-react";
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
    name: "Safeguard Security",
    tag: "Security & Protection",
    img: safeguardImg,
    url: "https://safeguardsecuritysolutions.netlify.app/",
    blurb: "Guarding what matters most. Professional security you can trust.",
  },
];

function HomePage() {
  return (
    <div>
      {/* HERO — centered brand mark, Mufasa-style */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream">
        {/* Soft background image */}
        <img
          src={heroImg}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.18]"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/40 via-cream/70 to-cream" />
        <div
          className="absolute inset-0 opacity-[0.04] noise-overlay pointer-events-none"
          aria-hidden
        />

        {/* Top eyebrow */}
        <div className="relative z-10 pt-32 text-center animate-float-up-soft">
          <span className="inline-flex items-center gap-3 text-[10px] sm:text-xs uppercase tracking-[0.35em] text-navy/60">
            <span className="h-px w-10 bg-gold" />
            Est. Khomba Group
            <span className="h-px w-10 bg-gold" />
          </span>
        </div>

        {/* CENTERED BRAND MARK */}
        <div className="relative z-10 flex-1 w-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="font-serif font-medium leading-[0.85] tracking-[-0.04em] text-navy text-[22vw] sm:text-[18vw] md:text-[16vw] lg:text-[14rem] xl:text-[17rem] animate-float-up">
              Khomba<span className="text-gold">.</span>
            </h1>
            <div className="mt-4 flex items-center justify-center gap-4 animate-float-up-soft" style={{ animationDelay: "0.2s" }}>
              <span className="h-px w-16 bg-gold/60" />
              <span className="text-[11px] sm:text-sm uppercase tracking-[0.5em] text-navy/75 font-medium">
                Group of Companies
              </span>
              <span className="h-px w-16 bg-gold/60" />
            </div>
            <p className="mt-8 max-w-2xl mx-auto text-base sm:text-lg text-navy/70 leading-relaxed animate-float-up-soft font-serif italic" style={{ animationDelay: "0.4s" }}>
              A family legacy of distinguished houses — bound by name,
              built on honour, and carried forward with pride.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3 animate-float-up-soft" style={{ animationDelay: "0.6s" }}>
              <Link
                to="/work"
                className="group inline-flex items-center gap-2 bg-navy text-cream px-7 py-4 rounded-full text-sm tracking-wide hover:bg-navy-deep transition-all"
              >
                Our Companies
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 border border-navy/25 text-navy px-7 py-4 rounded-full text-sm tracking-wide hover:border-gold hover:text-gold transition-colors"
              >
                Our Legacy
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 pb-10 flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-navy/50 animate-shimmer">
          <MousePointer2 className="h-3 w-3" /> Scroll
        </div>
      </section>


      {/* SECTION DIVIDER */}
      <section className="bg-cream py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid gap-12 md:grid-cols-12 items-end">
          <div className="md:col-span-7">
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold">Selected Work</span>
            <h2 className="mt-5 font-serif text-5xl md:text-7xl leading-[0.95] text-navy">
              Companies <span className="italic">crafted</span>
              <br /> with <span className="gradient-gold-text">intention.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pl-10">
            <p className="text-navy/65 leading-relaxed">
              Each brand under the Khomba Group is built to last — combining
              clear values with serious execution. Click any tile to visit
              the company.
            </p>
            <Link
              to="/work"
              className="mt-6 inline-flex items-center gap-2 text-sm text-navy hover:text-gold transition-colors group"
            >
              View all companies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED COMPANIES */}
      <section className="bg-cream pb-32 px-6 lg:px-10">
        <div className="mx-auto max-w-7xl grid gap-10 md:grid-cols-2">
          {companies.map((c, i) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className={`group block ${i === 1 ? "md:mt-24" : ""}`}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-[0_30px_80px_-30px_rgba(20,30,80,0.25)] aspect-[4/3]">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-[1.4s] ease-out group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] text-cream bg-navy/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {c.n} — {c.tag}
                </div>
                <div className="absolute top-6 right-6 h-11 w-11 rounded-full bg-cream/90 backdrop-blur flex items-center justify-center text-navy group-hover:bg-gold transition-all">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </div>
              </div>
              <div className="mt-6 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl text-navy group-hover:text-gold transition-colors">
                    {c.name}
                  </h3>
                  <p className="mt-2 text-sm text-navy/60 max-w-md">{c.blurb}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* VALUES BANNER — dark navy contrast */}
      <section className="relative bg-navy text-cream py-32 px-6 lg:px-10 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(60% 50% at 20% 30%, oklch(0.72 0.14 75 / 0.25), transparent 70%), radial-gradient(50% 50% at 80% 80%, oklch(0.72 0.14 75 / 0.18), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl">
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold">Our Principles</span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl max-w-4xl leading-[1.02]">
            Every Khomba brand is built on
            the <span className="italic text-gold">same foundation.</span>
          </h2>

          <div className="mt-20 grid gap-x-12 gap-y-14 md:grid-cols-3">
            {[
              { t: "Craft", d: "Built with care, refined through obsession with detail." },
              { t: "Integrity", d: "We earn trust the only way — by deserving it." },
              { t: "Endurance", d: "Designed to outlast trends, recessions, and noise." },
              { t: "Service", d: "Customers come first. Always. Without exception." },
              { t: "Standards", d: "If it isn't excellent, it doesn't leave the door." },
              { t: "Growth", d: "Reinvesting in the brands and people that built us." },
            ].map((v, i) => (
              <div key={v.t} className="border-t border-cream/15 pt-6">
                <div className="text-gold text-xs tracking-[0.3em]">0{i + 1}</div>
                <div className="mt-3 font-serif text-3xl text-cream">{v.t}</div>
                <p className="mt-3 text-sm text-cream/65 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cream py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold">Let's talk</span>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl text-navy leading-[1]">
            Partner with a group that <span className="italic gradient-gold-text">builds to last.</span>
          </h2>
          <a
            href="mailto:hello@khombagroup.com"
            className="mt-10 inline-flex items-center gap-2 bg-navy text-cream px-8 py-4 rounded-full text-sm tracking-wide hover:bg-navy-deep transition-all group"
          >
            hello@khombagroup.com
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </section>
    </div>
  );
}
