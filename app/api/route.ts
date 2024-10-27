import type { NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: NextApiResponse) {
  // const {clientName, message, success, clientEmail, subject} = await req.json();
  console.log(req.body);
  const { data, error } = await resend.emails.send({
    from: 'cutnowbarberapp@gmail.com',
    to: ["rafaap2003gmail.com"],
    subject: "teste",
    react: EmailTemplate({ clientName: "rafaek",message: "erro", success: false }),
  });

  if (error) {
    return res.json(error);
  }

  res.json(data);
};
