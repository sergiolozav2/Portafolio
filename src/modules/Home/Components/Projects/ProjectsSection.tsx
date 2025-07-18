import { SectionTitle } from "../../../Shared/components/SectionTitle";
import { ProjectCard } from "./Components/ProjectCard";
import { useTranslation } from "react-i18next";

export function ProjectsSection() {
  const { t } = useTranslation();
  return (
    <section
      className="flex scroll-m-24 flex-col gap-4 text-xl"
      id="projects-section"
    >
      <SectionTitle text={`${t("projects_title")}`} />
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-[repeat(auto-fit,minmax(350px,1fr))]">
        <ProjectCard
          title={t("projects_soyyo_title")}
          images={[
            {
              url: "/assets/images/projects/soyyo-project.png",
              alt: t("projects_soyyo_img_alt"),
            },
          ]}
          description={t("projects_soyyo_desc")}
          skills={["React", "HTML", "CSS", "Jest", "Git"]}
        />

        <ProjectCard
          title={t("projects_preciosbo_title")}
          images={[
            {
              url: "/assets/images/projects/precios-bo-project.png",
              alt: t("projects_preciosbo_img_alt"),
            },
          ]}
          description={t("projects_preciosbo_desc")}
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
          title={t("projects_caiman_title")}
          images={[
            {
              url: "/assets/images/projects/caiman-project.png",
              alt: t("projects_caiman_img_alt"),
            },
          ]}
          description={t("projects_caiman_desc")}
          skills={["Svelte", "Tailwind", "Javascript", "HTML", "Supabase"]}
        />
        <ProjectCard
          title={t("projects_micro_title")}
          images={[
            {
              url: "/assets/images/projects/micro-project-2.png",
              alt: t("projects_micro_img_alt_1"),
            },
            {
              url: "/assets/images/projects/micro-project-1.png",
              alt: t("projects_micro_img_alt_2"),
            },
          ]}
          description={t("projects_micro_desc")}
          skills={["React", "Tailwind", "HTML", "CSS", "NestJS"]}
        />
        <ProjectCard
          title={t("projects_tts_title")}
          images={[
            {
              url: "/assets/images/projects/tts-project.png",
              alt: t("projects_tts_img_alt"),
            },
          ]}
          description={t("projects_tts_desc")}
          skills={["Flutter", "Dart", "TTS", "Riverpod"]}
        />
      </div>
    </section>
  );
}
