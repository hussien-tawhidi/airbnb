import { RegisterModalStore } from "@/types";
import { create } from "zustand";

export const useLoginModal = create<RegisterModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
