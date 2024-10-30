import Image from "next/image";
import { useTranslations } from "next-intl";
import toCapitalCase from "@/libs/toCapitalCase";

interface ImgProps {
  src: string;
  alt: string;
}

interface DurationProps {
  start: Date;
  end: Date;
}

interface ExperienceHeroProps {
  img?: ImgProps;
  title: string;
  description: string;
  role: string;
  duration: DurationProps;
}

const ExperienceHero: React.FC<ExperienceHeroProps> = ({
  img = { src: "/placeholder.svg", alt: "Placeholder" },
  title,
  description,
  role,
  duration,
}) => {
  const t = useTranslations("Components.ExperienceHero");
  const startTime = `${toCapitalCase(
    duration.start.toLocaleString(t("duration.locale"), {
      month: "long",
    })
  )} ${duration.start.getFullYear()}`;
  const endTime = `${toCapitalCase(
    duration.end.toLocaleString(t("duration.locale"), {
      month: "long",
    })
  )} ${duration.end.getFullYear()}`;

  return (
    <section className="container flex flex-col gap-6 py-6">
      <Image
        className="w-full h-[36rem] object-cover"
        src={img.src}
        alt={img.alt}
        width={1080}
        height={1080}
      />
      <div>
        <h1 className="text-black-100 font-bold text-2xl">{title}</h1>
        <p className="text-black-100">{description}</p>
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className="text-black-100 font-bold text-lg">{t("role")}</h2>
          <p className="text-black-100">{role}</p>
        </div>
        <div>
          <h2 className="text-black-100 font-bold text-lg">
            {t("duration.title")}
          </h2>
          <p className="text-black-100">
            {t("duration.time", { start: startTime, end: endTime })}
          </p>
        </div>
      </div>
    </section>
  );
};

export { ExperienceHero };
