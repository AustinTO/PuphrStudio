import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, AlertTriangle, Users, MousePointerClick } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function ThreatDefenseSection() {
  return (
    <section id="threats" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm" data-testid="badge-modern-threats">
            Modern Threat Defense
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Stay Ahead of <span className="text-accent">Emerging Threats</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Protect your team from sophisticated phishing attacks and new threat vectors like ClickFix
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="backdrop-blur-lg bg-card/60 border-accent/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/30">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <Badge variant="secondary" data-testid="badge-anti-phishing">Active Protection</Badge>
              </div>
              <CardTitle className="text-2xl">Anti-Phishing Training</CardTitle>
              <CardDescription className="text-base">
                Modern, interactive training that actually works
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Realistic phishing simulations tailored to your industry</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Real-time threat intelligence updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Measurable behavior change tracking</span>
                </li>
                <li className="flex items-start gap-2">
                  <MousePointerClick className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Engaging, non-boring training modules</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="backdrop-blur-lg bg-card/60 border-destructive/30">
            <CardHeader>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-lg bg-destructive/20 border border-destructive/30">
                  <MousePointerClick className="h-8 w-8 text-destructive" />
                </div>
                <Badge variant="destructive" data-testid="badge-clickfix">New Threat</Badge>
              </div>
              <CardTitle className="text-2xl">ClickFix Defense</CardTitle>
              <CardDescription className="text-base">
                Protection against the latest social engineering tactics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Detection of fake error message campaigns</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Browser security configuration guidance</span>
                </li>
                <li className="flex items-start gap-2">
                  <Users className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Team awareness training on ClickFix tactics</span>
                </li>
                <li className="flex items-start gap-2">
                  <MousePointerClick className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Monitoring for ClickFix attack indicators</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
