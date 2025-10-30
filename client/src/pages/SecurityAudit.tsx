import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Shield, CheckCircle, Search, FileText, AlertTriangle } from 'lucide-react';
import { Link } from 'wouter';

export default function SecurityAudit() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-security-audit">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Vulnerability & Security Audit</h1>
          </div>
          <p className="text-xl text-foreground/70">
            Find and fix the weak spots before someone else does
          </p>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Complete Security Visibility</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/70">
            <p>
              We perform full internal and external scans, configuration reviews, and cloud exposure checks. 
              You get a clear, prioritized report with actionable fixes — no fluff, no ongoing contract.
            </p>
            <p>
              Perfect for small businesses that want real visibility into their risk without the complexity 
              or cost of enterprise-level security assessments.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#1a2332] border-[#2a3442]">
            <CardHeader>
              <Search className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Internal & External Scanning</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Comprehensive vulnerability assessment from both perspectives:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>External perimeter scanning to find internet-facing risks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Internal network assessment for insider threat visibility</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Configuration reviews for security best practices</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332] border-[#2a3442]">
            <CardHeader>
              <AlertTriangle className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Cloud Exposure Assessment</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Identify misconfigurations and exposures in cloud environments:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Public storage bucket detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Over-permissioned service accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Unpatched cloud resources</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">What You Get</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Clear, Prioritized Report</h3>
                  <p className="text-sm text-foreground/60">
                    No security jargon or bloated documentation. You get a straightforward report ranking 
                    risks by actual business impact with specific remediation steps.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Actionable Fixes</h3>
                  <p className="text-sm text-foreground/60">
                    Every finding includes practical remediation guidance you can implement immediately 
                    or hand off to your IT team.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">One-Time Service, No Contract</h3>
                  <p className="text-sm text-foreground/60">
                    This is a standalone assessment. No forced subscriptions, no vendor lock-in. 
                    Get the visibility you need, when you need it.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild size="lg" className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90" data-testid="button-contact-security-audit">
            <Link href="/?service=security-audit">
              Schedule Your Security Audit
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
