import { createFileRoute } from "@tanstack/react-router";

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
    <div className="pt-40 pb-20 px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <div className="animate-float-up">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">About Us</span>
          <h1 className="mt-6 font-serif text-6xl md:text-8xl leading-[0.95]">
            Building brands <span className="italic gradient-gold-text">that last.</span>
          </h1>
        </div>

        <div className="mt-20 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Our Story</div>
          </div>
          <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/90">
            <p>
              Khomba Group of Companies is a portfolio of distinguished
              businesses — built on the simple belief that excellence is
              a discipline, not an accident.
            </p>
            <p className="text-muted-foreground">
              We invest in, grow, and operate brands across beauty, security,
              and a growing range of sectors. Each company under the Khomba
              banner shares one philosophy: do meaningful work, treat people
              with respect, and never compromise on quality.
            </p>
          </div>
        </div>

        <div className="mt-32 grid gap-16 md:grid-cols-12 border-t border-border pt-20">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">Our Vision</div>
          </div>
          <div className="md:col-span-7">
            <p className="font-serif text-3xl md:text-4xl leading-snug">
              To be a name synonymous with <span className="italic gradient-gold-text">trust and craft</span> — across every industry we touch.
            </p>
          </div>
        </div>

        <div className="mt-32 grid gap-16 md:grid-cols-12 border-t border-border pt-20">
          <div className="md:col-span-5">
            <div className="text-xs uppercase tracking-[0.3em] text-gold">What We Stand For</div>
          </div>
          <div className="md:col-span-7 grid sm:grid-cols-2 gap-10">
            {[
              { t: "Excellence", d: "Quality is the price of entry." },
              { t: "Integrity", d: "Do the right thing, even when no one is watching." },
              { t: "Service", d: "Customers are partners, not transactions." },
              { t: "Legacy", d: "Build today what stands tomorrow." },
            ].map((v) => (
              <div key={v.t}>
                <div className="font-serif text-2xl text-gold">{v.t}</div>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-40 text-center border-t border-border pt-20">
          <h2 className="font-serif text-5xl md:text-6xl">
            Let's <span className="italic gradient-gold-text">build something</span>.
          </h2>
          <a
            href="mailto:hello@khombagroup.com"
            className="mt-10 inline-flex items-center gap-2 bg-gold text-primary-foreground px-8 py-4 rounded-full text-sm tracking-wide hover:gap-3 transition-all"
          >
            hello@khombagroup.com
          </a>
        </div>
      </div>
    </div>
  );
}
