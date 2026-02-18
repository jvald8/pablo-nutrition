import { Metadata } from "next";
import Link from "next/link";
import { Check, Star, ArrowRight, Shield, Lock } from "lucide-react";
import { CheckoutButton } from "@/components/CheckoutButton";

export const metadata: Metadata = {
  title: "Programs & Pricing | Pablo Lima Nutrition Coaching",
  description:
    "Explore Pablo Lima's nutrition coaching programs. From single evaluations to full transformation packages. Programs starting at $185.",
};

const individualServices = [
  {
    id: "evaluation",
    productKey: "evaluation",
    name: "Evaluation + Results Report",
    price: 185,
    description: "Know exactly where you stand before making any changes",
    features: [
      "Complete anthropometric evaluation",
      "Laboratory exams included",
      "Written results report with explanation",
      "General guidance on your current situation",
      "Priority areas to work on identified",
    ],
    recommended: "Perfect if you want to know your starting point before choosing a plan.",
  },
  {
    id: "nutrition-guide",
    productKey: "nutritionGuide",
    name: "Personalized Nutrition & Habits Guide",
    price: 380,
    description: "A clear roadmap to transform how you eat",
    features: [
      "Personalized nutrition and lifestyle guide",
      "Aligned with your goals and daily routine",
      "Based on your evaluation results",
      "Practical meal suggestions",
      "Daily organization examples",
      "Laboratory exams included",
    ],
    recommended: "Ideal if you have measurements and need a clear nutrition map.",
  },
];

const packages = [
  {
    id: "habit-builder",
    initialProductKey: "habitBuilderInitial",
    monthlyProductKey: "habitBuilderMonthly",
    name: "Habit Builder",
    tagline: "Silver Package",
    initialPrice: 715,
    monthlyPrice: 380,
    description: "Build sustainable habits with ongoing accountability",
    features: [
      "In-person consultation",
      "Complete anthropometric evaluation",
      "Laboratory exams",
      "Results explanation and report",
      "Personalized nutrition & habits guide",
      "1 weekly phone call (20 mins)",
      "Progress reviews and guide adjustments",
      "Ongoing Q&A and obstacle resolution",
    ],
    recommended: "Best for those who need accountability and plan adjustments as they progress.",
    highlighted: true,
  },
  {
    id: "performance-upgrade",
    initialProductKey: "performanceUpgradeInitial",
    monthlyProductKey: "performanceUpgradeMonthly",
    name: "Performance Upgrade",
    tagline: "Gold Package",
    initialPrice: 1215,
    monthlyPrice: 555,
    description: "Deep transformation with nutrition and training integration",
    features: [
      "Everything in Habit Builder",
      "2 weekly phone calls (20 min each)",
      "Close weekly accompaniment and planning",
      "High Performance training plan",
      "1 weekly training session",
      "Integrated nutrition + training approach",
    ],
    recommended: "For those ready to combine nutrition and training for maximum results.",
    highlighted: false,
  },
  {
    id: "elite",
    initialProductKey: "eliteInitial",
    monthlyProductKey: "eliteMonthly",
    name: "Elite High Performance",
    tagline: "Premium Package",
    initialPrice: 1515,
    monthlyPrice: 950,
    description: "Maximum accountability and elite-level support",
    features: [
      "Everything in Performance Upgrade",
      "3 weekly phone calls (20 min each)",
      "Maximum level of accountability",
      "High Performance training plan",
      "2 weekly training sessions",
      "Elite-level support and contact",
    ],
    recommended: "For those who want the highest level of support and fastest results.",
    highlighted: false,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Understand Where You Are",
    description: "Start with a complete evaluation to understand your current nutritional status, body composition, and priorities.",
  },
  {
    number: "02",
    title: "Get Your Personalized Guide",
    description: "Receive a nutrition and habits guide tailored to your goals, routine, and real life—not a generic template.",
  },
  {
    number: "03",
    title: "Transform With Support",
    description: "Your only job is to commit. The method, structure, and strategy are already defined for you.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section 
        className="pt-28 sm:pt-32 pb-12 sm:pb-16"
        style={{ background: "linear-gradient(to bottom, #f0fdf4, white)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-primary mb-4">Programs & Pricing</span>
          <h1 className="text-display-lg mb-6" style={{ color: "#1c1917" }}>
            Investment in Your <span className="italic">Transformation</span>
          </h1>
          <p className="text-lg sm:text-xl" style={{ color: "#57534e" }}>
            From one-time evaluations to full transformation packages. Choose the
            level of support that fits your goals and commitment.
          </p>
          
          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-sm" style={{ color: "#78716c" }}>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4" style={{ color: "#16a34a" }} />
              Secure Payment
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4" style={{ color: "#16a34a" }} />
              SSL Encrypted
            </span>
          </div>
        </div>
      </section>

      {/* Individual Services */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-display-sm mb-4" style={{ color: "#1c1917" }}>
              Individual Services
            </h2>
            <p style={{ color: "#57534e" }}>
              Start here if you want to assess your situation before committing to a program.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
            {individualServices.map((service) => (
              <div
                key={service.id}
                className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 border"
                style={{ backgroundColor: "#fafaf9", borderColor: "#e7e5e4" }}
              >
                <h3 
                  className="text-xl sm:text-2xl mb-2"
                  style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#1c1917" }}
                >
                  {service.name}
                </h3>
                <p className="mb-4" style={{ color: "#57534e" }}>{service.description}</p>
                
                <div className="mb-6">
                  <span 
                    className="text-3xl sm:text-4xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#1c1917" }}
                  >
                    ${service.price}
                  </span>
                  <span className="ml-2" style={{ color: "#78716c" }}>one-time</span>
                </div>
                
                <ul className="space-y-2 sm:space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: "#16a34a" }} />
                      <span className="text-sm" style={{ color: "#57534e" }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <p 
                  className="text-sm p-3 rounded-lg mb-4"
                  style={{ backgroundColor: "#dcfce7", color: "#15803d" }}
                >
                  💡 {service.recommended}
                </p>

                <CheckoutButton productKey={service.productKey}>
                  Get Started - ${service.price}
                </CheckoutButton>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Packages */}
      <section className="section text-white" style={{ backgroundColor: "#1c1917" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span 
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ backgroundColor: "rgba(34, 197, 94, 0.2)", color: "#4ade80" }}
            >
              Recommended
            </span>
            <h2 className="text-display-sm mb-4">
              Transformation Packages
            </h2>
            <p className="max-w-xl mx-auto" style={{ color: "#a8a29e" }}>
              Complete programs with ongoing support for lasting results.
              8-12 week commitments for real transformation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative rounded-2xl sm:rounded-3xl p-6 sm:p-8 ${pkg.highlighted ? "lg:scale-105" : ""}`}
                style={{
                  background: pkg.highlighted 
                    ? "linear-gradient(to bottom, #16a34a, #15803d)"
                    : "rgba(255,255,255,0.05)",
                  border: pkg.highlighted ? "2px solid #4ade80" : "1px solid rgba(255,255,255,0.1)",
                }}
              >
                {pkg.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div 
                      className="flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold"
                      style={{ backgroundColor: "#f59e0b", color: "#1c1917" }}
                    >
                      <Star className="w-3 h-3 sm:w-4 sm:h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-5 sm:mb-6">
                  <p 
                    className="text-sm font-medium mb-1"
                    style={{ color: pkg.highlighted ? "#dcfce7" : "#4ade80" }}
                  >
                    {pkg.tagline}
                  </p>
                  <h3 
                    className="text-xl sm:text-2xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {pkg.name}
                  </h3>
                  <p 
                    className="text-sm mt-2"
                    style={{ color: pkg.highlighted ? "#dcfce7" : "#a8a29e" }}
                  >
                    {pkg.description}
                  </p>
                </div>

                <div className="mb-5 sm:mb-6">
                  <div className="flex items-baseline gap-2 flex-wrap">
                    <span 
                      className="text-3xl sm:text-4xl"
                      style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                    >
                      ${pkg.initialPrice}
                    </span>
                    <span 
                      className="text-xs font-semibold px-2 py-0.5 rounded-full"
                      style={{ 
                        backgroundColor: pkg.highlighted ? "rgba(255,255,255,0.2)" : "rgba(34, 197, 94, 0.2)", 
                        color: pkg.highlighted ? "white" : "#4ade80" 
                      }}
                    >
                      INITIAL INVESTMENT
                    </span>
                  </div>
                  <p 
                    className="text-sm mt-1"
                    style={{ color: pkg.highlighted ? "#dcfce7" : "#a8a29e" }}
                  >
                    then ${pkg.monthlyPrice}/month subscription
                  </p>
                </div>

                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check 
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: pkg.highlighted ? "#dcfce7" : "#4ade80" }}
                      />
                      <span 
                        className="text-sm"
                        style={{ color: pkg.highlighted ? "white" : "#d6d3d1" }}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <CheckoutButton 
                  productKey={pkg.initialProductKey}
                  className={`block w-full text-center py-2.5 sm:py-3 rounded-full font-medium transition-all ${
                    pkg.highlighted 
                      ? "bg-white text-green-700 hover:bg-green-50" 
                      : "bg-green-600 text-white hover:bg-green-500"
                  }`}
                >
                  Get Started - ${pkg.initialPrice}
                </CheckoutButton>

                <p 
                  className="text-xs mt-4 text-center"
                  style={{ color: pkg.highlighted ? "#dcfce7" : "#78716c" }}
                >
                  {pkg.recommended}
                </p>
              </div>
            ))}
          </div>

          {/* Payment security */}
          <div className="text-center mt-8 flex flex-wrap items-center justify-center gap-4 text-sm" style={{ color: "#78716c" }}>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4" />
              Secure checkout powered by Stripe
            </span>
            <span className="flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              Your data is protected
            </span>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-display-sm" style={{ color: "#1c1917" }}>
              How It Works
            </h2>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {processSteps.map((step) => (
              <div key={step.number} className="flex gap-4 sm:gap-6">
                <div 
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#dcfce7" }}
                >
                  <span 
                    className="text-xl sm:text-2xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#16a34a" }}
                  >
                    {step.number}
                  </span>
                </div>
                <div className="pt-1 sm:pt-2">
                  <h3 
                    className="text-lg sm:text-xl mb-2"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#1c1917" }}
                  >
                    {step.title}
                  </h3>
                  <p style={{ color: "#57534e" }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section 
        className="py-16 sm:py-20 text-white text-center"
        style={{ backgroundColor: "#16a34a" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="text-display-md mb-6">
            Not Sure Which Program?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto" style={{ color: "#dcfce7" }}>
            Book a free consultation to discuss which program is right for you. No pressure, no commitment.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all group"
            style={{ backgroundColor: "white", color: "#15803d" }}
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-6 sm:py-8" style={{ backgroundColor: "#f5f5f4" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-sm text-center" style={{ color: "#78716c" }}>
            All services are for educational and wellness purposes and do not replace
            medical attention or the work of a licensed dietitian/nutritionist or
            physician.
          </p>
        </div>
      </section>
    </>
  );
}
