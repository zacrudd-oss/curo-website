import { useState, type FormEvent } from "react";
import ScrollReveal from "../components/ScrollReveal";

export default function Contact() {
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
      <section className="pt-28 md:pt-32 pb-16 md:pb-20 bg-dark">
        <div className="max-w-4xl mx-auto px-6">
          <p className="animate-fade-in-up text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Contact Us
          </p>
          <h1 className="animate-fade-in-up animate-delay-100 font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 md:mb-8">
            Let's Talk Property
          </h1>
          <p className="animate-fade-in-up animate-delay-200 text-white/60 text-lg leading-relaxed max-w-2xl">
            Whether you're a cash buyer looking for your next deal or a
            homeowner exploring a fast sale, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-24 bg-dark-muted">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Form */}
            <ScrollReveal className="lg:col-span-3">
              {submitted ? (
                <div className="p-12 border border-gold/30 text-center">
                  <span className="text-gold text-4xl mb-4 block">✓</span>
                  <h3 className="font-heading text-2xl font-bold mb-3">
                    Message Received
                  </h3>
                  <p className="text-white/50">
                    We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
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
                        placeholder="John Smith"
                      />
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
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full bg-dark-card border border-dark-border px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors"
                        placeholder="07XXX XXXXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm text-white/60 mb-2">
                        I Am A... *
                      </label>
                      <select
                        name="type"
                        required
                        className="w-full bg-dark border border-dark-border px-4 py-3 text-sm text-white focus:border-gold focus:outline-none transition-colors"
                      >
                        <option value="">Select one</option>
                        <option value="investor">
                          Property Investor / Cash Buyer
                        </option>
                        <option value="seller">
                          Homeowner / Seller
                        </option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full bg-dark-card border border-dark-border px-4 py-3 text-sm text-white placeholder-white/30 focus:border-gold focus:outline-none transition-colors resize-none"
                      placeholder="Tell us a bit about what you're looking for..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-8 py-4 bg-gold text-dark font-semibold uppercase tracking-wider text-sm hover:bg-gold-light transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Info sidebar */}
            <ScrollReveal className="lg:col-span-2" delay={200}>
              <div className="space-y-10">
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
                    Serving investors across the UK
                  </p>
                </div>

                <div>
                  <h3 className="font-heading text-xl font-semibold mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    {[
                      { label: "Instagram", href: "#" },
                      { label: "LinkedIn", href: "#" },
                      { label: "Facebook", href: "#" },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        className="px-4 py-2 border border-dark-border text-white/50 text-sm hover:border-gold hover:text-gold transition-colors duration-300"
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-6 border border-dark-border hover:border-gold/20 transition-colors duration-500">
                  <h3 className="font-heading text-lg font-semibold mb-3">
                    Response Time
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">
                    We aim to respond to all enquiries within 24 hours. For
                    urgent matters, please mention this in your message.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
