import { env } from "../app/config/env";

export const buildVerifyLink = (token: string, email: string) => {
  return `${env.node_env === "development"
    ? `http://localhost:${env.port}`
    : "https://your-domain.com"
  }/api/auth/verify-email?token=${token}&email=${email}`;
};