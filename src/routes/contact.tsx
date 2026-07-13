import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const WHATSAPP_NUMBER = "+27 73 179 4085";
const EMAIL = "khombagroupofcompanies@gmail.com";
const PHONE_DISPLAY = "+27 73 179 4085";
const LOCATION = "South Africa";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — KHOMBA Group of Companies" },
      { name: "description", content: "Get in touch with the KHOMBA Group of Companies via WhatsApp, email, or phone." },
      { property: "og:title", content: "Contact — KHOMBA Group" },
      { property: "og:description", content: "Reach out to the family. WhatsApp, email, or phone." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello KHOMBA Group, I'd like to get in touch."
  )}`;

  return (
    <div className="bg-cream">
      <section className="pt-32 sm:pt-40 pb-16 px-6 lg:px-10 text-center">
        <div className="animate-float-up-soft">
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold">Say Hello</span>
        </div>
        <h1 className="mt-6 font-serif font-medium text-navy leading-[0.9] tracking-[-0.03em] text-[16vw] sm:text-[13vw] md:text-[11rem] animate-float-up">
          Get in <span className="italic gradient-gold-text">touch.</span>
        </h1>
        <p className="mt-8 mx-auto max-w-xl text-navy/70 leading-relaxed animate-float-up-soft font-serif italic px-4" style={{ animationDelay: "0.25s" }}>
          Partnerships, opportunities, or a simple hello — the door is open.
        </p>
      </section>

      <section className="px-6 lg:px-10 pb-24">
        <div className="mx-auto max-w-5xl grid gap-6 md:grid-cols-2">
          {/* WhatsApp - highlighted */}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl bg-navy text-cream p-8 md:p-10 md:col-span-2 transition-all hover:shadow-[0_30px_80px_-30px_rgba(20,30,80,0.5)] animate-float-up-soft"
            style={{ animationDelay: "0.3s" }}
          >
            <div
              aria-hidden
              className="absolute inset-0 opacity-40 transition-opacity duration-700 group-hover:opacity-70"
              style={{
                background: "radial-gradient(60% 80% at 80% 20%, oklch(0.72 0.14 75 / 0.35), transparent 70%)",
              }}
            />
            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-5 min-w-0">
                <div className="h-14 w-14 shrink-0 rounded-full bg-gold text-navy grid place-items-center transition-transform group-hover:rotate-6">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] tracking-[0.3em] text-gold uppercase">Fastest reply</div>
                  <div className="mt-1 font-serif text-3xl md:text-4xl truncate">Chat on WhatsApp</div>
                  <div className="text-sm text-cream/70 mt-1">Usually a reply within the hour.</div>
                </div>
              </div>
              <div className="shrink-0 inline-flex items-center gap-2 bg-cream text-navy px-5 py-3 rounded-full text-sm tracking-wide group-hover:bg-gold transition-colors">
                Open WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </div>
            </div>
          </a>

          <ContactCard
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value={EMAIL}
            href={`mailto:${EMAIL}`}
            delay="0.4s"
          />
          <ContactCard
            icon={<Phone className="h-5 w-5" />}
            label="Phone"
            value={PHONE_DISPLAY}
            href={`tel:+${WHATSAPP_NUMBER}`}
            delay="0.5s"
          />
          <div
            className="rounded-2xl border border-border bg-card p-6 md:col-span-2 flex items-center gap-4 animate-float-up-soft"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="h-11 w-11 shrink-0 rounded-full bg-gold/15 text-gold grid place-items-center">
              <MapPin className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] tracking-[0.3em] text-navy/50 uppercase">Where we are</div>
              <div className="mt-1 font-serif text-2xl text-navy">{LOCATION}</div>
            </div>
          </div>
        </div>

        <p className="mt-16 text-center text-xs text-navy/50 max-w-2xl mx-auto">
          By reaching out you agree to our{" "}
          <a href="/policy" className="text-gold hover:underline">Terms & Policies</a>.
          We treat every conversation with discretion.
        </p>
      </section>
    </div>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  delay,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  delay: string;
}) {
  return (
    <a
      href={href}
      className="group rounded-2xl border border-border bg-card p-6 hover:border-gold hover:-translate-y-1 transition-all animate-float-up-soft"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-4">
        <div className="h-11 w-11 shrink-0 rounded-full bg-gold/15 text-gold grid place-items-center group-hover:bg-gold group-hover:text-navy transition-colors">
          {icon}
        </div>
        <div className="min-w-0 flex-1">
          <div className="text-[10px] tracking-[0.3em] text-navy/50 uppercase">{label}</div>
          <div className="mt-1 font-serif text-xl text-navy truncate group-hover:text-gold transition-colors">
            {value}
          </div>
        </div>
        <ArrowUpRight className="h-4 w-4 text-navy/40 group-hover:text-gold group-hover:rotate-45 transition-all shrink-0" />
      </div>
    </a>
  );
}
