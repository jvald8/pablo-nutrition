"use client";

import { motion } from "framer-motion";
import { X, Check, TrendingDown } from "lucide-react";

const problems = [
  "Generic diet plans that ignore your real life",
  "Trainers who've never competed at a high level",
  "Yo-yo results that never seem to last",
  "Wasting money on supplements that don't work",
  "Feeling lost without a clear roadmap",
];

const solutions = [
  "Personalized nutrition built for YOUR lifestyle",
  "Elite methodology from 18 years of pro sports",
  "Sustainable habits that create lasting change",
  "Evidence-based approach, no gimmicks",
  "Clear 3-step process with weekly accountability",
];

export function ProblemSection() {
  return (
    <section className="section bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header - GEO optimized with statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <span className="badge badge-accent mb-4">The Problem</span>
          <h2 className="text-display-md mb-4">
            Most Fitness Programs Are <span className="italic">Designed to Fail</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#57534e" }}>
            You've tried the apps, the meal plans, the gym memberships. But without
            elite-level guidance, you're just guessing.
          </p>
          
          {/* GEO-optimized statistic callout with citation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-full"
            style={{ backgroundColor: "#fef2f2", border: "1px solid #fecaca" }}
          >
            <div 
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "#fee2e2" }}
            >
              <TrendingDown className="w-5 h-5" style={{ color: "#dc2626" }} />
            </div>
            <div className="text-left">
              <p className="font-bold" style={{ color: "#991b1b" }}>
                <span className="text-xl">95%</span> of dieters regain weight
              </p>
              <p className="text-xs" style={{ color: "#b91c1c" }}>
                According to UCLA research on long-term diet outcomes
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Comparison grid */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 border"
            style={{ backgroundColor: "#fafaf9", borderColor: "#e7e5e4" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#fee2e2" }}
              >
                <X className="w-5 h-5" style={{ color: "#dc2626" }} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold" style={{ color: "#1c1917" }}>
                What You're Tired Of
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {problems.map((problem, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <X className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#ef4444" }} />
                  <span style={{ color: "#57534e" }}>{problem}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 border"
            style={{ backgroundColor: "#f0fdf4", borderColor: "#bbf7d0" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div 
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#dcfce7" }}
              >
                <Check className="w-5 h-5" style={{ color: "#16a34a" }} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold" style={{ color: "#1c1917" }}>
                What You Get With Pablo
              </h3>
            </div>
            <ul className="space-y-3 sm:space-y-4">
              {solutions.map((solution, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#16a34a" }} />
                  <span style={{ color: "#44403c" }}>{solution}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
