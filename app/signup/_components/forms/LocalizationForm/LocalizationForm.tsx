'use client';
import { useStepper } from "@/app/hooks/useStepper";
import { LocalizationFormSchema } from "@/app/schema/LocalizationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

type IFormData = z.infer<typeof LocalizationFormSchema>;

const LocalizationForm = () => {
  const { nextStep } = useStepper();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IFormData>({
    defaultValues: {
      CEP: "",
      bairro: "",
      cidade: "",
      estado: "",
      numero: 0,
      rua: "",
    },
    mode: "onBlur",
    resolver: zodResolver(LocalizationFormSchema),
  });
  const onSubmit = handleSubmit(async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    nextStep();
  });
  return (
    <form
      className="w-full h-full flex flex-col gap-3 md:gap-10 lg:gap-5 overflow-y-auto"
      onSubmit={onSubmit}
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="cep" className="text-paragraph-1 md:text-subtitle-3">
          CEP
        </label>
        <input
          {...register("CEP")}
          id="cep"
          type="text"
          placeholder="12345678"
          className="w-1/4 p-2 md:p-3 rounded-lg border-none outline-none focus:outline-none text-white bg-white/10"
        />
        {errors.CEP?.message && (
          <small className="text-paragraph-2 md:text-paragraph-1 text-red-300">
            {errors.CEP?.message}
          </small>
        )}
      </div>
    </form>
  );
};

export default LocalizationForm;
