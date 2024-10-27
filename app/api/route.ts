import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
  const body = await request.json();

  const { data, error } = await resend.emails.send({
    from: 'CutNow <onboarding@resend.dev>',
    to: [body.clientEmail],
    subject: body.subject,
    react: EmailTemplate({ clientName: body.clientName,message: body.message, success: body.success }),
  });

  if (error) {
    return NextResponse.json(error);
  }

  return NextResponse.json(data);
  } catch (error: any) {
    console.log(error.message);
  }
};
