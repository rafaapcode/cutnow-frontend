"use client";
import { SignUpSchema } from "@/app/schema/SignUpFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { NextStepperButton } from "./Stepper/Stepper";

type IFormData = z.infer<typeof SignUpSchema>;

const FormSignUp = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<IFormData>({
    resolver: zodResolver(SignUpSchema, undefined, { mode: "async" }),
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (data: any) => {
    console.log(data);
  });

  return (
    <form
      className="w-full h-full flex flex-col gap-3 md:gap-10 lg:gap-5 overflow-y-auto"
      onSubmit={onSubmit}
    >
      <div>
        <label htmlFor="nome" className="text-paragraph-1 md:text-subtitle-3">
          Nome
        </label>
        <input
          {...register("nome")}
          id="nome"
          type="text"
          placeholder="Joao"
          className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"
        />
        {errors.nome?.message && (
          <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
            {errors.nome?.message}
          </small>
        )}
      </div>
      <div>
        <label
          htmlFor="nome da barbearia"
          className="text-paragraph-1 md:text-subtitle-3"
        >
          Nome da barbearia
        </label>
        <input
          {...register("nomeBarbearia")}
          id="nome da barbearia"
          type="text"
          placeholder="Barbearia ..."
          className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"
        />
        {errors.nomeBarbearia?.message && (
          <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
            {errors.nomeBarbearia?.message}
          </small>
        )}
      </div>
      <div>
        <label htmlFor="email" className="text-paragraph-1 md:text-subtitle-3">
          Email
        </label>
        <input
          {...register("email")}
          id="email"
          type="email"
          placeholder="email@example.com"
          className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"
        />
        {errors.email?.message && (
          <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
            {errors.email?.message}
          </small>
        )}
      </div>
      <div>
        <label htmlFor="cnpj" className="text-paragraph-1 md:text-subtitle-3">
          CNPJ
        </label>
        <input
          {...register("cnpj")}
          id="cnpj"
          type="text"
          placeholder="12345678901234"
          className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"
        />
        {errors.cnpj?.message ? (
          <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
            {errors.cnpj?.message}
          </small>
        ) : (
          <small className="text-paragraph-2 md:text-paragraph-1 text-terciary">
            Somente número. Não utilize pontos (.) e nem traços (/ -)
          </small>
        )}
      </div>
      <div>
        <label htmlFor="senha" className="text-paragraph-1 md:text-subtitle-3">
          Senha
        </label>
        <input
          {...register("senha")}
          id="senha"
          type="password"
          placeholder="12345678901234"
          className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"
        />
        {errors.senha?.message && (
          <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
            {errors.senha?.message}
          </small>
        )}
      </div>
      <div>
        <label
          htmlFor="Confirme sua senha"
          className="text-paragraph-1 md:text-subtitle-3"
        >
          Confirme sua senha
        </label>
        <input
          {...register("confirmeSenha")}
          id="Confirme sua senha"
          type="password"
          placeholder="12345678901234"
          className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"
        />
        {errors.confirmeSenha?.message && (
          <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
            {errors.confirmeSenha?.message}
          </small>
        )}
      </div>
      <div className="w-full mt-5 md:mt-0 flex justify-end items-center">
        <NextStepperButton />
      </div>
    </form>
  );
};

export default FormSignUp;
