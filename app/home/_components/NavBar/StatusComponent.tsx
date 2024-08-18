"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu";
import { useState } from "react";


const StatusComponent = ({
  isAdm,
  id,
}: {
  isAdm: boolean;
  id?: string;
}) => {
  const [status, setStatus] = useState("Aberto");
  // const query = isAdm ? updateStatusOfBarbershop : updateStatusOfBarber;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="border border-neutral-800">{status}</Button>
      </DropdownMenuTrigger>
      {isAdm ? (
        <DropdownMenuContent className="w-32 p-2 rounded-sm bg-neutral-900 border border-neutral-800 text-center">
          <DropdownMenuCheckboxItem className="mb-2 cursor-pointer hover:bg-neutral-700 p-1 rounded-sm" checked={true}>Aberto</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className="cursor-pointer hover:bg-neutral-700 p-1 rounded-sm">Fechado</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent className="w-32 p-2 rounded-sm bg-neutral-900 border border-neutral-800 text-center">
          <DropdownMenuCheckboxItem  className="mb-2 cursor-pointer hover:bg-neutral-700 p-1 rounded-sm">Atendendo</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem  className="mb-2 cursor-pointer hover:bg-neutral-700 p-1 rounded-sm">Disponível</DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className="cursor-pointer hover:bg-neutral-700 p-1 rounded-sm">Indisponível</DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default StatusComponent;
