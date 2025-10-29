import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Users, Bot, Target, Shield } from 'lucide-react';
import { Link } from 'wouter';

export default function SecurityConsulting() {
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
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Security Consulting</h1>
          </div>
          <p className="text-xl text-foreground/70">
            Expert IT and cybersecurity guidance tailored to small and medium businesses' unique needs and budgets
          </p>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">IT and Cybersecurity for SMBs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/70">
            <p>
              Small and medium businesses face the same cyber threats as large enterprises but typically lack 
              dedicated security teams. You need expert guidance that understands both the threat landscape and 
              the practical constraints of running a smaller organization.
            </p>
            <p>
              Our consulting services provide strategic security leadership without the overhead of a full-time 
              CISO. We help you build and maintain a security program that fits your budget, complies with 
              regulations, and actually protects your business.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#1a2332] border-[#2a3442]">
            <CardHeader>
              <Shield className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Security Program Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4 text-sm">
                Build a comprehensive security program from the ground up:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>• Risk assessment and threat modeling for your business</li>
                <li>• Security policy and procedure documentation</li>
                <li>• Technology stack recommendations and architecture review</li>
                <li>• Incident response planning and tabletop exercises</li>
                <li>• Vendor risk management frameworks</li>
                <li>• Employee security awareness programs</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332] border-[#2a3442]">
            <CardHeader>
              <Target className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Compliance & Frameworks</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4 text-sm">
                Navigate regulatory requirements and security frameworks:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li>• NIST 800-53 and Cybersecurity Framework implementation</li>
                <li>• HIPAA security rule compliance (for healthcare)</li>
                <li>• PCI DSS requirements (for payment processing)</li>
                <li>• GDPR and privacy regulation guidance</li>
                <li>• SOC 2 preparation and gap analysis</li>
                <li>• Cyber insurance requirement fulfillment</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <Bot className="h-6 w-6 text-primary mb-2" />
            <CardTitle className="text-2xl">AI Security Services</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70">
            <p className="mb-6">
              As businesses increasingly adopt AI tools and integrate them into critical processes, new security 
              challenges emerge. We help you harness AI's benefits while managing the unique risks it introduces.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-3">Secure AI Implementation in Business Processes</h3>
                <p className="text-sm text-foreground/60 mb-3">
                  Guidance on safely integrating AI systems into your operations:
                </p>
                <ul className="space-y-2 text-sm text-foreground/60 ml-4">
                  <li>• <strong className="text-foreground">Data governance</strong> - Ensure sensitive data doesn't leak through AI tools</li>
                  <li>• <strong className="text-foreground">Prompt injection defense</strong> - Protect against malicious AI inputs</li>
                  <li>• <strong className="text-foreground">Model selection</strong> - Choose AI providers with appropriate security controls</li>
                  <li>• <strong className="text-foreground">Access controls</strong> - Implement proper authentication and authorization</li>
                  <li>• <strong className="text-foreground">Monitoring & logging</strong> - Track AI system usage and detect anomalies</li>
                  <li>• <strong className="text-foreground">Employee training</strong> - Teach safe and effective AI tool usage</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-3">AI Red-Teaming Services</h3>
                <p className="text-sm text-foreground/60 mb-3">
                  Adversarial testing of your AI systems to identify vulnerabilities before attackers do:
                </p>
                <ul className="space-y-2 text-sm text-foreground/60 ml-4">
                  <li>• <strong className="text-foreground">Prompt injection testing</strong> - Attempt to bypass AI safety guardrails</li>
                  <li>• <strong className="text-foreground">Data extraction attacks</strong> - Test if sensitive data can be recovered from models</li>
                  <li>• <strong className="text-foreground">Jailbreaking attempts</strong> - Try to make AI systems behave outside intended parameters</li>
                  <li>• <strong className="text-foreground">Bias and fairness testing</strong> - Identify discriminatory outputs or behaviors</li>
                  <li>• <strong className="text-foreground">Integration security</strong> - Test security of AI's connections to other systems</li>
                  <li>• <strong className="text-foreground">Detailed reporting</strong> - Comprehensive findings with remediation recommendations</li>
                </ul>
              </div>

              <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mt-4">
                <h4 className="font-semibold mb-2 text-primary">Why AI Security Matters Now</h4>
                <p className="text-sm text-foreground/60">
                  AI systems introduce novel attack vectors. Prompt injection attacks can bypass security controls, 
                  sensitive data can leak through AI-generated responses, and malicious actors are actively 
                  developing new exploitation techniques. Early adoption of AI security best practices protects 
                  your business and gives you a competitive advantage in safe AI deployment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Strategic Technology Guidance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Cloud Security</h3>
                  <p className="text-sm text-foreground/60">
                    Secure configuration of AWS, Azure, or Google Cloud environments. Identity and access 
                    management, network security, and cloud-native security tools.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Endpoint Protection</h3>
                  <p className="text-sm text-foreground/60">
                    Modern EDR/XDR solution selection and deployment. Configuration of Windows Defender, 
                    CrowdStrike, SentinelOne, or other endpoint security platforms.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Network Security</h3>
                  <p className="text-sm text-foreground/60">
                    Firewall configuration, network segmentation, VPN deployment, and zero-trust architecture planning.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="font-semibold mb-1">Application Security</h3>
                  <p className="text-sm text-foreground/60">
                    Secure development lifecycle guidance, code review processes, dependency management, and 
                    security testing integration.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Flexible Engagement Models</CardTitle>
          </CardHeader>
          <CardContent className="text-foreground/70">
            <p className="mb-4">
              We work with you in whatever capacity makes sense for your business:
            </p>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>• <strong className="text-foreground">Project-based</strong> - Specific security initiatives with defined scope and deliverables</li>
              <li>• <strong className="text-foreground">Retainer</strong> - Ongoing strategic guidance and support, billed monthly</li>
              <li>• <strong className="text-foreground">Virtual CISO</strong> - Act as your fractional Chief Information Security Officer</li>
              <li>• <strong className="text-foreground">Incident response</strong> - Emergency support during active security incidents</li>
            </ul>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/">
            <Button size="lg" className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90" data-testid="button-contact">
              Get Expert Security Guidance
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
