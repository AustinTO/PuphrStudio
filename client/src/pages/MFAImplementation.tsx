import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Lock, CheckCircle, XCircle, Key } from 'lucide-react';
import { Link } from 'wouter';
import { getContent } from '@/lib/content';

type PageContent = {
  backLabel: string;
  title: string;
  subtitle: string;
  introTitle: string;
  outdatedTitle: string;
  outdatedIntro: string;
  outdatedBullets: { label: string; detail: string }[];
  outdatedNote: string;
  modernTitle: string;
  modernIntro: string;
  modernBullets: { label: string; detail: string }[];
  modernNote: string;
  serviceTitle: string;
  serviceItems: { title: string; description: string }[];
  whyTitle: string;
  whyBody: { text?: string; html?: string }[];
  ctaText: string;
  ctaLink: string;
};

export default function MFAImplementation() {
  const { data, html } = getContent<PageContent>('mfa-implementation');

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
              <Lock className="h-8 w-8 text-primary" />
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
          <Card className="bg-[#1a2332]/90 border-destructive/50">
            <CardHeader>
              <XCircle className="h-6 w-6 text-destructive mb-2" />
              <CardTitle className="text-destructive">{data.outdatedTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4 text-sm">
                {data.outdatedIntro}
              </p>
              <ul className="space-y-3 text-sm">
                {data.outdatedBullets.map((item) => (
                  <li key={item.label} className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/60">
                      <strong className="text-destructive">{item.label}</strong> {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-destructive/80">
                {data.outdatedNote}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332]/90 border-primary/50">
            <CardHeader>
              <CheckCircle className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary">{data.modernTitle}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4 text-sm">
                {data.modernIntro}
              </p>
              <ul className="space-y-3 text-sm">
                {data.modernBullets.map((item) => (
                  <li key={item.label} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/60">
                      <strong className="text-primary">{item.label}</strong> {item.detail}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-primary/80">
                {data.modernNote}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <Key className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-2xl">{data.serviceTitle}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {data.serviceItems.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
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
            <CardTitle className="text-2xl">{data.whyTitle}</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70">
            {data.whyBody.map((paragraph, index) => (
              <p
                key={paragraph.text ?? paragraph.html}
                className={index === 0 ? 'mb-4' : undefined}
                dangerouslySetInnerHTML={
                  paragraph.html ? { __html: paragraph.html } : undefined
                }
              >
                {paragraph.html ? null : paragraph.text}
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
