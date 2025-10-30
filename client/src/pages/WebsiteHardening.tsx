import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Globe, CheckCircle, Shield, Zap, Lock } from 'lucide-react';
import { Link } from 'wouter';

export default function WebsiteHardening() {
  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/">
          <Button variant="ghost" className="mb-8" data-testid="button-back-website-hardening">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold">Secure Website & Domain Hardening</h1>
          </div>
          <p className="text-xl text-foreground/70">
            Fast, modern, and secure — no monthly fees
          </p>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Enterprise-Grade Website Security</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-foreground/70">
            <p>
              We build and deploy your business website using Cloudflare's global edge network, 
              SSL, WAF, and caching layers for speed and safety.
            </p>
            <p>
              Includes DNS hardening, secure email integration, and optional AI-powered contact forms. 
              Pay once, stay protected.
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="bg-[#1a2332] border-[#2a3442]">
            <CardHeader>
              <Shield className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Cloudflare Protection Layer</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Leverage Cloudflare's global network for security and performance:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Automatic SSL/TLS with perfect forward secrecy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Web Application Firewall (WAF) protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>DDoS mitigation included</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Global CDN for fast loading worldwide</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-[#1a2332] border-[#2a3442]">
            <CardHeader>
              <Zap className="h-6 w-6 text-primary mb-2" />
              <CardTitle>Performance & Speed</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/70 mb-4">
                Modern architecture for lightning-fast page loads:
              </p>
              <ul className="space-y-2 text-sm text-foreground/60">
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Edge caching for instant response times</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Optimized asset delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>Automatic image optimization</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>HTTP/3 and modern protocol support</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442] mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Complete Setup Included</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Lock className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">DNS Hardening</h3>
                  <p className="text-sm text-foreground/60">
                    Secure DNS configuration with DNSSEC, CAA records, and proper SPF/DKIM/DMARC setup 
                    to prevent domain spoofing and email impersonation.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">AI-Powered Contact Forms</h3>
                  <p className="text-sm text-foreground/60">
                    Optional intelligent form handling with spam filtering, lead qualification, 
                    and automated responses using AI — all while protecting your inbox.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">One-Time Payment</h3>
                  <p className="text-sm text-foreground/60">
                    No recurring monthly fees from us. You only pay Cloudflare directly for their 
                    services (often free for small businesses). We build it, secure it, and hand it over.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/">
            <Button size="lg" className="bg-[#FF6B4A] hover:bg-[#FF6B4A]/90" data-testid="button-contact">
              Build Your Secure Website
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
