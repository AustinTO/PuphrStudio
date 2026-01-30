import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, GitBranch, Shield, Lock, Key, Users, FileSearch, Cloud, Monitor, Bot, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Badge } from '@/components/ui/badge';
import { getContent, renderInlineMarkdown } from '@/lib/content';

const iconMap = {
  Search,
  GitBranch,
  Shield,
  Lock,
  Key,
  Users,
  FileSearch,
  Cloud,
  Monitor,
  Bot,
  Globe,
} as const;

type HomeContent = {
  services: {
    heading: string;
    subheading: string;
    groups: {
      id: string;
      title: string;
      badge?: string;
      description?: string;
      items: {
        icon: keyof typeof iconMap;
        title: string;
        description: string;
        link: string;
      }[];
    }[];
  };
};

export default function ServicesSection() {
  const { data } = getContent<HomeContent>('home');
  const { services } = data;

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(services.heading) }} />
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(services.subheading) }} />
          </p>
        </div>

        {services.groups.map((group, groupIndex) => (
          <div key={group.id} className={groupIndex === services.groups.length - 1 ? undefined : 'mb-16'}>
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-2xl sm:text-3xl font-bold">
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(group.title) }} />
              </h3>
              {group.badge ? (
                <Badge variant="secondary" data-testid={`badge-${group.id}`}>
                  <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(group.badge) }} />
                </Badge>
              ) : null}
            </div>
            {group.description ? (
              <p className="text-foreground/60 mb-8 max-w-3xl">
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(group.description) }} />
              </p>
            ) : (
              <div className="mb-8" />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map((service, index) => {
                const Icon = iconMap[service.icon];
                return (
                <Card 
                  key={index} 
                  className="bg-[#1a2332]/90 border-[#2a3442] hover:border-primary/50 transition-all"
                  data-testid={`card-${group.id}-service-${service.title.toLowerCase().replace(/\\s+/g, '-')}`}
                >
                  <CardHeader>
                    <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2" data-testid={`text-service-${service.title.toLowerCase().replace(/\\s+/g, '-')}`}>
                      <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(service.title) }} />
                    </CardTitle>
                    <CardDescription className="text-foreground/60" data-testid={`text-description-${service.title.toLowerCase().replace(/\\s+/g, '-')}`}>
                      <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(service.description) }} />
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Link href={service.link}>
                      <Button variant="ghost" className="text-[#FF6B4A] p-0 h-auto hover:bg-transparent" data-testid={`button-learn-more-${service.title.toLowerCase().replace(/\\s+/g, '-')}`}>
                        Learn More →
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
