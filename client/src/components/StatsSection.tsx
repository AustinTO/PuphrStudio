import { Shield, Search, TrendingDown, Users } from 'lucide-react';
import { getContent, renderInlineMarkdown } from '@/lib/content';

const iconMap = {
  Users,
  Search,
  TrendingDown,
  Shield,
} as const;

type HomeContent = {
  stats: {
    items: {
      icon?: keyof typeof iconMap;
      value: string;
      label: string;
      color: string;
    }[];
  };
};

export default function StatsSection() {
  const { data } = getContent<HomeContent>('home');
  const stats = data.stats?.items ?? [];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center backdrop-blur-lg bg-card/30 p-8 rounded-xl border border-white/10 hover-elevate transition-all duration-300"
              data-testid={`stat-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {(stat.icon && iconMap[stat.icon]) ? (
                (() => {
                  const Icon = iconMap[stat.icon];
                  return <Icon className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />;
                })()
              ) : (
                <Shield className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />
              )}
              <div className="text-4xl font-bold mb-2">
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(stat.value) }} />
              </div>
              <div className="text-sm text-muted-foreground">
                <span dangerouslySetInnerHTML={{ __html: renderInlineMarkdown(stat.label) }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
