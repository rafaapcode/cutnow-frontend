import { validateCpf } from "@/lib/utils";
import * as z from "zod";

const messagePasswordError = {
  message: "Crie uma senha forte que contenha letras MAIÚSCULAS , minúsculas, números(123...) e caracteres especiais (!@#$&*)."
}

export const AddBarberSchema = z.object({
  nome: z.string({message: "O nome obrigatório."}).min(5,"O nome deve ter no mínimo 5 caracteres."),
  email: z.string({message: "O nome obrigatório."}).email({message: "Email inválido"}).regex(/^[a-zA-Z0-9._%+-]+(@gmail|@outlook|@yahoo)\.(com|org)$/, {message: "Coloque um email válido."}),
  cpf: z.string({message: "O CPF é obrigatório"}).min(11, "O CPF deve ter no mínimo 11 caracteres").max(11, "O CPF deve ter no máximo 11 caracteres").refine(validateCpf, "Coloque um CPF válido"),
  senha: z.string({message: "A senha é obrigatória"}).min(8, "A senha deve ter no mínimo 8 caracteres").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, messagePasswordError),
});

