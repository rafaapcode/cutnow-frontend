import { TrashIcon } from "lucide-react";
import { FieldInputType } from "../Form.type";

const ServiceField = ({register, index, remove}: FieldInputType) => {
  return (
    <div data-test="service-field" key={index} className="flex justify-between gap-5">
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
          <label htmlFor="preco-servico">Preco (R$)</label>
          <input
            {...register(`services.${index}.preco`)}
            id="preco-servico"
            type="number"
            placeholder="50"
            className="w-full p-2 md:p-2 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 disabled:bg-secondary-black/40"
          />
        </div>
        <div className="w-full">
          <label htmlFor="tempo-servico">Tempo (em minutos)</label>
          <input
            {...register(`services.${index}.tempo`)}
            id="tempo-servico"
            type="number"
            placeholder="60"
            className="w-full p-2 md:p-2 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 disabled:bg-secondary-black/40"
          />
        </div>
        <button
          data-test="removeservice-btn"
          onClick={() => remove(index)}
          type="button"
          className="bg-red-500 p-2 rounded-lg hover:bg-red-400 transition-all"
        >
          <TrashIcon className="size-7" />
        </button>
      </div>
    </div>
  );
};

export default ServiceField;
