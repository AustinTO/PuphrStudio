import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Cloud, CheckCircle, Lock, Shield, Mail } from 'lucide-react';
import { Link } from 'wouter';

export default function CloudSecurity() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-cloud-security">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Cloud className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Cloud & M365 Security Setup</h1>
          </div>
          <p className="text-xl text-foreground/70">
            Lock down your email, data, and collaboration tools
          </p>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Secure Your Cloud Environment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/70">
            <p>
              We configure multi-factor authentication, permissions, and secure sharing policies across 
              Microsoft 365, Google Workspace, or other cloud systems.
            </p>
            <p>
              Includes SPF/DKIM/DMARC tuning to stop spoofing and phishing, plus backup and logging 
              verification for peace of mind.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#1a2332] border-[#2a3442]">
            <CardHeader>
              <Lock className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Access Control & MFA</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Implement proper authentication and authorization:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Multi-factor authentication deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Role-based permission configuration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Conditional access policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Secure external sharing controls</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332] border-[#2a3442]">
            <CardHeader>
              <Mail className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Email Security Hardening</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Stop spoofing and phishing at the DNS level:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>SPF record configuration and validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>DKIM signing implementation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>DMARC policy deployment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Anti-phishing rule configuration</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">What's Included</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Multi-Platform Support</h3>
                  <p className="text-sm text-foreground/60">
                    Whether you use Microsoft 365, Google Workspace, or another cloud platform, 
                    we configure security controls tailored to your environment.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Backup & Logging Verification</h3>
                  <p className="text-sm text-foreground/60">
                    We ensure your cloud backup systems are actually working and logging is properly 
                    configured for security monitoring and compliance.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Secure Sharing Policies</h3>
                  <p className="text-sm text-foreground/60">
                    Configure collaboration settings that enable productivity while preventing 
                    accidental data exposure and unauthorized access.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild size="lg" className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90" data-testid="button-contact-cloud-security">
            <Link href="/?service=cloud-security">
              Secure Your Cloud Environment
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
