"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useAuthStore } from "@/context/authContext";
import { Loader2Icon } from "lucide-react";
import dynamic from "next/dynamic";
const BarberSettings = dynamic(() => import("./BarberSettings/BarberSettings"));

type MenusShape = {
  title: string;
  description: string;
  link: string;
}[];

const menus: MenusShape = [
  {
    title: "Informações",
    description:
      "Aqui você poderá atualizar as informações da sua barbearia cadastrada.",
    link: "/home/settings/info",
  },
  {
    title: "Imagens",
    description:
      "Aqui você poderá realizar os uploads das imagens, que serão mostradas aos usuários que entrarem na plataforma.",
    link: "/home/settings/images",
  },
  {
    title: "Serviço",
    description:
      "Aqui você poderá atualizar, remover ou adicionar mais serviços que a sua barbearia fornece.",
    link: "/home/settings/services",
  },
];

const BarberSettingPage = ({isAdm}: {isAdm: boolean |  undefined}) => {
  return (
    isAdm === undefined ? <><div className="flex justify-center items-center mt-20"><Loader2Icon className="size-10 animate-spin"/></div></>  : <BarberSettings />
  )
}

const Settings = () => {
  const user = useAuthStore((state) => state.user);
  const isAdm = user?.isAdm;
  return (
    <>
    {isAdm ? (<HoverEffect items={menus} />) :  <BarberSettingPage isAdm={isAdm}/>}
    </>
  );
};

export default Settings;
