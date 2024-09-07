"use client";
import { DeleteFileBarbershop } from "@/app/actions/DeleteFiles";
import { ApolloQueryResult, OperationVariables, useQuery } from "@apollo/client";
import { LoaderCircle, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useTransition } from "react";
import toast from "react-hot-toast";
import { getStructureImages } from "../queries/queries";

function SkeletonStructureImages() {
  return (
    <div className="w-full md:w-[90%] xl:w-[70%] h-[90px] bg-neutral-900 flex items-center gap-10 px-5 rounded">
      <div className="w-[125px] h-[80px] relative bg-neutral-700 animate-pulse rounded-md" />
      <span className="h-3 w-52 rounded bg-neutral-700 animate-pulse" />
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

function Images({ index, url, id, refetch }: { index: number; url: string, id: string, refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<any>> }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      DeleteFileBarbershop(index, id)
        .then(res => {
          if(res.status) {
            refetch();
            toast.success(res.message);
          } else {
            toast.error(res.message);
            console.log(res);
          }
        })
        .catch(err => {
          console.log(err);
          toast.error(err.message);
        })
    });
  }

  return (
    <div
      key={index}
      className="flex w-full flex-col items-center gap-3 max-h-[470px] overflow-y-auto"
    >
      <div className="w-full md:w-[90%] xl:w-[70%] h-[90px] bg-neutral-900 flex items-center justify-between gap-10 px-5 rounded">
        <div className="flex items-center gap-5">
          <div className="w-[125px] h-[80px] relative">
            <Image
              fill
              alt="image to upload"
              src={url}
              className="rounded-md"
            />
          </div>
          <p className="uppercase text-neutral-500 font-semibold tracking-widest">
            estrutura-imagem-{index}
          </p>
        </div>
        <button disabled={isPending} onClick={handleClick}  className="p-2 bg-red-500 rounded-lg">
          {
            isPending ? <LoaderCircle className="size-7 animate-spin"/> : <TrashIcon className="size-7 "/>
          }
        </button>
      </div>
    </div>
  );
}

export default function StructureImages({
  id,
  fileSelected,
}: {
  id: string;
  fileSelected: boolean;
}) {
  const { data, loading, error, refetch } = useQuery(getStructureImages, {
    variables: { id },
  });

  const structureImgs =
    data?.barbershopInfo?.informacoes?.fotosEstruturaBarbearia;
  return (
    <>
      {loading ? (
        <SkeletonStructureImages />
      ) : error ? (
        <Aviso msg="Ocorreu um erro ao buscar as imagens" />
      ) : structureImgs.length > 0 ? (
        structureImgs.map((url: any, index: any) => (
          <Images index={index} url={url} key={index} id={id} refetch={refetch}/>
        ))
      ) : (
        !fileSelected && <Aviso msg="Nenhuma imagem encontrada" />
      )}
    </>
  );
}
