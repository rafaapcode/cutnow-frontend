"use client";
import { getServices } from "@/app/actions/serviceUpdateForm";
import { useAuthStore } from "@/context/authContext";
import { validateServiceUpdateData } from "@/lib/utils";
import { useMutation } from "@apollo/client";
import { LoaderCircle, PlusCircleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Balancer from "react-wrap-balancer";
import ServiceField from "./FieldsComponents/ServiceField";
import ServiceFieldSkeleton from "./FieldsComponents/ServiceFieldSkeleton";
import { IFormData } from "./Form.type";
import { serviceUpdateQuery } from "./queries/serviceQuery";

const ServicesUpdateForm = () => {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const [serviceUpdateMutation] = useMutation(serviceUpdateQuery);
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, isLoading },
  } = useForm<IFormData>({
    defaultValues: async () => {
      const id = JSON.parse(localStorage.getItem("user-data") as string).state
        ?.user?.id;
      const services = await getServices(id);
      if (!services.status) {
        return {
          services: [],
        };
      }
      return {
        services: services.data,
      };
    },
  });

  const services = useFieldArray({
    control: control,
    name: "services",
  });
  const onSubmit = async (data: any) => {
    const { error, services } = validateServiceUpdateData(data);
    if (error) {
      toast(
        "O nome deve ter pelo menos 3 caracteres.\n\nO preço e o tempo de serviço são obrigatórios.",
        {
          duration: 6000,
        }
      );
    }
    const res = await serviceUpdateMutation({
      variables: {
        serviceData: {
          id: user?.id,
          servicos: services,
        },
      },
    });
    if (res.data.updateServices) {
      toast.success("Serviços atualizados com sucesso !");
      router.push("/home/settings");
      return;
    }
    toast.error("Ocorreu um erro , tente mais tarde.");
  };

  return (
    <div className="pt-14 h-full px-3 md:px-5">
      <div>
        <h1 className="font-semibold tracking-tight text-white text-lg md:text-2xl">
          <Balancer>Serviços :</Balancer>
        </h1>
        <p className="text-base md:text-xl text-secondary">
          <Balancer>
            Atualize os serviços que sua barbearia fornece , com preço e tempo
            médio da duração do serviço.
          </Balancer>
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
        className="max-h-full overflow-y-auto flex flex-col gap-5 text-white pb-2 md:pb-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        {isLoading ? (
          <ServiceFieldSkeleton />
        ) : (
          services.fields.map((field, index) => (
            <ServiceField
              key={field.id}
              index={index}
              register={register}
              remove={services.remove}
            />
          ))
        )}
        <div className="w-full col-span-3 mt-5 md:mt-0 flex justify-between items-center">
          <button
            disabled={isSubmitting || services.fields.length == 0 || !isDirty}
            className="w-fit transition-all duration-200 bg-terciary-green text-black p-3 rounded-md font-bold hover:bg-secondary-green disabled:bg-terciary-green/20"
          >
            {isSubmitting ? (
              <LoaderCircle className="mx-auto w-7 h-7 animate-spin" />
            ) : (
              "Atualizar"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ServicesUpdateForm;
