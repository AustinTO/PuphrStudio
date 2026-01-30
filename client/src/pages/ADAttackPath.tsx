import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, GitBranch, AlertTriangle, Shield, Eye } from 'lucide-react';
import { Link } from 'wouter';
import { getContent, renderInlineMarkdown } from '@/lib/content';

const iconMap = {
  Eye,
  Shield,
} as const;

type PageContent = {
  backLabel: string;
  title: string;
  subtitle: string;
  introTitle: string;
  featureCards: {
    icon: keyof typeof iconMap;
    title: string;
    description: string;
    bullets: { text: string }[];
  }[];
  attackPathsTitle: string;
  attackPaths: { title: string; description: string }[];
  closingTitle: string;
  closingBody: string[];
  ctaText: string;
  ctaLink: string;
};

export default function ADAttackPath() {
  const { data, html } = getContent<PageContent>('ad-attack-path');
  const [firstCard, secondCard] = data.featureCards;
  const FirstIcon = iconMap[firstCard.icon];
  const SecondIcon = iconMap[secondCard.icon];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(data.backLabel) }} />
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <GitBranch className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">
              <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(data.title) }} />
            </h1>
          </div>
          <p className="text-xl text-foreground/70">
            <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(data.subtitle) }} />
          </p>
        </div>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(data.introTitle) }} />
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/70" dangerouslySetInnerHTML={{ __html: html }} />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#1a2332]/90 border-[#2a3442]">
            <CardHeader>
              <FirstIcon className="h-6 w-6 text-primary mb-2" />
              <CardTitle>
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(firstCard.title) }} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(firstCard.description) }} />
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                {firstCard.bullets.map((bullet) => (
                  <li key={bullet.text}>• <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(bullet.text) }} /></li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332]/90 border-[#2a3442]">
            <CardHeader>
              <SecondIcon className="h-6 w-6 text-primary mb-2" />
              <CardTitle>
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(secondCard.title) }} />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(secondCard.description) }} />
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                {secondCard.bullets.map((bullet) => (
                  <li key={bullet.text}>• <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(bullet.text) }} /></li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(data.attackPathsTitle) }} />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.attackPaths.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">
                      <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(item.title) }} />
                    </h3>
                    <p className="text-sm text-foreground/60">
                      <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(item.description) }} />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">
              <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(data.closingTitle) }} />
            </CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70">
            {data.closingBody.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 'mb-4' : undefined}>
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(paragraph) }} />
              </p>
            ))}
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href={data.ctaLink}>
            <Button size="lg" className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90" data-testid="button-contact">
              <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(data.ctaText) }} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
