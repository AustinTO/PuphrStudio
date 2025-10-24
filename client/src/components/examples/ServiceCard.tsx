import ServiceCard from '../ServiceCard';
import { Search } from 'lucide-react';

export default function ServiceCardExample() {
  return (
    <div className="p-8 max-w-md">
      <ServiceCard
        icon={Search}
        title="Vulnerability Scans"
        description="Comprehensive security assessments to identify weaknesses in your infrastructure"
        features={[
          "Free initial scan for new clients",
          "Detailed vulnerability reports",
          "Prioritized remediation recommendations",
          "Regular scan scheduling"
        ]}
        badge="Free Available"
      />
    </div>
  );
}
