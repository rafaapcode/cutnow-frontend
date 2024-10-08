"use client";
import { useAuthStore } from "@/context/authContext";
import { cn } from "@/lib/utils";
import { Scissors, User } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import FormLogin, { UserType } from "./Form";

const Login = () => {
  const [user, setUser] = useState<UserType>(UserType.Adm);
  const { user: userAuth, setUser: setUserAuth } = useAuthStore();

  useEffect(() => {
    if(userAuth) {  
      setUserAuth(undefined);
    }
  }, []);

  return (
    <>
      <section className="w-full lg:w-[55%] h-full flex flex-col items-start">
        <Toaster />
        <div className="block mx-auto md:mb-16 lg:hidden w-[120px] h-[98px] md:w-[211px] md:h-[173px] relative">
          <Image alt="Logo CutNow" fill src="/logo.svg" className="object-fill"/>
        </div>
        <h1 className="hidden md:block md:text-title-2 lg:text-title-1 xl:text-tile self-center text-white">Bem vindo a sua <span className="text-secondary-green uppercase">barbearia</span> Online</h1>
        <article className="w-full md:w-1/2 mx-auto mt-5 md:mt-28 flex justify-between transition-all duration-100">
          <button onClick={() => setUser(UserType.Adm)} className={cn("w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-2xl text-terciary-green", user === 'adm' && "bg-terciary-green shadow-md shadow-[#AAD704] text-black")}>
            <User className="w-8 h-8 md:w-12 md:h-12 mx-auto"/>
          </button>
          <button onClick={() => setUser(UserType.Barber)} className={cn("w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-2xl text-terciary-green", user === 'barber' && "bg-terciary-green shadow-md shadow-[#AAD704] text-black")}>
            <Scissors className="w-8 h-8 md:w-12 md:h-12 mx-auto"/>
          </button>
        </article>
        <article className="w-full h-full mt-16">
          <FormLogin userType={user}/>
        </article>
      </section>
      <aside className="hidden lg:flex h-full w-[35%] bg-white/10 rounded-3xl flex-col justify-center items-center gap-20">
        <div className="w-[211px] h-[173px] relative">
          <Image alt="Logo CutNow" fill src="/logo.svg" className="object-fill"/>
        </div>
        <div className="w-[493px] h-[308px] relative">
          <Image alt="Barber cutting a hair illustration" fill src="/background-login-page.svg" className="object-fill"/>
        </div>
      </aside>
    </>
  )
}

export default Login;