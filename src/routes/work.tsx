import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import kimsImg from "@/assets/work-kimsglamlab.png";
import safeguardImg from "@/assets/work-safeguard.png";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Companies — Khomba Group of Companies" },
      { name: "description", content: "Discover the brands and businesses under Khomba Group of Companies." },
      { property: "og:title", content: "Our Companies — Khomba Group" },
      { property: "og:description", content: "A portfolio of premium brands. Click through to visit each company." },
    ],
  }),
  component: WorkPage,
});

const companies = [
  {
    n: "01",
    name: "Kim's Glam Lab",
    tag: "Beauty & Cosmetics",
    img: kimsImg,
    url: "https://kimsglamlab.netlify.app/",
    blurb:
      "A premium beauty studio dedicated to helping clients elevate their glow. From makeup artistry to lash and brow services.",
  },
  {
    n: "02",
    name: "Safeguard Security Solutions",
    tag: "Security & Protection",
    img: safeguardImg,
    url: "https://safeguardsecuritysolutions.netlify.app/",
    blurb:
      "Professional security services protecting people, premises, and assets. Trained personnel, modern systems, total peace of mind.",
  },
];

function WorkPage() {
  return (
    <div className="pt-40 pb-20 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl animate-float-up">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">Selected Work</span>
          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95]">
            Our <span className="italic gradient-gold-text">Companies</span>.
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Each brand under the Khomba Group is built with the same standard
            of care. Click any tile to visit the company website.
          </p>
        </div>

        <div className="mt-24 space-y-32">
          {companies.map((c, i) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className={`group grid gap-12 lg:grid-cols-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7 relative overflow-hidden rounded-2xl border border-border bg-card aspect-[16/10]">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute top-6 right-6 h-12 w-12 rounded-full border border-gold/50 flex items-center justify-center text-gold backdrop-blur-sm bg-background/30 group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="text-xs tracking-[0.3em] text-gold">{c.n} — {c.tag}</div>
                <h2 className="mt-4 font-serif text-5xl md:text-6xl group-hover:text-gold transition-colors">
                  {c.name}
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">{c.blurb}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-foreground group-hover:text-gold transition-colors">
                  Visit website
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-40 border-t border-border pt-16 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">More to come</p>
          <h3 className="mt-4 font-serif text-4xl md:text-5xl">
            New ventures, <span className="italic gradient-gold-text">always in motion.</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
