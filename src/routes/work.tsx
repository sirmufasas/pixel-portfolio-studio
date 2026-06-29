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
    <div className="bg-cream">
      {/* Hero header */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 text-center">
        <div className="animate-float-up-soft">
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold">Selected Work</span>
        </div>
        <h1 className="mt-6 font-serif font-medium text-navy leading-[0.9] tracking-[-0.03em] text-[18vw] sm:text-[14vw] md:text-[12rem] animate-float-up">
          Our <span className="italic gradient-gold-text">Work.</span>
        </h1>
        <p className="mt-8 mx-auto max-w-xl text-navy/65 leading-relaxed animate-float-up-soft" style={{ animationDelay: "0.3s" }}>
          Each brand under the Khomba Group is crafted with the same standard
          of care. Click any company to visit their site.
        </p>
      </section>

      {/* Work list */}
      <section className="px-6 lg:px-10 pb-20">
        <div className="mx-auto max-w-7xl space-y-32 md:space-y-44">
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
              <div className="lg:col-span-7 relative overflow-hidden rounded-2xl bg-white shadow-[0_40px_100px_-40px_rgba(20,30,80,0.3)] aspect-[16/10]">
                <img
                  src={c.img}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] text-cream bg-navy/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {c.n} — {c.tag}
                </div>
                <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-cream/90 backdrop-blur flex items-center justify-center text-navy group-hover:bg-gold transition-all">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </div>
              </div>
              <div className="lg:col-span-5">
                <h2 className="font-serif text-5xl md:text-7xl text-navy group-hover:text-gold transition-colors leading-[0.95]">
                  {c.name}
                </h2>
                <p className="mt-6 text-navy/65 leading-relaxed max-w-md">{c.blurb}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-navy group-hover:text-gold transition-colors">
                  Visit website
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-40 max-w-2xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">More to come</p>
          <h3 className="mt-4 font-serif text-4xl md:text-6xl text-navy leading-tight">
            New ventures, <span className="italic gradient-gold-text">always in motion.</span>
          </h3>
        </div>
      </section>
    </div>
  );
}
