import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, Users, AlertTriangle, Target } from 'lucide-react';
import { Link } from 'wouter';

export default function AntiPhishing() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Modern Anti-Phishing Training</h1>
          </div>
          <p className="text-xl text-foreground/70">
            Protect your team from sophisticated social engineering attacks with training that actually works
          </p>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Beyond Traditional Training</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/70">
            <p>
              Phishing attacks are getting more sophisticated every day. Generic "don't click bad links" training 
              isn't enough anymore. Your team needs to understand modern threats like ClickFix, browser-based 
              attacks, AI-generated phishing content, and social engineering tactics that bypass traditional indicators.
            </p>
            <p>
              Our anti-phishing program combines engaging presentations, technical controls, and realistic simulations 
              to build genuine security awareness and muscle memory in your team.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#1a2332] border-[#2a3442]">
            <CardHeader>
              <Users className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Training & Presentations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Interactive training sessions covering emerging and modern threats:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>• <strong className="text-foreground">ClickFix attacks</strong> - Fake browser error prompts</li>
                <li>• <strong className="text-foreground">AI-generated phishing</strong> - Convincing deepfakes and text</li>
                <li>• <strong className="text-foreground">Business Email Compromise</strong> - CEO fraud and wire transfer scams</li>
                <li>• <strong className="text-foreground">QR code phishing</strong> - Quishing attacks</li>
                <li>• <strong className="text-foreground">Mobile-specific threats</strong> - SMS and app-based attacks</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332] border-[#2a3442]">
            <CardHeader>
              <Shield className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Group Policy Hardening</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Technical controls to neutralize attack vectors for most employees:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>• Block macros in Office documents from the internet</li>
                <li>• Disable PowerShell for standard users</li>
                <li>• Restrict script execution and command-line tools</li>
                <li>• Configure Attack Surface Reduction rules</li>
                <li>• Email attachment filtering policies</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <Target className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-2xl">Phishing Simulation Engagements</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/70 mb-4">
              Realistic phishing simulations help identify vulnerable users and measure the effectiveness of training:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Customized Scenarios</h3>
                  <p className="text-sm text-foreground/60">
                    Simulations tailored to your industry and business context, not generic templates.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Progressive Difficulty</h3>
                  <p className="text-sm text-foreground/60">
                    Start with obvious phishing, gradually increase sophistication to build real-world resilience.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Immediate Education</h3>
                  <p className="text-sm text-foreground/60">
                    Users who click get instant training on the specific indicators they missed, reinforcing learning.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Detailed Reporting</h3>
                  <p className="text-sm text-foreground/60">
                    Track metrics over time to measure improvement and identify users who need additional support.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">The ClickFix Threat</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70">
            <p className="mb-4">
              ClickFix is a new social engineering tactic where attackers display fake browser error messages 
              instructing users to copy and paste malicious PowerShell commands. These attacks bypass traditional 
              email security because there's no malicious attachment or link—just text to copy.
            </p>
            <p>
              Our training specifically covers ClickFix recognition and our Group Policy recommendations ensure 
              that even if an employee falls for it, the attack can't execute on properly configured systems.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/">
            <Button size="lg" className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90" data-testid="button-contact">
              Strengthen Your Human Firewall
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
