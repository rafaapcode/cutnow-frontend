import {
  Dialog,
  DialogContent,
  DialogDescription, DialogHeader, DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import dynamic from "next/dynamic";
const BarberPhotoImage = dynamic(() => import("../UploadsComponents/BarberPhotoImage"));

const PhotoModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-neutral-900 w-1/2">
        <DialogHeader>
          <DialogTitle>Fotos da sua foto</DialogTitle>
          <DialogDescription>
            Faça aqui um upload de uma foto para o perfil , assim os clientes poderão saber que é você.
          </DialogDescription>
        </DialogHeader>
        <BarberPhotoImage />
      </DialogContent>
    </Dialog>
  );
};

export default PhotoModal;
