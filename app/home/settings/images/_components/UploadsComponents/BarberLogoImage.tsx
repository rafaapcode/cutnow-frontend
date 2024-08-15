"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useMemo, useState } from "react";

const BarberLogoImage = () => {
  const [file, setFile] = useState<File>();

  const onchange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const onClick = () => {
    console.log("Logo", file);
  };

  const previewUrlImage = useMemo(() => {
    if(!file) {
      return null;
    }

    return URL.createObjectURL(file);

  }, [file]);

  return (
    <section className="mt-10 w-[90%] mx-auto flex flex-col items-center gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="barber-logo">Logo da sua barbearia</label>
        <Input
          accept="image/png, image/jpeg"
          onChange={onchange}
          id="barber-logo"
          type="file"
          className="file:text-white bg-neutral-900 file:cursor-pointer"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-3 max-h-[470px] overflow-y-auto">
        {file && (
          <>
            <div className="w-[300px] h-[300px] bg-neutral-900 flex flex-col justify-center items-center p-2 rounded-lg">
              <div className="w-full h-full relative">
                <Image
                  fill
                  alt="image to upload"
                  src={previewUrlImage ? previewUrlImage : ''}
                  className="rounded-md object-contain"
                />
              </div>
            </div>
            <p className="mb-5 uppercase text-neutral-500 font-semibold tracking-widest">
              {file.name.length > 20
                ? `${file.name.slice(0, 20)}...`
                : file.name}
            </p>
          </>
        )}
      </div>
      <button
        onClick={onClick}
        className="bg-terciary-green px-2 py-1 text-black tracking-wider font-semibold hover:bg-secondary-green transition-all duration-150 rounded-md mb-5 disabled:bg-[#55641c]"
      >
        Upload
      </button>
    </section>
  );
};

export default BarberLogoImage;
