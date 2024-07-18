import { FieldInputType } from "../Form.type";

const PasswordInput = ({ register, errors, isSubmitting = false }: FieldInputType) => {
  return (
    <div>
      <label htmlFor="senha" className="text-paragraph-1 md:text-subtitle-3">
        Senha
      </label>
      <input
        data-test="password-field"
        disabled={isSubmitting}
        {...register("senha")}
        id="senha"
        type="password"
        placeholder="********"
        className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 disabled:bg-secondary-black/40"
      />
      {errors.senha?.message && (
        <small data-test="password-field-error" className="text-paragraph-2 md:text-paragraph-1 text-red-300">
          {errors.senha?.message}
        </small>
      )}
    </div>
  );
};

export default PasswordInput;
