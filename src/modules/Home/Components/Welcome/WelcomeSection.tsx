import { TypeAnimationText } from "./Components/TypeAnimationText";
import CvPDF from "../../../../assets/CV-Sergio Loza.pdf";

export function WelcomeSection() {
  const linkedinUrl = "https://www.linkedin.com/in/sergio-loza/";
  const githubUrl = "https://github.com/sergiolozav2";

  return (
    <div className="flex flex-col gap-5 text-stone-200">
      <h1 className="text-2xl font-bold md:text-4xl">Sergio Loza</h1>
      <TypeAnimationText
        className="w-fit bg-stone-200 px-1 text-xl font-semibold text-stone-950 md:text-xl"
        text="Desarrollador Full-Stack"
        duration={2000}
      />
      <h2 className="mt-2 text-xl text-stone-300">
        Construyo aplicaciones web atractivas y accesibles para una gran
        experiencia digital
      </h2>
      <ul className="list-inside list-disc space-y-1 text-lg font-semibold">
        <li className="">
          <a className="hover:underline" target="_blank" href={CvPDF}>
            Descargar CV
          </a>
        </li>
        <li className="">
          <a className="hover:underline" target="_blank" href={linkedinUrl}>
            LinkedIn
          </a>
        </li>
        <li className="">
          <a className="hover:underline" target="_blank" href={githubUrl}>
            Github
          </a>
        </li>
      </ul>
    </div>
  );
}
