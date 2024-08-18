"use client";
import { Button } from "@/components/ui/button";
import { useMutation, useQuery } from "@apollo/client";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { useMemo, useState } from "react";
import {
  getBarbershopStatus,
  getBarberStatus,
  updateStatusOfBarber,
  updateStatusOfBarbershop
} from "./Queries/navbarQueries";

const StatusComponent = ({ isAdm, id }: { isAdm: boolean; id: string }) => {
  const [status, setStatus] = useState<string | null>(null);
  const query = useMemo(() => (isAdm ? getBarbershopStatus : getBarberStatus), [isAdm]);

  const { data, loading, error } = useQuery(query, {
    variables: { id },
  });


  const queryMutationBarbershop = updateStatusOfBarbershop;
  const queryMutationBarber = updateStatusOfBarber;

  const [mutationBarbershop] = useMutation(queryMutationBarbershop);
  const [mutationBarber] = useMutation(queryMutationBarber);

  const updateStatusBarbershop  = async (status: string) => {
    try {
      await mutationBarbershop({
        variables: {
          statusData: {
            id,
            status
          }
        }
      });
      setStatus(status);
    } catch (error) {
      setStatus("Fechado");
    }
  };

  const updateStatusBarber  = async (status: string) => {
    try {
      await mutationBarber({
        variables: {
          statusData: {
            id,
            status
          }
        }
      });
      setStatus(status);
    } catch (error) {
      setStatus("Indisponível");
    }
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {loading ? (
          <Button variant="ghost" className="border border-neutral-800 w-full">
            <div className={`w-12 h-6 rounded-md bg-neutral-700 ${!error && "animate-pulse"}`}/>
          </Button>
        ) : (
          <Button variant="ghost" className="border border-neutral-800">
            {status ? status : (isAdm ? data?.barbershopInfo.informacoes.status: data?.barber.status)}
          </Button>
        )}
      </DropdownMenuTrigger>
      {isAdm ? (
        <DropdownMenuContent className="w-32 p-2 rounded-sm bg-neutral-900 border border-neutral-800 text-center">
          <DropdownMenuCheckboxItem
            className="mb-2 cursor-pointer hover:bg-neutral-700 p-1 rounded-sm"
            onCheckedChange={() => updateStatusBarbershop('Aberto')}
          >
            Aberto
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className="cursor-pointer hover:bg-neutral-700 p-1 rounded-sm" onCheckedChange={() => updateStatusBarbershop('Fechado')}>
            Fechado
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent className="w-32 p-2 rounded-sm bg-neutral-900 border border-neutral-800 text-center">
          <DropdownMenuCheckboxItem className="mb-2 cursor-pointer hover:bg-neutral-700 p-1 rounded-sm" onCheckedChange={() => updateStatusBarber('Atendendo')}>
            Atendendo
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className="mb-2 cursor-pointer hover:bg-neutral-700 p-1 rounded-sm" onCheckedChange={() => updateStatusBarber('Disponível')}>
            Disponível
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className="cursor-pointer hover:bg-neutral-700 p-1 rounded-sm" onCheckedChange={() => updateStatusBarber('Indisponível')}>
            Indisponível
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};

export default StatusComponent;
