import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import kimsImg from "@/assets/work-kimsglamlab-new.jpeg";
import safeguardImg from "@/assets/work-safeguard-new.jpeg";
import kgcShuttlesImg from "@/assets/work-kgcshuttles.png";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Houses — Khomba Group of Companies" },
      { name: "description", content: "The family of brands and businesses under the Khomba Group of Companies." },
      { property: "og:title", content: "Our Houses — Khomba Group" },
      { property: "og:description", content: "A family of premium brands. Click through to visit each company." },
    ],
  }),
  component: WorkPage,
});

const companies = [
  {
    name: "Kim's Glam Lab",
    tag: "Beauty & Cosmetics",
    url: "https://kimsglamlab.netlify.app/",
    image_url: kimsImg,
    blurb: "Elevate your glow. A boutique beauty brand crafting confidence.",
  },
  {
    name: "Safeguard Security",
    tag: "Security & Protection",
    url: "https://safeguardsecuritysolutions.netlify.app/",
    image_url: safeguardImg,
    blurb: "Guarding what matters most. Professional security you can trust.",
  },
  {
    name: "KGC Shuttles",
    tag: "Transport & Logistics",
    url: "https://kgcshuttles.netlify.app/",
    image_url: kgcShuttlesImg,
    blurb: "Comfort. Reliability. Destination. Premium shuttle transport you can count on.",
  },
];

function WorkPage() {
  return (
    <div className="bg-cream">
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-6 lg:px-10 text-center">
        <div className="animate-float-up-soft">
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold">The Family of Houses</span>
        </div>
        <h1 className="mt-6 font-serif font-medium text-navy leading-[0.9] tracking-[-0.03em] text-[18vw] sm:text-[14vw] md:text-[12rem] animate-float-up">
          Our <span className="italic gradient-gold-text">Houses.</span>
        </h1>
        <p className="mt-8 mx-auto max-w-xl text-navy/70 leading-relaxed animate-float-up-soft font-serif italic px-4" style={{ animationDelay: "0.3s" }}>
          Every house under the Khomba name is built with the same patience
          and standard. Step inside any of them.
        </p>
      </section>

      <section className="px-6 lg:px-10 pb-20">
        <div className="mx-auto max-w-7xl space-y-24 md:space-y-44">
          {companies.map((c, i) => (
            <a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              className={`group grid gap-8 md:gap-12 lg:grid-cols-12 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-7 relative overflow-hidden rounded-2xl bg-white shadow-[0_40px_100px_-40px_rgba(20,30,80,0.3)] aspect-[16/10]">
                <img
                  src={c.image_url}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-contain p-8 sm:p-12 transition-transform duration-[1.4s] ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 text-[10px] tracking-[0.3em] text-cream bg-navy/70 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {String(i + 1).padStart(2, "0")} — {c.tag}
                </div>
                <div className="absolute top-4 right-4 sm:top-6 sm:right-6 h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-cream/90 backdrop-blur flex items-center justify-center text-navy group-hover:bg-gold transition-all">
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:rotate-45" />
                </div>
              </div>
              <div className="lg:col-span-5">
                <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-navy group-hover:text-gold transition-colors leading-[0.95]">
                  {c.name}
                </h2>
                <p className="mt-6 text-navy/70 leading-relaxed max-w-md">{c.blurb}</p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm text-navy group-hover:text-gold transition-colors">
                  Visit website
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-32 max-w-2xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] text-gold">The story continues</p>
          <h3 className="mt-4 font-serif text-4xl md:text-6xl text-navy leading-tight">
            New houses, <span className="italic gradient-gold-text">added in time.</span>
          </h3>
        </div>
      </section>
    </div>
  );
}