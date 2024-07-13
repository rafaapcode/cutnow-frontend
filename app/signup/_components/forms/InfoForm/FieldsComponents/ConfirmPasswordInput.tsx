import { FieldInputType } from "../Form.type";

const ConfirmPasswordInput = ({ register, errors, isSubmitting = false }: FieldInputType) => {
  return (
    <div>
      <label
        htmlFor="Confirme sua senha"
        className="text-paragraph-1 md:text-subtitle-3"
      >
        Confirme sua senha
      </label>
      <input
        
        disabled={isSubmitting}
        {...register("confirmeSenha")}
        id="Confirme sua senha"
        type="password"
        placeholder="********"
        className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10 disabled:bg-secondary-black/40"
      />
      {errors.confirmeSenha?.message && (
        <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
          {errors.confirmeSenha?.message}
        </small>
      )}
    </div>
  );
};

export default ConfirmPasswordInput;
