import { useState, type FormEvent } from "react";
import ScrollReveal from "../components/ScrollReveal";

export default function Sellers() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    fetch("https://formspree.io/f/mrevojje", {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    }).then(() => {
      setSubmitted(true);
      form.reset();
    });
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-dark overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/[0.03] blur-[120px]" />
        <div className="relative max-w-4xl mx-auto px-6">
          <p className="animate-fade-in-up text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Sell Your Property
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 font-heading text-4xl md:text-5xl font-bold leading-tight mb-8">
            Need a Fast,
            <br />
            <span className="text-gold">Cash Sale?</span>
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-white/60 text-lg leading-relaxed max-w-2xl">
            We work with qualified cash buyers ready to move quickly. No chains,
            no delays, no estate agent fees. Register your interest below and
            we'll be in touch within 24 hours.
          </p>
        </div>
      </section>

      {/* Why Sell Through CURO */}
      <section className="py-20 bg-dark-muted">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Why CURO
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              A Better Way to Sell
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cash Buyers Ready",
                desc: "Our investors are pre-qualified and ready to complete. No mortgage delays, no chain collapses.",
              },
              {
                title: "Fast Completion",
                desc: "We aim to complete in as little as 2–4 weeks. You set the timeline that works for you.",
              },
              {
                title: "No Fees to You",
                desc: "Our fee is paid by the buyer, not you. There are no hidden costs or estate agent commissions.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="p-8 bg-dark-card border border-dark-border hover:border-gold/30 gold-glow transition-all duration-500">
                  <h3 className="font-heading text-xl font-semibold text-gold mb-3">
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

      {/* Register Interest Form + Contact */}
      <section className="py-24 bg-dark">
        <div className="absolute left-0 right-0 gold-line" />
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal className="text-center mb-14">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Register Interest
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Submit Your Property
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto">
              Drop us your property listing link and a brief description. We'll
              review it and get back to you within 24 hours.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-5 gap-16">
            {/* Form */}
            <ScrollReveal className="lg:col-span-3">
              {submitted ? (
                <div className="p-12 border border-gold/30 text-center">
                  <span className="text-gold text-4xl mb-4 block">✓</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">
                    Interest Registered
                  </h3>
                  <p className="text-white/50">
                    We've received your details and will be in touch within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="_subject" value="Seller Interest" />

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full bg-dark-card border border-dark-border px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full bg-dark-card border border-dark-border px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                        placeholder="07378 635 856"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full bg-dark-card border border-dark-border px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                      placeholder="you@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Property Listing Link
                    </label>
                    <input
                      type="url"
                      name="listing_url"
                      className="w-full bg-dark-card border border-dark-border px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                      placeholder="https://rightmove.co.uk/properties/..."
                    />
                    <p className="text-white/30 text-xs mt-1.5">
                      Rightmove, Zoopla, OnTheMarket, or any listing link
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Tell Us About Your Property *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      className="w-full bg-dark-card border border-dark-border px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Property type, location, asking price, reason for selling, preferred timeline..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-gold text-dark font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors duration-300"
                  >
                    Register Interest
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Contact sidebar */}
            <ScrollReveal className="lg:col-span-2" delay={200}>
              <div className="space-y-10">
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Call Us
                  </h3>
                  <a
                    href="tel:+447378635856"
                    className="text-gold text-lg hover:text-gold-light transition-colors"
                  >
                    07378 635 856
                  </a>
                  <p className="text-white/40 text-sm mt-2">
                    Available Mon–Fri, 9am–6pm
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Email Us
                  </h3>
                  <a
                    href="mailto:info@curo.ltd"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    info@curo.ltd
                  </a>
                  <br />
                  <a
                    href="mailto:Zac.Rudd@curo.ltd"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    Zac.Rudd@curo.ltd
                  </a>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Location
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Warrington, North West England
                    <br />
                    Covering properties across the UK
                  </p>
                </div>

                <div className="p-6 border border-dark-border hover:border-gold/20 transition-colors duration-500">
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    What Happens Next?
                  </h3>
                  <ol className="text-white/50 text-sm leading-relaxed space-y-3">
                    <li className="flex gap-3">
                      <span className="text-gold font-semibold shrink-0">1.</span>
                      We review your property details
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold font-semibold shrink-0">2.</span>
                      We call you to discuss your situation
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold font-semibold shrink-0">3.</span>
                      We match you with a qualified cash buyer
                    </li>
                    <li className="flex gap-3">
                      <span className="text-gold font-semibold shrink-0">4.</span>
                      Completion on your timeline
                    </li>
                  </ol>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
