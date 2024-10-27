"use client";
import { DeleteFileBarber } from "@/app/actions/DeleteFiles";
import { useAuthStore } from "@/context/authContext";
import { ApolloQueryResult, OperationVariables, useQuery } from "@apollo/client";
import { LoaderCircle, TrashIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useTransition } from "react";
import toast from "react-hot-toast";
import { getBanner, getPortfolio } from "./queries/queriesGraphql";

function PortfolioCards({ url, index, refetch, id }: { url: string, index: number, refetch: (variables?: Partial<OperationVariables> | undefined) => Promise<ApolloQueryResult<any>>, id: string }) {
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(() => {
      DeleteFileBarber(index, id)
        .then(res => {
          if (res.status) {
            toast.success(res.message);
            refetch();
          } else {
            toast.error(res.message);
          }
        })
        .catch(err => {
          console.log(err);
          toast.error(err.message);
        });
    });
  };

  return (
    <div className="w-56 h-60 rounded-md overflow-hidden border border-neutral-800 relative group mx-auto md:mx-0">
      <Image alt="Banner" fill src={url} className="object-cover" />
      <div className="hidden w-full h-full bg-black/50 absolute group-hover:flex p-5">
        <button onClick={handleClick} disabled={isPending} className="p-2 bg-red-500 hover:bg-red-600 rounded-lg self-end">
          {
            isPending ? <LoaderCircle className="size-7 animate-spin"/> : <TrashIcon className="size-6"/>
          }
        </button>
      </div>
    </div>
  );
}

function SkeletonPortfolioCards() {
  return <div className="w-56 h-60 rounded-md bg-neutral-800 animate-pulse mx-auto md:mx-0" />;
}

function MessagePortfolioCards() {
  return <div className="w-56 h-60 rounded-md bg-neutral-800 animate-pulse flex items-center justify-center">
    <h3>Ocorreu um erro tente novamente mais tarde</h3>
  </div>;
}

const ManagementImages = () => {
  const user = useAuthStore((state) => state.user);
  const { data, loading, error } = useQuery(getBanner, {
    variables: { id: user?.id },
  });
  const {
    data: portfolio,
    loading: portfolioLoading,
    error: portfolioErr,
    refetch
  } = useQuery(getPortfolio, { variables: { id: user?.id } });
  const bannerUrl = data?.barber?.informacoes?.banner;
  const portfolioUrls = portfolio?.barber?.informacoes?.portfolio;
  useEffect(() => {
      refetch();
  }, []);
  console.log(portfolioUrls);
  return (
    <div className="w-full max-h-[84%] mt-5 flex-col gap-y-10 overflow-y-auto pb-2 scroll-smooth">
      <div className="px-5 md:px-0">
        <h2 className="text-xl md:text-2xl mb-2">PORTFOLIO</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {
            portfolioLoading ? (<SkeletonPortfolioCards />) : (
              portfolioErr ? (<MessagePortfolioCards/>) :
              !portfolioUrls[0] ? <h2 className="mb-5 text-neutral-600 col-span-1 md:col-span-3">Não possui nenhuma foto no momento</h2> :portfolioUrls.map((url: string, index: number) => (<PortfolioCards id={user?.id!} index={index} url={url} key={index} refetch={refetch}/>))
              
            )
          }
        </div>
      </div>
      <div className="px-5 md:px-0">
        <h2 className="text-xl md:text-2xl my-5">BANNER</h2>
        <div className="mt-5 w-[90%] h-32 md:h-60 rounded-lg border border-neutral-600 mx-auto overflow-hidden relative">
          {loading ? (
            <div className="w-full h-full bg-neutral-800 animate-pulse" />
          ) : error ? (
            <div className="mx-auto text-center font-semibold uppercase mt-10">
              <p>Ocorreu um erro tente novamente mais tarde.</p>
            </div>
          ) : (
            !bannerUrl ? <h2 className="m-5 text-neutral-600">Não posui nenhum banner</h2> :  <Image alt="Banner" fill src={bannerUrl} className="object-cover" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManagementImages;
