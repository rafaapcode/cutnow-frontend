import { FieldInputType } from "../Form.type";

const NumeroInput = ({errors, register,isSubmitting = false}: FieldInputType) => {
  return (
    <div className="flex flex-col gap-2">
    <label htmlFor="numero" className="text-paragraph-1 md:text-subtitle-3">
      Número
    </label>
    <input
      disabled={isSubmitting}
      {...register("numero")}
      id="numero"
      type="number"
      placeholder="00"
      className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 disabled:bg-secondary-black/30"
    />
    {errors.numero?.message && (
      <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
        {errors.numero?.message}
      </small>
    )}
  </div>
  )
}

export default NumeroInput;