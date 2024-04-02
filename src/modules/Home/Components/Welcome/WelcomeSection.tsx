import { TypeAnimationText } from "./Components/TypeAnimationText";

export function WelcomeSection() {
  return (
    <div className="flex flex-col gap-5 text-stone-200">
      <h1 className="text-2xl font-bold md:text-4xl">Sergio Loza</h1>
      <TypeAnimationText
        className="w-fit bg-stone-200 px-1 text-xl font-semibold text-stone-950 md:text-xl"
        text="Desarrollador web"
        duration={2000}
      />
      <h2 className="mt-2 text-xl text-stone-300">
        Desarrollo aplicaciones web atractivas y accesibles para una gran
        experiencia digital
      </h2>
    </div>
  );
}
