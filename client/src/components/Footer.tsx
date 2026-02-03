import puphrLogo from '@assets/puphr_logo.svg';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { getContent, renderInlineMarkdown } from '@/lib/content';

const iconMap = {
  Mail,
  Linkedin,
  Twitter,
} as const;

type HomeContent = {
  footer: {
    description: string;
    quickLinksHeading: string;
    links: { label: string; href: string; testId: string }[];
    connectHeading: string;
    social: { label: string; href: string; icon: keyof typeof iconMap; testId: string }[];
    copyrightSuffix: string;
  };
  navigation: {
    brand: string;
  };
};

export default function Footer() {
  const { data } = getContent<HomeContent>('home');
  const { footer, navigation } = data;

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
              <span className="text-2xl font-bold text-primary font-mono" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(navigation.brand) }} />
            </div>
            <p className="text-foreground/70 mb-4">
              <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(footer.description) }} />
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(footer.quickLinksHeading) }} />
            </h3>
            <ul className="space-y-2">
              {footer.links.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-foreground/70 hover:text-primary transition-colors"
                    data-testid={link.testId}
                  >
                    <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(link.label) }} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">
              <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(footer.connectHeading) }} />
            </h3>
            <div className="flex gap-4">
              {footer.social.map((item) => {
                const Icon = iconMap[item.icon];
                const isExternal = item.href.startsWith('http');
                return (
                  <a 
                    key={item.href}
                    href={item.href} 
                    className="p-2 rounded-lg bg-primary/20 border border-primary/30 hover-elevate transition-all"
                    data-testid={item.testId}
                    aria-label={item.label}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noopener noreferrer' : undefined}
                  >
                    <Icon className="h-5 w-5 text-primary" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()}{" "}
            <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(navigation.brand) }} />.{" "}
            <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(footer.copyrightSuffix) }} />
          </p>
        </div>
      </div>
    </footer>
  );
}
