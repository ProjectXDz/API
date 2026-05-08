import app from "../artifacts/api-server/dist/handler.mjs";
import { createServer } from "node:http";

// Vercel serverless: export a Node.js http request handler
export default function handler(req, res) {
  app(req, res);
}
