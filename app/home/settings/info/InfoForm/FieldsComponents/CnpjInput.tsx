import { FieldInputType } from "../Form.type";

const CnpjInput = ({ register, errors ,isSubmitting = false}: FieldInputType) => {
  return (
    <div className="col-span-1 snap-start">
      <label htmlFor="cnpj" className="text-paragraph-1 md:text-subtitle-3">
        CNPJ
      </label>
      <input
        disabled={isSubmitting}
        {...register("cnpj")}
        id="cnpj"
        type="text"
        placeholder="12345678901234"
        className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 disabled:bg-secondary-black/40"
      />
      {errors.cnpj?.message ? (
        <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
          {errors.cnpj.message}
        </small>
      ) : (
        <small className="text-paragraph-2 md:text-paragraph-1 text-terciary">
          Somente número. Não utilize pontos (.) e nem traços (/ -)
        </small>
      )}
    </div>
  );
};

export default CnpjInput;
