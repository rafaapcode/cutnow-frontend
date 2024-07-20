import { PlusCircleIcon } from "lucide-react";
import AddBarber from "./_components/AddBarberComponent/AddBarber";
import CardBarber from "./_components/CardBarber";

const Barbers = () => {
  return (
    <section className="mt-12">
      <header className="flex justify-between w-full">
        <h2 className="ml-5 md:ml-0 text-title-3 md:text-title-2">Barbeiros</h2>
        <AddBarber>
          <button className="transition-colors duration-100 text-secondary hover:text-[#AAD704]">
            <PlusCircleIcon className="size-6 md:size-8" />
          </button>
        </AddBarber>
      </header>
      <div className="mt-5 pb-10 w-full h-[670px] bg-transparent grid grid-cols-1 place-items-center xl:place-items-start xl:grid-cols-3 gap-x-12 md:gap-y-28 xl:gap-y-16 overflow-y-auto snap-y scroll-smooth">
        <CardBarber />
        <CardBarber />
      </div>
    </section>
  );
};

export default Barbers;
