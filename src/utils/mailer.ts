import nodemailer from "nodemailer";
import { env } from "../app/config/env";

export const sendEmail = async (
  to: string,
  subject: string,
  html: string
) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: env.email_user,
      pass: env.email_pass,
    },
  });

  await transporter.sendMail({
    from: `"Auth System" <${env.email_user}>`,
    to,
    subject,
    html,
  });
};