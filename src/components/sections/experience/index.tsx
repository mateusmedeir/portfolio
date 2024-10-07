import { useTranslations } from "next-intl";
import ExperienceCard from "@/components/cards/experience-card";

const Experience = () => {
  const t = useTranslations("Home.Experience");

  return (
    <section id="works" className="w-full bg-gray-100 px-5 sm:px-10 py-20">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-8 ">
        <h2 className="text-black-100 text-2xl font-bold">{t("title")}</h2>
        <div className="grid grid-cols-3 gap-x-4 gap-y-8">
          <ExperienceCard
            title="Atitude 247"
            href="atitude-247"
            src="247-logo.svg"
          />
          <ExperienceCard
            title="Garrafa no Mar"
            href="garrafa-no-mar"
            src="/gnm-logo.svg"
          />
          <ExperienceCard
            title="Vitalongis"
            href="vitalongis"
            src="vl-logo.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default Experience;
