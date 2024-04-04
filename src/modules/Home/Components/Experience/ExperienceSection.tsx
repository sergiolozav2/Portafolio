import { SectionTitle } from "../../../Shared/components/SectionTitle";
import { ExperienceCard } from "./Components/ExperienceCard";

export function ExperienceSection() {
  return (
    <section
      className="flex scroll-m-24 flex-col gap-4 text-xl"
      id="experience-section"
    >
      <SectionTitle text="> Experiencia" />
      <div className="flex flex-col gap-12">
        <ExperienceCard
          title="Desarrollador Fullstack · Cinavar"
          timeframe="Ago 2023 - Feb 2024"
          description="Desarrollé un sistema de seguridad víal para la inspección de operaciones logísticas en camiones cisternas. Colaboré con inspectores de seguridad vial para las etapas de diseño e implementación."
          skills={["React", "Express", "Git", "Github Actions"]}
        />
        <ExperienceCard
          title="Desarrollador Frontend · SoyYo Digital"
          timeframe="Mar 2023 - Ago 2023"
          description="Diseñé y desarrollé la interfaz de SoyYoDigital para tarjetas digitales de presentación. Adicionalmente utilicé wordpress para manejar la página de la empresa."
          skills={["React", "Jest", "Wordpress", "Git"]}
        />
        <ExperienceCard
          title="Desarrollador Móvil · Transformación Digital"
          timeframe="Ago 2022 - Feb 2023"
          description="Diseñé y desarrollé una aplicación móvil para la búsqueda y reserva de tickets de negocios. La aplicación se lanzó exitosamente en PlayStore."
          skills={["Flutter", "Dart", "Firebase", "Git"]}
        />
      </div>
    </section>
  );
}
