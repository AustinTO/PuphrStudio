import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Monitor, CheckCircle, Shield, AlertTriangle, Lock } from 'lucide-react';
import { Link } from 'wouter';

export default function WorkstationHardening() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-workstation-hardening">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Monitor className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Workstation Hardening & User Protection</h1>
          </div>
          <p className="text-xl text-foreground/70">
            Stop modern click-based attacks before they happen
          </p>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Protect Against Modern Threats</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/70">
            <p>
              We secure employee workstations against ClickFix-style fake captchas, malicious scripts, 
              and browser execution traps by disabling unneeded PowerShell access, blocking risky shortcuts, 
              and enforcing safe app policies.
            </p>
            <p>
              The result: users can click without compromising your business.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#1a2332] border-[#2a3442]">
            <CardHeader>
              <Shield className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Script & Execution Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Prevent malicious code execution without breaking legitimate workflows:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>PowerShell execution policy hardening</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Windows Script Host restrictions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Application whitelisting setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Macro security configuration</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332] border-destructive/50">
            <CardHeader>
              <AlertTriangle className="h-6 w-6 text-destructive mb-2" />
              <CardTitle>ClickFix Defense</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Specialized protection against fake CAPTCHA and "fix" prompts:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Block command execution from browser contexts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Disable dangerous keyboard shortcuts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Browser security policy enforcement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Clipboard monitoring and restrictions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Complete Workstation Security</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Safe App Policies</h3>
                  <p className="text-sm text-foreground/60">
                    Configure Windows Defender Application Control, SmartScreen, and controlled folder 
                    access to prevent unauthorized software execution.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">User-Friendly Security</h3>
                  <p className="text-sm text-foreground/60">
                    All hardening is done with productivity in mind. Users keep the tools they need 
                    while dangerous attack vectors are closed off.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Documentation & Training</h3>
                  <p className="text-sm text-foreground/60">
                    Includes detailed documentation of all changes and brief user training on recognizing 
                    and avoiding click-based attack techniques.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/?service=workstation-hardening">
            <Button size="lg" className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90" data-testid="button-contact">
              Harden Your Workstations
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
