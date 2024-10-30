"use client";
import { useAuthStore } from "@/context/authContext";
import { useQuery } from "@apollo/client";
import Calendar from "../_components/calendar/Calendar";
import { allSchedulesOfBarber, allSchedulesOfBarbershop } from "./queries/getAllSchedules";

const CalendarPage = () => {
  const user = useAuthStore(state => state.user);
  const isAdm = user?.isAdm;
  const querie = isAdm ? allSchedulesOfBarbershop : allSchedulesOfBarber;
  const barbershopParam = {
    barbeariaId: user?.id,
  };
  const barberParam = {
    barbeiroId: user?.id,
  };
  const { data, loading, error } = useQuery(querie, {
    variables: isAdm ? barbershopParam : barberParam,
  });

  if(error) {
    return (
      <div className="py-3">
        <h2>Erro ao buscar os agendamentos</h2>
      </div>
    )
  }
  return (
    <div className="py-2">
      {
        loading ? <div className="w-full h-screen bg-neutral-700 animate-pulse"/> : <Calendar data={isAdm ? data.allSchedulesOfBarbershop : data.allSchedulesOfBarber}/>
      }
    </div>
  )
}

export default CalendarPage
