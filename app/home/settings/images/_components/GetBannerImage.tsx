"use client";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import { getBannerImages } from "../queries/queries";

function SkeletonBannerImages() {
  return (
    <div className="flex w-full flex-col items-center gap-1 md:gap-3 max-h-[470px] overflow-y-auto">
      <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] xl:w-[800px] xl:h-[400px] bg-neutral-900 flex flex-col justify-center items-center p-2 rounded-lg">
        <div className="w-full h-full relative bg-neutral-700 animate-pulse" />
      </div>
      <span className="h-3 w-52 mb-5 bg-neutral-700 animate-pulse" />
    </div>
  );
}
function Aviso({ msg }: { msg: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-3 max-h-[470px] overflow-y-auto">
      <div className="w-full md:w-[90%] xl:w-[70%] h-[90px] bg-neutral-900 flex items-center justify-center gap-10 px-5 rounded">
        <p className="uppercase text-neutral-500 font-semibold tracking-widest">
          {msg}
        </p>
      </div>
    </div>
  );
}

function Imagem({ url }: { url: string }) {
  return (
    <div className="flex w-full flex-col items-center gap-1 md:gap-3 max-h-[470px] overflow-y-auto">
      <div className="w-[300px] h-[200px] md:w-[500px] md:h-[300px] xl:w-[800px] xl:h-[400px] bg-neutral-900 flex flex-col justify-center items-center p-2 rounded-lg">
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
        banner
      </p>
    </div>
  );
}

export default function BannerImage({ id }: { id: string }) {
  const { data, loading, error } = useQuery(getBannerImages, {
    variables: { id },
  });

  const bannerImgs = data?.barbershopInfo?.informacoes?.fotoBanner;
  console.log(bannerImgs);
  return (
    <>
      {loading ? (
        <SkeletonBannerImages />
      ) : error ? (
        <Aviso msg="Ocorreu um erro ao buscar as imagens" />
      ) : bannerImgs ? (
        <Imagem url={bannerImgs} />
      ) : (
        <Aviso msg="Nenhuma imagem encontrada" />
      )}
    </>
  );
}
