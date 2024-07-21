"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import BarberSettings from "./BarberSettings/BarberSettings";

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

const Settings = () => {
  const isAdm = false;
  return (
    <>
    {isAdm ? (<HoverEffect items={menus} />) : <BarberSettings /> }
    </>
  );
};

export default Settings;
