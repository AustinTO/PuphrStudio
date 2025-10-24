import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase, ShieldCheck, Key } from 'lucide-react';

export default function SolutionsSection() {
  const solutions = [
    {
      icon: Briefcase,
      title: "Cybersecurity Consulting",
      description: "Expert guidance to build and maintain a security program that fits your budget and business needs",
      details: [
        "Security program development",
        "Compliance roadmap planning",
        "Technology stack recommendations",
        "Incident response planning"
      ]
    },
    {
      icon: ShieldCheck,
      title: "MFA Implementation",
      description: "Deploy multi-factor authentication across your organization following NIST 800-63B guidelines",
      details: [
        "NIST 800-63B compliant setup",
        "User-friendly authentication flows",
        "Legacy system integration",
        "End-user training included"
      ]
    },
    {
      icon: Key,
      title: "Password Manager Deployment",
      description: "Enterprise password manager setup to eliminate weak passwords and credential reuse",
      details: [
        "Team password vault configuration",
        "Secure credential sharing",
        "Browser integration setup",
        "Migration from existing solutions"
      ]
    }
  ];

  return (
    <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Complete <span className="text-primary">Security Solutions</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Additional services to strengthen your security posture and align with industry best practices
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <Card 
              key={index} 
              className="backdrop-blur-lg bg-card/50 border-white/20 hover-elevate transition-all duration-300"
            >
              <CardHeader>
                <div className="p-3 rounded-lg bg-primary/20 border border-primary/30 w-fit mb-4">
                  <solution.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl mb-2" data-testid={`text-solution-${solution.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  {solution.title}
                </CardTitle>
                <CardDescription className="text-base text-foreground/70">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {solution.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
