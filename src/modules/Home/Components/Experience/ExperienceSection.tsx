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
          title="Desarrollador Fullstack · PJSW"
          timeframe="Ene 2025 - Presente"
          bulletpoints={[
            "Desarrollé un POS multi-tenancy para restaurantes con tests end-to-end usando Playwright.",
            "Configuré la infraestructura y servidores para los proyectos de la empresa en AWS usando CDK y Docker",
            "Implementé pagos y facturación electrónica en un sistema de administración de un colegio en .NET Framework",
          ]}
          skills={[
            "React",
            "AWS",
            "Node.js",
            "CSS",
            "MUI",
            "Playwright",
            "Docker",
            "Linux",
            "Nx",
          ]}
        />
        <ExperienceCard
          title="Desarrollador Fullstack · Cinavar"
          timeframe="Oct 2022 - Dec 2024"
          bulletpoints={[
            "Desarrollé un sistema de seguridad víal e inspección de vehículos cisterna usado en plantas de combustible",
            "Automatizé el proceso de despliegue del sistema en servidores Linux usando Github Actions.",
          ]}
          skills={[
            "React",
            "Express",
            "Git",
            "Github Actions",
            "Digital Ocean",
            "Linux",
            "SQL",
            "Docker",
          ]}
        />
        <ExperienceCard
          title="Desarrollador Frontend · SoyYo Digital"
          timeframe="Mar 2022 - Oct 2022"
          bulletpoints={[
            "Diseñé y desarrollé la interfaz de SoyYoDigital para tarjetas digitales de presentación.",
            "Desarrollé un sistema de administración para el manejo de cuentas, usuarios y membresías para la plataforma.",
          ]}
          skills={[
            "React",
            "Jest",
            "Wordpress",
            "Git",
            "HTML",
            "CSS",
            "Tailwind",
          ]}
        />
        <ExperienceCard
          title="Desarrollador Móvil · Transformación Digital"
          timeframe="Ago 2021 - Dic 2021"
          bulletpoints={[
            "Diseñé y desarrollé una aplicación móvil para la búsqueda y reserva de tickets de negocios. La aplicación se lanzó exitosamente en PlayStore.",
          ]}
          skills={["Flutter", "Dart", "Firebase", "Git"]}
        />
      </div>
    </section>
  );
}
