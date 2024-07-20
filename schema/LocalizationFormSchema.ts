import * as z from "zod";
import { validateCEP } from "../lib/utils";

export const LocalizationFormSchema = z.object({
  CEP: z.string({message: "O CEP é obrigatório."}).min(8, "O CEP deve ter no mínimo 8 caracteres").max(8, "O cep deve ter no máximo 8 caracteres").refine(validateCEP, "Coloque um CEP válido"),
  rua: z.string(),
  bairro: z.string(),
  cidade: z.string(),
  estado: z.string(),
  numero: z.string({message: "O número é obrigatório"}).min(1, "Deve ter pelo meno 1 caractere")
});