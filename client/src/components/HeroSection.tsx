import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import puphrLogo from '@assets/D43E03E9-D374-4251-AB52-CF5765EB2D8E_1761305321893.png';

export default function HeroSection() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary" data-testid="badge-nist">
              NIST 800-63B Compliant
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Cybersecurity Made Simple for{' '}
              <span className="text-[#FF6B4A]">Small & Medium Businesses</span>
            </h1>
            
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              Free and low-cost vulnerability scans, Active Directory attack path mapping, 
              and modern anti-phishing training. Protect your business from emerging threats 
              like ClickFix with expert guidance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90 text-white px-8"
                onClick={scrollToServices}
                data-testid="button-start-scan"
              >
                Start Free Scan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-foreground/20"
                onClick={scrollToServices}
                data-testid="button-view-services"
              >
                View Services
              </Button>
            </div>
            
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-[#FF6B4A]" data-testid="stat-scans">5,000+</div>
                <div className="text-sm text-foreground/60">Scans Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF6B4A]" data-testid="stat-businesses">500+</div>
                <div className="text-sm text-foreground/60">Businesses Protected</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#FF6B4A]" data-testid="stat-threats">10,000+</div>
                <div className="text-sm text-foreground/60">Threats Blocked</div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src={puphrLogo} 
              alt="Puphr - Your Friendly Cybersecurity Partner" 
              className="h-64 w-64 lg:h-96 lg:w-96"
              data-testid="img-hero-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
