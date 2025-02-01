import Topbar from "@/components/topbar";
import Footer from "@/components/footer";
import Hero from "@/components/sections/hero";
import Projects from "@/components/sections/projects";

export default function Home() {
  return (
    <main className="main">
      <Topbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
