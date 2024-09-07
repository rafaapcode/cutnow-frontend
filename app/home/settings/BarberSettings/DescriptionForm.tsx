"use client";

import { Textarea } from "@/components/ui/textarea";
import { DescriptionSchema } from "@/schema/DescriptionFormSchema";
import { useLazyQuery, useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as z from "zod";
import { createDescricao, getDescricao } from "./queries/barberInfo";

type IFormData = z.infer<typeof DescriptionSchema>;

const DescriptionForm = () => {
  const [descricaoQuery] = useLazyQuery(getDescricao);
  const [descricaoMutation] = useMutation(createDescricao);
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isValid },
  } = useForm<IFormData>({
    defaultValues: async () => {
      const id = JSON.parse(localStorage.getItem("user-data") as string).state
        ?.user?.id;
      if (!id) return { description: "" };
      const res = await descricaoQuery({
        variables: { barberId: id },
        pollInterval: 500,
      });
      if (
        !res.data?.barber?.informacoes ||
        !res.data?.barber?.informacoes?.descricao
      ) {
        return {
          description: "",
        };
      }
      return {
        description: res.data?.barber?.informacoes?.descricao,
      };
    },
    resolver: zodResolver(DescriptionSchema),
  });
  const onSubmit = async (data: IFormData) => {
    const id = JSON.parse(localStorage.getItem("user-data") as string).state
      ?.user?.id;
    const res = await descricaoMutation({
      variables: {
        informations: {
          id,
          informations: {
            descricao: data.description,
          },
        },
      },
    });

    if (!res.data.updateInfoBarber) {
      toast.error("Ocorreu um erro , tente mais tarde.");
      return;
    }

    toast.success("Descrição atualizada com sucesso !");
  };

  return (
    <form
      className="w-full mt-5 flex flex-col justify-center gap-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Textarea
        {...register("description")}
        placeholder="Nos conte um pouco sobre você"
        className="bg-neutral-900 h-[300px]"
      />
      {!isValid && (
        <small className="text-red-300">Use no máximo 250 caracteres.</small>
      )}
      <button
        disabled={isSubmitting || !isValid}
        className="bg-secondary-green w-fit mx-auto text-black tracking-wide p-2 font-semibold rounded-md hover:bg-terciary-green transition-alld duration-150 disabled:bg-[#55641c]"
      >
        {isSubmitting ? (
          <LoaderCircle className="size-4 animate-spin" />
        ) : (
          "Salvar Descrição"
        )}
      </button>
    </form>
  );
};

export default DescriptionForm;
