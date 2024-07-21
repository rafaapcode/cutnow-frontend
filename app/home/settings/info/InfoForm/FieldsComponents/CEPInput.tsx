import { FieldInputType } from "../Form.type"

const CEPInput = ({errors, register, isSubmitting = false}: FieldInputType) => {
  return (
    <div className="flex flex-col gap-2 col-span-2 md:col-span-1 snap-start">
    <label htmlFor="cep" className="text-paragraph-1 md:text-subtitle-3">
      CEP
    </label>
    <input
      disabled={isSubmitting}
      {...register("CEP")}
      id="cep"
      type="text"
      placeholder="12345678"
      className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 disabled:bg-secondary-black/30"
    />
    {errors.CEP?.message ? (
      <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
        {errors.CEP?.message}
      </small>
    ): (
      <small className="text-paragraph-2 md:text-paragraph-1 text-terciary">
      Somente número. Não utilize pontos (.) e nem traços (-)
    </small>
    )}
  </div>
  )
}

export default CEPInput