import { FieldInputType } from "../Form.type";

const CidadeInput = ({ errors, register }: FieldInputType) => {
  return (
    <div className="flex flex-col gap-2 col-span-2 md:col-span-1 snap-start">
      <label htmlFor="cidade" className="text-paragraph-1 md:text-subtitle-3">
        Cidade
      </label>
      <input
        disabled
        {...register("cidade")}
        id="cidade"
        type="text"
        placeholder="Cidade Teste"
        className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-secondary-black/30"
      />
      {errors.cidade?.message && (
        <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
          {errors.cidade?.message}
        </small>
      )}
    </div>
  );
};

export default CidadeInput;
