import Footer from "@/components/footer";
import Topbar from "@/components/topbar";
import { ExperienceHero } from "@/components/experience";

export default function Vitalongis() {
  return (
    <main className="main">
      <Topbar />
      <ExperienceHero
        title="Vitalongis"
        description=""
        role="Full Stack Developer"
        duration={{
          start: new Date("June 2024"),
          end: new Date("August 2024"),
        }}
      />
      <Footer />
    </main>
  );
}
