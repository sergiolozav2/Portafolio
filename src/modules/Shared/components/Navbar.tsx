import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoPlanet } from "react-icons/io5";
import { AnimatedUnderlineText } from "./AnimatedUnderlineText";
import { CgMenuGridO } from "react-icons/cg";

export function Navbar() {
  return (
    <nav className="fixed inset-0 bottom-auto isolate z-20 bg-white/5 bg-clip-padding px-6 py-4 text-lg backdrop-blur-sm backdrop-filter md:px-8 md:py-6">
      <div className="relative flex w-full items-center justify-between font-semibold text-stone-100">
        <div className="flex gap-4 text-xl">
          <IoPlanet className="text-2xl" />
          <span>LozaDev</span>
        </div>
        <div className="hidden gap-4 text-2xl md:flex">
          <a href="https://www.linkedin.com/in/sergio-loza/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/sergiolozav2" target="_blank">
            <FaGithub />
          </a>
        </div>

        <div className="absolute right-1/2 top-0 hidden translate-x-1/2 gap-8 md:flex">
          <AnimatedUnderlineText>
            <button>Inicio</button>
          </AnimatedUnderlineText>
          <AnimatedUnderlineText>
            <button className="whitespace-nowrap">Acerca de mí</button>
          </AnimatedUnderlineText>
          <AnimatedUnderlineText>
            <button>Experiencia</button>
          </AnimatedUnderlineText>
          <AnimatedUnderlineText>
            <button>Proyectos</button>
          </AnimatedUnderlineText>
        </div>
        <button className="block text-3xl md:hidden">
          <CgMenuGridO />
        </button>
      </div>
    </nav>
  );
}
