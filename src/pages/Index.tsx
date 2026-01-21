import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ValuePropositionSection from '@/components/sections/ValuePropositionSection';
import CTASection from '@/components/sections/CTASection';
import ContactSection from '@/components/sections/ContactSection';
import TeamSection from '@/components/sections/TeamSection';
import FooterSection from '@/components/sections/FooterSection';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Index = () => {
  useScrollAnimation();

  useEffect(() => {
    document.title = "IMMERSIA";
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'IMMERSIA: Tecnologia XR aplicada à capacitação profissional. Treinamentos em VR e AR com foco em segurança e eficiência operacional.');
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ValuePropositionSection />
      <TeamSection />
      <CTASection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
