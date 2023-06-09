'use client';
import { create } from 'zustand';
import { useTimingsStore } from './useTimingsStore';
import { IBoundary, ITimings } from '@/shared/types';

type TrainStore = {
  intervalId: NodeJS.Timer | null;
  isRunning: boolean;
  boundaries: IBoundary[];
  elapsedMs: number;
  currentType: Omit<keyof ITimings, 'intervals'>;
  toggleRunning: () => void;
  setBoundaries: (blocks: IBoundary[]) => void;
};

export const useTrainStore = create<TrainStore>()((set, get) => ({
  isRunning: false,
  intervalId: null,
  boundaries: [],
  elapsedMs: 0,
  currentType: 'prepare',
  startRunning: () => {
    const { isRunning } = get();
    const intervalId = setInterval(() => {
      const { boundaries, elapsedMs } = get();

      function findCurrentType(boundaries: IBoundary[], elapsedMs: number) {
        const elapsedSeconds = Math.floor(elapsedMs / 1000);

        for (let i = 0; i < boundaries.length - 1; i++) {
          const currentBoundary = boundaries[i];
          const nextBoundary = boundaries[i + 1];
          if (elapsedSeconds >= currentBoundary.startTime && nextBoundary.startTime > elapsedSeconds) {
            return currentBoundary.type;
          }
        }

        // end of the training and restart
        set({ elapsedMs: 0, currentType: 'prepare' });
        get().stopRunning();
        get().reset();
      }

      const newCurrentType = findCurrentType(boundaries, elapsedMs);

      set({ elapsedMs: elapsedMs + 16, currentType: newCurrentType });
    }, 16);
    set({ isRunning: true, intervalId });
  },
  reset: () => {
    set({ elapsedMs: 0, currentType: 'prepare' });
  },
  stopRunning: () => {
    const { isRunning, intervalId } = get();
    clearInterval(intervalId!);
    set({ isRunning: false });
  },
  toggleRunning: () => {
    const { isRunning, intervalId } = get();
    if (isRunning) {
      get().stopRunning();
    } else {
      get().startRunning();
    }
  },
  setBoundaries: (boundaries) => {
    set({ boundaries });
  },
}));
