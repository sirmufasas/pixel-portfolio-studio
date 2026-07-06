import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import founderAsset from "@/assets/founder.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Khomba Group of Companies" },
      { name: "description", content: "The story, vision, and principles behind the Khomba Group of Companies." },
      { property: "og:title", content: "About — Khomba Group" },
      { property: "og:description", content: "Built on craft, integrity, and a relentless standard of quality." },
      { property: "og:image", content: founderAsset },],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="bg-cream">
      {/* HERO */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 px-6 lg:px-10 text-center">
        <div className="animate-float-up-soft">
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold">About</span>
        </div>
        <h1 className="mt-6 font-serif font-medium text-navy leading-[0.88] tracking-[-0.03em] text-[16vw] sm:text-[13vw] md:text-[11rem] animate-float-up">
          The <span className="italic gradient-gold-text">Group.</span>
        </h1>
        <p className="mt-8 mx-auto max-w-xl text-navy/65 leading-relaxed animate-float-up-soft px-4" style={{ animationDelay: "0.3s" }}>
          Khomba Group of Companies is a portfolio of distinguished brands —
          built on the simple belief that excellence is a discipline.
        </p>
      </section>

      {/* FOUNDER */}
      <section className="px-6 lg:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl grid gap-10 md:gap-16 md:grid-cols-12 items-center">
          <div className="md:col-span-5 animate-float-up-soft">
            <div className="relative group">
              <div
                aria-hidden
                className="absolute -inset-3 sm:-inset-4 rounded-3xl bg-gradient-to-br from-gold/40 via-transparent to-navy/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-700"
              />
              <div className="relative overflow-hidden rounded-3xl aspect-[4/5] bg-stone shadow-[0_40px_100px_-40px_rgba(20,30,80,0.4)]">
                <img
                  src={founderAsset}
                  alt="Founder & CEO of Khomba Group of Companies"
                  className="h-full w-full object-cover object-center transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-cream">
                  <div className="text-[10px] tracking-[0.35em] uppercase text-gold">Founder &amp; CEO</div>
                  {/* <div className="mt-1 font-serif text-2xl sm:text-3xl">Mr Benjamin Khomba</div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 animate-float-up-soft" style={{ animationDelay: "0.2s" }}>
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold">Our Founder</div>
            <h2 className="mt-4 font-serif text-4xl sm:text-5xl md:text-6xl text-navy leading-[1]">
              A vision, <span className="italic gradient-gold-text">carried by hand.</span>
            </h2>
            <div className="mt-6 space-y-5 text-navy/75 leading-relaxed">
              <p>
                The Khomba Group began as one man's conviction — that a family
                name, honoured and defended, is the most valuable asset a
                business can hold.
              </p>
              <p>
                From that conviction grew a portfolio of houses, each one built
                the same way: with patience, discipline, and an unwillingness
                to cut corners in the pursuit of profit.
              </p>
              <p className="italic text-navy/60 font-serif text-lg">
                "You build a legacy the same way you build a house — one honest
                stone at a time."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="px-6 lg:px-10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl grid gap-8 md:gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold md:sticky md:top-28">Our Story</div>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg sm:text-xl leading-relaxed text-navy/85 font-serif">
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
      <section className="relative bg-navy text-cream py-24 sm:py-32 px-6 lg:px-10 overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30 animate-bg-pan"
          style={{
            background:
              "radial-gradient(60% 50% at 30% 30%, oklch(0.72 0.14 75 / 0.35), transparent 70%), radial-gradient(50% 50% at 80% 70%, oklch(0.72 0.14 75 / 0.2), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-6xl grid gap-10 md:gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="text-[10px] uppercase tracking-[0.35em] text-gold">Our Vision</div>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-3xl sm:text-4xl md:text-6xl leading-[1.05] text-cream">
              To be a name synonymous with <span className="italic text-gold">trust and craft</span> — across every industry we touch.
            </p>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 lg:px-10 py-24 sm:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="text-[10px] uppercase tracking-[0.35em] text-gold">What We Stand For</div>
          <h2 className="mt-5 font-serif text-4xl sm:text-5xl md:text-7xl text-navy leading-[1]">
            Four words. <span className="italic gradient-gold-text">Every decision.</span>
          </h2>

          <div className="mt-16 sm:mt-20 grid gap-10 sm:gap-12 sm:grid-cols-2 md:grid-cols-4">
            {[
              { t: "Excellence", d: "Quality is the price of entry." },
              { t: "Integrity", d: "Do the right thing, even when no one is watching." },
              { t: "Service", d: "Customers are partners, not transactions." },
              { t: "Legacy", d: "Build today what stands tomorrow." },
            ].map((v, i) => (
              <div key={v.t} className="border-t border-navy/15 pt-6 animate-float-up-soft" style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
                <div className="text-gold text-xs tracking-[0.3em]">0{i + 1}</div>
                <div className="mt-3 font-serif text-3xl text-navy">{v.t}</div>
                <p className="mt-3 text-sm text-navy/60 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-10 pb-24 sm:pb-32">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl text-navy leading-[1]">
            Let's <span className="italic gradient-gold-text">build something.</span>
          </h2>
          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-2 bg-navy text-cream px-8 py-4 rounded-full text-sm tracking-wide hover:bg-navy-deep transition-all group"
          >
            Get in touch
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>
      </section>
    </div>
  );
}
