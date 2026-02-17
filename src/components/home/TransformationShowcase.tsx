"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const transformations = [
  {
    id: "douglas",
    name: "Douglas C.",
    location: "Miami, FL",
    beforeImage: "/images/transformations/douglas-before.JPG",
    afterImage: "/images/transformations/douglas-after.JPG",
    weightLost: "80 lbs",
    bodyFat: "-17%",
    duration: "12 weeks",
    quote:
      "Working with Pablo completely transformed my approach to nutrition. I lost 80 pounds and gained so much energy!",
    program: "Performance Upgrade",
  },
];

export function TransformationShowcase() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const transformation = transformations[0];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <section 
      className="section-lg text-white relative overflow-hidden"
      style={{ backgroundColor: "#1c1917" }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <span 
            className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
            style={{ backgroundColor: "rgba(34, 197, 94, 0.2)", color: "#4ade80" }}
          >
            Real Results
          </span>
          <h2 className="text-display-md mb-4">
            Transformations That <span className="italic">Speak for Themselves</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto" style={{ color: "#a8a29e" }}>
            These aren't stock photos. These are real people who committed to the
            process and achieved extraordinary results.
          </p>
        </motion.div>

        {/* Transformation card */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Before/After Slider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden"
            >
              {/* After image (base) */}
              <Image
                src={transformation.afterImage}
                alt={`${transformation.name} after transformation`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              {/* Before image (clipped) */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <Image
                  src={transformation.beforeImage}
                  alt={`${transformation.name} before transformation`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Before label */}
                <div 
                  className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
                  style={{ backgroundColor: "#ef4444" }}
                >
                  BEFORE
                </div>
              </div>

              {/* After label */}
              <div 
                className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
                style={{ backgroundColor: "#22c55e" }}
              >
                AFTER
              </div>

              {/* Slider line */}
              <div
                className="absolute top-0 bottom-0 w-0.5 sm:w-1 shadow-lg"
                style={{ 
                  left: `${sliderPosition}%`, 
                  transform: "translateX(-50%)",
                  backgroundColor: "white"
                }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <ChevronLeft className="w-3 h-3 sm:w-4 sm:h-4 -mr-0.5" style={{ color: "#57534e" }} />
                  <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 -ml-0.5" style={{ color: "#57534e" }} />
                </div>
              </div>

              {/* Range input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
              />
            </motion.div>

            {/* Stats & Quote */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                <div 
                  className="rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <p 
                    className="text-2xl sm:text-3xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#4ade80" }}
                  >
                    -{transformation.weightLost.replace(" lbs", "")}
                  </p>
                  <p className="text-xs sm:text-sm mt-1" style={{ color: "#a8a29e" }}>Pounds Lost</p>
                </div>
                <div 
                  className="rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <p 
                    className="text-2xl sm:text-3xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#4ade80" }}
                  >
                    {transformation.bodyFat}
                  </p>
                  <p className="text-xs sm:text-sm mt-1" style={{ color: "#a8a29e" }}>Body Fat</p>
                </div>
                <div 
                  className="rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center border"
                  style={{ backgroundColor: "rgba(255,255,255,0.05)", borderColor: "rgba(255,255,255,0.1)" }}
                >
                  <p 
                    className="text-2xl sm:text-3xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#4ade80" }}
                  >
                    {transformation.duration.replace(" weeks", "")}
                  </p>
                  <p className="text-xs sm:text-sm mt-1" style={{ color: "#a8a29e" }}>Weeks</p>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="relative">
                <span 
                  className="absolute -top-2 sm:-top-4 -left-1 sm:-left-2 text-4xl sm:text-6xl"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", color: "rgba(34, 197, 94, 0.3)" }}
                >
                  "
                </span>
                <p 
                  className="text-base sm:text-xl italic pl-4 sm:pl-6"
                  style={{ color: "#e7e5e4" }}
                >
                  {transformation.quote}
                </p>
                <footer className="mt-3 sm:mt-4 pl-4 sm:pl-6">
                  <p className="font-semibold text-white">{transformation.name}</p>
                  <p className="text-sm" style={{ color: "#a8a29e" }}>
                    {transformation.location} • {transformation.program}
                  </p>
                </footer>
              </blockquote>

              {/* CTA */}
              <Link
                href="/transformations"
                className="inline-flex items-center gap-2 font-medium group"
                style={{ color: "#4ade80" }}
              >
                See more transformations
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
