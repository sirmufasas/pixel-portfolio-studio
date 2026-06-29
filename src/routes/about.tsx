import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Khomba Group of Companies" },
      { name: "description", content: "The story, vision, and principles behind the Khomba Group of Companies." },
      { property: "og:title", content: "About — Khomba Group" },
      { property: "og:description", content: "Built on craft, integrity, and a relentless standard of quality." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-cream">
      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 text-center">
        <div className="animate-float-up-soft">
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold">About</span>
        </div>
        <h1 className="mt-6 font-serif font-medium text-navy leading-[0.88] tracking-[-0.03em] text-[16vw] sm:text-[13vw] md:text-[11rem] animate-float-up">
          The <span className="italic gradient-gold-text">Group.</span>
        </h1>
        <p className="mt-8 mx-auto max-w-xl text-navy/65 leading-relaxed animate-float-up-soft" style={{ animationDelay: "0.3s" }}>
          Khomba Group of Companies is a portfolio of distinguished brands —
          built on the simple belief that excellence is a discipline.
        </p>
      </section>

      {/* STORY */}
      <section className="px-6 lg:px-10 py-24">
        <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold sticky top-28">Our Story</div>
          </div>
          <div className="md:col-span-8 space-y-6 text-xl leading-relaxed text-navy/85 font-serif">
            <p>
              We invest in, grow, and operate brands across beauty, security,
              and a growing range of sectors.
            </p>
            <p className="text-navy/55">
              Each company under the Khomba banner shares one philosophy:
              do meaningful work, treat people with respect, and never
              compromise on quality.
            </p>
          </div>
        </div>
      </section>

      {/* VISION — dark navy band */}
      <section className="relative bg-navy text-cream py-32 px-6 lg:px-10 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 30%, oklch(0.72 0.14 75 / 0.25), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold">Our Vision</div>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-4xl md:text-6xl leading-[1.05] text-cream">
              To be a name synonymous with <span className="italic text-gold">trust and craft</span> — across every industry we touch.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 lg:px-10 py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold">What We Stand For</div>
          <h2 className="mt-5 font-serif text-5xl md:text-7xl text-navy leading-[1]">
            Four words. <span className="italic gradient-gold-text">Every decision.</span>
          </h2>

          <div className="mt-20 grid gap-12 sm:grid-cols-2 md:grid-cols-4">
            {[
              { t: "Excellence", d: "Quality is the price of entry." },
              { t: "Integrity", d: "Do the right thing, even when no one is watching." },
              { t: "Service", d: "Customers are partners, not transactions." },
              { t: "Legacy", d: "Build today what stands tomorrow." },
            ].map((v, i) => (
              <div key={v.t} className="border-t border-navy/15 pt-6">
                <div className="text-gold text-xs tracking-[0.3em]">0{i + 1}</div>
                <div className="mt-3 font-serif text-3xl text-navy">{v.t}</div>
                <p className="mt-3 text-sm text-navy/60 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-5xl md:text-7xl text-navy leading-[1]">
            Let's <span className="italic gradient-gold-text">build something.</span>
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
