"use client";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { CircleX } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

type IDialogProps = {
  setOpenDialog: Dispatch<SetStateAction<boolean>>;
}

function Dialog({setOpenDialog }: IDialogProps) {
  return (
    <div className="bg-white/15 flex flex-col gap-5 backdrop-blur-md rounded-md p-5 w-1/2 h-1/2 absolute z-20 top-[40%] left-[25%] overflow-y-auto">
      <button onClick={() => setOpenDialog(false)} className="self-end"><CircleX className="size-7"/></button>
      <h2>Rafael</h2>
    </div>
  );
}

const Calendar = ({ data }: { data: any }) => {
  const [openDialog, setOpenDialog] = useState(false);

  const calendarEvents = !data
    ? []
    : data.map((schedule: any) => {
        return { title: `${schedule.nomeCliente}`, date: schedule.data };
      });

  return (
    <>
      <FullCalendar
        plugins={[interactionPlugin, dayGridPlugin]}
        initialView="dayGridMonth"
        events={calendarEvents}
        selectable
        dateClick={(info) => setOpenDialog(!openDialog)}
      />
      {openDialog && <Dialog setOpenDialog={setOpenDialog}/>}
    </>
  );
};

export default Calendar;
