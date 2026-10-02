import { Router } from "express";
import { Resend } from "resend";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, phone, service, message } = req.body;

  if (!name || !email || !phone || !service || !message) {
    return res.status(400).json({ success: false, error: "All fields are required." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.CONTACT_EMAIL || "info@atkobroslandscaping.com";

  if (!apiKey) {
    console.error("RESEND_API_KEY is not set");
    return res.status(500).json({ success: false, error: "Email service not configured." });
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: "Atko Bros Landscaping <noreply@atkobroslandscaping.com>",
      to: [recipientEmail],
      replyTo: email,
      subject: `New Contact Form Submission — ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #2d6a4f; margin-top: 0;">New Contact Form Submission</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold; width: 140px;">Name:</td>
              <td style="padding: 8px 0; color: #222;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; color: #222;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold;">Phone:</td>
              <td style="padding: 8px 0; color: #222;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold;">Service:</td>
              <td style="padding: 8px 0; color: #222;">${service}</td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;" />
          <h4 style="color: #555; margin-bottom: 8px;">Message:</h4>
          <p style="color: #222; line-height: 1.6; margin: 0;">${message.replace(/\n/g, "<br/>")}</p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 16px 0;" />
          <p style="color: #999; font-size: 12px; margin: 0;">Submitted via atkobroslandscaping.com</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", JSON.stringify(error));
      return res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
    }

    console.log("Email sent successfully, id:", data?.id);
    return res.json({ success: true });
  } catch (err) {
    console.error("Resend exception:", err);
    return res.status(500).json({ success: false, error: "Failed to send email. Please try again." });
  }
});

export default router;
