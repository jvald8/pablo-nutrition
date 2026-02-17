"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  MapPin, 
  Star, 
  Phone,
  MessageCircle,
  Award,
  Users,
  Globe
} from "lucide-react";

const testimonials = [
  {
    name: "Carlos M.",
    location: "South Beach",
    result: "Lost 45 lbs",
    quote: "Pablo understood my Miami lifestyle. I still go out, enjoy ceviche, and lost 45 pounds.",
  },
  {
    name: "Maria S.",
    location: "Brickell",
    result: "Lost 32 lbs",
    quote: "Finally found a nutritionist who speaks Spanish and gets the Cuban food challenge!",
  },
  {
    name: "James R.",
    location: "Miami Beach",
    result: "Lost 58 lbs",
    quote: "Beach-ready in 12 weeks. Best investment I've made living in South Beach.",
  },
];

const serviceAreas = [
  "South Beach",
  "Miami Beach", 
  "Brickell",
  "Wynwood",
  "Coral Gables",
  "Coconut Grove",
  "Downtown Miami",
  "Key Biscayne",
];

export default function SouthBeachNutritionCoach() {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[80vh] flex items-center pt-24 pb-16 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0f2015 100%)" }}
      >
        {/* Background pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 mb-6"
              >
                <MapPin className="w-5 h-5" style={{ color: "#22c55e" }} />
                <span style={{ color: "#a8a29e" }}>Serving South Beach & Greater Miami</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-display mb-6"
                style={{ lineHeight: 1.1 }}
              >
                South Beach's{" "}
                <span style={{ color: "#22c55e" }}>#1 Nutrition Coach</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg sm:text-xl mb-8"
                style={{ color: "#a8a29e" }}
              >
                PRO FIFA licensed nutritionist. Former Uruguay National Team player. 
                Helping Miami locals lose 20-80 lbs without giving up the foods they love.{" "}
                <span style={{ color: "#22c55e" }}>Hablamos Español.</span>
              </motion.p>

              {/* Trust signals */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-6 mb-8"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5" style={{ color: "#22c55e" }} />
                  <span className="text-sm">PRO FIFA License</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" style={{ color: "#22c55e" }} />
                  <span className="text-sm">100+ Miami Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5" style={{ color: "#22c55e" }} />
                  <span className="text-sm">Bilingual EN/ES</span>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium text-white transition-all hover:scale-105"
                  style={{ backgroundColor: "#22c55e" }}
                >
                  Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="tel:+13055550123"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium border-2 transition-all"
                  style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}
                >
                  <Phone className="mr-2 w-5 h-5" />
                  (305) 555-0123
                </a>
              </motion.div>
            </div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative aspect-[4/5] max-w-md mx-auto">
                <div 
                  className="absolute inset-4 rounded-3xl"
                  style={{ backgroundColor: "#22c55e", opacity: 0.2 }}
                />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full">
                  <Image
                    src="/images/pablo-pro.JPG"
                    alt="Pablo Lima - South Beach Nutrition Coach"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Floating card */}
                <div 
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3"
                >
                  <div className="flex">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#1a1a1a" }}>5.0 Rating</p>
                    <p className="text-xs" style={{ color: "#78716c" }}>47 Google Reviews</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-12" style={{ backgroundColor: "#f0fdf4" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <span className="font-semibold" style={{ color: "#166534" }}>
              <MapPin className="w-4 h-4 inline mr-1" />
              Serving:
            </span>
            {serviceAreas.map((area) => (
              <span 
                key={area}
                className="px-3 py-1 rounded-full"
                style={{ backgroundColor: "#dcfce7", color: "#166534" }}
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why Miami Locals Choose Pablo */}
      <section className="py-20" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-4" style={{ color: "#1a1a1a" }}>
              Why Miami Locals Choose Pablo
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "#57534e" }}>
              I understand the Miami lifestyle—the restaurants, the social scene, the beach culture. 
              My programs work WITH your life, not against it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Miami-Friendly Nutrition",
                description: "Love Cuban food? Ceviche? Brunch at Juvia? I'll show you how to enjoy Miami's food scene while still losing weight.",
                icon: "🌴",
              },
              {
                title: "Bilingual Coaching",
                description: "English or Spanish—communicate in whatever language feels most comfortable for you. Hablamos Español.",
                icon: "🇺🇾",
              },
              {
                title: "Beach-Ready Results",
                description: "Get the confidence to hit South Beach looking and feeling your best. Real transformations in 12 weeks.",
                icon: "🏖️",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl border hover-lift"
                style={{ backgroundColor: "#fafaf9", borderColor: "#e7e5e4" }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2" style={{ color: "#1a1a1a" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#57534e" }}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Testimonials */}
      <section className="py-20" style={{ backgroundColor: "#fafaf9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display mb-4" style={{ color: "#1a1a1a" }}>
              Real Results from Miami Locals
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <div className="flex mb-4">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 italic" style={{ color: "#44403c" }}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold" style={{ color: "#1a1a1a" }}>
                      {testimonial.name}
                    </p>
                    <p className="text-sm flex items-center gap-1" style={{ color: "#78716c" }}>
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </p>
                  </div>
                  <span 
                    className="px-3 py-1 rounded-full text-sm font-semibold"
                    style={{ backgroundColor: "#dcfce7", color: "#166534" }}
                  >
                    {testimonial.result}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-20 text-white text-center"
        style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-display mb-6">
            Ready to Transform Your Body in Miami?
          </h2>
          <p className="text-lg mb-8" style={{ color: "#dcfce7" }}>
            Book your free consultation today. In-person in South Beach or virtual—your choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium transition-all hover:scale-105"
              style={{ backgroundColor: "white", color: "#15803d" }}
            >
              Book Free Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="https://wa.me/13055550123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full font-medium border-2 transition-all"
              style={{ borderColor: "rgba(255,255,255,0.3)" }}
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp
            </a>
          </div>
          <p className="mt-6 text-sm" style={{ color: "#bbf7d0" }}>
            📍 Serving South Beach, Miami Beach, Brickell, Wynwood & all of Greater Miami
          </p>
        </div>
      </section>

      {/* Local SEO Content */}
      <section className="py-16" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-display mb-6" style={{ color: "#1a1a1a" }}>
            About Pablo Lima - South Beach Nutrition Coach
          </h2>
          <div className="prose" style={{ color: "#44403c" }}>
            <p>
              Pablo Lima is Miami's premier nutrition coach, specializing in sustainable weight loss 
              for South Beach, Brickell, and Miami Beach residents. With a PRO FIFA nutrition license 
              and 18 years of experience as a professional soccer player with the Uruguay National Team, 
              Pablo brings elite-level expertise to everyday clients.
            </p>
            <p>
              Unlike generic diet programs, Pablo's approach is tailored to the Miami lifestyle. 
              Whether you're navigating the restaurant scene on Lincoln Road, enjoying brunch in Wynwood, 
              or balancing a busy Brickell professional life, Pablo creates nutrition plans that work 
              with your reality—not against it.
            </p>
            <p>
              <strong>Services include:</strong> Personalized nutrition coaching, macro-based meal planning, 
              weekly accountability check-ins, and ongoing support. Available for in-person consultations 
              in South Beach or virtual coaching for anywhere in Miami-Dade County.
            </p>
            <p>
              <strong>Hablamos Español:</strong> As a native Spanish speaker from Uruguay, Pablo offers 
              fully bilingual coaching for Miami's diverse community.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
