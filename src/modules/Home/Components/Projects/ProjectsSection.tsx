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
          title={t("projects_cinavar_title")}
          images={[
            {
              url: "/assets/images/projects/cinavar-logo.png",
              alt: t("projects_cinavar_img_alt"),
            },
            {
              url: "/assets/images/projects/cinavar-1.png",
              alt: t("projects_cinavar_img_alt"),
            },
            {
              url: "/assets/images/projects/cinavar-2.png",
              alt: t("projects_cinavar_img_alt"),
            },
            {
              url: "/assets/images/projects/cinavar-3.png",
              alt: t("projects_cinavar_img_alt"),
            },
            {
              url: "/assets/images/projects/cinavar-4.png",
              alt: t("projects_cinavar_img_alt"),
            },
          ]}
          description={t("projects_cinavar_desc")}
          skills={[
            "React",
            "Express",
            "TypeScript",
            "Node.js",
            "Github Actions",
            "Playwright",
            "Vitest",
            "PostgreSQL",
          ]}
        />
        <ProjectCard
          title={t("projects_chancho_title")}
          images={[
            {
              url: "/assets/images/projects/chancho-0.png",
              alt: t("projects_chancho_img_alt"),
            },
            {
              url: "/assets/images/projects/chancho-1.png",
              alt: t("projects_chancho_img_alt"),
            },
            {
              url: "/assets/images/projects/chancho-2.png",
              alt: t("projects_chancho_img_alt"),
            },
            {
              url: "/assets/images/projects/chancho-3.png",
              alt: t("projects_chancho_img_alt"),
            },
            {
              url: "/assets/images/projects/chancho-4.png",
              alt: t("projects_chancho_img_alt"),
            },
          ]}
          description={t("projects_chancho_desc")}
          skills={[
            "React",
            "Hono",
            "TypeScript",
            "Github Actions",
            "AWS",
            "Keycloak",
            "MUI",
            "Playwright",
            "Vitest",
            "PostgreSQL",
          ]}
        />
        <ProjectCard
          title={t("projects_sumak_title")}
          images={[
            {
              url: "/assets/images/projects/sumak-logo.png",
              alt: t("projects_sumak_img_alt"),
            },
            {
              url: "/assets/images/projects/sumak-3.png",
              alt: t("projects_sumak_img_alt"),
            },
            {
              url: "/assets/images/projects/sumak-1.png",
              alt: t("projects_sumak_img_alt"),
            },
            {
              url: "/assets/images/projects/sumak-2.png",
              alt: t("projects_sumak_img_alt"),
            },
            {
              url: "/assets/images/projects/sumak-4.png",
              alt: t("projects_sumak_img_alt"),
            },
          ]}
          description={t("projects_sumak_desc")}
          skills={[
            "React",
            "TanStack Start",
            "Express",
            "tRPC",
            "Huawei Cloud",
            "PostgreSQL",
            "DaisyUI",
          ]}
        />
        <ProjectCard
          title={t("projects_soyyo_title")}
          images={[
            {
              url: "/assets/images/projects/soyyo-logo.jpg",
              alt: t("projects_soyyo_img_alt"),
            },
            {
              url: "/assets/images/projects/soyyo-project.png",
              alt: t("projects_soyyo_img_alt"),
            },
            {
              url: "/assets/images/projects/soyyo-1.png",
              alt: t("projects_soyyo_img_alt"),
            },
          ]}
          description={t("projects_soyyo_desc")}
          skills={["React", "HTML", "CSS", "Jest", "Git"]}
        />
        <ProjectCard
          title={t("projects_interpares_title")}
          images={[
            {
              url: "/assets/images/projects/interpares-logo.jpg",
              alt: t("projects_interpares_img_alt"),
            },
            {
              url: "/assets/images/projects/interpares-1.png",
              alt: t("projects_interpares_img_alt"),
            },
            {
              url: "/assets/images/projects/interpares-2.png",
              alt: t("projects_interpares_img_alt"),
            },
            {
              url: "/assets/images/projects/interpares-3.png",
              alt: t("projects_interpares_img_alt"),
            },
          ]}
          description={t("projects_interpares_desc")}
          skills={["Javascript", "HTML", "CSS", "Carbon Design System"]}
        />
        <ProjectCard
          title={t("projects_rmwear_title")}
          images={[
            {
              url: "/assets/images/projects/rmwear-logo.jpg",
              alt: t("projects_rmwear_img_alt"),
            },
            {
              url: "/assets/images/projects/rmwear-3.jpg",
              alt: t("projects_rmwear_img_alt"),
            },
            {
              url: "/assets/images/projects/rmwear-1.jpg",
              alt: t("projects_rmwear_img_alt"),
            },
            {
              url: "/assets/images/projects/rmwear-2.jpg",
              alt: t("projects_rmwear_img_alt"),
            },
          ]}
          description={t("projects_rmwear_desc")}
          skills={["Wordpress", "PHP", "CSS", "HTML", "Kadence"]}
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
          skills={["React", "Tailwind", "Fastify", "HTML", "CSS"]}
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
          skills={["Flutter", "Dart"]}
        />
      </div>
    </section>
  );
}
