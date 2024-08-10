import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
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
