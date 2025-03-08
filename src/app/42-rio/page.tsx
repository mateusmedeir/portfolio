import { Metadata } from "next";
import Footer from "@/components/footer";
import Topbar from "@/components/topbar";
import { useTranslations } from "next-intl";
import { ExperienceHero } from "@/components/experience";

export const metadata: Metadata = {
  title: "42 Rio - Mateus Lopes",
};

export default function School42Rio() {
  const t = useTranslations("42 Rio");
  return (
    <main className="main">
      <Topbar />
      <ExperienceHero
        img={{ src: "/42-rio/full-logo.svg", alt: "42 Rio Logo" }}
        title="42 Rio"
        companyDescription={t("description.company")}
        experienceDetails={{
          role: t('role'),
          collaborators: [
            'Lucas Fads (PO)',
            'Allan Prado',
            'Guilherme Clemente',
            'Gabriel Oliveira',
          ],
          duration: {
            start: new Date("November 2024")
          },
        }}
        skills={[
          "TypeScript",
          "React",
          "Python",
          "Django Rest Framework",
          "PostgreSQL",
          "Docker",
        ]}
      />
      <Footer />
    </main>
  );
}
