"use client";
import { useEffect, useState } from "react";
import CloseHourSelect from "../_components/CloseHourSelect";

const CloseHourInput = ({ onChange }: { onChange: any }) => {
  const [horario, setHorario] = useState("00:00h");

  useEffect(() => {
    const id = JSON.parse(localStorage.getItem("user-data") as string).state
      ?.user?.id;
    fetch(`http://localhost:3001/barbershops/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHorario(data.data.horarioFechamento);
      })
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="flex flex-col gap-2 col-span-2 md:col-span-1 snap-start">
      <label htmlFor="bairro" className="text-paragraph-1 md:text-subtitle-3">
        Horario de Fechamento
      </label>
      <CloseHourSelect horario={horario} onChange={onChange} />
    </div>
  );
};

export default CloseHourInput;
