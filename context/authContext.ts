import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  user: any;
  setUser: (newUser: any) => void;
}

export const useAuthStore = create<AuthState, [["zustand/persist", AuthState]]>(
  persist(
    (set) => ({
      user: null,
      setUser: (newUser: any) => set({ user: newUser }),
    }),
    {
      name: 'user-data'
    }
  )
);
