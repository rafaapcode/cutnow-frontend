"use client";
import listPlugin from '@fullcalendar/list';
import FullCalendar from "@fullcalendar/react";


const Calendar = () => {
  return (
    <FullCalendar 
      plugins={[listPlugin]}
      initialView="listWeek"
      events={[
        { title: 'event 1', date: '2024-10-10T09:00' },
        { title: 'event 2', date: '2024-10-29' }
      ]}
    />
  )
}

export default Calendar;
