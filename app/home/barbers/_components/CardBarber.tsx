import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";
import { Trash2Icon } from "lucide-react";

type CardBarberProps = {
  nome: string;
  id: string;
  foto: string | null;
}

const CardBarber = ({nome, id, foto }: CardBarberProps) => {
  const fotoUrl = !foto  ? "/default-photo.jpg" : foto;

  return (
    <div className="w-[283px]  h-[283px] md:w-[320px]  md:h-[320px] xl:w-[350px]  xl:h-[350px] rounded-lg">
      <DirectionAwareHover imageUrl={fotoUrl}>
        <div>
          <p className="text-neutral-200 text-xl">{nome}</p>
          <button className="w-fit bg-red-600 p-2 mt-5 rounded-xl hover:bg-red-500 transition-colors duration-200">
            <Trash2Icon className="size-6 text-red-300 hover:text-red-200"/>
          </button>
        </div>
      </DirectionAwareHover>
    </div>
  );
};

export default CardBarber;
