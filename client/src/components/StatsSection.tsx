import { Shield, Search, TrendingDown, Users } from 'lucide-react';

export default function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "500+",
      label: "Businesses Protected",
      color: "text-primary"
    },
    {
      icon: Search,
      value: "10K+",
      label: "Vulnerabilities Found",
      color: "text-accent"
    },
    {
      icon: TrendingDown,
      value: "87%",
      label: "Phishing Reduction",
      color: "text-chart-4"
    },
    {
      icon: Shield,
      value: "24/7",
      label: "Threat Monitoring",
      color: "text-primary"
    }
  ];

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
              <stat.icon className={`h-10 w-10 mx-auto mb-4 ${stat.color}`} />
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
