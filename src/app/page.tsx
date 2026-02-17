import { HeroSection } from "@/components/home/HeroSection";
import { SocialProofBar } from "@/components/home/SocialProofBar";
import { TrustBadges } from "@/components/home/TrustBadges";
import { ProblemSection } from "@/components/home/ProblemSection";
import { LossAversionSection } from "@/components/home/LossAversionSection";
import { TransformationShowcase } from "@/components/home/TransformationShowcase";
import { ProcessSection } from "@/components/home/ProcessSection";
import { CredentialsSection } from "@/components/home/CredentialsSection";
import { PricingPreview } from "@/components/home/PricingPreview";
import { CTASection } from "@/components/home/CTASection";
import { UrgencyBanner } from "@/components/home/UrgencyBanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProofBar />
      <TrustBadges />
      <ProblemSection />
      <LossAversionSection />
      <TransformationShowcase />
      <ProcessSection />
      <CredentialsSection />
      <PricingPreview />
      <CTASection />
      <UrgencyBanner />
    </>
  );
}
