"use client";
import { useStepper } from "@/app/hooks/useStepper";
import { LocalizationFormSchema } from "@/app/schema/LocalizationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NextStepperButton, PrevStepperButton } from "../../Stepper/Stepper";
import { IFormData } from "../LocalizationForm/Form.type";
import BairroInput from "./FieldsComponents/BairroInput";
import CEPInput from "./FieldsComponents/CEPInput";
import CidadeInput from "./FieldsComponents/CidadeInput";
import EstadoInput from "./FieldsComponents/EstadoInput";
import NumeroInput from "./FieldsComponents/NumeroInput";
import RuaInput from "./FieldsComponents/RuaInput";

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
      numero: "",
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
      className="w-full h-full grid grid-cols-3 gap-3 overflow-y-auto mt-16"
      onSubmit={onSubmit}
    >
      <CEPInput register={register} errors={errors} isSubmitting={isSubmitting}/>
      <RuaInput register={register} errors={errors} />
      <BairroInput register={register} errors={errors} />
      <CidadeInput register={register} errors={errors} />
      <EstadoInput register={register} errors={errors} />
      <NumeroInput register={register} errors={errors} isSubmitting={isSubmitting}/>
      <div className="w-full col-span-3 mt-5 md:mt-0 flex justify-between items-center">
        <PrevStepperButton />
        <NextStepperButton isValid={isValid} disabled={isSubmitting} />
      </div>
    </form>
  );
};

export default LocalizationForm;
