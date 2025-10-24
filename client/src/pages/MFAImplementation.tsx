import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Lock, CheckCircle, XCircle, Key } from 'lucide-react';
import { Link } from 'wouter';

export default function MFAImplementation() {
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
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">MFA Implementation</h1>
          </div>
          <p className="text-xl text-foreground/70">
            Deploy multi-factor authentication aligned with the latest NIST 800-63B guidelines
          </p>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">NIST Standards Have Changed</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/70">
            <p>
              NIST recently updated their Digital Identity Guidelines (800-63B), replacing outdated and 
              counterproductive password policies with evidence-based recommendations. Many organizations 
              are still following dangerous old policies that actually make passwords weaker.
            </p>
            <p>
              We help you implement MFA systems that follow the new NIST standards, improving both security 
              and user experience.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#1a2332] border-destructive/50">
            <CardHeader>
              <XCircle className="h-6 w-6 text-destructive mb-2" />
              <CardTitle className="text-destructive">Outdated & Dangerous Policies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4 text-sm">
                These policies are now <strong>explicitly discouraged</strong> by NIST:
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/60">
                    <strong className="text-destructive">Mandatory password changes</strong> every 60-90 days
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/60">
                    <strong className="text-destructive">Complex character requirements</strong> (uppercase, numbers, symbols)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/60">
                    <strong className="text-destructive">Password history restrictions</strong> preventing reuse
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <XCircle className="h-4 w-4 text-destructive mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/60">
                    <strong className="text-destructive">Arbitrary composition rules</strong> that make passwords harder to remember
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-destructive/80">
                These policies lead to predictable password patterns, password reuse, and written-down passwords.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332] border-primary/50">
            <CardHeader>
              <CheckCircle className="h-6 w-6 text-primary mb-2" />
              <CardTitle className="text-primary">Modern NIST 800-63B Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4 text-sm">
                Evidence-based policies that actually improve security:
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/60">
                    <strong className="text-primary">Long passphrases</strong> with spaces allowed (e.g., "correct horse battery staple")
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/60">
                    <strong className="text-primary">No forced periodic changes</strong> unless compromise is suspected
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/60">
                    <strong className="text-primary">Breach database screening</strong> to block compromised passwords
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/60">
                    <strong className="text-primary">Multi-factor authentication</strong> as primary defense
                  </span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-primary/80">
                These policies create stronger, more memorable credentials that users don't need to write down.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <Key className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-2xl">Our MFA Implementation Service</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">NIST 800-63B Compliant Configuration</h3>
                  <p className="text-sm text-foreground/60">
                    We configure your authentication systems to follow modern NIST guidelines, including proper 
                    passphrase support and elimination of counterproductive policies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">User-Friendly Authentication Flows</h3>
                  <p className="text-sm text-foreground/60">
                    Deploy MFA methods that balance security with usability—authenticator apps, hardware tokens, 
                    or passwordless options that your team will actually use.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Legacy System Integration</h3>
                  <p className="text-sm text-foreground/60">
                    Implement MFA even for older systems and applications that don't natively support it, 
                    using proxy authentication or conditional access policies.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">End-User Training & Support</h3>
                  <p className="text-sm text-foreground/60">
                    Comprehensive training for your team on using the new authentication system, plus clear 
                    documentation and ongoing support.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Why This Matters</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70">
            <p className="mb-4">
              Passwords alone are no longer sufficient protection. Even "strong" passwords can be phished, 
              stolen in database breaches, or cracked if they follow predictable patterns created by outdated 
              composition rules.
            </p>
            <p>
              Multi-factor authentication combined with sensible password policies dramatically reduces the 
              risk of account compromise. By following NIST 800-63B guidelines, you get stronger security 
              <em className="text-primary"> and</em> happier users who can actually remember their credentials.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/">
            <Button size="lg" className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90" data-testid="button-contact">
              Get NIST-Compliant MFA
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
