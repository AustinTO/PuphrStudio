import puphrLogo from '@assets/D43E03E9-D374-4251-AB52-CF5765EB2D8E_1761305321893.png';
import { Shield, Mail, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 backdrop-blur-lg bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={puphrLogo} 
                alt="Puphr Logo" 
                className="h-12 w-12" 
                data-testid="img-footer-logo"
              />
              <span className="text-2xl font-bold text-primary font-mono">Puphr</span>
            </div>
            <p className="text-foreground/70 mb-4">
              Your friendly cybersecurity puffer fish, protecting small and medium businesses 
              from modern threats with approachable, affordable solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                  data-testid="link-footer-services"
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#threats" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                  data-testid="link-footer-threats"
                >
                  Threat Defense
                </a>
              </li>
              <li>
                <a 
                  href="#solutions" 
                  className="text-foreground/70 hover:text-primary transition-colors"
                  data-testid="link-footer-solutions"
                >
                  Solutions
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="mailto:hello@puphr.com" 
                className="p-2 rounded-lg bg-primary/20 border border-primary/30 hover-elevate transition-all"
                data-testid="link-email"
                aria-label="Email us"
              >
                <Mail className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="https://linkedin.com" 
                className="p-2 rounded-lg bg-primary/20 border border-primary/30 hover-elevate transition-all"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5 text-primary" />
              </a>
              <a 
                href="https://twitter.com" 
                className="p-2 rounded-lg bg-primary/20 border border-primary/30 hover-elevate transition-all"
                data-testid="link-twitter"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="h-5 w-5 text-primary" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Puphr. Made with care for SMB Security.</p>
        </div>
      </div>
    </footer>
  );
}
