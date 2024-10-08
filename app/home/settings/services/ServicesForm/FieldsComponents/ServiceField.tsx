import { TrashIcon } from "lucide-react";
import { FieldInputType } from "../Form.type";

const ServiceField = ({register, index, remove}: FieldInputType) => {
  return (
    <div key={index} className="flex justify-between gap-5">
      <div className="w-full">
        <label htmlFor="nome-servico">Nome</label>
        <input
          {...register(`services.${index}.nome`)}
          id="nome-servico"
          type="text"
          placeholder="Barba"
          className="w-full p-2 md:p-2 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 disabled:bg-secondary-black/40"
        />
      </div>
      <div className="flex w-full justify-between items-end gap-5">
        <div className="w-full">
          <label htmlFor="preco-servico" className="text-sm md:text-base">Preço <span className="text-xs hidden md:inline text-neutral-500">(R$)</span></label>
          <input
            {...register(`services.${index}.preco`)}
            id="preco-servico"
            type="number"
            placeholder="50"
            className="w-full p-2 md:p-2 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 disabled:bg-secondary-black/40"
          />
        </div>
        <div className="w-full">
          <label htmlFor="tempo-servico" className="text-sm md:text-base">Tempo <span className="text-xs hidden md:inline text-neutral-500">min</span></label>
          <input
            {...register(`services.${index}.tempo`)}
            id="tempo-servico"
            type="number"
            placeholder="60"
            className="w-full p-2 md:p-2 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 disabled:bg-secondary-black/40"
          />
        </div>
        <button
          onClick={() => remove(index)}
          type="button"
          className="bg-red-500 p-2 rounded-lg hover:bg-red-400 transition-all"
        >
          <TrashIcon className="size-5 md:size-7" />
        </button>
      </div>
    </div>
  );
};

export default ServiceField;
