import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = process.env.TO_EMAIL;

export async function POST(req, res) {
  const { name, email, message } = await req.json();
  console.log(name, email, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `You've got a new message from: ${name}`,
      react: (
        <>
          <p>Hi, Harshavardhan</p>
          <br />
          <p>You've got a new message from {name}</p>
          <br />
          <p>Email: {email}</p>
          <br />
          <p>Message: {message}</p>
        </>
      ),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
