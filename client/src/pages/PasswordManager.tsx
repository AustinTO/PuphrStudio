import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Key, TrendingUp, Shield, Lock } from 'lucide-react';
import { Link } from 'wouter';
import { getContent } from '@/lib/content';

const iconMap = {
  Shield,
  TrendingUp,
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
    bullets: { label: string; detail: string }[];
  }[];
  solutionsTitle: string;
  solutionsIntro: string;
  solutions: { title: string; description: string; bullets: string[] }[];
  processTitle: string;
  processSteps: { step: string; title: string; description: string }[];
  roiTitle: string;
  roiBody: string[];
  ctaText: string;
  ctaLink: string;
};

export default function PasswordManager() {
  const { data, html } = getContent<PageContent>('password-manager');
  const [securityCard, productivityCard] = data.featureCards;
  const SecurityIcon = iconMap[securityCard.icon];
  const ProductivityIcon = iconMap[productivityCard.icon];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {data.backLabel}
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Key className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">{data.title}</h1>
          </div>
          <p className="text-xl text-foreground/70">
            {data.subtitle}
          </p>
        </div>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{data.introTitle}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/70" dangerouslySetInnerHTML={{ __html: html }} />
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#1a2332]/90 border-[#2a3442]">
            <CardHeader>
              <SecurityIcon className="h-6 w-6 text-primary mb-2" />
              <CardTitle>{securityCard.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                {securityCard.description}
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                {securityCard.bullets.map((bullet) => (
                  <li key={bullet.label}>
                    • <strong className="text-foreground">{bullet.label}</strong> {bullet.detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332]/90 border-[#2a3442]">
            <CardHeader>
              <ProductivityIcon className="h-6 w-6 text-primary mb-2" />
              <CardTitle>{productivityCard.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                {productivityCard.description}
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                {productivityCard.bullets.map((bullet) => (
                  <li key={bullet.label}>
                    • <strong className="text-foreground">{bullet.label}</strong> {bullet.detail}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <Lock className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-2xl">{data.solutionsTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/70 mb-6">
              {data.solutionsIntro}
            </p>
            
            <div className="space-y-6">
              {data.solutions.map((solution) => (
                <div key={solution.title}>
                  <h3 className="font-semibold text-lg mb-2">{solution.title}</h3>
                  <p className="text-sm text-foreground/60 mb-2">
                    {solution.description}
                  </p>
                  <ul className="space-y-1 text-sm text-foreground/60 ml-4">
                    {solution.bullets.map((item) => (
                      <li key={item}>• {item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{data.processTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.processSteps.map((step) => (
                <div key={step.step} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-semibold">{step.step}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{step.title}</h3>
                    <p className="text-sm text-foreground/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{data.roiTitle}</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70">
            {data.roiBody.map((paragraph, index) => (
              <p key={paragraph} className={index === 0 ? 'mb-4' : undefined}>
                {paragraph}
              </p>
            ))}
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href={data.ctaLink}>
            <Button size="lg" className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90" data-testid="button-contact">
              {data.ctaText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
