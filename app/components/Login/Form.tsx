import { LogIn } from "lucide-react";
import Link from "next/link";

const FormLogin = () => {
  return (
    <form className="w-full md:w-[70%] lg:w-[60%] h-full mx-auto flex flex-col" onSubmit={() => {}}>
      <div className="mb-16">
        <label htmlFor="email" className="text-subtitle-3 md:text-subtitle-1">Email</label>
        <input id="email" type="email" placeholder="email@example.com" className="w-full p-5 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"/>
      </div>
      <div>
        <label htmlFor="senha" className="text-subtitle-3 md:text-subtitle-1">Senha</label>
        <input id="senha" type="password" placeholder="********" className="w-full p-5 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"/>
      </div>
      <Link href="/signup" className="w-fit transition-all duration-100 text-paragraph-1 text-secondary-green hover:text-terciary-green mt-5">Não tem uma conta , clique aqui !</Link>
      <div className="mt-5 md:mt-16 mx-auto">
        <button className="transition-all duration-200 w-[200px] flex justify-evenly items-center bg-white/10 hover:bg-secondary-black rounded-md p-4 text-subtitle-2">Login <LogIn className="w-7 h-7"/></button>
      </div>
    </form> 
  )
}

export default FormLogin