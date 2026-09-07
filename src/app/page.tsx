import EvaluationSection from "@/components/EvaluationSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ModulesGrid from "@/components/modules/ModulesGrid";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="contenido-principal">
        <HeroSection />
        <ModulesGrid />
        <EvaluationSection />
      </main>
      <Footer />
    </>
  );
}
