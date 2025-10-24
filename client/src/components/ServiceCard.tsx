import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, LucideIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  badge?: string;
}

export default function ServiceCard({ icon: Icon, title, description, features, badge }: ServiceCardProps) {
  return (
    <Card className="backdrop-blur-lg bg-card/50 border-white/20 hover-elevate transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
            <Icon className="h-8 w-8 text-primary" />
          </div>
          {badge && (
            <Badge variant="secondary" className="text-xs" data-testid={`badge-${badge.toLowerCase().replace(/\s+/g, '-')}`}>
              {badge}
            </Badge>
          )}
        </div>
        <CardTitle className="text-2xl mb-2" data-testid={`text-service-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </CardTitle>
        <CardDescription className="text-base text-foreground/70">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-sm text-foreground/80">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
