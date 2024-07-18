import { FieldInputType } from "../Form.type";

const BairroInput = ({errors, register}: FieldInputType) => {
  return (
    <div className="flex flex-col gap-2">
        <label htmlFor="bairro" className="text-paragraph-1 md:text-subtitle-3">
          Bairro
        </label>
        <input
          data-test="bairro-field"
          disabled
          {...register("bairro")}
          id="bairro"
          type="text"
          placeholder="Bairro dos testes"
          className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-secondary-black/30"
        />
        {errors.bairro?.message && (
          <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
            {errors.bairro?.message}
          </small>
        )}
      </div>
  )
}

export default BairroInput;