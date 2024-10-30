import { useTranslations } from "next-intl";
import ProjectCard from "@/components/cards/project-card";

const Projects = () => {
  const t = useTranslations("Home.Projects");

  return (
    <section id="projects" className="w-full bg-black-200 py-20">
      <div className="container flex flex-col gap-8">
        <h2 className="text-2xl font-bold">{t("title")}</h2>
        <div className="w-full flex gap-4">
          <div className="w-full flex flex-col gap-8">
            <ProjectCard
              title="Garrafa no Mar"
              description="Website"
              src="/GNM-sm-banner.svg"
            />
            <ProjectCard
              title="Ishida Brasil"
              description="Website"
              src="/ishida-sm-banner.svg"
            />
          </div>
          <div className="w-full flex flex-col gap-8">
            <ProjectCard title="Garrafa no Mar v2" description="Mobile app" />
            <ProjectCard
              title="Advanced Outdoor Solutions"
              description="Website"
              src="/AOS-sm-banner.svg"
            />
          </div>
          <div className="w-full flex flex-col gap-8">
            <ProjectCard title="Garrafa no Mar v1" description="Mobile app" />
            {/* <ProjectCard title="Vitalongis" description="Coming soon" src="vl-logo.svg" locked={true} /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
