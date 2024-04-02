import { SectionTitle } from "../../../Shared/components/SectionTitle";

export function AboutMeSection() {
  return (
    <div className="flex flex-col gap-4 text-xl">
      <SectionTitle text="> Acerca de mí" />
      <p>
        He participado en el desarrollo de múltiples proyectos con el objetivo
        de crear <strong className="font-semibold">productos digitales</strong>{" "}
        o <strong className="font-semibold">digitalizar procesos</strong> dentro
        de una empresa.
      </p>
      <p>
        Disfruto el arte de construir aplicaciones robustas y escalables, así
        como aprender constantemente sobre nuevas tecnologías y herramientas en
        mi área.
      </p>
    </div>
  );
}
