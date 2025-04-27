import { AboutSection } from "@/components/homeComponet/AboutSection";
import { HomeHeroSection } from "../components/homeComponet/HomeHeroSection";
import { ProjectSection } from "@/components/homeComponet/ProjectSection";
export const HomePage = () => {
  return (
    <>
      <HomeHeroSection />
      <AboutSection />
      <ProjectSection />
    </>
  );
};
