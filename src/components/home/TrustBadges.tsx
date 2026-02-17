"use client";

import { motion } from "framer-motion";
import { Shield, Award, Users, Star } from "lucide-react";

const badges = [
  {
    icon: Award,
    label: "PRO FIFA License",
    sublabel: "Certified Coach",
  },
  {
    icon: Shield,
    label: "25 Int'l Caps",
    sublabel: "Uruguay National Team",
  },
  {
    icon: Users,
    label: "50+ Clients",
    sublabel: "Transformed",
  },
  {
    icon: Star,
    label: "9+ Years",
    sublabel: "Coaching Experience",
  },
];

export function TrustBadges() {
  return (
    <section className="py-6 sm:py-8 border-t border-b" style={{ borderColor: "#e7e5e4", backgroundColor: "white" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {badges.map((badge, index) => (
            <motion.div
              key={badge.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-3"
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#f0fdf4" }}
              >
                <badge.icon className="w-5 h-5" style={{ color: "#16a34a" }} />
              </div>
              <div>
                <p className="font-semibold text-sm" style={{ color: "#1c1917" }}>{badge.label}</p>
                <p className="text-xs" style={{ color: "#78716c" }}>{badge.sublabel}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
