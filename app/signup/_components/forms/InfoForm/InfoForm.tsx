"use client";
import { useStepper } from "@/app/hooks/useStepper";
import { useBarbershopInfoState } from "@/context/barberShopInfo";
import { SignUpSchema } from "@/schema/SignUpFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
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
  const { setBarbershopInfo } = useBarbershopInfoState();

  const {
    handleSubmit,
    register,
    setFocus,
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

  const onSubmit = handleSubmit(async (data: IFormData) => {
    const { confirmeSenha, nomeBarbearia, ...info } = data;
    const barbershopExist = await fetch(
      `https://cutnowauth.rafaapcode.com.br/auth/verfifyBarbershop?email=${info.email}&nome=${nomeBarbearia}&cnpj=${info.cnpj}`
    );
    const result = await barbershopExist.json();
    console.log(result);
    if (result.status) {
      toast.error(
        `Alguma barbearia já possui o campo: ${result.message} cadastrado. Coloque outro por favor.`,
        { className: "w-full" }
      );
      return;
    }
    setBarbershopInfo({
      ...info,
      nomeDaBarbearia: nomeBarbearia,
    });
    nextStep();
  });

  return (
    <form
      className="w-full h-full flex flex-col gap-3 md:gap-10 lg:gap-5 overflow-y-auto text-white"
      onSubmit={onSubmit}
    >
      <Toaster />
      <NameInput
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      <BarbershopNameInput
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      <EmailInput
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      <CnpjInput
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      <PasswordInput
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      <ConfirmPasswordInput
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      <div className="w-full col-span-3 mt-5 md:mt-0 flex justify-end items-center">
        <NextStepperButton isValid={isValid} disabled={isSubmitting} />
      </div>
    </form>
  );
};

export default InfoForm;
