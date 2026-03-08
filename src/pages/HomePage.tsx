import { AboutSection } from "@/components/homeComponet/AboutSection";
import { HomeHeroSection } from "@/components/homeComponet/HomeHeroSection";
import { ExperienceSection } from "@/components/homeComponet/ExperienceSection";
import { ServicesSection } from "@/components/homeComponet/ServicesSection";
import { FeaturedProjectsSection } from "@/components/homeComponet/FeaturedProjectsSection";

export const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <FeaturedProjectsSection />
    </>
  );
};
