import React from "react";

const SettingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-full">
      <h2 className="mt-11 ml-5 md:ml-0 xl:ml-5 text-title-3 md:text-title-2">
        Configurações
      </h2>
      {children}
    </section>
  );
};

export default SettingsLayout;
