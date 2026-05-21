import Hero from "@/components/landing/Hero";
import ImpactStats from "@/components/landing/ImpactStats";
import HowItWorks from "@/components/landing/HowItWorks";
import WhyBiofuel from "@/components/landing/WhyBiofuel";
import CarbonCredits from "@/components/landing/CarbonCredits";
import Principles from "@/components/landing/Principles";
import CTA from "@/components/landing/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ImpactStats />
      <HowItWorks />
      <WhyBiofuel />
      <CarbonCredits />
      <Principles />
      <CTA />
    </>
  );
}
