import { create } from 'zustand';

interface CountStoreType {
  count: number;
  increaseCount: () => void;
  removeAllCounts: () => void;
}

export const useCountStore = create<CountStoreType>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  removeAllCounts: () => set({ count: 0 }),
}));
