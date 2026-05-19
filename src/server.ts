import app from "./app";
import { env } from "./app/config/env";
import { connectMongoDB } from "./lib/mongoose";

let server: ReturnType<typeof app.listen> | null = null;

const bootstrap = async (): Promise<void> => {
  server = app.listen(env.port, () => {
    console.log(`Server running on port ${env.port}`);
  });
  await connectMongoDB();
};

const shutdown = (signal: string, error?: unknown) => {
  console.log(`${signal} received. Shutting down gracefully...`);

  if (error) {
    console.error("Error:", error);
  }

  if (!server) {
    process.exit(1);
  }

  server.close(() => {
    console.log("HTTP server closed.");
    process.exit(0);
  });

  setTimeout(() => {
    console.error("Forced shutdown.");
    process.exit(1);
  }, 10000);
};

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));

process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  shutdown("uncaughtException", error);
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled Rejection:", reason);
  shutdown("unhandledRejection", reason);
});

(async () => {
  try {
    await bootstrap();
  } catch (err) {
    console.error("Bootstrap failed:", err);
    process.exit(1);
  }
})();