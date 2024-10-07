import { useTranslations } from "next-intl";
import ProjectCard from "@/components/cards/project-card";

const Projects = () => {
  const t = useTranslations("Home.Projects");

  return (
    <section id="projects" className="w-full bg-black-200 px-5 sm:px-10 py-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-8">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
          <ProjectCard title="Vitalongis" description="Coming soon." />
          <ProjectCard title="Garrafa no Mar v2" description="" />
          <ProjectCard title="Garrafa no Mar v1" description="" />
          <ProjectCard title="Advanced Outdoor Solutions" description="" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
