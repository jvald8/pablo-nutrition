"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Star } from "lucide-react";

const packages = [
  {
    name: "Evaluation",
    tagline: "Know your starting point",
    price: 185,
    period: "one-time",
    features: [
      "Complete body composition analysis",
      "Laboratory exams included",
      "Written results report",
      "Priority areas identified",
    ],
    cta: "Get Evaluated",
    highlighted: false,
  },
  {
    name: "Habit Builder",
    tagline: "Most popular",
    price: 715,
    monthlyPrice: 380,
    period: "to start",
    features: [
      "Everything in Evaluation",
      "Personalized nutrition guide",
      "Weekly accountability calls",
      "Progress reviews & adjustments",
      "Ongoing Q&A support",
    ],
    cta: "Start Building",
    highlighted: true,
  },
  {
    name: "Elite Performance",
    tagline: "Maximum results",
    price: 1515,
    monthlyPrice: 950,
    period: "to start",
    features: [
      "Everything in Habit Builder",
      "High-performance training plan",
      "2x weekly training sessions",
      "3x weekly check-in calls",
      "Elite-level accountability",
    ],
    cta: "Go Elite",
    highlighted: false,
  },
];

export function PricingPreview() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="badge badge-primary mb-4">Investment</span>
          <h2 className="text-display-md mb-4">
            Programs for Every <span className="italic">Commitment Level</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#57534e" }}>
            From one-time evaluations to full transformation packages. Choose the
            level of support that fits your goals.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${
                pkg.highlighted ? "lg:scale-105" : ""
              }`}
              style={{
                backgroundColor: pkg.highlighted ? "#1c1917" : "#fafaf9",
                color: pkg.highlighted ? "white" : "#1c1917",
                border: pkg.highlighted ? "2px solid #22c55e" : "1px solid #e7e5e4",
              }}
            >
              {/* Popular badge */}
              {pkg.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div 
                    className="flex items-center gap-1 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-white"
                    style={{ backgroundColor: "#22c55e" }}
                  >
                    <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-4 sm:mb-6">
                <p
                  className="text-sm font-medium mb-1"
                  style={{ color: pkg.highlighted ? "#4ade80" : "#16a34a" }}
                >
                  {pkg.tagline}
                </p>
                <h3
                  className="text-xl sm:text-2xl"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {pkg.name}
                </h3>
              </div>

              {/* Price */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-baseline gap-1">
                  <span
                    className="text-3xl sm:text-4xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    ${pkg.price}
                  </span>
                  <span
                    className="text-sm"
                    style={{ color: pkg.highlighted ? "#a8a29e" : "#78716c" }}
                  >
                    {pkg.period}
                  </span>
                </div>
                {pkg.monthlyPrice && (
                  <p
                    className="text-sm mt-1"
                    style={{ color: pkg.highlighted ? "#a8a29e" : "#78716c" }}
                  >
                    + ${pkg.monthlyPrice}/month after
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 sm:gap-3">
                    <Check
                      className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 flex-shrink-0"
                      style={{ color: pkg.highlighted ? "#4ade80" : "#16a34a" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: pkg.highlighted ? "#d6d3d1" : "#57534e" }}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/contact"
                className="block w-full text-center py-2.5 sm:py-3 rounded-full font-medium transition-all"
                style={{
                  backgroundColor: pkg.highlighted ? "#22c55e" : "#1c1917",
                  color: "white",
                }}
              >
                {pkg.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-10"
        >
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 font-medium group"
            style={{ color: "#16a34a" }}
          >
            View all programs & pricing details
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
