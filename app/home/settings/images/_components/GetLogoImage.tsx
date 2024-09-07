"use client";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { getLogoImages } from "../queries/queries";

function SkeletonLogoImages() {
  return (
    <div className="flex w-full flex-col items-center gap-3 max-h-[470px] overflow-y-auto">
      <div className="w-[300px] h-[300px] bg-neutral-900 flex flex-col justify-center items-center p-2 rounded-lg">
        <div className="w-full h-full relative bg-neutral-700 animate-pulse" />
      </div>
      <span className="h-3 w-52 mb-5 bg-neutral-700 animate-pulse" />
    </div>
  );
}
function Aviso({ msg }: { msg: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-3 max-h-[470px] overflow-y-auto">
      <p className="mb-5 uppercase text-neutral-500 font-semibold tracking-widest">
        {msg}
      </p>
    </div>
  );
}

function Imagem({ url }: { url: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-3 max-h-[470px] overflow-y-auto">
      <div className="w-[300px] h-[300px] bg-neutral-900 flex flex-col justify-center items-center p-2 rounded-lg">
        <div className="w-full h-full relative">
          <Image
            fill
            alt="image to upload"
            src={url}
            className="rounded-md object-contain"
          />
        </div>
      </div>
      <p className="mb-5 uppercase text-neutral-500 font-semibold tracking-widest">
        logo
      </p>
    </div>
  );
}

export default function LogoImages({ id, fileSelected }: { id: string, fileSelected: boolean }) {
  const { data, loading, error } = useQuery(getLogoImages, {
    variables: { id },
  });

  const logoImgs = data?.barbershopInfo?.informacoes?.logo;
  return (
    <>
      {loading ? (
        <SkeletonLogoImages />
      ) : error ? (
        <Aviso msg="Ocorreu um erro ao buscar as imagens" />
      ) : logoImgs ? (
        <Imagem url={logoImgs}/>
      ) : (
        !fileSelected && <Aviso msg="Nenhuma imagem encontrada" />
      )}
    </>
  );
}
