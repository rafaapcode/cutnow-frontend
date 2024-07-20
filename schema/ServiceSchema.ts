import * as z from "zod";

export const ServiceFormSchema = z.object({
  services: z.object({
    nome: z.string({message: "Nome do serviço é obrigatório"}).min(3, "O nome deve ter no mínimo 3 caracteres"),
    preco: z.string({message: "O preço é obrigatório"}).min(1, {message: "O preço deve ter ser no mínimo 1 real"}),
    tempo: z.string({message: "O tempo é obrigatório"}).min(1, "O tempo é obrigatório")
  }).array()
});