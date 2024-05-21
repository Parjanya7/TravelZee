import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: "smtppro.zoho.in", // Updated host
  port: 465,
  secure: true, // true for SSL
  auth: {
    user: "admin@mivs.in", // Your Zoho email
    pass: "YZfd109y7Bmv", // Ensure this is the correct app-specific password
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, name } = req.body;
  if (!email || !name) {
    return res.status(400).json({ message: "Name & Email is required" });
  }

  const mailOptions = {
    from: `"Notifications" <admin@mivs.in>`,
    to: "mr2819210@gmail.com",
    subject: `New subscriber on website - ${name}`,
    text: `${name} just subscribed.`,
    html: `<h1>${name} just subscribed.</h1>`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
}
