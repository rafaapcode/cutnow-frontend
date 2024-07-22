import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import dynamic from "next/dynamic";
const BarberBannerImage = dynamic(() => import("../UploadsComponents/BarberBannerImage"));

const BannerModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
    <DialogTrigger asChild>{children}</DialogTrigger>
    <DialogContent className="bg-neutral-900 w-1/2">
      <DialogHeader>
        <DialogTitle>Foto para o seu banner</DialogTitle>
        <DialogDescription>
          Faça aqui um upload de um banner para o seu perfil , essa foto ficará como um background atrás da sua foto quando algum cliente entrar no seu perfil do app.
        </DialogDescription>
      </DialogHeader>
      <BarberBannerImage />
    </DialogContent>
  </Dialog>
  )
}

export default BannerModal