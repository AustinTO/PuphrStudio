import ServiceCard from '../ServiceCard';
import { Search } from 'lucide-react';
import { getContent } from '@/lib/content';

export default function ServiceCardExample() {
  const { data } = getContent<{
    title: string;
    description: string;
    features: string[];
    badge?: string;
    icon?: 'Search';
  }>('examples/service-card');

  const Icon = data.icon === 'Search' ? Search : Search;

  return (
    <div className="p-8 max-w-md">
      <ServiceCard
        icon={Icon}
        title={data.title}
        description={data.description}
        features={data.features}
        badge={data.badge}
      />
    </div>
  );
}
