"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, AlertTriangle, TrendingDown, Clock } from "lucide-react";

const lossItems = [
  {
    icon: TrendingDown,
    title: "Another year of frustration",
    description: "How many times have you promised yourself 'this will be the year'? Without elite guidance, you're stuck in the same cycle.",
  },
  {
    icon: Clock,
    title: "Wasted time on bad advice",
    description: "Generic meal plans and trendy diets cost you months of progress. Every day without a proven system is a day lost.",
  },
  {
    icon: AlertTriangle,
    title: "Health risks compounding",
    description: "Excess weight, poor nutrition, and low energy don't just affect today—they compound into serious long-term health issues.",
  },
];

export function LossAversionSection() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12"
        >
          <span 
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ backgroundColor: "#fef2f2", color: "#dc2626" }}
          >
            ⚠️ The Cost of Waiting
          </span>
          <h2 className="text-display-md mb-4" style={{ color: "#1c1917" }}>
            What Happens If You <span className="italic">Don't</span> Act?
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#57534e" }}>
            Every week you delay is another week of missed potential. 
            Here's what staying on your current path really costs you:
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {lossItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border"
              style={{ backgroundColor: "#fafaf9", borderColor: "#fecaca" }}
            >
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "#fee2e2" }}
              >
                <item.icon className="w-6 h-6" style={{ color: "#dc2626" }} />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: "#1c1917" }}>
                {item.title}
              </h3>
              <p style={{ color: "#57534e" }}>{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center p-6 sm:p-8 rounded-2xl"
          style={{ backgroundColor: "#f0fdf4", border: "2px solid #22c55e" }}
        >
          <p className="text-lg sm:text-xl font-semibold mb-4" style={{ color: "#15803d" }}>
            The good news? You can change this <em>today</em>.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-base font-medium transition-all group"
            style={{ backgroundColor: "#16a34a", color: "white" }}
          >
            Book Your Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
