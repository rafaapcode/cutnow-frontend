"use client";
import { useAuthStore } from "@/context/authContext";
import { useQuery } from "@apollo/client";
import listPlugin from "@fullcalendar/list";
import FullCalendar from "@fullcalendar/react";
import { allScheduleOfBarber, allScheduleOfBarbershop } from "./queries/calendarSchedules";

const Calendar = () => {
  const user = useAuthStore(state  => state.user);
  const isAdm = user?.isAdm;
  const queries = isAdm ? allScheduleOfBarbershop : allScheduleOfBarber;
  const barberVaria

  const {} = useQuery(queries, {

  });

  return (
    <FullCalendar
      plugins={[listPlugin]}
      initialView="listWeek"
      events={[
        { title: "event 1", date: "2024-10-10T09:00" },
        { title: "event 2", date: "2024-10-29" },
      ]}
      headerToolbar={{
        left: "title",
        center: "",
        right: "listDay,listWeek,listMonth",
      }}
      dayHeaderClassNames={"text-black"}
      eventClassNames={"hover:text-black"}
    />
  );
};

export default Calendar;
