import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Bot, CheckCircle, Zap, Sparkles, FileText } from 'lucide-react';
import { Link } from 'wouter';

export default function AIAutomation() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-ai-automation">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Bot className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">AI Workflow Automation Setup</h1>
          </div>
          <p className="text-xl text-foreground/70">
            Let AI handle repetitive, error-prone work
          </p>
        </div>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Practical AI That Works</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/70">
            <p>
              We design lightweight automations that actually make sense — AI-generated report summaries, 
              log analysis, smart lead responders, or auto-remediation scripts.
            </p>
            <p>
              Each setup is customized, simple to manage, and delivered ready to run locally or in the cloud.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#1a2332]/90 border-[#2a3442]">
            <CardHeader>
              <Sparkles className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Smart Document Processing</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Automate document analysis and reporting:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>AI-generated executive summaries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Automatic data extraction from PDFs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Report generation from templates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Document classification and routing</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332]/90 border-[#2a3442]">
            <CardHeader>
              <Zap className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Intelligent Monitoring</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Turn logs and alerts into actionable insights:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>AI-powered log analysis and anomaly detection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Automated incident triage and categorization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Smart alerting with reduced false positives</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Auto-remediation script suggestions</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332]/90 border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Business Automation Examples</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Smart Lead Responders</h3>
                  <p className="text-sm text-foreground/60">
                    AI-powered email and form responses that understand context and provide personalized 
                    replies to common inquiries, routing complex questions to the right team member.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Custom for Your Workflow</h3>
                  <p className="text-sm text-foreground/60">
                    We don't sell off-the-shelf solutions. Every automation is designed for your specific 
                    processes, tools, and business requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Bot className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">Easy to Manage</h3>
                  <p className="text-sm text-foreground/60">
                    Delivered ready to run with clear documentation. Can run locally on your infrastructure 
                    or in the cloud depending on your preferences and requirements.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button asChild size="lg" className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90" data-testid="button-contact-ai-automation">
            <Link href="/?service=ai-automation">
              Automate Your Workflows
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
