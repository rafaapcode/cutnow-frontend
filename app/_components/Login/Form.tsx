"use client";
import { loginAdm, loginBarber } from "@/app/actions/login";
import { useAuthStore } from "@/context/authContext";
import { LoginFormSchema } from "@/schema/LoginFormSchema";
import { LoaderCircle, LogIn } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

export enum UserType {
  Barber = "barber",
  Adm = "adm"
}

type IUserType = {
  userType: UserType.Adm | UserType.Barber
}

const FormLogin = ({userType}: IUserType) => {
  const { setUser } = useAuthStore();
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = LoginFormSchema.safeParse({email: emailRef.current?.value, password: passwordRef.current?.value});
    if(!result.success) {
      if(result.error.issues.length == 2) {
        toast(`${result.error.issues[0].message}\n\n${result.error.issues[1].message}`, {duration: 3000});
      } else {
        toast(`${result.error.issues[0].message}`, {duration: 3000});
      }
    } else {
      if(userType === UserType.Adm) {
        setLoading(true)
        loginAdm(result.data)
          .then(res => {
            if(res.status) {
              toast.success(res.message);
              setUser({...res.data, isAdm: true});
              localStorage.setItem("token", res.accessToken ?? "");
              router.push('/home');
            } else {
              toast.error(res.message);
            }
          })
          .catch(err => toast.error(err.message))
          .finally(() => {
            setLoading(false);
          });
      } else {
        setLoading(true)
        loginBarber(result.data)
          .then(res => {
            if(res.status) {
              toast.success(res.message);
              setUser({...res.data, isAdm: false});
              router.push('/home');
            } else {
              toast.error(res.message);
            }
          })
          .catch(err => toast.error(err.message))
          .finally(() => {
            setLoading(false);
          });
      }
    }
  };

  return (
    <form className="w-full md:w-[70%] lg:w-[60%] h-full mx-auto flex flex-col" onSubmit={handleSubmit}>
      <div className="mb-16">
        <label htmlFor="email" className="text-subtitle-3 md:text-subtitle-1 text-white">Email</label>
        <input disabled={loading} ref={emailRef} id="email" type="email" placeholder="email@example.com" className="w-full p-5 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"/>
      </div>
      <div>
        <label htmlFor="senha" className="text-subtitle-3 md:text-subtitle-1 text-white">Senha</label>
        <input disabled={loading} ref={passwordRef} id="senha" type="password" placeholder="********" className="w-full p-5 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"/>
      </div>
      <Link href="/signup" className="w-fit transition-all duration-100 text-paragraph-1 text-secondary-green hover:text-terciary-green mt-5">Não tem uma conta , clique aqui !</Link>
      <div className="mt-5 md:mt-16 mx-auto">
        <button disabled={loading} className="transition-all duration-200 w-[200px] flex justify-evenly items-center bg-white/10 hover:bg-secondary-black disabled:bg-neutral-900 disabled:text-neutral-700 rounded-md p-4 text-subtitle-2 text-white">
          {loading ? <LoaderCircle className="w-7 h-7 animate-spin"/> : <>Login <LogIn className="w-7 h-7"/></>}
        </button>
      </div>
    </form> 
  )
}

export default FormLogin