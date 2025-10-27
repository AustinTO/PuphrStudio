import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint (for dev environment only - production uses Cloudflare Worker)
  app.post("/api/contact", async (req, res) => {
    console.log('Contact form submission:', req.body);
    res.json({ ok: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
