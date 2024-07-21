"use client";

import { DrawerClose } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useRef, useState } from "react";

const BarberHairCutImages = () => {
  const [files, setFiles] = useState<File[]>([]);
  const closeBtn = useRef<HTMLButtonElement>(null);

  const onchange = (e: any) => {
    setFiles((prev) => [...prev, ...e.target.files]);
  };

  const onClick = () => {
    closeBtn.current?.click();
    console.log("Estado", files);
  };

  return (
    <section className="mt-10 w-full mx-auto flex flex-col items-center gap-5 overflow-y-auto">
      <div className="flex flex-col gap-2">
        <label htmlFor="barber-haircut">Imagens dos seus cortes</label>
        <Input
          accept="image/png, image/jpeg"
          onChange={onchange}
          id="barber-haircut"
          type="file"
          multiple
          className="file:text-white bg-neutral-900 file:cursor-pointer"
        />
      </div>
      {files.length > 0 && <span className="text-neutral-500 font-semibold">{files.length} Imagens selecionadas</span> }
      <button onClick={onClick} className="bg-terciary-green px-2 py-1 text-black tracking-wider font-semibold hover:bg-secondary-green transition-all duration-150 rounded-md mb-5 disabled:bg-[#55641c]">
        Upload
      </button>
      <DrawerClose ref={closeBtn} className="hidden"/>
    </section>
  );
};

export default BarberHairCutImages;
