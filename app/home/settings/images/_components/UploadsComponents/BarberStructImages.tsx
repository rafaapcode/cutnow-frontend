"use client";

import { UploadMultipleFilesBarbershop } from "@/app/actions/uploadMultipleFiles";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/context/authContext";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import StructureImages from "../StructureImages";



const BarberStructImages = () => {
  const user = useAuthStore((state) => state.user);
  const [files, setFiles] = useState<File[]>([]);
  const [isPending, startTransitions] = useTransition();
  const onchange = (e: any) => {
    if (files.length == 6) {
      toast.error("Você pode adicionar no máximo 6 imagens");
      return;
    }
    setFiles((prev) => [...prev, e.target.files[0]]);
  };

  const onClick = () => {
    try {
      const formdata = new FormData();
      if (files.length >= 0 && files.length <= 6) {
        files.forEach((file, index) => {
          formdata.append(`file-${index}`, file);
        });
      } else if (files.length === 0) {
        toast("Selecione pelo menos 1 imagem", { duration: 3000 });
        return;
      } else {
        toast("Você pode adicionar no máximo 6 imagens", { duration: 3000 });
        setFiles([]);
        return;
      }

      startTransitions(() => {
        UploadMultipleFilesBarbershop(formdata, user?.id!)
          .then((res) => {
            if (res.status) {
              toast.success(res.message);
              setFiles([]);
            } else {
              toast.error("Algo deu errado , tente mais tarde !");
            }
          })
          .catch((err) => {
            toast.error(err.message);
          });
      });
    } catch (error: any) {
      console.log(error.message);
      toast.error("Algo deu errado ao enviar as imagens !");
    }
  };
  
  return (
    <section className="mt-10 w-[90%] mx-auto flex flex-col items-center gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="barber-struct">Imagens da Estrutura da barbearia</label>
        <Input
          accept="image/png, image/jpeg"
          onChange={onchange}
          id="barber-struct"
          type="file"
          className="file:text-white bg-neutral-900 file:cursor-pointer"
        />
      </div>
      <StructureImages id={user?.id!} fileSelected={files.length != 0}/>
      <div className="flex w-full flex-col items-center gap-3 max-h-[470px] overflow-y-auto">
        {files &&
          files.map((file, index) => (
            <div
              key={index}
              className="w-full md:w-[90%] xl:w-[70%] h-[90px] bg-neutral-900 flex items-center gap-10 px-5 rounded"
            >
              <div className="w-[125px] h-[80px] relative">
                <Image
                  fill
                  alt="image to upload"
                  src={URL.createObjectURL(file)}
                  className="rounded-md"
                />
              </div>
              <p className="uppercase text-neutral-500 font-semibold tracking-widest">
                {file.name.length > 20
                  ? `${files[0].name.slice(0, 20)}...`
                  : file.name}
              </p>
            </div>
          ))}
      </div>
      <button
        onClick={onClick}
        disabled={isPending || !files.length}
        className="bg-terciary-green px-2 py-1 text-black tracking-wider font-semibold hover:bg-secondary-green transition-all duration-150 rounded-md mb-5 disabled:bg-[#55641c]"
      >
        {!isPending ? "Upload" : <LoaderCircle className="animate-spin" />}
      </button>
    </section>
  );
};

export default BarberStructImages;
