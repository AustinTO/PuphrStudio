import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot, Sparkles, ShieldCheck } from 'lucide-react';
import { getContent, renderInlineMarkdown } from '@/lib/content';

const iconMap = {
  ShieldCheck,
  Bot,
  Sparkles,
} as const;

type HomeContent = {
  solutions: {
    heading: string;
    accent: string;
    subheading: string;
    items: {
      icon: keyof typeof iconMap;
      title: string;
      description: string;
      details: string[];
    }[];
  };
};

export default function SolutionsSection() {
  const { data } = getContent<HomeContent>('home');
  const { solutions } = data;

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(solutions.heading) }} />{' '}
            <span className="text-primary" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(solutions.accent) }} />
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(solutions.subheading) }} />
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.items.map((solution, index) => {
            const Icon = iconMap[solution.icon];
            return (
            <Card 
              key={index} 
              className="backdrop-blur-lg bg-card/50 border-white/20 hover-elevate transition-all duration-300"
            >
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30 w-fit mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2" data-testid={`text-solution-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(solution.title) }} />
                </CardTitle>
                <CardDescription className="text-base text-foreground/70">
                  <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(solution.description) }} />
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(detail) }} />
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
