import { Metadata } from "next";
import Footer from "@/components/footer";
import Topbar from "@/components/topbar";
import { ExperienceHero } from "@/components/experience";

export const metadata: Metadata = {
  title: "Vitalongis - Mateus Lopes",
};

export default function Vitalongis() {
  return (
    <main className="main">
      <Topbar />
      <ExperienceHero
        img={{ src: "/vl/full-logo.svg", alt: "Vitalongis Logo" }}
        title="Vitalongis"
        companyDescription=""
        experienceDetails={{
          role: "Full Stack Developer",
          duration: {
            start: new Date("June 2024"),
            end: new Date("September 2024"),
          },
        }}
      />
      <Footer />
    </main>
  );
}
