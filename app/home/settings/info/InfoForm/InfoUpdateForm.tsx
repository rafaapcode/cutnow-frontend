"use client";
import { UpdateInfoSchema } from "@/schema/UpdateInfoFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import BairroInput from "./FieldsComponents/BairroInput";
import BarbershopNameInput from "./FieldsComponents/BarbershopNameInput";
import CEPInput from "./FieldsComponents/CEPInput";
import CidadeInput from "./FieldsComponents/CidadeInput";
import CnpjInput from "./FieldsComponents/CnpjInput";
import EmailInput from "./FieldsComponents/EmailInput";
import EstadoInput from "./FieldsComponents/EstadoInput";
import NameInput from "./FieldsComponents/NameInput";
import NumeroInput from "./FieldsComponents/NumeroInput";
import RuaInput from "./FieldsComponents/RuaInput";
import { IFormData } from "./Form.type";

const InfoUpdateForm = () => {
  const router = useRouter();

  const {
    handleSubmit,
    register,
    watch,
    setValue,
    setError,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IFormData>({
    // TODO: Fazer o fetch ao banco de dados , para pegar os dados e atribuir como valor padrão
    defaultValues: async () => new Promise((resolve) => resolve({
      cnpj: "",
      email: "",
      nome: "",
      nomeBarbearia: "",
      CEP: "",
      bairro: "",
      cidade: "",
      estado: "",
      numero: "",
      rua: "",
    })),
    resolver: zodResolver(UpdateInfoSchema, undefined, { mode: "async" }),
    mode: "onBlur",
  });

  const onSubmit = handleSubmit(async (data: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    router.push("/home/settings");
    toast.success("Informações atualizadas com sucesso !");
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
    <>
      <form
        className="mt-5 md:mt-10 w-full max-h-[700px] xl:max-h-[600px] flex flex-col md:grid md:grid-cols-2 gap-x-16 gap-y-10 px-5 pb-3 md:pb-0 overflow-y-auto text-white snap-y scroll-smooth"
        onSubmit={onSubmit}
      >
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
        <div className="w-full md:col-span-2 mt-5 md:mt-0 flex justify-end items-center">
          <button
            disabled={isSubmitting || !isValid}
            className="transition-colors duration-150 bg-terciary-green px-3 py-2 rounded-md text-black tracking-tight font-semibold hover:bg-secondary-green disabled:bg-[#55641c]"
          >
            {isSubmitting ? (
              <LoaderCircle className="size-4 animate-spin" />
            ) : (
              "Atualizar"
            )}
          </button>
        </div>
      </form>
    </>
  );
};

export default InfoUpdateForm;