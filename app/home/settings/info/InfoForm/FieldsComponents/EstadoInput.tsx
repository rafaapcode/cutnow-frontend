import { FieldInputType } from "../Form.type";

const EstadoInput = ({ errors, register }: FieldInputType) => {
  return (
    <div className="flex flex-col gap-2 col-span-2 md:col-span-1 snap-start">
        <label htmlFor="estado" className="text-paragraph-1 md:text-subtitle-3">
          Estado
        </label>
        <input
          disabled
          {...register("estado")}
          id="estado"
          type="text"
          placeholder="??"
          className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-secondary-black/30"
        />
        {errors.estado?.message && (
          <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
            {errors.estado?.message}
          </small>
        )}
      </div>
  );
};

export default EstadoInput;
