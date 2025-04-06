import { create } from "zustand";

type Store = {
  message_id: string | null;
  message: string;
  setNewMessage: (message_id: string | null, message: string) => void;
  reset: () => void;
};

export const useEditMessage = create<Store>()((set) => ({
  message_id: null,
  message: "",

  setNewMessage: (message_id: string | null, message: string) => {
    set((state) => ({
      ...state,
      message_id,
      message,
    }));
  },

  reset: () => {
    set((state) => ({
      ...state,
      message_id: null,
      message: "",
    }));
  },
}));
