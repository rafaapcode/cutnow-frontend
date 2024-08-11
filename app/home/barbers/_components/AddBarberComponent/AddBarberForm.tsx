"use client";

import { SignUpBarber } from "@/app/actions/signUpBarber";
import { DrawerClose, DrawerFooter } from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/context/authContext";
import { AddBarberSchema } from "@/schema/AddBaberFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import * as z from "zod";
type IFormData = z.infer<typeof AddBarberSchema>;

const AddBarberForm = () => {
  const refExitButton = useRef<HTMLButtonElement>(null);
  const { user } = useAuthStore();
  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, errors, isSubmitting },
  } = useForm<IFormData>({
    defaultValues: {
      cpf: "",
      email: "",
      nome: "",
      senha: "",
    },
    mode: "onBlur",
    resolver: zodResolver(AddBarberSchema),
  });

  const onSubmit = async (data: IFormData) => {
   try {
    const barberData = {
      ...data,
      barbearia_id: user.id
    };
    const response = await SignUpBarber(barberData);

    if(response.status) {
      toast.success(response.message);
      refExitButton.current?.click();
    } else {
      toast.error(response.message);
      reset();
    }
   } catch (error: any) {
    console.log(error);
   }
  };

  return (
    <form
      className="mx-auto w-full md:w-[90%] xl:w-[80%] grid grid-cols-2 gap-x-10 gap-y-5 mt-5"
      onSubmit={handleSubmit(onSubmit)}
    >
       <Toaster position="bottom-center"/>
      <div className="flex flex-col gap-2">
        <label htmlFor="nome">Nome</label>
        <Input
          {...register("nome")}
          className="bg-neutral-900"
          id="nome"
          type="text"
          placeholder="Nome do barbeiro."
        />
        {errors.nome?.message && (
          <small className="text-red-300 text-xs md:text-sm">
            {errors.nome?.message}
          </small>
        )}
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
        {errors.email?.message && (
          <small className="text-red-300 text-xs md:text-sm">
            {errors.email?.message}
          </small>
        )}
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
          <small className="text-red-300 text-xs md:text-sm">
            {errors.cpf?.message}
          </small>
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
        {errors.senha?.message && (
          <small className="text-red-300 text-xs md:text-sm">
            {errors.senha?.message}
          </small>
        )}
      </div>
      <DrawerFooter className="col-span-2">
        <div className="flex justify-between">
          <DrawerClose
            ref={refExitButton}
            className="bg-secondary-black px-3 py-2 rounded-md hover:bg-neutral-800 transition-colors duration-150"
          >
            Cancelar
          </DrawerClose>
          <button
            disabled={isSubmitting || !isValid}
            className="bg-terciary-green px-3 py-2 rounded-md text-black font-bold tracking-wide hover:bg-secondary-green transition-colors duration-150 disabled:bg-[#55641c]"
          >
            {isSubmitting ? (
              <LoaderCircle className="size-4 animate-spin" />
            ) : (
              "Cadastrar"
            )}
          </button>
        </div>
      </DrawerFooter>
    </form>
  );
};

export default AddBarberForm;
