import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.string().email(),
  message: z.string().min(10).max(2000),
  _honey: z.string().max(0).optional(),
});

// Rate limit simples (em memória)git 
const RATE_LIMIT_WINDOW = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 3;

const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW);

  rateLimitMap.set(ip, recent);

  return recent.length >= RATE_LIMIT_MAX;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Só POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  // IP do usuário
  const ip =
    (req.headers["x-forwarded-for"] as string)?.split(",")[0] ||
    req.socket.remoteAddress ||
    "unknown";

  if (isRateLimited(ip)) {
    return res.status(429).json({ error: "Muitas tentativas. Tente mais tarde." });
  }

  // Honeypot anti-spam
  if (req.body?._honey) {
    return res.status(200).json({ success: true });
  }

  // Validação
  const parsed = contactSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      error: "Dados inválidos",
      details: parsed.error.flatten(),
    });
  }

  const { name, email, message } = parsed.data;

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailAppPassword) {
    return res.status(500).json({
      error: "Variáveis de ambiente não configuradas",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: gmailUser,
      to: gmailUser,
      replyTo: email,
      subject: `Nova mensagem de ${name}`,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`,
    });

    // salva rate limit
    const timestamps = rateLimitMap.get(ip) || [];
    timestamps.push(Date.now());
    rateLimitMap.set(ip, timestamps);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Erro ao enviar email",
    });
  }
}