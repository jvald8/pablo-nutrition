"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Globe, Trophy } from "lucide-react";

const credentials = [
  {
    icon: Trophy,
    title: "3x League Champion",
    description: "Danubio FC (2004), Peñarol (2015)",
  },
  {
    icon: Globe,
    title: "International Career",
    description: "25 caps for Uruguay National Team",
  },
  {
    icon: Award,
    title: "PRO FIFA License",
    description: "Certified coach and sports director",
  },
  {
    icon: Users,
    title: "9+ Years Coaching",
    description: "High-performance training programs",
  },
];

const clubs = [
  { name: "Uruguay National Team", flag: "🇺🇾" },
  { name: "Peñarol", flag: "🇺🇾" },
  { name: "Vélez Sarsfield", flag: "🇦🇷" },
  { name: "Iraklis FC", flag: "🇬🇷" },
  { name: "Danubio FC", flag: "🇺🇾" },
];

export function CredentialsSection() {
  return (
    <section className="section" style={{ backgroundColor: "#fafaf9" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-lg">
              <div 
                className="absolute inset-4 rounded-2xl sm:rounded-3xl"
                style={{ backgroundColor: "#bbf7d0" }}
              />
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-full">
                <Image
                  src="/images/pablo-uruguay.jpeg"
                  alt="Pablo Lima representing Uruguay National Team"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 15%" }}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Clubs played for */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 border hidden sm:block"
                style={{ borderColor: "#f5f5f4" }}
              >
                <p 
                  className="text-xs uppercase tracking-wider mb-2"
                  style={{ color: "#78716c" }}
                >
                  Clubs
                </p>
                <div className="flex gap-2">
                  {clubs.slice(0, 4).map((club) => (
                    <div
                      key={club.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-base sm:text-lg"
                      style={{ backgroundColor: "#f5f5f4" }}
                      title={club.name}
                    >
                      {club.flag}
                    </div>
                  ))}
                  <div 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-xs font-medium"
                    style={{ backgroundColor: "#1c1917" }}
                  >
                    +{clubs.length - 4}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="badge badge-primary mb-4">About Pablo</span>
            <h2 className="text-display-md mb-6">
              From <span className="italic">Professional Football</span> to
              Transforming Lives
            </h2>
            <p className="text-base sm:text-lg mb-6" style={{ color: "#57534e" }}>
              After nearly 20 years playing at the highest levels in South America
              and Europe—including the Uruguay National Team—Pablo now brings that
              same elite mindset to help everyday people achieve extraordinary
              results.
            </p>
            
            {/* GEO-optimized authority signal */}
            <div 
              className="p-4 rounded-xl mb-8 border-l-4"
              style={{ backgroundColor: "#f0fdf4", borderLeftColor: "#22c55e" }}
            >
              <p className="text-sm" style={{ color: "#166534" }}>
                <strong>Why expertise matters:</strong> Research shows that working with a 
                credentialed professional increases the likelihood of achieving weight loss 
                goals by <strong>3-5x</strong> compared to self-directed approaches. Pablo's 
                PRO FIFA license represents the highest standard in sports nutrition certification.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8">
              {credentials.map((cred, index) => (
                <motion.div
                  key={cred.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-xl border"
                  style={{ borderColor: "#f5f5f4" }}
                >
                  <div 
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#dcfce7" }}
                  >
                    <cred.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#16a34a" }} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: "#1c1917" }}>
                      {cred.title}
                    </p>
                    <p className="text-xs" style={{ color: "#78716c" }}>{cred.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-medium group"
              style={{ color: "#16a34a" }}
            >
              Read full story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
