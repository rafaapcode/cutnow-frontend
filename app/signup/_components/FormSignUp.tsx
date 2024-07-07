"use client";
import { SignUpSchema } from "@/app/schema/SignUpFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

type IFormData = z.infer<typeof SignUpSchema>

const FormSignUp = () => {

  const {handleSubmit, register, formState: {errors} } = useForm<IFormData>({
    resolver: zodResolver(SignUpSchema, undefined, {mode: "async"}),
    mode: 'onChange'
  });

  const onSubmit = handleSubmit( async (data: any) => {
    console.log(data);
  })

  return (
    <form className="w-full h-full flex flex-col gap-3 md:gap-10 lg:gap-5" onSubmit={onSubmit}>
     <div>
        <label htmlFor="nome" className="text-paragraph-1 md:text-subtitle-2">Nome</label>
        <input {...register("nome")} id="nome" type="text" placeholder="Joao" className="w-full p-3 md:p-4 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"/>
      </div>
      <div>
        <label htmlFor="nome da barbearia" className="text-paragraph-1 md:text-subtitle-2">Nome da barbearia</label>
        <input {...register("nomeBarbearia")} id="nome da barbearia" type="text" placeholder="Barbearia ..." className="w-full p-3 md:p-4 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"/>
      </div>
      <div>
        <label htmlFor="email" className="text-paragraph-1 md:text-subtitle-2">Email</label>
        <input {...register("email")} id="email" type="email" placeholder="email@example.com" className="w-full p-3 md:p-4 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"/>
      </div>
      <div>
        <label htmlFor="cnpj" className="text-paragraph-1 md:text-subtitle-2">CNPJ</label>
          <input {...register("cnpj")} id="cnpj" type="text" placeholder="12345678901234" className="w-full p-3 md:p-4 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"/>
      </div>
      <div>
        <label htmlFor="senha" className="text-paragraph-1 md:text-subtitle-2">Senha</label>
        <input {...register("senha")} id="senha" type="password" placeholder="12345678901234" className="w-full p-3 md:p-4 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"/>
      </div>
      <div>
        <label htmlFor="Confirme sua senha" className="text-paragraph-1 md:text-subtitle-2">Confirme sua senha</label>
        <input {...register("confirmeSenha")} id="Confirme sua senha" type="password" placeholder="12345678901234" className="w-full p-3 md:p-4 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"/>
      </div>
      <div className="w-full mt-5 md:mt-0 flex justify-between items-center">
        <button className="transition-all duration-200 bg-secondary-black text-white p-3 rounded-md font-bold hover:bg-white/10">Anterior</button>
        <button className="transition-all duration-200 bg-terciary-green text-black p-3 rounded-md font-bold hover:bg-secondary-green">Próxima</button>
      </div>
      <div className="mx-auto">loader</div>
    </form>
  )
}

export default FormSignUp;