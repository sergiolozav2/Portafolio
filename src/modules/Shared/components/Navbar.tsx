import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoPlanet } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";
import { useVisibleSection } from "../hooks/useVisibleSection";
import { LanguagePicker } from "./LanguagePicker";
import { useTranslation } from "react-i18next";

const Sections = {
  projects: "projects-section",
  experience: "experience-section",
  about: "about-me-section",
} as const;
const sections = [Sections.projects, Sections.experience, Sections.about];
type SectionKeys = (typeof sections)[number];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentSection } = useVisibleSection(sections);
  const { t } = useTranslation();
  function toggleNavbar() {
    setOpen(!open);
  }

  function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  function isCurrentSection(section: SectionKeys) {
    return currentSection === section;
  }
  return (
    <nav
      className={`bg-primary/50 fixed inset-0 bottom-auto isolate z-20 px-6 py-4 text-lg backdrop-blur-sm md:px-8 md:py-6`}
    >
      <div className="relative flex w-full items-center justify-between font-medium text-stone-100">
        <div className="flex gap-4 text-xl" aria-label={t("navbar.logo")}>
          <IoPlanet className="text-2xl" />
          <span>{t("navbar.logo")}</span>
        </div>
        <button
          className="block text-3xl md:hidden"
          onClick={toggleNavbar}
          aria-label={t("navbar.menu")}
        >
          <CgMenuGridO />
        </button>
        <div
          className={`absolute top-0 right-1/2 flex translate-x-1/2 flex-col md:flex-row md:gap-8 ${open ? "bg-primary translate-y-12 gap-7 rounded-md border border-stone-800 px-8 py-2 text-center md:translate-y-0 md:gap-8 md:rounded-none md:border-0 md:bg-transparent md:px-0 md:py-0 md:text-left" : "hidden md:flex"}`}
        >
          <div>
            <button
              className={`cursor-pointer whitespace-nowrap transition-opacity ${isCurrentSection(Sections.about) ? "opacity-100" : "opacity-80"}`}
              onClick={() => scrollToSection(Sections.about)}
            >
              {t("navbar.about")}
            </button>
            {isCurrentSection(Sections.about) && <Divider />}
          </div>
          <div>
            <button
              className={`cursor-pointer whitespace-nowrap transition-opacity ${isCurrentSection(Sections.experience) ? "opacity-100" : "opacity-80"}`}
              onClick={() => scrollToSection(Sections.experience)}
            >
              {t("navbar.experience")}
            </button>
            {isCurrentSection(Sections.experience) && <Divider />}
          </div>
          <div>
            <button
              className={`cursor-pointer whitespace-nowrap transition-opacity ${isCurrentSection(Sections.projects) ? "opacity-100" : "opacity-80"}`}
              onClick={() => scrollToSection(Sections.projects)}
            >
              {t("navbar.projects")}
            </button>
            {isCurrentSection(Sections.projects) && <Divider />}
          </div>

          <div className="mx-auto flex gap-4 text-3xl md:hidden">
            <IconActionsSection />
          </div>
        </div>
        <div className="hidden gap-4 text-2xl md:flex">
          <IconActionsSection />
        </div>
      </div>
    </nav>
  );
}

function Divider() {
  return <div className="scale-animation h-[2px] w-full bg-stone-200"> </div>;
}

function IconActionsSection() {
  return (
    <>
      <LanguagePicker />
      <a
        href="https://www.linkedin.com/in/sergio-loza/"
        target="_blank"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/sergiolozav2"
        target="_blank"
        aria-label="Github"
      >
        <FaGithub />
      </a>
    </>
  );
}
