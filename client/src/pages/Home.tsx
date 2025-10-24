import ParallaxBackground from '@/components/ParallaxBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import ThreatDefenseSection from '@/components/ThreatDefenseSection';
import SolutionsSection from '@/components/SolutionsSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParallaxBackground />
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <ThreatDefenseSection />
        <SolutionsSection />
      </main>
      <Footer />
    </div>
  );
}
