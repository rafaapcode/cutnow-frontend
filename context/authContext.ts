import { create } from "zustand";
import { persist } from "zustand/middleware";

type BarbershopType = {
  informacoes: {
    cep: string;
    rua: string;
    bairro: string;
    cidade: string;
    estado: string;
    numero: number;
    horarioAbertura: string;
    horarioFechamento: string;
    fotosEstruturaBarbearia: string[];
    fotoBanner: string;
    logo: string;
    status: string;
  } | null;
  servicos: {nomeService: string; tempoMedio: number; preco: number;}[];
  id: string;
  email: string;
  nome: string;
  nomeDaBarbearia: string;
  cnpj: string;
  lat: string;
  lng: string;
  isAdm: boolean;
};

type AuthState = {
  user: any;
  setUser: (newUser: any) => void;
};

export const useAuthStore = create<AuthState, [["zustand/persist", AuthState]]>(
  persist(
    (set) => ({
      user: null,
      setUser: (newUser: any) => set({ user: newUser }),
    }),
    {
      name: "user-data",
    }
  )
);
