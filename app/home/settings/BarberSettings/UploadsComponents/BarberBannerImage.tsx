"use client";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

const BarberBannerImage = () => {
  const [file, setFile] = useState<File>();

  const onchange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const onClick = () => {
    console.log("Bannerrrr", file);
  };

  return (
    <section className="mt-10 w-[90%] mx-auto flex flex-col items-center gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="barber-logo">Banner da sua barbearia</label>
        <Input
          accept="image/png, image/jpeg"
          onChange={onchange}
          id="barber-logo"
          type="file"
          className="file:text-white bg-neutral-900 file:cursor-pointer"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-1 md:gap-3 max-h-[470px] overflow-y-auto">
        {file && (
          <>
            <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] xl:w-[800px] xl:h-[400px] bg-neutral-900 flex flex-col justify-center items-center p-2 rounded-lg">
              <div className="w-full h-full relative">
                <Image
                  fill
                  alt="image to upload"
                  src={URL.createObjectURL(file)}
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

export default BarberBannerImage;
