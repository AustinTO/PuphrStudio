import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, GitBranch, AlertTriangle, Shield, Eye } from 'lucide-react';
import { Link } from 'wouter';

export default function ADAttackPath() {
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
              <GitBranch className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Active Directory Attack Path Mapping</h1>
          </div>
          <p className="text-xl text-foreground/70">
            Visualize and eliminate attack paths in your Active Directory before ransomware operators exploit them
          </p>
        </div>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">The Ransomware Threat</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/70">
            <p>
              Modern ransomware attacks don't just encrypt files—they first move laterally through your network, 
              escalating privileges until they control your entire Active Directory domain. Once attackers have 
              domain admin access, they can deploy ransomware across every system simultaneously.
            </p>
            <p>
              Most organizations don't realize how many paths exist from a compromised user account to complete 
              domain takeover. Our AD Attack Path Mapping service shows you exactly what attackers see and how 
              to break those paths before they're exploited.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#1a2332]/90 border-[#2a3442]">
            <CardHeader>
              <Eye className="h-6 w-6 text-primary mb-2" />
              <CardTitle>BloodHound Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                We use <strong className="text-foreground">BloodHound</strong>, the industry-standard open-source 
                tool for AD attack path analysis, combined with our expertise in interpreting and remediating findings.
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>• Complete AD environment mapping</li>
                <li>• Visual attack path graphs</li>
                <li>• Privilege escalation chain identification</li>
                <li>• Kerberoasting and AS-REP roasting detection</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332]/90 border-[#2a3442]">
            <CardHeader>
              <Shield className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Expert Guidance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                The tools show you the problems, but fixing them requires expertise. We provide:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>• Detailed remediation recommendations</li>
                <li>• Prioritized fixes based on risk</li>
                <li>• Group policy configuration guidance</li>
                <li>• Tiered administration architecture design</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Common Attack Paths We Find</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Privileged Account Exposure</h3>
                  <p className="text-sm text-foreground/60">
                    Domain admins logging into workstations, leaving credentials cached and vulnerable to extraction.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Excessive Permissions</h3>
                  <p className="text-sm text-foreground/60">
                    Regular users with "GenericAll" or "WriteDacl" permissions over high-value targets, creating 
                    easy escalation paths.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Stale Accounts & Groups</h3>
                  <p className="text-sm text-foreground/60">
                    Old service accounts and nested group memberships creating unexpected privilege escalation opportunities.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Kerberoasting Targets</h3>
                  <p className="text-sm text-foreground/60">
                    Service accounts with SPNs and weak passwords that can be cracked offline to gain elevated access.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Prevent Enterprise-Wide Ransomware</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70">
            <p className="mb-4">
              An attacker who gains initial access through phishing or vulnerability exploitation shouldn't be able 
              to reach domain admin privileges. By identifying and breaking attack paths, we ensure that even if an 
              attacker gets in, they can't easily own your enterprise and deploy ransomware.
            </p>
            <p>
              Our assessments show you the specific steps needed to implement a defense-in-depth strategy that makes 
              lateral movement and privilege escalation exponentially harder for attackers.
            </p>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/">
            <Button size="lg" className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90" data-testid="button-contact">
              Secure Your Active Directory
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
