import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Users, MousePointerClick } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { getContent, renderInlineMarkdown } from '@/lib/content';

const iconMap = {
  Shield,
  AlertTriangle,
  Users,
  MousePointerClick,
} as const;

type HomeContent = {
  threats: {
    badge: string;
    heading: string;
    accent: string;
    subheading: string;
    cards: {
      theme: 'accent' | 'destructive';
      badge: string;
      title: string;
      description: string;
      icon: keyof typeof iconMap;
      bullets: { icon: keyof typeof iconMap; text: string }[];
    }[];
  };
};

export default function ThreatDefenseSection() {
  const { data } = getContent<HomeContent>('home');
  const { threats } = data;
  const [primaryCard, secondaryCard] = threats.cards;
  const PrimaryIcon = iconMap[primaryCard.icon];
  const SecondaryIcon = iconMap[secondaryCard.icon];

  return (
    <section id="threats" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm" data-testid="badge-modern-threats">
            <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(threats.badge) }} />
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(threats.heading) }} />{' '}
            <span className="text-accent" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(threats.accent) }} />
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(threats.subheading) }} />
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="backdrop-blur-lg bg-card/60 border-accent/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/30">
                  <PrimaryIcon className="h-8 w-8 text-accent" />
                </div>
                <Badge variant="secondary" data-testid="badge-anti-phishing">
                  <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(primaryCard.badge) }} />
                </Badge>
              </div>
              <CardTitle className="text-2xl">
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(primaryCard.title) }} />
              </CardTitle>
              <CardDescription className="text-base">
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(primaryCard.description) }} />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {primaryCard.bullets.map((bullet) => {
                  const BulletIcon = iconMap[bullet.icon];
                  return (
                    <li key={bullet.text} className="flex items-start gap-2">
                      <BulletIcon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(bullet.text) }} />
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-lg bg-card/60 border-destructive/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-destructive/20 border border-destructive/30">
                  <SecondaryIcon className="h-8 w-8 text-destructive" />
                </div>
                <Badge variant="destructive" data-testid="badge-clickfix">
                  <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(secondaryCard.badge) }} />
                </Badge>
              </div>
              <CardTitle className="text-2xl">
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(secondaryCard.title) }} />
              </CardTitle>
              <CardDescription className="text-base">
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(secondaryCard.description) }} />
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {secondaryCard.bullets.map((bullet) => {
                  const BulletIcon = iconMap[bullet.icon];
                  return (
                    <li key={bullet.text} className="flex items-start gap-2">
                      <BulletIcon className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                      <span className="text-sm" dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(bullet.text) }} />
                    </li>
                  );
                })}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
