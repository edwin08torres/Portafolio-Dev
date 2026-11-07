import { AboutSection } from "@/components/homeComponet/AboutSection";
import { HomeHeroSection } from "@/components/homeComponet/HomeHeroSection";
import { RibbonsSection } from "@/components/homeComponet/RibbonsSection";
import { ExperienceSection } from "@/components/homeComponet/ExperienceSection";
import { ServicesSection } from "@/components/homeComponet/ServicesSection";
import { FeaturedProjectsSection } from "@/components/homeComponet/FeaturedProjectsSection";
import { NexolSection } from "@/components/homeComponet/NexolSection";

export const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <RibbonsSection />
      <AboutSection />
      <FeaturedProjectsSection />
      <NexolSection />
      <ExperienceSection />
      <ServicesSection />
    </>
  );
};
