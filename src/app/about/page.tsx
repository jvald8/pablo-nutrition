import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Globe, Award, Users, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About Pablo Lima | Former Uruguay National Team Player",
  description:
    "Meet Pablo Lima: 25 international caps for Uruguay, 350+ professional matches, now transforming lives through elite nutrition coaching in Miami.",
};

const careerHighlights = [
  {
    team: "Uruguay National Team",
    years: "2004-2010",
    achievement: "25 International Appearances",
    flag: "🇺🇾",
    featured: true,
  },
  {
    team: "Peñarol",
    years: "2014-2016",
    achievement: "League Champion (Apertura 2015)",
    flag: "🇺🇾",
  },
  {
    team: "Vélez Sarsfield",
    years: "2007-2010, 2013",
    achievement: "Argentina Primera División",
    flag: "🇦🇷",
  },
  {
    team: "Danubio FC",
    years: "2004, 2006-2007, 2013-2014",
    achievement: "League Champion (2004)",
    flag: "🇺🇾",
  },
  {
    team: "Iraklis Thessaloniki",
    years: "2010-2012",
    achievement: "Greek Super League",
    flag: "🇬🇷",
  },
  {
    team: "Rosario Central",
    years: "2008-2009",
    achievement: "Argentina Primera División",
    flag: "🇦🇷",
  },
];

const philosophy = [
  {
    title: "Elite Experience, Practical Application",
    description:
      "Having competed at the international level across three continents, I bring real-world knowledge that goes beyond textbooks. I've lived the demands of professional athletics and know what works.",
  },
  {
    title: "Individual First",
    description:
      "Your body, your goals, and your life are unique. I don't believe in one-size-fits-all solutions. Every program I create is tailored specifically to you—just as elite teams customize for each player.",
  },
  {
    title: "Process Over Shortcuts",
    description:
      "In professional soccer, there are no shortcuts to the top. The same applies to your goals. Real results come from consistent effort, smart programming, and patience.",
  },
  {
    title: "Accountability & Discipline",
    description:
      "The difference between good and great often comes down to discipline. I provide ongoing support, regular check-ins, and honest feedback—the same standards I held myself to as a professional.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section 
        className="pt-28 sm:pt-32 pb-12 sm:pb-16"
        style={{ background: "linear-gradient(to bottom, #f0fdf4, white)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <span className="badge badge-primary mb-4">About Pablo</span>
              <h1 className="text-display-lg mb-6" style={{ color: "#1c1917" }}>
                From <span className="italic">World-Class Football</span> to
                Transforming Lives
              </h1>
              <p className="text-lg sm:text-xl mb-8" style={{ color: "#57534e" }}>
                Pablo Martín Lima Olid played nearly 20 years at the highest levels
                in South America and Europe, including representing the Uruguay
                National Team. Now he brings that elite mindset to help you achieve
                extraordinary results.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8">
                <div className="text-center">
                  <p 
                    className="text-3xl sm:text-4xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#16a34a" }}
                  >
                    350+
                  </p>
                  <p className="text-sm" style={{ color: "#78716c" }}>Pro Matches</p>
                </div>
                <div className="text-center">
                  <p 
                    className="text-3xl sm:text-4xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#16a34a" }}
                  >
                    25
                  </p>
                  <p className="text-sm" style={{ color: "#78716c" }}>International Caps</p>
                </div>
                <div className="text-center">
                  <p 
                    className="text-3xl sm:text-4xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#16a34a" }}
                  >
                    18
                  </p>
                  <p className="text-sm" style={{ color: "#78716c" }}>Years Professional</p>
                </div>
                <div className="text-center">
                  <p 
                    className="text-3xl sm:text-4xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#16a34a" }}
                  >
                    9+
                  </p>
                  <p className="text-sm" style={{ color: "#78716c" }}>Years Coaching</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative aspect-[4/5] max-w-sm mx-auto lg:max-w-md">
                <div 
                  className="absolute inset-4 rounded-2xl sm:rounded-3xl"
                  style={{ backgroundColor: "#bbf7d0" }}
                />
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-full">
                  <Image
                    src="/images/pablo-pro-2.JPG"
                    alt="Pablo Lima - Professional Footballer and Nutrition Coach"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="section text-white" style={{ backgroundColor: "#1c1917" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span 
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4"
              style={{ backgroundColor: "rgba(34, 197, 94, 0.2)", color: "#4ade80" }}
            >
              Professional Career
            </span>
            <h2 className="text-display-md">
              18 Years at the <span className="italic">Highest Level</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {careerHighlights.map((career) => (
              <div
                key={career.team}
                className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border"
                style={{
                  background: career.featured 
                    ? "linear-gradient(135deg, rgba(22, 163, 74, 0.3), rgba(22, 163, 74, 0.1))"
                    : "rgba(255,255,255,0.05)",
                  borderColor: career.featured ? "#22c55e" : "rgba(255,255,255,0.1)",
                }}
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl">{career.flag}</span>
                  {career.featured && (
                    <span 
                      className="text-xs px-2.5 py-1 rounded-full text-white font-medium"
                      style={{ backgroundColor: "#22c55e" }}
                    >
                      National Team
                    </span>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1">{career.team}</h3>
                <p className="text-sm mb-2" style={{ color: "#a8a29e" }}>{career.years}</p>
                <p className="text-sm font-medium" style={{ color: "#4ade80" }}>
                  {career.achievement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10 sm:mb-12">
            <span className="badge badge-primary mb-4">Coaching Philosophy</span>
            <h2 className="text-display-md" style={{ color: "#1c1917" }}>
              Lessons from 18 Years of <span className="italic">Pro Soccer</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {philosophy.map((item, index) => (
              <div 
                key={index} 
                className="p-5 sm:p-6 rounded-xl sm:rounded-2xl"
                style={{ backgroundColor: "#fafaf9" }}
              >
                <div 
                  className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#dcfce7" }}
                >
                  <span 
                    className="text-lg"
                    style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#16a34a" }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 
                  className="text-lg sm:text-xl font-semibold mb-3"
                  style={{ color: "#1c1917" }}
                >
                  {item.title}
                </h3>
                <p style={{ color: "#57534e" }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section" style={{ backgroundColor: "#fafaf9" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <span className="badge badge-primary mb-4">Expertise</span>
              <h2 className="text-display-md mb-6" style={{ color: "#1c1917" }}>
                What I Bring to <span className="italic">Your Transformation</span>
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex gap-4">
                  <div 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#dcfce7" }}
                  >
                    <Trophy className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#16a34a" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: "#1c1917" }}>
                      Sports Nutrition
                    </h4>
                    <p className="text-sm" style={{ color: "#57534e" }}>
                      Macro optimization, performance timing, body composition
                      management, evidence-based supplementation
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#dcfce7" }}
                  >
                    <Globe className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#16a34a" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: "#1c1917" }}>
                      Athletic Performance
                    </h4>
                    <p className="text-sm" style={{ color: "#57534e" }}>
                      Strength & conditioning, sport-specific training,
                      periodization, recovery protocols
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#dcfce7" }}
                  >
                    <Award className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#16a34a" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: "#1c1917" }}>
                      Body Assessment
                    </h4>
                    <p className="text-sm" style={{ color: "#57534e" }}>
                      Anthropometric evaluation, body composition analysis, progress
                      tracking & metrics
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div 
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#dcfce7" }}
                  >
                    <Users className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#16a34a" }} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" style={{ color: "#1c1917" }}>
                      Coaching & Support
                    </h4>
                    <p className="text-sm" style={{ color: "#57534e" }}>
                      Goal setting, behavioral coaching, accountability systems,
                      long-term habit development
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div 
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg border"
              style={{ borderColor: "#f5f5f4" }}
            >
              <h3 
                className="text-xl mb-6"
                style={{ fontFamily: "var(--font-display), Georgia, serif", color: "#1c1917" }}
              >
                Based in Miami, Florida
              </h3>
              <p className="mb-4" style={{ color: "#57534e" }}>
                I work with clients throughout South Florida, offering both
                in-person consultations and training sessions. Remote follow-up
                options ensure ongoing guidance regardless of location.
              </p>
              <p className="mb-6" style={{ color: "#57534e" }}>
                <strong style={{ color: "#1c1917" }}>I speak both English and Spanish</strong>, so we can work
                together effectively in whichever language you prefer.
              </p>
              <Link href="/contact" className="btn btn-primary w-full group">
                Schedule Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
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
            Ready to Work Together?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-xl mx-auto" style={{ color: "#dcfce7" }}>
            Let's discuss your goals and create a personalized plan for your
            transformation.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all"
            style={{ backgroundColor: "white", color: "#15803d" }}
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
