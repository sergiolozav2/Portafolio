import { AboutMeSection } from "./Components/AboutMe/AboutMeSection";
import { ExperienceSection } from "./Components/Experience/ExperienceSection";
import { StarsBackground } from "../Shared/components/StarsBackground";
import { WelcomeSection } from "./Components/Welcome/WelcomeSection";
import "./styles.css";
import { SkillsSection } from "./Components/SkillsSection";
import { ProjectsSection } from "./Components/Projects/ProjectsSection";

export function HomePage() {
  return (
    <div className="radial-background pt-20 ">
      <div className="flex flex-col gap-y-16 py-12 lg:flex-row">
        <div className="flex justify-center px-8 lg:relative lg:min-h-screen lg:w-5/12 lg:pl-16">
          <div className="top-32 flex h-fit w-full lg:sticky lg:max-w-96">
            <WelcomeSection />
          </div>
        </div>
        <div className="flex flex-col items-center gap-16 px-8 text-stone-300 lg:w-1/2">
          <div className="flex flex-col items-center gap-16 lg:max-w-xl">
            <AboutMeSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
          </div>
        </div>
      </div>
      <StarsBackground />
    </div>
  );
}
