import { create } from "zustand";

const DeckStore = {
  Deck: {
    data: [],
    loading: false,
    error: null
  }
};

export const useDeckStore = create((set) => ({
  ...DeckStore,
  setDeck: (value) => {
    set({ Deck: value });
  },
  clearCard: () => set({ ...DeckStore })
}));
