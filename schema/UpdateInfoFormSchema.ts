import * as z from "zod";
import { validateCEP, validateCnpj } from "../lib/utils";


export const UpdateInfoSchema = z.object({
  nome: z.string({message: "O nome é obrigatório."}).min(3, "O nome deve ter no mínimo 3 caracteres."),
  nomeBarbearia: z.string({message: "O nome da barbearia é obrigatório."}).min(3, "O nome da barbearia deve ter no mínimo 3 caracteres."),
  email: z.string({message: "O email é obrigatório"}).email({message: "Email inválido"}).regex(/^[a-zA-Z0-9._%+-]+(@gmail|@outlook|@yahoo)\.(com|org)$/, {message: "Coloque um email válido."}),
  cnpj: z.string({message: "O cnpj é obrigatório"}).min(14, "O CNPJ deve ter no mínimo 14 caracteres").refine(validateCnpj, {message: "Forneça um CNPJ válido"}),
  CEP: z.string({message: "O CEP é obrigatório."}).min(8, "O CEP deve ter no mínimo 8 caracteres").max(8, "O cep deve ter no máximo 8 caracteres").refine(validateCEP, "Coloque um CEP válido"),
  rua: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  estado: z.string(),
  numero: z.string({message: "O número é obrigatório"}).min(1, "Deve ter pelo meno 1 caractere")
});