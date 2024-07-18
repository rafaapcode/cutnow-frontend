import { FieldInputType } from "../Form.type"

const NameInput = ({register, errors, isSubmitting = false}: FieldInputType) => {
  return (
    <div>
    <label htmlFor="nome" className="text-paragraph-1 md:text-subtitle-3">
      Nome
    </label>
    <input
      data-test="name-field"
      autoComplete="off"
      disabled={isSubmitting}
      {...register("nome")}
      id="nome"
      type="text"
      placeholder="Joao"
      className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 disabled:bg-secondary-black/40"
    />
    {errors.nome?.message && (
      <small data-test="name-field-error" className="text-paragraph-2 md:text-paragraph-1 text-red-300">
        {errors.nome?.message}
      </small>
    )}
  </div>
  )
}

export default NameInput