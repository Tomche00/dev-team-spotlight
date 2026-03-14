import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <Process />
    <TechStack />
    <Projects />
    <Team />
    <Contact />
    <Footer />
  </div>
);

export default Index;
