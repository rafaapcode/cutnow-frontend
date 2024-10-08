"use client";
import { useStepper } from "@/app/hooks/useStepper";
import { useBarbershopLocalizationState } from "@/context/barberShopInfo";
import { sessionStorageGetItem } from "@/lib/utils";
import { LocalizationFormSchema } from "@/schema/LocalizationFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NextStepperButton } from "../../Stepper/Stepper";
import { IFormData } from "../LocalizationForm/Form.type";
import BairroInput from "./FieldsComponents/BairroInput";
import CEPInput from "./FieldsComponents/CEPInput";
import CidadeInput from "./FieldsComponents/CidadeInput";
import EstadoInput from "./FieldsComponents/EstadoInput";
import NumeroInput from "./FieldsComponents/NumeroInput";
import RuaInput from "./FieldsComponents/RuaInput";

const LocalizationForm = () => {
  const { nextStep } = useStepper();
  const { setBarbershopLocalization } = useBarbershopLocalizationState();
  const locData = sessionStorageGetItem<IFormData>("localization-data");

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    setError,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IFormData>({
    defaultValues: {
      CEP: locData?.CEP ?? "",
      bairro: locData?.bairro ?? "",
      cidade: locData?.cidade ?? "",
      estado: locData?.estado ?? "",
      numero: locData?.numero ?? "",
      rua: locData?.rua ?? "",
    },
    mode: "onBlur",
    resolver: zodResolver(LocalizationFormSchema),
  });
  const onSubmit = handleSubmit((data: IFormData) => {
    sessionStorage.setItem("localization-data", JSON.stringify(data));
    const { CEP, numero, ...info } = data;
    setBarbershopLocalization({
      informacoes: {
        ...info,
        numero: parseInt(numero),
        cep: CEP,
        horarioAbertura: "00:00h",
        horarioFechamento: "00:00h",
      },
    });
    nextStep();
  });

  useEffect(() => {
    const { unsubscribe } = watch(async ({ CEP }, { name }) => {
      try {
        if (name === "CEP" && CEP?.length === 8) {
          const req = await fetch(`https://viacep.com.br/ws/${CEP}/json/`);
          const data = await req.json();

          if (!data.erro) {
            setValue("bairro", data.bairro);
            setValue("cidade", data.localidade);
            setValue("estado", data.uf);
            setValue("rua", data.logradouro);
          } else {
            setError("CEP", { type: "validate", message: "CEP inválido" });
          }
        }
      } catch {
        setError("CEP", { type: "validate", message: "CEP inválido" });
      }
    });

    return () => unsubscribe();
  }, [watch, setValue, setError]);

  return (
    <form
      className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-3 overflow-y-auto mt-16 text-white"
      onSubmit={onSubmit}
    >
      <CEPInput
        register={register}
        errors={errors}
        isSubmitting={isSubmitting}
      />
      <RuaInput register={register} errors={errors} />
      <BairroInput register={register} errors={errors} />
      <CidadeInput register={register} errors={errors} />
      <EstadoInput register={register} errors={errors} />
      <NumeroInput
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

export default LocalizationForm;
