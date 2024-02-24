import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoPlanet } from "react-icons/io5";
import { AnimatedUnderlineText } from "./AnimatedUnderlineText";

export function Navbar() {
  return (
    <nav className="fixed inset-0 bottom-auto isolate z-10 bg-white/5 bg-clip-padding px-8 py-6 text-lg backdrop-blur-sm backdrop-filter">
      <div className="relative flex w-full items-center justify-between font-medium text-stone-100">
        <div className="flex gap-4 text-xl">
          <IoPlanet className="text-2xl" />
          <span>LozaDev</span>
        </div>
        <div className="flex gap-4 text-2xl">
          <a href="https://www.linkedin.com/in/sergio-loza/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sergiolozav2" target="_blank">
            <FaGithub />
          </a>
        </div>

        <div className="absolute right-1/2 top-0 flex translate-x-1/2 gap-8">
          <AnimatedUnderlineText>
            <button>Inicio</button>
          </AnimatedUnderlineText>
          <AnimatedUnderlineText>
            <button>Acerca de mí</button>
          </AnimatedUnderlineText>
          <AnimatedUnderlineText>
            <button>Experiencia</button>
          </AnimatedUnderlineText>
          <AnimatedUnderlineText>
            <button>Proyectos</button>
          </AnimatedUnderlineText>
        </div>
      </div>
    </nav>
  );
}
