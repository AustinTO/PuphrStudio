import puphrLogo from '@assets/D43E03E9-D374-4251-AB52-CF5765EB2D8E_1761305321893.png';
import { getContent, renderInlineMarkdown } from '@/lib/content';

type HomeContent = {
  navigation: {
    brand: string;
    links: { id: string; label: string }[];
  };
};

export default function Navigation() {
  const { data } = getContent<HomeContent>('home');
  const { navigation } = data;

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
              alt="Puphr - Friendly IT and Cybersecurity Puffer Fish" 
              className="h-12 w-12" 
              data-testid="img-logo"
            />
            <span className="text-2xl font-bold text-primary font-mono" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(navigation.brand) }} />
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {navigation.links.map((link) => (
              <button 
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-foreground/80 hover:text-primary transition-colors"
                data-testid={`link-${link.id}`}
              >
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(link.label) }} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
