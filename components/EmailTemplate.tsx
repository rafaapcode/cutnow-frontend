import * as React from "react";

interface EmailTemplateProps {
  clientName: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  clientName,
  message,
}) => (
  <div className="w-full flex flex-col items-center justify-center p-4 bg-neutral-900">
    <div className="flex w-full gap-x-3">
      <h1>Olá, {clientName}!</h1>
    </div>
    <p className="text-xl text-neutral-700 font-semibold">{message}</p>
  </div>
);
