import { type ClassValue, clsx } from "clsx";
import { validate } from "cnpj";
import { twMerge } from "tailwind-merge";
import CPF from "./ValidateCpf";

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

export const validateCpf = (value: string) => {
  const regex = /^\d+$/;
  if(regex.test(value)) {
    const cpf = new CPF(value);
    return cpf.validacao();
  }
    
  return false;
}

export const validateCEP = (value: string) => {
  const regex = /^\d+$/;
  return regex.test(value);
}

export function sessionStorageGetItem<T>(key: string): T | null {
  try {
    const data = sessionStorage.getItem(key);
    if(!data) {
      return null
    }

    return JSON.parse(data);
  } catch  {
    return null;
  }
}