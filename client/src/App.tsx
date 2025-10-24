import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import VulnerabilityScans from "@/pages/VulnerabilityScans";
import ADAttackPath from "@/pages/ADAttackPath";
import AntiPhishing from "@/pages/AntiPhishing";
import MFAImplementation from "@/pages/MFAImplementation";
import PasswordManager from "@/pages/PasswordManager";
import SecurityConsulting from "@/pages/SecurityConsulting";
import NotFound from "@/pages/not-found";
import ParallaxBackground from "@/components/ParallaxBackground";
import Navigation from "@/components/Navigation";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/vulnerability-scans" component={VulnerabilityScans} />
      <Route path="/ad-attack-path" component={ADAttackPath} />
      <Route path="/anti-phishing" component={AntiPhishing} />
      <Route path="/mfa-implementation" component={MFAImplementation} />
      <Route path="/password-manager" component={PasswordManager} />
      <Route path="/security-consulting" component={SecurityConsulting} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative min-h-screen">
          <ParallaxBackground />
          <Navigation />
          <Toaster />
          <Router />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
