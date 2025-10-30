import { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail, Send } from 'lucide-react';
import { useLocation } from 'wouter';

const serviceMessages: Record<string, string> = {
  'security-audit': "I'm interested in learning more about your Vulnerability & Security Audit service.",
  'cloud-security': "I'm interested in learning more about your Cloud & M365 Security Setup service.",
  'workstation-hardening': "I'm interested in learning more about your Workstation Hardening & User Protection service.",
  'ai-automation': "I'm interested in learning more about your AI Workflow Automation Setup service.",
  'website-hardening': "I'm interested in learning more about your Secure Website & Domain Hardening service.",
  'vulnerability-scans': "I'm interested in learning more about your Vulnerability Scanning service.",
  'ad-attack-path': "I'm interested in learning more about your AD Attack Path Mapping service.",
  'anti-phishing': "I'm interested in learning more about your Anti-Phishing Training service.",
  'mfa': "I'm interested in learning more about your MFA Implementation service.",
  'password-manager': "I'm interested in learning more about your Password Manager Setup service.",
  'security-consulting': "I'm interested in learning more about your Security Consulting service."
};

export default function ContactSection() {
  const { toast } = useToast();
  const [location] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '' // honeypot field
  });
  
  // Track the last auto-filled message text to detect user edits
  const lastAutoFilledMessage = useRef<string>('');
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Pre-fill message based on URL parameter
  useEffect(() => {
    // Clear any pending scroll timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
    
    // Parse query string from window.location (works for static sites too)
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    
    // Only prefill if there's a valid service parameter
    if (service && serviceMessages[service]) {
      setFormData(prev => {
        // Allow prefill if:
        // 1. Message is empty, OR
        // 2. Current message exactly matches our last auto-filled message (not user-edited)
        const shouldPrefill = prev.message === '' || prev.message === lastAutoFilledMessage.current;
        
        if (shouldPrefill) {
          const newMessage = serviceMessages[service];
          lastAutoFilledMessage.current = newMessage;
          
          // Scroll to contact section smoothly after page renders
          // Use requestAnimationFrame to ensure DOM is ready, then add small delay
          requestAnimationFrame(() => {
            scrollTimeoutRef.current = setTimeout(() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }, 500);
          });
          
          return {
            ...prev,
            message: newMessage
          };
        }
        
        return prev;
      });
    }
    
    // Cleanup function
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          company: formData.company
        }),
      });

      const data = await response.json();

      if (data.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. We'll get back to you soon.",
        });
        
        // Reset form and auto-fill tracking
        setFormData({
          name: '',
          email: '',
          message: '',
          company: ''
        });
        lastAutoFilledMessage.current = '';
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-primary/20 border border-primary/30">
              <Mail className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Ready to strengthen your IT and cybersecurity? Reach out and let's discuss how we can help protect your business.
          </p>
        </div>

        <Card className="bg-[#1a2332] border-[#2a3442]">
          <CardHeader>
            <CardTitle className="text-2xl">Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field - hidden from users */}
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground">
                  Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your name"
                  className="bg-background border-[#2a3442]"
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your.email@company.com"
                  className="bg-background border-[#2a3442]"
                  data-testid="input-email"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">
                  Message
                </Label>
                <Textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Tell us about your security needs..."
                  rows={6}
                  className="bg-background border-[#2a3442] resize-none"
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF6B4A] hover:bg-[#FF6B4A]/90 text-white"
                size="lg"
                data-testid="button-submit"
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-foreground/60">
            You can also reach us directly at{' '}
            <a href="mailto:contact@puphr.com" className="text-primary hover:underline">
              contact@puphr.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
