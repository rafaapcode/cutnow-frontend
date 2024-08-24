"use client";
import { useAuthStore } from "@/context/authContext";
import { useQuery } from "@apollo/client";
import { PlusCircleIcon } from "lucide-react";
import dynamic from "next/dynamic";
import AddBarber from "./_components/AddBarberComponent/AddBarber";
import { allBarbersQuery } from "./queries/getAllBarbers";
import CardBarberSkeleton from "./_components/CardBarberSkeleton";
const CardBarber = dynamic(() => import("./_components/CardBarber"));

const Barbers = () => {
  const user = useAuthStore((state) => state.user);

  const { data, loading, error } = useQuery(allBarbersQuery, {
    variables: {
      barbershopId: user?.id,
    },
  });
  return (
    <section className="mt-12">
      <header className="flex justify-between w-full">
        <h2 className="ml-5 md:ml-0 text-title-3 md:text-title-2">Barbeiros</h2>
        <AddBarber>
          <button className="transition-colors duration-100 text-secondary hover:text-[#AAD704]">
            <PlusCircleIcon className="size-6 md:size-8" />
          </button>
        </AddBarber>
      </header>
      {error ? (
        <div className="mt-5 text-neutral-500">Ocorreu um Erro , por favor tente mais tarde.</div>
      ) : (
        <div className="mt-5 pb-10 w-full h-[670px] bg-transparent grid grid-cols-1 place-items-center xl:place-items-start xl:grid-cols-3 gap-x-12 md:gap-y-28 xl:gap-y-16 overflow-y-auto snap-y scroll-smooth">
          {loading
            ? [1, 2, 3].map((_, idx) => <CardBarberSkeleton key={idx} />)
            : data.allBarbers.map((barberInfo: any) => (
                <CardBarber
                  key={barberInfo.id}
                  id={barberInfo.id}
                  nome={barberInfo.nome}
                  foto={barberInfo.informacoes?.foto}
                />
              ))}
        </div>
      )}
    </section>
  );
};

export default Barbers;
