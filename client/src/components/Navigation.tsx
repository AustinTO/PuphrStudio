import { Shield } from 'lucide-react';
import puphrLogo from '@assets/D43E03E9-D374-4251-AB52-CF5765EB2D8E_1761305321893.png';

export default function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img 
              src={puphrLogo} 
              alt="Puphr - Friendly Cybersecurity Puffer Fish" 
              className="h-12 w-12" 
              data-testid="img-logo"
            />
            <span className="text-2xl font-bold text-primary font-mono">Puphr</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-services"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('threats')}
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-threats"
            >
              Threat Defense
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-foreground/80 hover:text-primary transition-colors"
              data-testid="link-solutions"
            >
              Solutions
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
