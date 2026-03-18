import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import EngagementModels from "@/components/EngagementModels";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <Hero />
    <WhatWeDo />
    <WhyUs />
    <Projects />
    <Team />
    <EngagementModels />
    <FinalCTA />
    <Contact />
    <Footer />
  </div>
);

export default Index;
