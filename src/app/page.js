import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}
