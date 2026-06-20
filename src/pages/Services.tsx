import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discovery Call",
    desc: "We learn about your investment criteria — budget, area, strategy, and timeline. No obligation, no pressure.",
  },
  {
    num: "02",
    title: "Deal Sourcing",
    desc: "We go direct to motivated sellers across Warrington and the North West, sourcing below-market-value opportunities that match your brief.",
  },
  {
    num: "03",
    title: "Due Diligence Pack",
    desc: "Every deal comes with a full breakdown — purchase price, comparable evidence, estimated refurb costs, projected yield, and rental data.",
  },
  {
    num: "04",
    title: "Completion",
    desc: "Once you're happy, we manage the process through to exchange and completion. Our fee is only payable on a successful deal.",
  },
];

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6">
          <p className="animate-fade-in-up text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Our Services
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 font-heading text-4xl md:text-5xl font-bold leading-tight mb-8">
            Precision Property
            <br />
            Sourcing
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-white/60 text-lg leading-relaxed max-w-2xl">
            We find below-market-value property deals so you don't have to.
            Direct-to-vendor, off-market, and fully vetted before they ever reach
            your inbox.
          </p>
        </div>
      </section>

      {/* What is Deal Sourcing */}
      <section className="py-24 bg-dark-muted">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold mb-8">
              What Is Deal Sourcing?
            </h2>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                Deal sourcing is the process of finding property investment
                opportunities that aren't available on the open market. As a
                professional property sourcing agent, CURO identifies motivated
                sellers, negotiates below-market-value prices, and delivers
                ready-to-go deals directly to qualified investors.
              </p>
              <p>
                Think of us as your acquisitions team — without the overhead. You
                tell us what you're looking for, and we go out and find it.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-dark">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              The Process
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              How It Works
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 100}>
                <div className="p-8 bg-dark-card border border-dark-border hover:border-gold/30 gold-glow transition-all duration-500">
                  <span className="text-gold font-heading text-3xl font-bold">
                    {s.num}
                  </span>
                  <h3 className="font-heading text-xl font-semibold mt-4 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-24 bg-dark-muted">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              The CURO Advantage
            </p>
            <h2 className="font-heading text-3xl font-bold">
              What You Get
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Off-market deals not listed on any portal",
              "Below-market-value pricing, negotiated by us",
              "Full due diligence pack with every deal",
              "Comparable evidence and rental yield data",
              "Dedicated point of contact throughout",
              "No upfront fees — we only get paid on completion",
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-start gap-4 p-6 border border-dark-border hover:border-gold/20 transition-colors duration-500">
                  <span className="text-gold mt-0.5 shrink-0">—</span>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {item}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-24 bg-dark">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Compliance
            </p>
            <h2 className="font-heading text-3xl font-bold mb-8">
              Fully Regulated. Fully Insured.
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "HMRC Anti-Money Laundering Registered",
                "Member of The Property Ombudsman",
                "ICO Registered (Data Protection)",
                "Professional Indemnity Insured",
              ].map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-3 p-4 border border-dark-border hover:border-gold/20 transition-colors duration-500"
                >
                  <span className="text-gold text-lg">✓</span>
                  <span className="text-white/70 text-sm">{c}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-muted">
        <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            No upfront costs. No retainers. We only get paid when a deal
            completes successfully. Book a call to discuss your criteria.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gold text-dark font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors duration-300"
          >
            Book a Discovery Call
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
