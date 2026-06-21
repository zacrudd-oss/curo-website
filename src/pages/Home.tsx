import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1428] via-dark to-dark-muted" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.03] blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="animate-fade-in-up text-gold text-sm uppercase tracking-[0.3em] mb-6">
            CURO Bespoke Investments
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 font-heading text-3xl sm:text-5xl md:text-7xl font-bold leading-tight mb-6 md:mb-8">
            Your Deals.
            <br />
            <span className="text-gold">Done Properly.</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-white/60 text-base md:text-xl max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
            Precision-sourced, below-market-value property deals for serious
            investors across Warrington and the North West.
          </p>
          <div className="animate-fade-in-up animate-delay-300 flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
            <Link
              to="/contact"
              className="px-6 sm:px-8 py-4 bg-gold text-dark font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors duration-300 text-center"
            >
              Source My Next Deal
            </Link>
            <Link
              to="/services"
              className="px-6 sm:px-8 py-4 border border-white/20 text-white font-medium uppercase tracking-wider text-sm hover:border-gold hover:text-gold transition-colors duration-300 text-center"
            >
              How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 md:py-24 bg-dark-muted">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-10 md:mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Why CURO
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Off-Market Deals. Delivered.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Below Market Value",
                desc: "Every deal we source is below market value. We negotiate hard so you don't have to.",
                icon: (
                  <span className="text-2xl font-bold leading-none">£</span>
                ),
              },
              {
                title: "Fully Compliant",
                desc: "HMRC AML registered, Property Ombudsman member, ICO registered, and professionally insured.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
              {
                title: "Off-Market Access",
                desc: "Deals you won't find on Rightmove or Zoopla. Direct-to-vendor sourcing across the North West.",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M9 22V12h6v10" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ),
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="p-8 bg-dark-card border border-dark-border hover:border-gold/30 gold-glow transition-all duration-500">
                  <span className="inline-flex w-12 h-12 bg-gold/10 text-gold items-center justify-center mb-6">
                    {item.icon}
                  </span>
                  <h3 className="font-heading text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 bg-dark overflow-hidden">
        <div className="absolute top-0 left-0 right-0 gold-line" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gold/[0.02] blur-[100px]" />
        <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Ready to Invest Smarter?
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Whether you're buying your first investment property or adding to a
            portfolio, CURO finds deals that make the numbers work.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gold text-dark font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors duration-300"
          >
            Start a Conversation
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
