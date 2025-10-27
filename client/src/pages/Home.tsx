import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ThreatDefenseSection from '@/components/ThreatDefenseSection';
import SolutionsSection from '@/components/SolutionsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ServicesSection />
        <ThreatDefenseSection />
        <SolutionsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
