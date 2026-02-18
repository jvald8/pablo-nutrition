import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ExitIntentPopup } from "@/components/ExitIntentPopup";
import Script from "next/script";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

// SEO/GEO optimized metadata with statistics and authority signals - Miami Local Focus
export const metadata: Metadata = {
  title: "Nutrition + Training | #1 Nutrition Coach South Beach & Miami | 100+ Transformations",
  description:
    "Miami's top nutrition coach. PRO FIFA licensed nutrition coach Pablo Lima has helped 100+ South Beach & Brickell clients lose 20-80 lbs in 12 weeks. Former Uruguay National Team player. Hablamos Español. Free consultation available.",
  keywords: [
    "nutrition coach Miami",
    "nutrition coach South Beach",
    "weight loss coach Miami Beach",
    "sports nutrition coach Miami",
    "Brickell nutrition coach",
    "nutricionista Miami",
    "weight loss South Beach",
    "Miami personal nutrition coach",
    "Pablo Lima nutrition Miami",
    "best nutrition coach Miami",
  ],
  authors: [{ name: "Pablo Lima", url: "https://nutritionplustraining.com" }],
  creator: "Pablo Lima",
  openGraph: {
    title: "Nutrition + Training | PRO FIFA Licensed Nutrition Coach | 100+ Transformations",
    description:
      "Former Uruguay National Team player. PRO FIFA licensed nutrition coach helping Miami transform with proven results—100+ clients, 20-80 lbs lost.",
    type: "website",
    locale: "en_US",
    siteName: "Nutrition Plus Training",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Nutrition Plus Training - Elite Nutrition Coach Miami",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nutrition + Training | PRO FIFA Licensed Nutrition Coach Miami",
    description: "100+ clients transformed. Former pro athlete. Personalized nutrition coaching & training in Miami.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://nutritionplustraining.com",
  },
};

// JSON-LD Schema for GEO optimization (AI search engines)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://nutritionplustraining.com/#organization",
  name: "Nutrition Plus Training",
  alternateName: "Nutrition + Training by Pablo Lima",
  description: "PRO FIFA licensed nutrition coach with 100+ client transformations. Former Uruguay National Team player offering personalized nutrition coaching and training in Miami.",
  url: "https://nutritionplustraining.com",
  logo: "https://nutritionplustraining.com/logo.png",
  image: "https://nutritionplustraining.com/images/pablo-lima.jpg",
  telephone: "+1-305-555-0123",
  email: "hello@nutritionplustraining.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Miami",
    addressRegion: "FL",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.7617,
    longitude: -80.1918,
  },
  areaServed: {
    "@type": "City",
    name: "Miami",
  },
  priceRange: "$$",
  openingHours: "Mo-Fr 08:00-18:00",
  sameAs: [
    "https://instagram.com/nutritionplustraining",
    "https://facebook.com/nutritionplustraining",
  ],
  founder: {
    "@type": "Person",
    name: "Pablo Lima",
    jobTitle: "PRO FIFA Licensed Nutrition Coach",
    description: "Former Uruguay National Team player with 10+ years of professional football experience. Now a PRO FIFA licensed nutrition coach helping 100+ clients achieve their weight loss goals.",
    knowsAbout: ["Sports Nutrition", "Weight Loss", "Body Composition", "Performance Nutrition"],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "47",
    bestRating: "5",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Pablo Lima",
  jobTitle: "PRO FIFA Licensed Nutrition Coach",
  description: "Former Uruguay National Team player turned PRO FIFA licensed nutrition coach. Helped 100+ clients lose 20-80 lbs through personalized nutrition programs.",
  url: "https://nutritionplustraining.com/about",
  image: "https://nutritionplustraining.com/images/pablo-lima.jpg",
  sameAs: [
    "https://instagram.com/nutritionplustraining",
  ],
  alumniOf: {
    "@type": "SportsTeam",
    name: "Uruguay National Football Team",
  },
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Professional License",
    name: "PRO FIFA Nutrition Coaching License",
  },
  knowsAbout: [
    "Sports Nutrition",
    "Weight Loss",
    "Macro Tracking",
    "Body Recomposition",
    "Athletic Performance",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much weight can I lose with Pablo's nutrition coaching?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "According to our client data, most people lose 20-80 lbs within 12 weeks of personalized coaching. Results vary based on starting point, adherence, and individual metabolism. Our approach focuses on sustainable habits rather than extreme dieting, which leads to long-term results.",
      },
    },
    {
      "@type": "Question",
      name: "What makes Pablo's approach different from other nutrition coaches?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pablo holds a PRO FIFA nutrition license and has 10+ years of experience as a professional athlete with the Uruguay National Team. This background provides unique insights into performance nutrition and body composition. With 100+ successful client transformations, the program combines scientific principles with practical, sustainable strategies.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to follow a strict diet or give up foods I love?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our philosophy is 'no extreme diets.' The program focuses on flexible nutrition that fits your lifestyle and food preferences. Clients learn to enjoy their favorite foods while still achieving their weight loss goals through strategic portion control and macro awareness.",
      },
    },
    {
      "@type": "Question",
      name: "How does the weekly accountability coaching work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Each week you'll have a check-in with Pablo to review progress, adjust your nutrition plan, and address any challenges. Research shows people with accountability partners are 95% more likely to reach their goals. This personalized support is the key differentiator that leads to lasting results.",
      },
    },
    {
      "@type": "Question",
      name: "Is the initial consultation really free?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, the initial strategy call is 100% free with no obligation. During this 15-20 minute call, we'll discuss your goals, assess your current situation, and determine if the program is a good fit for you.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable}`}>
      <head>
        {/* JSON-LD Schema for SEO/GEO optimization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
