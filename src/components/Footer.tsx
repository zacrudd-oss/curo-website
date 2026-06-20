import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark-muted border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-gold mb-4">
              CURO
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Bespoke property sourcing for serious investors.
              Warrington &amp; the North West.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-white/80 mb-4">
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/sellers", label: "Sell Your Property" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="text-white/40 hover:text-gold text-sm transition-colors duration-300"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.15em] text-white/80 mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/40">
              <a
                href="mailto:info@curo.ltd"
                className="hover:text-gold transition-colors duration-300"
              >
                info@curo.ltd
              </a>
              <a
                href="mailto:Zac.Rudd@curo.ltd"
                className="hover:text-gold transition-colors duration-300"
              >
                Zac.Rudd@curo.ltd
              </a>
              <p>Warrington, North West England</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-dark-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} CURO Bespoke Investments. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/30 hover:text-gold text-xs transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/30 hover:text-gold text-xs transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
