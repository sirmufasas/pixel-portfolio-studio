import { createFileRoute } from "@tanstack/react-router";
import { Shield, Scale, Lock, Ban, Handshake, FileText } from "lucide-react";

export const Route = createFileRoute("/policy")({
  head: () => ({
    meta: [
      { title: "Terms & Policies — Khomba Group of Companies" },
      { name: "description", content: "The terms, code of conduct, and policies that protect the Khomba Group of Companies, its brands, staff, and clients." },
      { property: "og:title", content: "Terms & Policies — Khomba Group" },
      { property: "og:description", content: "Our code of conduct and legal terms." },
    ],
  }),
  component: PolicyPage,
});

const sections = [
  {
    icon: Handshake,
    title: "01 — Code of Conduct",
    body: `We do business with respect on both sides of the table. Clients, partners, staff, suppliers, and visitors are expected to conduct themselves with courtesy and honesty. Harassment, abuse, discrimination, or intimidation of any Khomba Group employee or contractor — in person, by phone, or in writing — is grounds for immediate termination of the engagement.`,
  },
  {
    icon: Shield,
    title: "02 — Reputation & Defamation",
    body: `False, malicious, or misleading statements made against the Khomba Group of Companies, any of its subsidiaries, staff, or affiliated brands — on any platform, public or private — will be treated seriously and, where warranted, pursued through legal counsel. Constructive feedback is always welcome; deliberate reputational harm is not.`,
  },
  {
    icon: Scale,
    title: "03 — Fair Dealing & Payments",
    body: `All engagements are governed by a written agreement between the client and the relevant Khomba Group entity. Deposits are non-refundable once work has commenced. Outstanding balances not settled within the agreed terms may be handed to collections and reported to relevant credit bureaus, without further notice.`,
  },
  {
    icon: Ban,
    title: "04 — Right of Refusal",
    body: `The Khomba Group reserves the right to decline, suspend, or terminate any engagement — with or without cause — where it believes continuing would compromise the safety of its people, the integrity of its brands, or the interests of its other clients. Deposits paid for terminated engagements will be handled in line with the signed agreement.`,
  },
  {
    icon: Lock,
    title: "05 — Confidentiality & Privacy",
    body: `Information shared with us in the course of business is treated as confidential and is not sold, traded, or disclosed to third parties except where required by law or expressly authorised by the client. Personal information collected through this website (contact form or WhatsApp enquiries) is used solely to respond to your enquiry.`,
  },
  {
    icon: FileText,
    title: "06 — Intellectual Property",
    body: `All trademarks, logos, brand names, imagery, and written content on this website — including the Khomba Group name and identity, and those of its subsidiary companies — are the property of their respective owners. Reproduction, imitation, or use of any Khomba Group brand asset without prior written consent is prohibited.`,
  },
];

function PolicyPage() {
  return (
    <div className="bg-cream">
      <section className="pt-32 sm:pt-40 pb-14 px-6 lg:px-10 text-center">
        <div className="animate-float-up-soft">
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold">Protecting the Legacy</span>
        </div>
        <h1 className="mt-6 font-serif font-medium text-navy leading-[0.9] tracking-[-0.03em] text-[15vw] sm:text-[12vw] md:text-[10rem] animate-float-up">
          Terms &amp; <span className="italic gradient-gold-text">Policies.</span>
        </h1>
        <p className="mt-8 mx-auto max-w-2xl text-navy/70 leading-relaxed animate-float-up-soft font-serif italic px-4" style={{ animationDelay: "0.25s" }}>
          The name above the door means something. These terms exist to protect
          the people, the brands, and the clients who trust us.
        </p>
      </section>

      <section className="px-6 lg:px-10 pb-24">
        <div className="mx-auto max-w-4xl space-y-6">
          {sections.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 sm:p-8 hover:border-gold/60 transition-all animate-float-up-soft"
                style={{ animationDelay: `${0.15 + i * 0.06}s` }}
              >
                <div className="flex items-start gap-5">
                  <div className="h-11 w-11 shrink-0 rounded-full bg-gold/15 text-gold grid place-items-center group-hover:bg-gold group-hover:text-navy transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-serif text-2xl sm:text-3xl text-navy">{s.title}</h2>
                    <p className="mt-3 text-navy/75 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center border-t border-border pt-10">
          <p className="text-xs text-navy/55 leading-relaxed">
            These terms are provided in good faith and do not constitute legal advice.
            The Khomba Group of Companies reserves the right to update this page at any time.
            Continued engagement with the group or any of its subsidiaries constitutes
            acceptance of the terms in force at the time of engagement.
          </p>
          <p className="mt-4 text-[10px] tracking-[0.35em] text-gold uppercase">
            Last updated · {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>
        </div>
      </section>
    </div>
  );
}
