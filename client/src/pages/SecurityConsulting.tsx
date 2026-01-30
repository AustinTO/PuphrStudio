import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Users, Bot, Target, Shield } from 'lucide-react';
import { Link } from 'wouter';
import { getContent } from '@/lib/content';

type PageContent = {
  backLabel: string;
  title: string;
  subtitle: string;
  introTitle: string;
  programTitle: string;
  programIntro: string;
  programItems: string[];
  complianceTitle: string;
  complianceIntro: string;
  complianceItems: string[];
  aiTitle: string;
  aiIntro: string;
  aiImplementationTitle: string;
  aiImplementationIntro: string;
  aiImplementationItems: { label: string; detail: string }[];
  aiRedTeamTitle: string;
  aiRedTeamIntro: string;
  aiRedTeamItems: { label: string; detail: string }[];
  aiCalloutTitle: string;
  aiCalloutBody: string;
  strategicTitle: string;
  strategicItems: { title: string; description: string }[];
  engagementTitle: string;
  engagementIntro: string;
  engagementItems: { label: string; detail: string }[];
  ctaText: string;
  ctaLink: string;
};

export default function SecurityConsulting() {
  const { data, html } = getContent<PageContent>('security-consulting');

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
              <Users className="h-8 w-8 text-primary" />
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
              <Shield className="h-6 w-6 text-primary mb-2" />
              <CardTitle>{data.programTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4 text-sm">
                {data.programIntro}
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                {data.programItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332]/90 border-[#2a3442]">
            <CardHeader>
              <Target className="h-6 w-6 text-primary mb-2" />
              <CardTitle>{data.complianceTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4 text-sm">
                {data.complianceIntro}
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                {data.complianceItems.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <Bot className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-2xl">{data.aiTitle}</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70">
            <p className="mb-6">{data.aiIntro}</p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">{data.aiImplementationTitle}</h3>
                <p className="text-sm text-foreground/60 mb-3">{data.aiImplementationIntro}</p>
                <ul className="space-y-2 text-sm text-foreground/60 ml-4">
                  {data.aiImplementationItems.map((item) => (
                    <li key={item.label}>
                      • <strong className="text-foreground">{item.label}</strong> - {item.detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">{data.aiRedTeamTitle}</h3>
                <p className="text-sm text-foreground/60 mb-3">{data.aiRedTeamIntro}</p>
                <ul className="space-y-2 text-sm text-foreground/60 ml-4">
                  {data.aiRedTeamItems.map((item) => (
                    <li key={item.label}>
                      • <strong className="text-foreground">{item.label}</strong> - {item.detail}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-4">
                <h4 className="font-semibold mb-2 text-primary">{data.aiCalloutTitle}</h4>
                <p className="text-sm text-foreground/60">
                  {data.aiCalloutBody}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{data.strategicTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.strategicItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-foreground/60">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{data.engagementTitle}</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70">
            <p className="mb-4">
              {data.engagementIntro}
            </p>
            <ul className="space-y-2 text-sm text-foreground/60">
              {data.engagementItems.map((item) => (
                <li key={item.label}>
                  • <strong className="text-foreground">{item.label}</strong> - {item.detail}
                </li>
              ))}
            </ul>
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
