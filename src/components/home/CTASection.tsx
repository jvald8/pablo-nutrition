"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Calendar } from "lucide-react";

export function CTASection() {
  return (
    <section 
      className="section-lg text-white relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%)" }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "white" }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-48 sm:w-64 h-48 sm:h-64 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#4ade80" }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center">
          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-display-lg mb-4 sm:mb-6"
          >
            Ready to <span className="italic">Finally</span> See Results?
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl mb-8 sm:mb-10 max-w-xl mx-auto"
            style={{ color: "#dcfce7" }}
          >
            Book your free consultation today. No pressure, no commitment—just a
            conversation about your goals.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8 sm:mb-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all group hover:scale-105 shadow-premium hover:shadow-2xl"
              style={{ backgroundColor: "white", color: "#15803d" }}
            >
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 arrow-slide" />
            </Link>
            <a
              href="https://wa.me/13055550123"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium border-2 transition-all hover:bg-white/10 hover:border-white group"
              style={{ borderColor: "rgba(255,255,255,0.3)", color: "white", backgroundColor: "transparent" }}
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Message on WhatsApp
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm"
            style={{ color: "#bbf7d0" }}
          >
            <span className="flex items-center gap-2">
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#4ade80" }}
              />
              Free consultation
            </span>
            <span className="flex items-center gap-2">
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#4ade80" }}
              />
              Bilingual (EN/ES)
            </span>
            <span className="flex items-center gap-2">
              <span 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: "#4ade80" }}
              />
              Programs from $185
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
