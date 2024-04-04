import { SectionTitle } from "../../../Shared/components/SectionTitle";
import { ProjectCard } from "./Components/ProjectCard";

export function ProjectsSection() {
  return (
    <section
      className="flex scroll-m-24 flex-col gap-4 text-xl"
      id="projects-section"
    >
      <SectionTitle text="> Proyectos" />
      <div className="flex flex-col gap-12">
        <ProjectCard
          title="SoyYo - Tarjeta de presentación digital"
          images={[
            {
              url: "/assets/images/projects/soyyo-project.png",
              alt: "interfaz soy yo",
            },
          ]}
          description="Aplicación web para presentación digital, totalmente personalizable y responsiva para todo tipo de dispositivos. Incluye un apartado de administración para el manejo de usuarios."
          skills={["React", "HTML", "CSS", "Jest", "Git"]}
        />

        <ProjectCard
          title="Proyecto personal · PreciosBo"
          images={[
            {
              url: "/assets/images/projects/precios-bo-project.png",
              alt: "interfaz preciosbo",
            },
          ]}
          description="Buscador de productos en distintas tiendas online de Bolivia para comparar los precios. Utiliza un servidor hecho con Fastify para obtener los datos y enviarlos al sitio web."
          skills={[
            "React",
            "Tailwind",
            "Cypress",
            "HTML",
            "Fastify",
            "Webscraping",
            "i18n",
          ]}
        />
        <ProjectCard
          title="Hackaton · Dashboard de CaimanTec"
          images={[
            {
              url: "/assets/images/projects/caiman-project.png",
              alt: "interfaz dashboard caimatec",
            },
          ]}
          description="Dashboard funcional con conexión a Supabase, muestra estadísticas de un chatbot autónomo que responde y clasifica las solicitudes de clientes que se comunican por Whatsapp."
          skills={["Svelte", "Tailwind", "Javascript", "HTML", "Supabase"]}
        />
        <ProjectCard
          title="Proyecto personal [Solo interfaz] · Micro"
          images={[
            {
              url: "/assets/images/projects/micro-project-2.png",
              alt: "interfaz mapa micro",
            },
            {
              url: "/assets/images/projects/micro-project-1.png",
              alt: "interfaz panel administrador micro",
            },
          ]}
          description="Aplicación web para facilitar el uso del transporte público en Santa Cruz. Encuentra la mejor ruta del transporte público y permite administrar la información de las líneas de transporte."
          skills={["React", "Tailwind", "HTML", "CSS", "NestJS"]}
        />
        <ProjectCard
          title="Proyecto personal · Aplicación de TTS"
          images={[
            {
              url: "/assets/images/projects/tts-project.png",
              alt: "interfaz móvil TTS",
            },
          ]}
          description="Aplicación móvil para convertir texto a sonido, permite guardar frases favoritas para facilitar su acceso. Lo realicé mientras estaba enfermo y no podría usar mi voz para hablar."
          skills={["Flutter", "Dart", "TTS", "Riverpod"]}
        />
      </div>
    </section>
  );
}
