import { FaLocationArrow } from "react-icons/fa";
import { TypeAnimationText } from "./Components/TypeAnimationText";
import { AnimatedUnderlineText } from "../Shared/components/AnimatedUnderlineText";

export function WelcomePage() {
  return (
    <div className="flex min-h-screen w-full justify-center">
      <div className="mt-48 flex flex-col items-center px-4 text-center text-stone-50 md:mt-72">
        <h1 className="flex flex-col flex-wrap gap-y-1 text-xl font-medium sm:flex-row md:text-4xl lg:text-6xl">
          Sergio Loza <span className="hidden sm:inline">&nbsp;-&nbsp;</span>
          <TypeAnimationText
            className="bg-stone-50 px-1 text-stone-950"
            text="Desarrollador web"
            duration={2000}
          />
        </h1>
        <h2 className="mt-4 max-w-3xl text-center text-lg md:text-2xl lg:mt-8 lg:text-3xl">
          Ingeniero de sistemas con experiencia en desarrollo web y aplicaciones
          móviles
        </h2>
        <div className="mt-6 lg:mt-8 flex flex-col items-center gap-x-8 gap-y-2 sm:flex-row md:text-xl">
          <AnimatedUnderlineText>
            <button className="flex items-center whitespace-nowrap">
              <FaLocationArrow className="mr-2 text-sm" />
              Mi experiencia
            </button>
          </AnimatedUnderlineText>
          <AnimatedUnderlineText>
            <button className="flex items-center whitespace-nowrap">
              <FaLocationArrow className="mr-2 text-sm" />
              Acerca de mí
            </button>
          </AnimatedUnderlineText>
        </div>
      </div>
    </div>
  );
}
