"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, Utensils, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Evaluate",
    description:
      "Complete body composition analysis, lab work, and lifestyle assessment to understand exactly where you are.",
    icon: ClipboardCheck,
    bgColor: "#dcfce7",
    iconColor: "#16a34a",
  },
  {
    number: "02",
    title: "Customize",
    description:
      "Receive a personalized nutrition and training plan built for YOUR goals, schedule, and preferences.",
    icon: Utensils,
    bgColor: "rgba(251, 191, 36, 0.2)",
    iconColor: "#d97706",
  },
  {
    number: "03",
    title: "Transform",
    description:
      "Weekly accountability calls, progress tracking, and plan adjustments until you reach your goal.",
    icon: TrendingUp,
    bgColor: "#f5f5f4",
    iconColor: "#57534e",
  },
];

export function ProcessSection() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="badge badge-primary mb-4">The Process</span>
          <h2 className="text-display-md mb-4">
            Simple. Structured. <span className="italic">Effective.</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#57534e" }}>
            The same methodical approach used to train professional athletes,
            adapted for your transformation.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div 
                  className="absolute left-7 sm:left-8 top-16 sm:top-20 bottom-0 w-px"
                  style={{ background: "linear-gradient(to bottom, #e7e5e4, transparent)" }}
                />
              )}

              <div className="flex gap-4 sm:gap-6 pb-8 sm:pb-12">
                {/* Icon */}
                <div
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: step.bgColor }}
                >
                  <step.icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: step.iconColor }} />
                </div>

                {/* Content */}
                <div className="pt-1 sm:pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-medium" style={{ color: "#16a34a" }}>
                      Step {step.number}
                    </span>
                  </div>
                  <h3 
                    className="text-xl sm:text-2xl mb-2"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#1c1917" }}
                  >
                    {step.title}
                  </h3>
                  <p className="max-w-md" style={{ color: "#57534e" }}>{step.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Duration badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center mt-4 sm:mt-8"
        >
          <div 
            className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 rounded-full px-4 sm:px-6 py-3 border"
            style={{ backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" }}
          >
            <span className="font-medium" style={{ color: "#16a34a" }}>
              8-12 week programs
            </span>
            <span 
              className="hidden sm:block w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "#4ade80" }}
            />
            <span className="font-medium" style={{ color: "#16a34a" }}>
              Limited spots available
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
