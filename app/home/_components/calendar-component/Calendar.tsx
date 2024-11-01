"use client";
import { useAuthStore } from "@/context/authContext";
import { useQuery } from "@apollo/client";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import {
  allScheduleOfBarber,
  allScheduleOfBarbershop,
} from "./queries/calendarSchedules";

const Calendar = () => {
  const user = useAuthStore((state) => state.user);
  const isAdm = user?.isAdm;
  const queries = isAdm ? allScheduleOfBarbershop : allScheduleOfBarber;
  const barberVariable = {
    barbeiroId: user?.id,
  };
  const barbershopVariable = {
    barbeariaId: user?.id,
  };

  const { data, error, loading } = useQuery(queries, {
    variables: isAdm ? barbershopVariable : barberVariable,
  });

  if (error) {
    return (
      <div className="p-5">
        <h2 className="text-center">Erro ao buscar os agendamentos</h2>
      </div>
    );
  }

  const schedulesEvent = !data
    ? []
    : (isAdm ? data.allSchedulesOfBarbershop.map((ev: any) => ({
      title: `${ev.nomeCliente} | ${ev.tipoServico}`,
      date: ev.data,
    })) : data.allSchedulesOfBarber.map((ev: any) => ({
      title: `${ev.nomeCliente} | ${ev.tipoServico}`,
      date: ev.data,
    }))) 
  return (
    <>
      {loading ? (
        <div className="w-full h-screen rounded-md p-5 bg-neutral-700 animate-pulse" />
      ) : (
        <FullCalendar
          plugins={[listPlugin]}
          initialView="listWeek"
          events={schedulesEvent}
          dayHeaderClassNames={"text-black"}
          eventClassNames={"hover:text-black"}
        />
      )}
    </>
  );
};

export default Calendar;
