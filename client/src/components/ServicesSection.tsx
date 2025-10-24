import { Search, GitBranch, FileText } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  const services = [
    {
      icon: Search,
      title: "Vulnerability Scans",
      description: "Comprehensive security assessments to identify weaknesses in your infrastructure before attackers do",
      features: [
        "Free initial scan for new clients",
        "Detailed vulnerability reports with severity ratings",
        "Prioritized remediation recommendations",
        "Regular scan scheduling options"
      ],
      badge: "Free Available"
    },
    {
      icon: GitBranch,
      title: "Active Directory Attack Paths",
      description: "Visualize and understand how attackers could move through your network to reach critical assets",
      features: [
        "Complete AD environment mapping",
        "Attack path visualization",
        "Privilege escalation risk analysis",
        "Domain admin exposure assessment"
      ],
      badge: "Low Cost"
    },
    {
      icon: FileText,
      title: "Customized Remediation Plans",
      description: "Actionable, step-by-step guides tailored to your business to fix identified security issues",
      features: [
        "Business-context aware recommendations",
        "Implementation timelines and priorities",
        "Resource requirement estimates",
        "Progress tracking and validation"
      ],
      badge: "Included"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Protect Your Business with <span className="text-primary">Puphr</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Affordable, comprehensive cybersecurity services designed specifically for small and medium businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
