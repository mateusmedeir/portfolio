import Topbar from "@/components/topbar";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";

export default function Home() {
  return (
    <main className="main">
      <Topbar />
      <Hero />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
