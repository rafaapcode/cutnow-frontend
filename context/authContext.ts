import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  user: null;
  setUser: (newUser: any) => void;
}

export const useAuthStore = create<AuthState>()(
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
