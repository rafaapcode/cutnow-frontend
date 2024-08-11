import { create } from "zustand";

type BarbershopInfoState = {
  barbershopInfo: any;
  setBarbershopInfo: (newInfo: any) => void;
}

export const useBarbershopInfoState = create<BarbershopInfoState>(
  (set) => ({
    barbershopInfo: null,
    setBarbershopInfo: (newInfo: any) => set({barbershopInfo: newInfo})
  })
)

type BarbershopLocalizationState = {
  barbershopLocalization: any;
  setBarbershopLocalization: (newLocalization: any) => void;
}

export const useBarbershopLocalizationState = create<BarbershopLocalizationState>(
  (set) => ({
    barbershopLocalization: null,
    setBarbershopLocalization: (newLocalization: any) => set({barbershopLocalization: newLocalization})
  })
)