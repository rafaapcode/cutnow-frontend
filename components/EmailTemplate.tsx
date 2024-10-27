import { CircleXIcon, MailCheckIcon } from "lucide-react";
import * as React from "react";

interface EmailTemplateProps {
  clientName: string;
  message: string;
  success: boolean;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  clientName,
  success,
  message,
}) => (
  <div className="w-full flex flex-col items-center justify-center p-4 bg-neutral-900">
    <div className="flex w-full gap-x-3">
      {success ? (
        <MailCheckIcon className="size-7 text-green-600" />
      ) : (
        <CircleXIcon className="size-7 text-red-700" />
      )}
      <h1>Olá, {clientName}!</h1>
    </div>
    <p className="text-lg text-neutral-700 font-semibold">{message}</p>
  </div>
);
