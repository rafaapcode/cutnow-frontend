"use client";
import { getBarbershopInfo } from "@/app/actions/updateInfo";
import { useEffect, useState } from "react";
import OpeHourSelect from "../_components/OpenHourSelect";

const OpenHourInput = ({ onChange }: { onChange: any }) => {
  const [horario, setHorario] = useState("00:00h");

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("user-data") as string).state
      ?.user?.id;
      getBarbershopInfo(id)
        .then((data) => {
          if(!data.status) {
            setHorario("Um erro aconteceu!");
            return;
          };
          return data.data.data
        })
        .then((res) => {
          setHorario(res.horarioAbertura);
        })
        .catch((err: any) => console.log(err.message));
  }, []);
  return (
    <div className="flex flex-col gap-2 col-span-2 md:col-span-1 snap-start">
      <label htmlFor="bairro" className="text-paragraph-1 md:text-subtitle-3">
        Horario de Abertura
      </label>
      <OpeHourSelect horario={horario} onChange={onChange} />
    </div>
  );
};

export default OpenHourInput;
