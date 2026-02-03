import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import puphrLogo from '@assets/puphr_logo.svg';
import { getContent, renderInlineMarkdown } from '@/lib/content';

type HomeContent = {
  hero: {
    badge: string;
    title: string;
    highlight: string;
    body: string;
    primaryCta: string;
    secondaryCta: string;
    bullets: { title: string; text: string }[];
    imageAlt: string;
  };
};

export default function HeroSection() {
  const { data } = getContent<HomeContent>('home');
  const { hero } = data;
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
          <div className="relative">
            <div className="absolute inset-0 -left-6 -right-6 -top-6 -bottom-6 rounded-3xl bg-gradient-to-br from-background/90 via-background/70 to-background/40 backdrop-blur-sm border border-white/5 shadow-2xl" />
            <div className="relative">
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary" data-testid="badge-nist">
              <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(hero.badge) }} />
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(hero.title) }} />{' '}
              <span className="text-[#FF6B4A]" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(hero.highlight) }} />
            </h1>
            
            <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
              <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(hero.body) }} />
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90 text-white px-8"
                onClick={scrollToContact}
                data-testid="button-contact-us"
              >
                {hero.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-foreground/20"
                onClick={scrollToServices}
                data-testid="button-view-services"
              >
                {hero.secondaryCta}
              </Button>
            </div>
            
            <div className="space-y-3">
              {hero.bullets.map((bullet) => (
                <div key={bullet.title} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-foreground/70">
                    <strong className="text-foreground" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(bullet.title) }} />{' '}
                    - <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(bullet.text) }} />
                  </p>
                </div>
              ))}
            </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <img 
              src={puphrLogo} 
              alt={hero.imageAlt} 
              className="h-80 w-80 lg:h-[32rem] lg:w-[32rem] animate-float"
              data-testid="img-hero-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
