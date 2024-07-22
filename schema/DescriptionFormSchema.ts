import * as z from "zod";

export const DescriptionSchema = z.object({
  description: z.string().max(250, "No máximo 250 caracteres").optional(),
});