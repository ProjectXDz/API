import app from "./app";

// Export the Express app as a plain request handler for Vercel serverless.
// Vercel calls this as handler(req, res) — Express apps are compatible.
export default app;
