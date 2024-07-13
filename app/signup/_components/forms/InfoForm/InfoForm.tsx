"use client";
import { useStepper } from "@/app/hooks/useStepper";
import { SignUpSchema } from "@/app/schema/SignUpFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { NextStepperButton } from "../../Stepper/Stepper";
import BarbershopNameInput from "./FieldsComponents/BarbershopNameInput";
import CnpjInput from "./FieldsComponents/CnpjInput";
import ConfirmPasswordInput from "./FieldsComponents/ConfirmPasswordInput";
import EmailInput from "./FieldsComponents/EmailInput";
import NameInput from "./FieldsComponents/NameInput";
import PasswordInput from "./FieldsComponents/PasswordInput";
import { IFormData } from "./Form.type";

const InfoForm = () => {
  const { nextStep } = useStepper();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IFormData>({
    defaultValues: {
      cnpj: "",
      confirmeSenha: "",
      email: "",
      nome: "",
      nomeBarbearia: "",
      senha: "",
    },
    resolver: zodResolver(SignUpSchema, undefined, { mode: "async" }),
    mode: "onBlur",
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
      <NameInput register={register} errors={errors} />
      <BarbershopNameInput register={register} errors={errors} />
      <EmailInput register={register} errors={errors} />
      <CnpjInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <ConfirmPasswordInput register={register} errors={errors} />
      <div className="w-full mt-5 md:mt-0 flex justify-end items-center">
        <NextStepperButton isValid={isValid} disabled={isSubmitting} />
      </div>
    </form>
  );
};

export default InfoForm;
