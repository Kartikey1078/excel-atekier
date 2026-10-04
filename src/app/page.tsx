import {
  AboutSection,
  ResearchSection,
  SustainabilitySection,
} from "@/components/EditorialSections";
import { ExpertiseGrid } from "@/components/ExpertiseGrid";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StickyEnquire } from "@/components/StickyEnquire";
import { Hero } from "@/components/Hero";
import { IntroSection } from "@/components/IntroSection";
import { NewsCarousel } from "@/components/NewsCarousel";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata: Metadata = {
  title: "Home",
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Header />
      <StickyEnquire />
      <main>
        <Hero />
        <IntroSection />
        <NewsCarousel />
        <ExpertiseGrid />
        <AboutSection />
        <ResearchSection />
        <SustainabilitySection />
      </main>
      <Footer />
    </>
  );
}
