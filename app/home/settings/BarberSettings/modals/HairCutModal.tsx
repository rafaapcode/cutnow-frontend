import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import BarberHairCutImages from "../UploadsComponents/BarberHaircutImages";

const HairCutModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-neutral-900 w-1/2">
        <DialogHeader>
          <DialogTitle>Fotos dos cortes</DialogTitle>
          <DialogDescription>
            Faça aqui o upload dos cortes que você já fez, isso servirá como se
            fosse um portfólio dentro do APP para você.
          </DialogDescription>
        </DialogHeader>
        <BarberHairCutImages />
      </DialogContent>
    </Dialog>
  );
};

export default HairCutModal;
