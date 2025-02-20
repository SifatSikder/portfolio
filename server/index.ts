import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, log } from "./vite";
import path from "path";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  const publicPath = path.join(process.cwd(), "dist", "public");
  app.use(express.static(publicPath));

  // Handle client-side routing
  app.get("*", (_req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
  });
} else {
  // Development server setup
  (async () => {
    const server = await registerRoutes(app);
    await setupVite(app, server);

    const PORT = process.env.PORT || 5000;
    server.listen(PORT, "0.0.0.0", () => {
      log(`serving on port ${PORT}`);
    });
  })();
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  //This part is already handled in the if/else block above.  Leaving it here causes a duplicate server start.

  // app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  //   const status = err.status || err.statusCode || 500;
  //   const message = err.message || "Internal Server Error";

  //   res.status(status).json({ message });
  //   throw err;
  // });

})();