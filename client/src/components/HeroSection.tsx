import { Shield, Lock, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import puphrLogo from '@assets/D43E03E9-D374-4251-AB52-CF5765EB2D8E_1761305321893.png';

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <img 
            src={puphrLogo} 
            alt="Puphr - Your Friendly Cybersecurity Partner" 
            className="h-40 w-40 animate-pulse"
            data-testid="img-hero-logo"
          />
        </div>
        
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Friendly Cybersecurity for{' '}
          <span className="text-primary">Small & Medium Businesses</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-3xl mx-auto">
          Free and low-cost vulnerability scans, Active Directory attack path mapping, 
          and customized remediation plans to protect your business from modern threats
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={scrollToServices}
            data-testid="button-get-started"
          >
            <Search className="mr-2 h-5 w-5" />
            Get Your Free Scan
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 backdrop-blur-lg bg-white/10"
            onClick={scrollToServices}
            data-testid="button-learn-more"
          >
            <Shield className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-primary" />
            <span>NIST 800-63B Aligned</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span>Modern Threat Defense</span>
          </div>
          <div className="flex items-center gap-2">
            <Search className="h-4 w-4 text-primary" />
            <span>Free Vulnerability Scans</span>
          </div>
        </div>
      </div>
    </section>
  );
}
