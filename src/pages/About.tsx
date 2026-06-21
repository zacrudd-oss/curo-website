import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6">
          <p className="animate-fade-in-up text-gold text-sm uppercase tracking-[0.3em] mb-4">
            About CURO
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-8">
            Built on Precision.
            <br />
            Driven by Care.
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-white/60 text-lg leading-relaxed max-w-2xl">
            CURO is Latin for "to take care of." It's not just a name — it's how
            we operate. Every deal, every conversation, every detail is handled
            with intention.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-dark-muted">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold mb-8">Our Story</h2>
            <div className="space-y-6 text-white/60 leading-relaxed">
              <p>
                CURO was born out of a simple frustration — too many investors
                in the North West were being let down by sourcing agents who
                prioritised quantity over quality. Founded during a business
                degree apprenticeship, CURO was built to do things differently
                from day one.
              </p>
              <p>
                Too many investors waste months trawling through portals, chasing
                leads that go nowhere, and missing the deals that actually
                matter. CURO was built to solve that problem — to be the bridge
                between motivated sellers who need certainty and investors who
                want access to opportunities they can't find on the open market.
              </p>
              <p>
                Quality is at the centre of everything we do. Every deal we
                present has been carefully vetted, negotiated, and packaged
                with genuine attention to detail — because we believe that's
                the standard our investors deserve.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-dark">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="mb-16">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Our Values
            </p>
            <h2 className="font-heading text-3xl font-bold">
              What Drives Us
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                title: "Precision Over Volume",
                desc: "We'd rather send you one exceptional deal than ten average ones. Quality is non-negotiable.",
              },
              {
                title: "Full Transparency",
                desc: "No hidden fees, no inflated figures. You see exactly what we see — the real numbers, every time.",
              },
              {
                title: "Compliance First",
                desc: "We are HMRC AML registered, a member of the Property Ombudsman, ICO registered, and fully insured. Your protection is built into everything we do.",
              },
              {
                title: "Investor-Centric",
                desc: "Your strategy comes first. We listen to what you're looking for and source deals that fit your criteria — not ours.",
              },
            ].map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 100}>
                <div className="p-8 border border-dark-border hover:border-gold/30 gold-glow transition-all duration-500">
                  <h3 className="font-heading text-xl font-semibold text-gold mb-3">
                    {v.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-muted">
        <ScrollReveal className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-bold mb-6">
            Let's Work Together
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
            Whether you're a first-time investor or an experienced buyer, CURO
            is built to serve you.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-4 bg-gold text-dark font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors duration-300"
          >
            Get in Touch
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
