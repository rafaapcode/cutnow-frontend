import { ServiceFormSchema } from "@/app/schema/ServiceSchema";
import { UseFieldArrayRemove } from "react-hook-form";
import * as z from "zod";

export type IFormData = z.infer<typeof ServiceFormSchema>;

export type FieldInputType = {
  register: any;
  index: number;
  remove: UseFieldArrayRemove;
};
