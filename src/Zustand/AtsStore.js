import {create} from "zustand";

export const useAtsStore = create((set) => ({
  score: null,
  loading: false,
  setScore: (newScore) => set({ score: newScore }),
  setLoading: (isLoading) => set({ loading: isLoading }),
  resetScore: () => set({ score: null }),
  resetLoading: () => set({ loading: false }),
}));
