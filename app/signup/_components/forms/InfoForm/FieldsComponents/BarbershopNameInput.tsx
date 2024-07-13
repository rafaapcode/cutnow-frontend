import { FieldInputType } from "../Form.type"

const BarbershopNameInput = ({register, errors}: FieldInputType) => {
  return (
    <div>
    <label
      htmlFor="nome da barbearia"
      className="text-paragraph-1 md:text-subtitle-3"
    >
      Nome da barbearia
    </label>
    <input
      {...register("nomeBarbearia")}
      id="nome da barbearia"
      type="text"
      placeholder="Barbearia ..."
      className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"
    />
    {errors.nomeBarbearia?.message && (
      <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
        {errors.nomeBarbearia?.message}
      </small>
    )}
  </div>
  )
}

export default BarbershopNameInput