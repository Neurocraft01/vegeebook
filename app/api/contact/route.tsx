import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return Response.json({ error: "Server configuration error: Missing API Key" }, { status: 500 });
  }

  try {
    const body = await request.json();
    const { firstName, lastName, email, organization, phone, inquiryType, vegetableType, weight, message } = body;

    // Use a simple HTML string to avoid React rendering issues in the API route
    const htmlContent = `
      <div>
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
        <p><strong>Vegetable Type:</strong> ${vegetableType}</p>
        <p><strong>Weight Required:</strong> ${weight}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `;

    const toEmail = process.env.CONTACT_EMAIL || 'delivered@resend.dev';
    console.log("Sending email to:", toEmail);

    const { data, error } = await resend.emails.send({
      from: 'Vegeebook <onboarding@resend.dev>',
      replyTo: email, // Set the "Reply-To" to the person who filled out the form
      to: [toEmail],
      subject: `Vegeebook Inquiry: ${firstName} ${lastName}`, // Simplified subject
      html: htmlContent,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Internal Server Error:", error);
    return Response.json({ error: error instanceof Error ? error.message : error }, { status: 500 });
  }
}
