import { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Pablo Lima | Free Consultation",
  description:
    "Schedule your free consultation with Pablo Lima. Personalized nutrition coaching and training in Miami. English and Spanish available.",
};

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Miami, Florida",
    subtext: "In-person & remote options",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(305) 555-0123",
    subtext: "Call or text",
    href: "tel:+13055550123",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@pablolima.coach",
    subtext: "Usually respond within 24h",
    href: "mailto:contact@pablolima.coach",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Sat, 7am-7pm",
    subtext: "Eastern Time",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section 
        className="pt-28 sm:pt-32 pb-12 sm:pb-16"
        style={{ background: "linear-gradient(to bottom, #f0fdf4, white)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-primary mb-4">Free Consultation</span>
          <h1 className="text-display-lg mb-6" style={{ color: "#1c1917" }}>
            Let's Start Your <span className="italic">Transformation</span>
          </h1>
          <p className="text-lg sm:text-xl" style={{ color: "#57534e" }}>
            Ready to take the first step? Schedule a free consultation to discuss
            your goals. No pressure, no commitment—just a conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              <div>
                <h2 
                  className="text-xl sm:text-2xl mb-4"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#1c1917" }}
                >
                  Get in Touch
                </h2>
                <p style={{ color: "#57534e" }}>
                  Have questions? Want to learn more about my programs? Reach out
                  through any of these channels.
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-start gap-4 p-4 rounded-xl"
                    style={{ backgroundColor: "#fafaf9" }}
                  >
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "#dcfce7" }}
                    >
                      <info.icon className="w-5 h-5" style={{ color: "#16a34a" }} />
                    </div>
                    <div>
                      <p className="text-sm" style={{ color: "#78716c" }}>{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="font-semibold transition-colors hover:underline"
                          style={{ color: "#1c1917" }}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-semibold" style={{ color: "#1c1917" }}>
                          {info.value}
                        </p>
                      )}
                      <p className="text-sm" style={{ color: "#78716c" }}>{info.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp */}
              <a
                href="https://wa.me/13055550123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl transition-all group"
                style={{ backgroundColor: "#f0fdf4", border: "1px solid #bbf7d0" }}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#22c55e" }}
                >
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold" style={{ color: "#1c1917" }}>
                    Message on WhatsApp
                  </p>
                  <p className="text-sm" style={{ color: "#78716c" }}>
                    Quick responses, English & Spanish
                  </p>
                </div>
              </a>

              {/* Languages */}
              <div 
                className="p-4 text-white rounded-xl"
                style={{ backgroundColor: "#1c1917" }}
              >
                <p className="text-sm mb-2" style={{ color: "#a8a29e" }}>Languages</p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇺🇸</span>
                    <span>English</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇪🇸</span>
                    <span>Español</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div 
                className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 border"
                style={{ backgroundColor: "#fafaf9", borderColor: "#f5f5f4" }}
              >
                <h3 
                  className="text-xl mb-6"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#1c1917" }}
                >
                  Schedule Your Free Consultation
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section" style={{ backgroundColor: "#fafaf9" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 
            className="text-display-sm text-center mb-10 sm:mb-12"
            style={{ color: "#1c1917" }}
          >
            Common Questions
          </h2>
          <div className="space-y-3 sm:space-y-4">
            {[
              {
                q: "What happens during the free consultation?",
                a: "We'll discuss your current situation, goals, and challenges. I'll explain my approach and which program might be the best fit for you. No pressure to commit—it's just a conversation.",
              },
              {
                q: "Do I need to be in Miami for coaching?",
                a: "While in-person sessions are available in Miami, I also offer remote coaching with video calls, messaging support, and digital program delivery.",
              },
              {
                q: "How quickly can I expect to see results?",
                a: "Most clients start seeing measurable changes within 4-6 weeks. The 8-12 week programs are designed for significant, sustainable transformations.",
              },
              {
                q: "Do you work with beginners?",
                a: "Absolutely. My programs are personalized to your current level, whether you're just starting or looking to optimize an existing routine.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl overflow-hidden"
                style={{ border: "1px solid #e7e5e4" }}
              >
                <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none">
                  <span className="font-semibold pr-4" style={{ color: "#1c1917" }}>{faq.q}</span>
                  <span 
                    className="text-2xl group-open:rotate-45 transition-transform flex-shrink-0"
                    style={{ color: "#a8a29e" }}
                  >
                    +
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6" style={{ color: "#57534e" }}>
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
