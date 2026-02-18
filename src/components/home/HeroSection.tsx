"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #fafaf9 100%)" }}
      />
      
      {/* Decorative elements */}
      <div 
        className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full blur-3xl opacity-40 hidden lg:block"
        style={{ backgroundColor: "#dcfce7" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Badge - Social Proof Pattern */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center lg:justify-start"
            >
              <span className="badge badge-primary mb-6">
                📍 South Beach's #1 Rated Nutrition Coach
              </span>
            </motion.div>

            {/* Headline - Outcome-focused pattern from page-cro skill */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-display-lg mb-6"
            >
              Lose 20-80 lbs in 12 Weeks{" "}
              <span className="text-gradient">Without Giving Up</span> the Foods You Love
            </motion.h1>

            {/* Subheadline - Specific, addresses pain point */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl mb-6 max-w-lg mx-auto lg:mx-0"
              style={{ color: "#57534e" }}
            >
              Miami's only PRO FIFA licensed nutrition coach. Get beach-ready 
              with personalized nutrition that works with your lifestyle—not against it.{" "}
              <span style={{ color: "#16a34a" }}>Hablamos Español.</span>
            </motion.p>

            {/* Quick benefit bullets - Scannability from page-cro */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-8 justify-center lg:justify-start text-sm"
              style={{ color: "#44403c" }}
            >
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" style={{ color: "#16a34a" }} />
                No extreme diets
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" style={{ color: "#16a34a" }} />
                Weekly accountability
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" style={{ color: "#16a34a" }} />
                Results guaranteed
              </li>
            </motion.ul>

            {/* CTAs - Value-focused copy from page-cro skill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link 
                href="/contact" 
                className="btn btn-primary btn-lg group animate-pulse-ring hover:scale-105 transition-transform shadow-glow-green"
              >
                Get My Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 arrow-slide" />
              </Link>
              <Link href="/transformations" className="btn btn-outline btn-lg btn-ripple group">
                <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                See Client Results
              </Link>
            </motion.div>

            {/* Trust signals near CTA - from page-cro skill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-sm justify-center lg:justify-start"
              style={{ color: "#78716c" }}
            >
              <span className="flex items-center gap-2">
                <span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#22c55e" }}
                />
                100% Free, no obligation
              </span>
              <span className="flex items-center gap-2">
                <span 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#22c55e" }}
                />
                Response within 24h
              </span>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-md">
              {/* Main image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-full">
                <Image
                  src="/images/bola-trans.png"
                  alt="Pablo Lima - Nutrition and Performance Coach"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                {/* Overlay gradient */}
                <div 
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(to top, rgba(28,25,23,0.4) 0%, transparent 50%)" }}
                />
              </div>

              {/* Floating card - Results proof */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 sm:p-4 border hidden sm:flex items-center gap-3 hover-lift cursor-pointer"
                style={{ borderColor: "#f5f5f4" }}
              >
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#dcfce7" }}
                >
                  <span className="text-xl sm:text-2xl">💪</span>
                </div>
                <div>
                  <p className="font-semibold text-sm sm:text-base" style={{ color: "#1c1917" }}>80 lbs Lost</p>
                  <p className="text-xs sm:text-sm" style={{ color: "#78716c" }}>Douglas, 12 weeks</p>
                </div>
              </motion.div>

              {/* Stats card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-4 -right-4 text-white rounded-xl shadow-xl p-3 sm:p-4 hidden sm:block"
                style={{ backgroundColor: "#1c1917" }}
              >
                <p className="text-2xl sm:text-3xl font-display">25</p>
                <p className="text-xs uppercase tracking-wider" style={{ color: "#a8a29e" }}>
                  Int'l Caps Uruguay
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
