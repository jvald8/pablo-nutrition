import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Client Transformations | Nutrition + Training Results",
  description:
    "See real client transformations from Nutrition + Training. Real people, real results — over 50-80 lbs lost. Douglas lost 80 lbs, Edu lost 50+ lbs.",
};

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
    featured: true,
  },
  {
    id: "edu",
    name: "Edu",
    location: "Miami, FL",
    beforeImage: "/images/transformations/edu-before.JPG",
    afterImage: "/images/transformations/edu-after.JPG",
    weightLost: "50+ lbs",
    bodyFat: "-15%",
    duration: "16 weeks",
    quote:
      "I feel like a completely different person. I'm happier, healthier, and have more energy than I've had in years. Pablo's program changed my life.",
    program: "Habit Builder",
    featured: true,
  },
];

export default function TransformationsPage() {
  return (
    <>
      {/* Hero */}
      <section 
        className="pt-28 sm:pt-32 pb-12 sm:pb-16"
        style={{ background: "linear-gradient(to bottom, #f0fdf4, white)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="badge badge-primary mb-4">Real Results</span>
          <h1 className="text-display-lg mb-6" style={{ color: "#1c1917" }}>
            Transformations That <span className="italic">Speak for Themselves</span>
          </h1>
          <p className="text-lg sm:text-xl" style={{ color: "#57534e" }}>
            These aren't stock photos or unrealistic expectations. These are real
            people who committed to the process and achieved extraordinary results.
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 sm:py-8" style={{ backgroundColor: "#1c1917" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
            <div>
              <p 
                className="text-2xl sm:text-3xl"
                style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#4ade80" }}
              >
                130+
              </p>
              <p className="text-xs sm:text-sm" style={{ color: "#a8a29e" }}>Total Pounds Lost</p>
            </div>
            <div>
              <p 
                className="text-2xl sm:text-3xl"
                style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#4ade80" }}
              >
                12
              </p>
              <p className="text-xs sm:text-sm" style={{ color: "#a8a29e" }}>Week Programs</p>
            </div>
            <div>
              <p 
                className="text-2xl sm:text-3xl"
                style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#4ade80" }}
              >
                100%
              </p>
              <p className="text-xs sm:text-sm" style={{ color: "#a8a29e" }}>Personalized</p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {transformations.map((transformation) => (
            <div
              key={transformation.id}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 last:mb-0"
            >
              {/* Images */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src={transformation.beforeImage}
                    alt={`${transformation.name} before`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div 
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold"
                    style={{ backgroundColor: "#ef4444" }}
                  >
                    BEFORE
                  </div>
                </div>
                <div className="relative aspect-[3/4] rounded-xl sm:rounded-2xl overflow-hidden">
                  <Image
                    src={transformation.afterImage}
                    alt={`${transformation.name} after`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                  <div 
                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold"
                    style={{ backgroundColor: "#22c55e" }}
                  >
                    AFTER
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                  <span className="badge badge-primary">{transformation.program}</span>
                  <span style={{ color: "#78716c" }}>•</span>
                  <span style={{ color: "#78716c" }}>{transformation.duration}</span>
                </div>

                <h2 
                  className="text-display-sm mb-4"
                  style={{ color: "#1c1917" }}
                >
                  {transformation.name}
                </h2>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div 
                    className="rounded-xl p-3 sm:p-4 text-center"
                    style={{ backgroundColor: "#fafaf9" }}
                  >
                    <p 
                      className="text-xl sm:text-2xl"
                      style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#16a34a" }}
                    >
                      -{transformation.weightLost.replace(" lbs", "")}
                    </p>
                    <p className="text-xs sm:text-sm" style={{ color: "#78716c" }}>Pounds</p>
                  </div>
                  <div 
                    className="rounded-xl p-3 sm:p-4 text-center"
                    style={{ backgroundColor: "#fafaf9" }}
                  >
                    <p 
                      className="text-xl sm:text-2xl"
                      style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#16a34a" }}
                    >
                      {transformation.bodyFat}
                    </p>
                    <p className="text-xs sm:text-sm" style={{ color: "#78716c" }}>Body Fat</p>
                  </div>
                  <div 
                    className="rounded-xl p-3 sm:p-4 text-center"
                    style={{ backgroundColor: "#fafaf9" }}
                  >
                    <p 
                      className="text-xl sm:text-2xl"
                      style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#16a34a" }}
                    >
                      {transformation.duration.replace(" weeks", "")}
                    </p>
                    <p className="text-xs sm:text-sm" style={{ color: "#78716c" }}>Weeks</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="relative mb-6">
                  <span 
                    className="absolute -top-2 -left-1 sm:-left-2 text-4xl sm:text-5xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#dcfce7" }}
                  >
                    "
                  </span>
                  <p 
                    className="text-base sm:text-lg italic pl-5 sm:pl-6"
                    style={{ color: "#44403c" }}
                  >
                    {transformation.quote}
                  </p>
                  <footer className="mt-4 pl-5 sm:pl-6">
                    <p className="font-semibold" style={{ color: "#1c1917" }}>
                      — {transformation.name}
                    </p>
                    <p className="text-sm" style={{ color: "#78716c" }}>
                      {transformation.location}
                    </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          ))}

          {/* More coming soon */}
          <div 
            className="text-center py-10 sm:py-12 rounded-2xl sm:rounded-3xl"
            style={{ backgroundColor: "#fafaf9" }}
          >
            <p style={{ color: "#57534e" }} className="mb-2">More transformations coming soon</p>
            <p className="text-sm" style={{ color: "#78716c" }}>
              Want to be featured? Start your transformation today.
            </p>
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
            This Could Be <span className="italic">Your</span> Transformation
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto" style={{ color: "#dcfce7" }}>
            Ready to commit to yourself? Book a free consultation and let's create
            your success story.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all group"
            style={{ backgroundColor: "white", color: "#15803d" }}
          >
            Start My Transformation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </>
  );
}
