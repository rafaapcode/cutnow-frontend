import { UpdateInfoSchema } from "@/schema/UpdateInfoFormSchema";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import * as z from "zod";

export type IFormData = z.infer<typeof UpdateInfoSchema>;
export type RegisterType = UseFormRegister<IFormData>
type FieldType = FieldErrors<IFormData>

export type FieldInputType = {register: RegisterType, errors: FieldType, isSubmitting?: boolean}
