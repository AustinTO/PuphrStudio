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
              We help you get NIST 800-63B compliant (your employees will thank us!)
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
                data-testid="button-contact-us"
              >
                Contact Us
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
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground/70">
                  <strong className="text-foreground">Modern AI security</strong> - Guidance on secure AI implementation and red-teaming services
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground/70">
                  <strong className="text-foreground">Proven tools</strong> - Open-source solutions like Greenbone and BloodHound with expert guidance
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <p className="text-sm text-foreground/70">
                  <strong className="text-foreground">SMB-focused</strong> - Affordable, practical security that fits your budget and business needs
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src={puphrLogo} 
              alt="Puphr - Your Friendly Cybersecurity Partner" 
              className="h-80 w-80 lg:h-[32rem] lg:w-[32rem] animate-float"
              data-testid="img-hero-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
