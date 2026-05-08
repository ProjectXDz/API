import pino from "pino";

// Never use pino-pretty transport in serverless — it spawns worker threads
// that are not supported in Vercel's Lambda environment.
// Use a simple JSON logger everywhere; pipe through pino-pretty locally if needed.
export const logger = pino({
  level: process.env.LOG_LEVEL ?? "info",
  redact: [
    "req.headers.authorization",
    "req.headers.cookie",
    "res.headers['set-cookie']",
  ],
});
