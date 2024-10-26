"use client";
import { useAuthStore } from "@/context/authContext";
import { useQuery } from "@apollo/client";
import RequestCard from "./_components/RequestCard";
import { allRequest } from "./queries/request";

const Requests = () => {
  const user = useAuthStore((state) => state.user);
  
  const { data, loading, error } = useQuery(allRequest, {
    variables: {
      barbeiroId: user?.id,
    },
  });

  return (
    <section className="w-full mt-12">
      <h2 className="ml-5 md:ml-0 text-title-3 md:text-title-2">Solicitações de Agendamento</h2>
      <div className="mt-5 pb-10 w-full h-[670px] bg-transparent grid grid-cols-1 xl:place-items-start xl:grid-cols-3 gap-x-12 md:gap-y-28 xl:gap-y-16 overflow-y-auto snap-y scroll-smooth">
      {error ? (
        <div className="mt-5 text-neutral-500">Ocorreu um Erro , por favor tente mais tarde.</div>
      ) : (
        <div className="mt-5 pb-10 w-full h-[670px] bg-transparent grid grid-cols-1 place-items-center xl:place-items-start xl:grid-cols-3 gap-x-12 md:gap-y-28 xl:gap-y-16 overflow-y-auto snap-y scroll-smooth">
          {loading
            ?  <div className="w-[283px] h-[283px] md:w-[320px]  md:h-[320px] xl:w-[350px] xl:h-[350px] bg-neutral-800 animate-pulse rounded-lg relative mx-auto" />
            : data.allRequests.map((barberInfo: any) => (
                <RequestCard
                  key={barberInfo.id}
                  avatar={barberInfo.avatar}
                  barbeiro_id={barberInfo.barbeiro_id}
                  data={barberInfo.data}
                  emailCliente={barberInfo.emailCliente}
                  id={barberInfo.id}
                  nomeCliente={barberInfo.nomeCliente}
                  tipoServico={barberInfo.tipoServico}
                />
              ))}
        </div>
      )}
      </div>
    </section>
  )
}

export default Requests