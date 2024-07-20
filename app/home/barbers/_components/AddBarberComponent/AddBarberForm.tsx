"use client";

import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { AddBarberSchema } from "@/schema/AddBaberFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const AddBarberForm = () => {
  type IFormData = z.infer<typeof AddBarberSchema>;

  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isValid, errors },
  } = useForm<IFormData>({
    defaultValues: {
      cpf: "",
      email: "",
      nome: "",
      senha: ""
    },
    mode: 'onBlur',
    resolver: zodResolver(AddBarberSchema)
  });

  const onSubmit = async (data: any) => await new Promise(resolve => setTimeout(resolve, 2000));

  return (
    <form
      className="mx-auto w-[80%] grid grid-cols-2 gap-x-10 gap-y-5 mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="nome">Nome</label>
        <Input
          {...register("nome")}
          className="bg-neutral-900"
          id="nome"
          type="text"
          placeholder="Nome do barbeiro."
        />
        {errors.nome?.message && <small className="text-red-300">{errors.nome?.message}</small>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <Input
          {...register("email")}
          className="bg-neutral-900"
          id="email"
          type="email"
          placeholder="email@example.com"
        />
        {errors.email?.message && <small className="text-red-300">{errors.email?.message}</small>}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="cpf">CPF</label>
        <Input
          {...register("cpf")}
          className="bg-neutral-900"
          id="cpf"
          type="text"
          placeholder="12345678901"
        />
        {errors.cpf?.message ? (
          <small className="text-red-300">{errors.cpf?.message}</small>
        ) : (
          <small className="text-neutral-700">
            Somente números, sem traços ou pontos.
          </small>
        )}
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="senha">Senha</label>
        <Input
          {...register("senha")}
          className="bg-neutral-900"
          id="senha"
          type="password"
          placeholder="**********"
        />
        {errors.senha?.message && <small className="text-red-300">{errors.senha?.message}</small>}
      </div>
      <DrawerFooter className="col-span-2">
        <div className="flex justify-between">
          <DrawerClose className="bg-secondary-black px-3 py-2 rounded-md hover:bg-neutral-800 transition-colors duration-150">
            Cancelar
          </DrawerClose>
          <button disabled={isSubmitting || !isValid} className="bg-terciary-green px-3 py-2 rounded-md text-black font-bold tracking-wide hover:bg-secondary-green transition-colors duration-150 disabled:bg-[#55641c]">
            {isSubmitting ? <LoaderCircle className="size-4 animate-spin"/> : "Cadastrar" }
          </button>
        </div>
      </DrawerFooter>
    </form>
  );
};

export default AddBarberForm;