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
  let ADMIN_MAIL = "admin@travelzeeworld.com";

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email, name, phone, message, subject, task } = req.body;
  if (!email || !name || !task) {
    return res.status(400).json({ message: "Name, Email & task is required" });
  }

  let mailOptions;
  mailOptions = {
    from: `"Notifications" <admin@mivs.in>`,
    to: "admin@travelzeeworld.com",
    subject: `New subscriber on website - ${name}`,
    text: `${name} wanted to contact you.
                Details:
                Name: ${name}
                Phone No: ${phone}
                Email: ${email}
                Message: ${message}`,
    html: `
        <html>
        <head>
            <title>Contact Request</title>
        </head>
        <body>
            <h1>New Contact Request</h1>
            <p><strong>${name}</strong> wanted to contact you.</p>
            <div>
                <p><strong>Details:</strong></p>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Phone No:</strong> ${phone}</li>
                    <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
                    <li><strong>Message:</strong> ${message}</li>
                </ul>
            </div>
        </body>
        </html>`,
  };

  if (task === "SUBSCRIBE") {
    mailOptions = {
      from: '"MIVS" <admin@mivs.in>', // Sender address
      to: ADMIN_MAIL, // Admin's email address
      subject: "New Subscription Alert", // Subject line
      text: `A new user has subscribed to receive updates. 
                   Name: ${name}
                   Email: ${email}
                   Phone Number: ${phone}
        
                   Please ensure that this user is added to our mailing list and receives all upcoming communications.`, // Plain text body
      html: `<p>Dear Admin,</p>
                   <p>We are pleased to inform you that a new user has just subscribed to receive updates from our company. Here are the details of the new subscriber:</p>
                   <ul>
                       <li><strong>Name:</strong> ${name}</li>
                       <li><strong>Email:</strong> ${email}</li>
                       <li><strong>Phone Number:</strong> ${phone}</li>
                   </ul>
                   <p>Please ensure that this user is added to our mailing list and receives all upcoming newsletters and promotional communications.</p>
                   <p>Thank you for staying on top of this!</p>
                   <p>Best regards,<br>
                   MIVS Team</p>`,
    };
  } else if (task === "CONTACT") {
    mailOptions = {
      from: '"MIVS" <admin@mivs.in>', // Sender address
      to: ADMIN_MAIL, // Admin's email address
      subject: "New Contact Us Form Submission", // Subject line
      text: `A user has submitted the contact us form.
                   Name: ${name}
                   Email: ${email}
                   Phone Number: ${phone}
                   Message: ${message}
                   
                   Please review the message and follow up with the user as necessary.`, // Plain text body
      html: `<p>Dear Admin,</p>
                   <p>We have received a new submission from the contact us form on our website. Here are the details of the user:</p>
                   <ul>
                       <li><strong>Name:</strong> ${name}</li>
                       <li><strong>Email:</strong> ${email}</li>
                       <li><strong>Phone Number:</strong> ${phone}</li>
                       <li><strong>Message:</strong> ${message}</li>
                   </ul>
                   <p>Please review the message and follow up with the user as necessary.</p>
                   <p>Thank you!</p>
                   <p>Best regards,<br>
                   MIVS Team</p>`,
    };
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send email", error });
  }
}
