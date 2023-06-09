'use client';
import { create } from 'zustand';

type TrainStore = {
  intervalId: NodeJS.Timer | null;
  isRunning: boolean;
  toggleRunning: () => void;
};

export const useTrainStore = create<TrainStore>()((set, get) => ({
  isRunning: false,
  intervalId: null,
  toggleRunning: () => {
    const { isRunning, intervalId } = get();
    if (isRunning) {
      clearInterval(intervalId!);
      set({ isRunning: false });
    } else {
      const intervalId = setInterval(() => {
        console.log('tick');
      }, 16);
      set({ isRunning: true, intervalId });
    }
  },
}));
