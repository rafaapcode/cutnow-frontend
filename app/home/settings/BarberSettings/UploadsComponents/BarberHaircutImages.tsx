"use client";

import { UploadMultipleFilesBarbers } from "@/app/actions/uploadMultipleFiles";
import { DrawerClose } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/context/authContext";
import { useQuery } from "@apollo/client";
import { LoaderCircle } from "lucide-react";
import { useRef, useState, useTransition } from "react";
import toast from "react-hot-toast";
import { getPortfolioImages } from "../queries/barberInfo";

const BarberHairCutImages = () => {
  const [files, setFiles] = useState<File[]>([]);
  const user = useAuthStore((state) => state.user);
  const [isPending, startTransition] = useTransition();
  const closeBtn = useRef<HTMLButtonElement>(null);
  const { data, loading, error } = useQuery(getPortfolioImages, {
    variables: { id: user?.id },
  });

  const portfolioImages = data?.barber?.informacoes?.portfolio;

  const onchange = (e: any) => {
    setFiles((prev) => [...prev, ...e.target.files]);
  };

  const onClick = () => {
    const formData = new FormData();
    if (files.length >= 0 && files.length <= 15) {
      files.forEach((file, index) => {
        formData.append(`file-${index}`, file);
      });
    } else if (files.length === 0) {
      toast("Selecione pelo menos 1 imagem", { duration: 3000 });
      return;
    } else {
      toast("Você pode adicionar no máximo 15 imagens", { duration: 3000 });
      setFiles([]);
      return;
    }

    startTransition(() => {
      UploadMultipleFilesBarbers(formData, user?.id!)
        .then((res) => {
          if (res.status) {
            toast.success(res.message);
            setFiles([]);
          } else {
            toast.error(res.message);
          }
        })
        .catch((err) => {
          console.log(err.message);
          toast.error(err.message);
        });
    });

    closeBtn.current?.click();
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
      {files.length <= 0 && !error && !loading && portfolioImages && portfolioImages.length > 0 ? (
        <span className="text-neutral-500 font-semibold">
          {
            portfolioImages.length === 1 ? (<span className="text-neutral-500 font-semibold">
              {portfolioImages.length} Imagem selecionada
            </span>) : (
              <span className="text-neutral-500 font-semibold">
              {portfolioImages.length} Imagens selecionadas
            </span>
            )
          }
        </span>
      ) : (
        <></>
      )}
      {files.length > 0 && (
        <span className="text-neutral-500 font-semibold">
          {files.length} Imagens selecionadas
        </span>
      )}
      <button
        disabled={isPending || !files.length || data.length >= 15}
        onClick={onClick}
        className="bg-terciary-green px-2 py-1 text-black tracking-wider font-semibold hover:bg-secondary-green transition-all duration-150 rounded-md mb-5 disabled:bg-[#55641c]"
      >
        {!isPending ? "Upload" : <LoaderCircle className="animate-spin" />}
      </button>
      <DrawerClose ref={closeBtn} className="hidden" />
    </section>
  );
};

export default BarberHairCutImages;
