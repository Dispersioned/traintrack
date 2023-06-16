'use client';
import { IBoundary, IIntervalType } from '@/shared/types';
import { create } from 'zustand';

type TrainStore = {
  intervalId: NodeJS.Timer | null;
  isRunning: boolean;
  boundaries: IBoundary[];
  elapsedMs: number;
  currentType: IIntervalType;
  toggleRunning: () => void;
  setBoundaries: (blocks: IBoundary[]) => void;
  startRunning: () => void;
  stopRunning: () => void;
  reset: () => void;
};

export const useTrainStore = create<TrainStore>()((set, get) => ({
  isRunning: false,
  intervalId: null,
  boundaries: [],
  elapsedMs: 0,
  currentType: 'prepare',
  startRunning: () => {
    const { boundaries } = get();
    const intervalId = setInterval(() => {
      const { elapsedMs } = get();
      const elapsedSeconds = Math.floor(elapsedMs / 1000);

      function findCurrentType(boundaries: IBoundary[], elapsedSeconds: number) {
        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i];
          const nextBoundary = boundaries[i + 1];

          if (nextBoundary) {
            if (elapsedSeconds >= boundary.startTime && nextBoundary.startTime > elapsedSeconds) {
              return boundary.type;
            }
          } else {
            if (boundary.startTime + boundary.duration >= elapsedSeconds) {
              return boundary.type;
            }
          }
        }
        return null;
      }

      const newCurrentType = findCurrentType(boundaries, elapsedSeconds);
      if (newCurrentType) {
        set({ elapsedMs: elapsedMs + 16, currentType: newCurrentType });
      } else {
        get().stopRunning();
        get().reset();
      }
    }, 16);
    set({ isRunning: true, intervalId });
  },
  stopRunning: () => {
    const { intervalId } = get();
    if (intervalId) clearInterval(intervalId);
    set({ isRunning: false, intervalId: null });
  },
  toggleRunning: () => {
    const { isRunning } = get();
    console.log('isRunning', isRunning);
    if (isRunning) {
      get().stopRunning();
    } else {
      get().startRunning();
    }
  },
  reset: () => {
    set({ elapsedMs: 0, currentType: 'prepare' });
  },
  setBoundaries: (boundaries) => {
    set({ boundaries });
  },
}));
