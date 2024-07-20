import * as z from "zod";

export const LoginFormSchema = z.object({
  email: z.string({message: "O email é obrigatório"}).email({message: "Email inválido"}),
  password: z.string({message: "A senha é obrigatória"}).min(8, {message: "A senha deve ter no mínimo 8 caracteres."})
});