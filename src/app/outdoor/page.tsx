import { Metadata } from "next";
import Footer from "@/components/footer";
import Topbar from "@/components/topbar";
import { useTranslations } from "next-intl";
import { ExperienceHero, ExperienceProject } from "@/components/experience";

export const metadata: Metadata = {
  title: "Advanced Outdoor Solutions - Mateus Lopes",
};

export default function GarrafaNoMar() {
  const t = useTranslations("Outdoor");
  return (
    <main className="main relative">
      <Topbar />
      <ExperienceHero
        img={{ src: "/aos/full-logo.svg", alt: "Advanced Outdoor Solutions Logo" }}
        title="Advanced Outdoor Solutions"
        companyDescription={t("description.company")}
        jobDescription={t("description.job")}
        experienceDetails={{
          role: t("role"),
          collaborators: ["Lucas Fads"],
          agency: "Group6 Interactive",
          duration: 4,
        }}
        skills={["JavaScript", "PHP", "Wordpress", "Oxygen Builder"]}
      />
      <ExperienceProject
        img={{
          src: "/aos/aos-home-page-hero-section.avif",
          alt: "AOS home page hero section",
        }}
      />
      <ExperienceProject
        img={{
          src: "/aos/aos-home-page-sfp-section.avif",
          alt: "AOS home page sfp section",
        }}
      />
      <ExperienceProject
        img={{
          src: "/aos/aos-home-page-lfs-section.avif",
          alt: "AOS home page lfs section",
        }}
      />
      <ExperienceProject
        img={{
          src: "/aos/aos-home-page-blog-section.avif",
          alt: "AOS home page blog section",
        }}
      />
      <Footer />
    </main>
  );
}
