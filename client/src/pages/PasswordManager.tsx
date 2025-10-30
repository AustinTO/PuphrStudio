import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Key, TrendingUp, Shield, Lock } from 'lucide-react';
import { Link } from 'wouter';

export default function PasswordManager() {
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
              <Key className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Password Manager Deployment</h1>
          </div>
          <p className="text-xl text-foreground/70">
            Dramatically improve security and productivity with enterprise password management
          </p>
        </div>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">The Password Problem</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/70">
            <p>
              The average business user has dozens of accounts requiring passwords. Without a password manager, 
              users inevitably reuse passwords across sites, choose weak passwords they can remember, or write 
              passwords down in insecure locations.
            </p>
            <p>
              A single reused password can compromise every account where it's used. When one service suffers 
              a breach, attackers immediately try those credentials on other sites—a practice called "credential stuffing."
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#1a2332]/90 border-[#2a3442]">
            <CardHeader>
              <Shield className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Massive Security Improvement</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Password managers transform your security posture:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>• <strong className="text-foreground">Unique passwords</strong> for every account</li>
                <li>• <strong className="text-foreground">Long, complex credentials</strong> generated automatically</li>
                <li>• <strong className="text-foreground">Encrypted storage</strong> with military-grade encryption</li>
                <li>• <strong className="text-foreground">Breach monitoring</strong> alerts for compromised credentials</li>
                <li>• <strong className="text-foreground">Secure sharing</strong> for team credentials</li>
                <li>• <strong className="text-foreground">Audit trails</strong> showing who accessed what</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332]/90 border-[#2a3442]">
            <CardHeader>
              <TrendingUp className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Increased Productivity</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Beyond security, password managers save significant time:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>• <strong className="text-foreground">No more "forgot password"</strong> support tickets</li>
                <li>• <strong className="text-foreground">Instant login</strong> with autofill</li>
                <li>• <strong className="text-foreground">Cross-device sync</strong> - desktop, mobile, tablet</li>
                <li>• <strong className="text-foreground">Team credential sharing</strong> without email or chat</li>
                <li>• <strong className="text-foreground">Onboarding efficiency</strong> - new hires get access instantly</li>
                <li>• <strong className="text-foreground">Offboarding security</strong> - revoke access immediately</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <Lock className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-2xl">Enterprise-Grade Solutions</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/70 mb-6">
              We deploy and configure top-tier password management solutions that balance security, usability, 
              and cost:
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Bitwarden</h3>
                <p className="text-sm text-foreground/60 mb-2">
                  Open-source, transparently audited password manager with enterprise features:
                </p>
                <ul className="space-y-1 text-sm text-foreground/60 ml-4">
                  <li>• Self-hosting option for maximum control</li>
                  <li>• Excellent value for small to medium businesses</li>
                  <li>• Active open-source community and regular security audits</li>
                  <li>• HIPAA, SOC 2, and GDPR compliant</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">NordPass</h3>
                <p className="text-sm text-foreground/60 mb-2">
                  User-friendly password manager with strong security:
                </p>
                <ul className="space-y-1 text-sm text-foreground/60 ml-4">
                  <li>• XChaCha20 encryption algorithm</li>
                  <li>• Intuitive interface with minimal training needed</li>
                  <li>• Excellent browser and mobile app integration</li>
                  <li>• Data breach scanner included</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Our Implementation Process</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">1</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Solution Selection & Setup</h3>
                  <p className="text-sm text-foreground/60">
                    We help you choose the right password manager for your needs and handle the technical setup, 
                    including SSO integration if desired.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">2</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Browser & Device Integration</h3>
                  <p className="text-sm text-foreground/60">
                    Configure browser extensions and mobile apps across your team's devices for seamless autofill 
                    and credential sync.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">3</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Team Training</h3>
                  <p className="text-sm text-foreground/60">
                    Hands-on training sessions showing your team how to use the password manager effectively, 
                    import existing credentials, and share team passwords securely.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">4</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Migration Assistance</h3>
                  <p className="text-sm text-foreground/60">
                    Help migrating from existing password storage solutions (browser-saved passwords, spreadsheets, 
                    or other password managers) to your new system.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-semibold">5</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Ongoing Support</h3>
                  <p className="text-sm text-foreground/60">
                    Continued assistance with onboarding new users, managing shared credentials, and troubleshooting 
                    any issues.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">The ROI is Clear</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70">
            <p className="mb-4">
              Studies show that password managers save employees an average of 13 hours per year on password 
              resets alone. For a 20-person team, that's 260 hours—over six full work weeks—saved annually.
            </p>
            <p>
              The security benefits are even more dramatic. A single data breach from compromised credentials 
              can cost hundreds of thousands of dollars in incident response, regulatory fines, customer 
              notifications, and lost business. Password managers reduce this risk by 80% or more.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/">
            <Button size="lg" className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90" data-testid="button-contact">
              Deploy Enterprise Password Management
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
