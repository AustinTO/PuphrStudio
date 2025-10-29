import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, GitBranch, Shield, Lock, Key, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';

export default function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Vulnerability Scans",
      description: "Free and low-cost comprehensive security assessments to identify weaknesses before attackers do.",
      link: "/vulnerability-scans"
    },
    {
      icon: GitBranch,
      title: "AD Attack Path Mapping",
      description: "Visualize and secure your Active Directory infrastructure against attack paths and privilege escalation.",
      link: "/ad-attack-path"
    },
    {
      icon: Shield,
      title: "Anti-Phishing Training",
      description: "Modern training programs to protect your team from social engineering and emerging threats like ClickFix.",
      link: "/anti-phishing"
    },
    {
      icon: Lock,
      title: "MFA Implementation",
      description: "Deploy NIST 800-63B compliant multi-factor authentication to secure access to critical systems.",
      link: "/mfa-implementation"
    },
    {
      icon: Key,
      title: "Password Manager Setup",
      description: "Implement enterprise password management solutions aligned with latest NIST guidelines.",
      link: "/password-manager"
    },
    {
      icon: Users,
      title: "Security Consulting",
      description: "Expert IT and cybersecurity guidance tailored to small and medium businesses' unique needs and budgets.",
      link: "/security-consulting"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Comprehensive Security Services
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Everything your business needs to stay secure in today's threat landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-[#1a2332] border-[#2a3442] hover:border-primary/50 transition-all"
            >
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2" data-testid={`text-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {service.title}
                </CardTitle>
                <CardDescription className="text-foreground/60">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={service.link}>
                  <Button variant="ghost" className="text-[#FF6B4A] p-0 h-auto hover:bg-transparent" data-testid={`button-learn-more-${index}`}>
                    Learn More →
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
