"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "350+", label: "Pro Matches" },
  { number: "25", label: "International Caps" },
  { number: "3x", label: "League Champion" },
  { number: "9+", label: "Years Coaching" },
];

export function SocialProofBar() {
  return (
    <section style={{ backgroundColor: "#1c1917" }} className="py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p 
                className="text-2xl sm:text-3xl md:text-4xl text-white mb-1"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {stat.number}
              </p>
              <p 
                className="text-xs sm:text-sm uppercase tracking-wider"
                style={{ color: "#a8a29e" }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
