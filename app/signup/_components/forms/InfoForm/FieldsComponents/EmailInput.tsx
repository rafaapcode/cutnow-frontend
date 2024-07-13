import { FieldInputType } from "../Form.type";

const EmailInput = ({ register, errors }: FieldInputType) => {
  return (
    <div>
      <label htmlFor="email" className="text-paragraph-1 md:text-subtitle-3">
        Email
      </label>
      <input
        {...register("email")}
        id="email"
        type="email"
        placeholder="email@example.com"
        className="w-full p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"
      />
      {errors.email?.message && (
        <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
          {errors.email?.message}
        </small>
      )}
    </div>
  );
};

export default EmailInput;
