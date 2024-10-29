"use client";
import { useAuthStore } from "@/context/authContext";
import { useQuery } from "@apollo/client";
import Card from "./_components/ScheduleCard/Card";
import {
  allSchedulesBarber,
  allSchedulesBarbershop,
} from "./queries/getAllSchedules";

const Home = () => {
  const user = useAuthStore((state) => state.user);
  const isAdm = user?.isAdm;
  const querie = isAdm ? allSchedulesBarbershop : allSchedulesBarber;
  const barbershopParam = {
    barbeariaId: user?.id,
  };
  const barberParam = {
    barbeiroId: user?.id,
  };
  const { data, loading, error } = useQuery(querie, {
    variables: isAdm ? barbershopParam : barberParam,
    pollInterval: 60000,
  });
  return (
    <section className="mt-12">
      <h2 className="ml-5 md:ml-0 text-title-3 md:text-title-2">
        Agendamentos do dia
      </h2>
      <div className="mt-5 pb-5 w-full h-[670px] bg-transparent grid grid-cols-1 place-items-center xl:place-items-start xl:grid-cols-2 gap-x-28 md:gap-y-5 overflow-y-auto snap-y scroll-smooth">
        {error ? (
          <h2 className="text-xl text-neutral-700">
            Nenhum agendamento encontrado
          </h2>
        ) : loading ? (
          <div className="bg-neutral-700 w-[282px] h-[185px] md:w-[524px] md:h-[344px] rounded-xl md:p-7 animate-pulse" />
        ) : isAdm ? (
          data.allSchedulesOfTodayToBarbershop.map((schedule: any) => {
            if (!schedule) {
              return (
                <h2 key={0} className="text-xl text-neutral-700">
                  Nenhum agendamento encontrado
                </h2>
              );
            }
            const clearData = schedule.data.split("T");
            const date = clearData[0];
            const hour = clearData[1];
            return (
              <Card
                key={schedule.id}
                barberPhoto={schedule.barberAvatar}
                clientAvatar={schedule.clientAvatar}
                data={date}
                hour={hour}
                isAdm={isAdm || false}
                nomeCliente={schedule.nomeCliente}
                tipoServico={schedule.tipoServico}
              />
            );
          })
        ) : (
          data.allSchedulesOfTodayToBarber.map((schedule: any) => {
            if (!schedule) {
              return (
                <h2 key={0} className="text-xl text-neutral-700">
                  Nenhum agendamento encontrado
                </h2>
              );
            }
            const clearData = schedule.data.split("T");
            const date = clearData[0];
            const hour = clearData[1];
            return (
              <Card
                key={schedule.id}
                barberPhoto={schedule.barberAvatar}
                clientAvatar={schedule.clientAvatar}
                data={date}
                hour={hour}
                isAdm={isAdm || false}
                nomeCliente={schedule.nomeCliente}
                tipoServico={schedule.tipoServico}
              />
            );
          })
        )}
      </div>
    </section>
  );
};

export default Home;
