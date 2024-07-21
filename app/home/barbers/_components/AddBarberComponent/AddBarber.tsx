import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import dynamic from "next/dynamic";
import React from "react";
const AddBarberForm = dynamic(() => import("./AddBarberForm"));

type AddBarberProps = {
  children: React.ReactNode;
};

const AddBarber = ({ children }: AddBarberProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild className="mr-5 md:mr-0">{children}</DrawerTrigger>
      <DrawerContent className="bg-neutral-950">
        <div className="w-[90%] mx-auto">
          <DrawerHeader>
            <DrawerTitle className="text-title-3">Adicione um novo barbeiro</DrawerTitle>
            <DrawerDescription>Preencha as informações corretamente.</DrawerDescription>
          </DrawerHeader>
          <AddBarberForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default AddBarber;
