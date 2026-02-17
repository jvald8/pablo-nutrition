import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#1c1917" }} className="text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xl"
                style={{ backgroundColor: "#16a34a", fontFamily: "var(--font-display), Georgia, serif" }}
              >
                P
              </div>
              <span 
                className="text-xl"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Pablo Lima
              </span>
            </Link>
            <p className="max-w-sm mb-6" style={{ color: "#a8a29e" }}>
              Former Uruguay National Team player bringing elite-level nutrition
              and performance coaching to Miami.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/pablolima.nutrition"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "#292524" }}
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="mailto:contact@pablolima.coach"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                style={{ backgroundColor: "#292524" }}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="font-medium text-sm uppercase tracking-wider mb-4"
              style={{ color: "#a8a29e" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About Pablo" },
                { href: "/programs", label: "Programs" },
                { href: "/transformations", label: "Results" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-white"
                    style={{ color: "#d6d3d1" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 
              className="font-medium text-sm uppercase tracking-wider mb-4"
              style={{ color: "#a8a29e" }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2" style={{ color: "#d6d3d1" }}>
                <MapPin size={16} style={{ color: "#22c55e" }} />
                Miami, Florida
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                  style={{ color: "#d6d3d1" }}
                >
                  <Phone size={16} style={{ color: "#22c55e" }} />
                  (305) 555-0123
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@pablolima.coach"
                  className="flex items-center gap-2 transition-colors hover:text-white"
                  style={{ color: "#d6d3d1" }}
                >
                  <Mail size={16} style={{ color: "#22c55e" }} />
                  contact@pablolima.coach
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid #292524" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm" style={{ color: "#78716c" }}>
            © {new Date().getFullYear()} Pablo Lima. All rights reserved.
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-sm">
            <span className="badge badge-primary">PRO FIFA License</span>
            <span style={{ color: "#78716c" }}>English & Español</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
