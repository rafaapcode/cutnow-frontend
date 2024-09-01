"use client";

import { UploadFotoImageBarbers } from "@/app/actions/UploadSingleFile";
import { DrawerClose } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/context/authContext";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useMemo, useRef, useState, useTransition } from "react";
import toast from "react-hot-toast";

const BarberPhotoImage = () => {
  const [file, setFile] = useState<File>();
  const user = useAuthStore((state) => state.user);
  const [isPending, startTransition] = useTransition();
  const closeRef = useRef<HTMLButtonElement>(null);

  const onchange = (e: any) => {
    setFile(e.target.files[0]);
  };

  const onClick = () => {
    const formData = new FormData();
    if (file) {
      formData.append("file", file);
    } else {
      toast("Nenhum arquivo selecionado !", { duration: 3000 });
    }

    startTransition(() => {
      UploadFotoImageBarbers(formData, user?.id!)
        .then((res) => {
          if (res.status) {
            toast.success(res.message);
            setFile(undefined);
          } else {
            toast.error(res.message);
          }
        })
        .catch((err) => {
          console.log(err.message);
          toast.error(err.message);
        });
    });

    closeRef.current?.click();
  };

  const previewUrlImage = useMemo(() => {
    if (!file) {
      return null;
    }

    return URL.createObjectURL(file);
  }, [file]);

  return (
    <section className="mt-10 w-[90%] mx-auto flex flex-col items-center gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="barber-photo">Uma foto sua</label>
        <Input
          accept="image/png, image/jpeg"
          onChange={onchange}
          id="barber-photo"
          type="file"
          className="file:text-white bg-neutral-900 file:cursor-pointer"
        />
      </div>
      <div className="flex w-full flex-col items-center gap-3 max-h-[470px] overflow-y-auto">
        {file && (
          <>
            <div className="w-[400px] h-[350px] bg-neutral-800 flex flex-col justify-center items-center p-2 rounded-lg">
              <div className="w-full h-full relative">
                <Image
                  fill
                  alt="image to upload"
                  src={previewUrlImage ? previewUrlImage : ""}
                  className="rounded-md object-contain"
                />
              </div>
            </div>
          </>
        )}
      </div>
      <button
        onClick={onClick}
        disabled={isPending || !file}
        className="bg-terciary-green px-2 py-1 text-black tracking-wider font-semibold hover:bg-secondary-green transition-all duration-150 rounded-md mb-5 disabled:bg-[#55641c]"
      >
        {!isPending ? "Upload" : <LoaderCircle className="animate-spin" />}
      </button>
      <DrawerClose ref={closeRef} className="hidden" />
    </section>
  );
};

export default BarberPhotoImage;
