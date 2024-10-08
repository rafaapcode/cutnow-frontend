"use client";
import { SignUpAdmin } from "@/app/actions/signUpAdmin";
import { useBarbershopInfoState, useBarbershopLocalizationState } from "@/context/barberShopInfo";
import { cn, sessionStorageDeleteItem } from "@/lib/utils";
import { ServiceFormSchema } from "@/schema/ServiceSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle, PlusCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Balancer from "react-wrap-balancer";
import { PrevStepperButton } from "../../Stepper/Stepper";
import ServiceField from "./FieldsComponents/ServiceField";
import { IFormData } from "./Form.type";

const ServicesForm = () => {
  const {barbershopInfo} = useBarbershopInfoState();
  const {barbershopLocalization} = useBarbershopLocalizationState();
  const router = useRouter();
  const { control, register, handleSubmit, formState: {errors, isValid, isSubmitting}  } = useForm<IFormData>({
    defaultValues: {
      services: [
        { nome: "Cabelo", preco: "35", tempo: "60" },
        { nome: "Barba", preco: "20", tempo: "30" },
      ],
    },
    resolver: zodResolver(ServiceFormSchema),
    mode: "onBlur",
  });

  const services = useFieldArray({
    control: control,
    name: "services",
  });

  const onSubmit = async (data: IFormData) => {
    const servicos = data.services.map(({nome, preco, tempo}) => ({nomeService: nome, preco: parseFloat(preco), tempoMedio: parseFloat(tempo)}));
    const barbershopSignUpData = {
      ...barbershopInfo,
      ...barbershopLocalization,
      servicos
    };
    const res = await SignUpAdmin(barbershopSignUpData);

    if(res.status) {
      toast.success(res.message);
      sessionStorageDeleteItem("localization-data");
      router.push("/");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <div className="pt-14 h-full px-1 md:px-5 ">
      <div>
        <h1 className="font-semibold tracking-tight text-white text-lg md:text-2xl">
          <Balancer>Serviços :</Balancer>
        </h1>
        <p className="text-base md:text-xl text-secondary">
          <Balancer>Registre aqui os serviços que sua barbearia fornece , com preço e
          tempo médio da duração do serviço.</Balancer>
        </p>
      </div>
      <button
        type="button"
        onClick={() => {
          services.append({ nome: "", preco: "", tempo: "" });
        }}
        className="w-fit my-10 transition-all bg-white/20 hover:bg-secondary-black p-1.5 rounded-lg shadow-md hover:"
      >
        <PlusCircleIcon className="size-7" />
      </button>
      <form
        className="max-h-full overflow-y-auto flex flex-col gap-5 text-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        {services.fields.map((field, index) => (
          <ServiceField
            key={field.id}
            index={index}
            register={register}
            remove={services.remove}
          />
        ))}
        {errors.services && <small className={cn("text-xs text-red-300 tracking-tight", !errors.services[0]?.nome && "hidden")}>{errors.services[0]?.nome?.message}</small>}
        {errors.services && <small className={cn("text-xs text-red-300 tracking-tight", !errors.services[0]?.preco && "hidden")}>{errors.services[0]?.preco?.message}</small>}
        {errors.services && <small className={cn("text-xs text-red-300 tracking-tight", !errors.services[0]?.tempo && "hidden")}>{errors.services[0]?.tempo?.message}</small>} 
        <div className="w-full col-span-3 mt-5 md:mt-0 flex justify-between items-center">
          <PrevStepperButton />
          <button disabled={!isValid || isSubmitting || services.fields.length == 0} className="w-fit transition-all duration-200 bg-terciary-green text-black p-3 rounded-md font-bold hover:bg-secondary-green disabled:bg-terciary-green/20">
           {isSubmitting ? <LoaderCircle className="mx-auto w-7 h-7 animate-spin"/> : "Finalizar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServicesForm;
