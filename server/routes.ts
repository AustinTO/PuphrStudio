import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import {
  contactRateLimit,
  contactRequestSchema,
  formatContactLog,
} from "./security";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint (for dev environment only - production uses Cloudflare Worker)
  app.post("/api/contact", contactRateLimit, async (req, res) => {
    const parsed = contactRequestSchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        message: "Invalid contact request.",
        issues: parsed.error.flatten().fieldErrors,
      });
    }

    console.log("Contact form submission:", formatContactLog(parsed.data));
    res.json({ ok: true });
  });

  const httpServer = createServer(app);

  return httpServer;
}
