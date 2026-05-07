import type { RequestHandler } from "express";
import { z } from "zod";

const WINDOW_MS = 60_000;
const MAX_REQUESTS_PER_WINDOW = 10;
const contactWindow = new Map<string, { count: number; resetAt: number }>();

const emailSchema = z.string().trim().email().max(254);

export const contactRequestSchema = z.object({
  company: z.string().trim().min(1).max(120),
  email: emailSchema,
  message: z.string().trim().min(10).max(2_000),
  name: z.string().trim().min(1).max(120),
  website: z.string().max(0).optional().default(""),
});

type ContactRequest = z.infer<typeof contactRequestSchema>;

function getClientIp(ip: string | undefined): string {
  return ip?.trim() || "unknown";
}

export const contactRateLimit: RequestHandler = (req, res, next) => {
  const clientIp = getClientIp(req.ip);
  const now = Date.now();
  const entry = contactWindow.get(clientIp);

  if (!entry || entry.resetAt <= now) {
    contactWindow.set(clientIp, { count: 1, resetAt: now + WINDOW_MS });
    return next();
  }

  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    const retryAfterSeconds = Math.ceil((entry.resetAt - now) / 1000);
    res.setHeader("Retry-After", retryAfterSeconds.toString());
    return res.status(429).json({ message: "Too many contact requests. Try again later." });
  }

  entry.count += 1;
  return next();
};

export function formatContactLog(body: ContactRequest) {
  return {
    company: body.company,
    email: redactEmail(body.email),
    messageLength: body.message.length,
    name: body.name,
  };
}

function redactEmail(email: string): string {
  const [localPart, domain] = email.split("@");
  if (!localPart || !domain) {
    return "[invalid-email]";
  }

  return `${localPart.slice(0, 2)}***@${domain}`;
}
