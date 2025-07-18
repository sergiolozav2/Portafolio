import { AboutMeSection } from "./Components/AboutMe/AboutMeSection";
import { ExperienceSection } from "./Components/Experience/ExperienceSection";
import { StarsBackground } from "../Shared/components/StarsBackground";
import { WelcomeSection } from "./Components/Welcome/WelcomeSection";
import "./styles.css";
import { SkillsSection } from "./Components/SkillsSection";
import { ProjectsSection } from "./Components/Projects/ProjectsSection";

export function HomePage() {
  const containerSpacing = "max-w-screen-xl mx-auto px-4 py-12 md:px-8";
  return (
    <div className="radial-background pt-20 text-stone-300">
      <div
        className={`flex w-full ${containerSpacing} flex-col gap-y-16 lg:flex-row`}
      >
        <div className="flex w-full justify-center lg:relative lg:min-h-screen">
          <div className="top-32 flex h-fit w-full sm:min-w-96 lg:sticky">
            <WelcomeSection />
          </div>
        </div>
        <div className="flex w-full flex-col items-center">
          <div className="flex flex-col items-center gap-16 lg:max-w-xl">
            <AboutMeSection />
            <SkillsSection />
            <ExperienceSection />
          </div>
        </div>
      </div>
      <div className={containerSpacing}>
        <ProjectsSection />
      </div>

      <StarsBackground />
    </div>
  );
}
