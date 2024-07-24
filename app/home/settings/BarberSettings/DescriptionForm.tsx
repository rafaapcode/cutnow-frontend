"use client";

import { Textarea } from "@/components/ui/textarea";
import { DescriptionSchema } from "@/schema/DescriptionFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

type IFormData = z.infer<typeof DescriptionSchema>;

const DescriptionForm = () => {
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, isValid },
  } = useForm<IFormData>({
    defaultValues: {
      description: "",
    },
    resolver: zodResolver(DescriptionSchema),
  });
  const onSubmit = (data: any) => console.log(data);
  console.log(isValid);
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