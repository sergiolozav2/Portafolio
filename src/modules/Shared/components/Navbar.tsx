import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoPlanet } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";
import { useState } from "react";
import { useVisibleSection } from "../hooks/useVisibleSection";

const Sections = {
  projects: "projects-section",
  experience: "experience-section",
  about: "about-me-section",
};
const sections = [Sections.projects, Sections.experience, Sections.about];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { currentSection } = useVisibleSection(sections);
  function toggleNavbar() {
    setOpen(!open);
  }

  function scrollToSection(id: string) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <nav
      className={`fixed inset-0 bottom-auto isolate z-20 bg-navbar/80 px-6 py-4 text-lg backdrop-blur-sm md:px-8 md:py-6`}
    >
      <div className="relative flex w-full items-center justify-between font-semibold text-stone-200">
        <div className="flex gap-4 text-xl" aria-label="Logo LozaDev">
          <IoPlanet className="text-2xl" />
          <span>LozaDev</span>
        </div>
        <button
          className="block text-3xl md:hidden"
          onClick={toggleNavbar}
          aria-label="Abrir menu"
        >
          <CgMenuGridO />
        </button>
        <div
          className={`absolute right-1/2 top-0 flex translate-x-1/2 flex-col md:flex-row md:gap-8 ${open ? `-md:translate-y-12 -md:gap-7 -md:rounded-md -md:border -md:border-stone-800 -md:bg-navbar -md:px-8 -md:py-2 -md:text-center` : "-md:hidden"}`}
        >
          <div>
            <button
              className="whitespace-nowrap"
              onClick={() => scrollToSection(Sections.about)}
            >
              Acerca de mí
            </button>
            {currentSection === Sections.about && <Divider />}
          </div>
          <div>
            <button onClick={() => scrollToSection(Sections.experience)}>
              Experiencia
            </button>
            {currentSection === Sections.experience && <Divider />}
          </div>
          <div>
            <button onClick={() => scrollToSection(Sections.projects)}>
              Proyectos
            </button>
            {currentSection === Sections.projects && <Divider />}
          </div>
        </div>
        <div className="hidden gap-4 text-2xl md:flex">
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
        </div>
      </div>
    </nav>
  );
}

function Divider() {
  return <div className="scale-animation h-[2px] w-full bg-stone-200 "> </div>;
}
