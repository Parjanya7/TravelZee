import { create } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

interface LoaderState {
  showModal: boolean;
  modalShown: boolean;
  setShowModal: (show: boolean) => void;
  setModalShown: (shown: boolean) => void;
}

const useModalStore = create<LoaderState>()(
  devtools(
    persist(
      (set) => ({
        showModal: false,
        modalShown: false,
        setShowModal: (show: boolean) => {
          set({ showModal: show });
        },
        setModalShown: (shown: boolean) => {
          set({ modalShown: shown });
        },
      }),
      {
        name: "modal-item-storage",
        storage: createJSONStorage(() => sessionStorage),
      },
    ),
  ),
);

export default useModalStore;
