// export default function handler(req, res) {
//   res.status(200).json({ name: "ok" });

import { mailOptions, transporter } from "../../lib/nodemailer";

// }
export async function POST(request) {
  const body = await request.json();
  if (
    !body.name ||
    !body.email ||
    !body.subject ||
    !body.phone ||
    !body.message
  ) {
    return new Response(JSON.stringify({ message: "Uncomplete" }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: body.subject,
      text: `Name: ${body.name}\nEmail: ${body.email}\nPhone: ${body.phone}\nMessage: ${body.message}`,
      html: `
        <h1>Contact Form Submission</h1>
        <ul>
          <li>Name: ${body.name}</li>
          <li>Email: ${body.email}</li>
          <li>Phone: ${body.phone}</li>
          <li>Message: ${body.message}</li>`,
    });
    return new Response(JSON.stringify({ success: true }), {});
  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ message: err.message }), {});
  }
}
