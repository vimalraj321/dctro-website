"use server";

export async function sendContactEmail({
  name,
  email,
  company,
  message,
}: {
  name: string;
  email: string;
  company: string;
  message: string;
}) {
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify({ name, email, company, message }),
    });

    return response.json();
  } catch (error) {
    console.error("Error sending contact email:", error);
    return { error: "Failed to send email" };
  }
}
