import { AboutSection } from "@/components/homeComponet/AboutSection";
import { HomeHeroSection } from "@/components/homeComponet/HomeHeroSection";
import { ExperienceSection } from "@/components/homeComponet/ExperienceSection";
import { ServicesSection } from "@/components/homeComponet/ServicesSection";
import { ProjectSection } from "@/components/homeComponet/ProjectSection";

export const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <AboutSection />
      <ExperienceSection />
      <ServicesSection />
      <ProjectSection />
    </>
  );
};
