import { type ClassValue, clsx } from "clsx";
import { validate } from "cnpj";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const validateCnpj = (value: string) => {
  const regex = /^\d+$/;
  if(regex.test(value)) {
    return validate(parseInt(value));
  }
    
  return false;
}
