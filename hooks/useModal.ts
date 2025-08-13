import { useState } from "react";

export const useModal = () => {
  const [visibleModal, setVisibleModal] = useState<string | null>(null);

  const openModal = (name: string) => setVisibleModal(name);
  const closeModal = () => setVisibleModal(null);
  const isModalVisible = (name: string) => visibleModal === name;

  return { openModal, closeModal, isModalVisible };
};