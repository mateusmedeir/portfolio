import Footer from "@/components/footer";
import Topbar from "@/components/topbar";
import { ExperienceHero } from "@/components/experience";

export default function Atitude247() {
  return (
    <main className="main">
      <Topbar />
      <ExperienceHero
        title="Atitude 247"
        description=""
        role="Full Stack Developer"
        duration={{ start: new Date("May 2023"), end: new Date("August 2024") }}
      />
      <Footer />
    </main>
  );
}
