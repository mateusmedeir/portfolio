import Footer from "@/components/footer";
import Topbar from "@/components/topbar";
import { useTranslations } from "next-intl";
import { ExperienceHero } from "@/components/experience";

export default function GarrafaNoMar() {
  const t = useTranslations("GarrafaNoMar");
  return (
    <main className="main relative">
      <Topbar />
      <ExperienceHero
        img={{ src: "/gnm-logo.svg", alt: "Garrafa no Mar" }}
        title="Garrafa no Mar"
        description={t("description")}
        role={t("role")}
        duration={{ start: new Date("May 2023"), end: new Date("August 2024") }}
      />
      <Footer />
    </main>
  );
}
