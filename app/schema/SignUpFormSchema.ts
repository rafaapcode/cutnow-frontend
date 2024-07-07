import * as z from "zod";
import { validateCnpj } from "../lib/utils";

const messagePasswordError = {
  message: `Crie uma senha forte que tenha os seguintes critérios:
  Pelo menos 8 caracteres.
  Pelo menos uma letra maiúscula.
  Pelo menos uma letra minúscula.
  Pelo menos um dígito.
  Pelo menos um caractere especial (como !@#$%^&*).`
}

export const SignUpSchema = z.object({
  nome: z.string({message: "O nome é obrigatório."}).min(3, "O nome deve ter no mínimo 3 caracteres."),
  nomeBarbearia: z.string({message: "O nome da barbearia é obrigatório."}).min(3, "O nome da barbearia deve ter no mínimo 3 caracteres."),
  email: z.string({message: "O email é obrigatório"}).email({message: "Email inválido"}),
  cnpj: z.string({message: "O cnpj é obrigatório"}).min(14, "O CNPJ deve ter no mínimo 14 caracteres").refine(validateCnpj, {message: "Forneça um CNPJ válido"}),
  senha: z.string({message: "A senha é obrigatória"}).min(8, "A senha deve ter no mínimo 8 caracteres").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, messagePasswordError),
  confirmeSenha: z.string({message: "A confirmação de senha é obrigatória"})
}).refine((data) => {
  data.senha === data.confirmeSenha
}, {message: "As senhas devem ser iguais", path: ['confirmeSenha']});