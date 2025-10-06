import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ValuePropositionSection from '@/components/sections/ValuePropositionSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "IMMERSIA - O Futuro das Experiências Imersivas";
    document.querySelector('meta[name="description"]')?.setAttribute('content', 
      'IMMERSIA: Startup pioneira em experiências imersivas. Criamos soluções em VR e AR para empresas de todos os portes. Conecte-se ao futuro da tecnologia.');
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ValuePropositionSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
