// import { useState } from "react";

// export const useModal = () => {
//   const [visibleModal, setVisibleModal] = useState<string | null>(null);

//   const openModal = (name: string) => setVisibleModal(name);
//   const closeModal = () => setVisibleModal(null);
//   const isModalVisible = (name: string) => visibleModal === name;

//   return { openModal, closeModal, isModalVisible };
// };


import { create } from "zustand";

interface ModalState {
  visibleModal: string | null;
  openModal: (name: string) => void;
  closeModal: () => void;
  isModalVisible: (name: string) => boolean;
}

export const useModal = create<ModalState>((set, get) => ({
  visibleModal: null,

  openModal: (name: string) => set({ visibleModal: name }),
  closeModal: () => set({ visibleModal: null }),

  isModalVisible: (name: string) => get().visibleModal === name,
}));
