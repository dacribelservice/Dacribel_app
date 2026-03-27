import { create } from "zustand";

interface ProductStore {
  isSheetOpen: boolean;
  openSheet: () => void;
  closeSheet: () => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  isSheetOpen: false,
  openSheet: () => set({ isSheetOpen: true }),
  closeSheet: () => set({ isSheetOpen: false }),
}));
