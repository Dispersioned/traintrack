'use client';
import { ITimings } from '@/shared/types';
import { ChangeEvent } from 'react';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type TimingsStore = ITimings & {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  total: () => number;
};

export const useTimingsStore = create<TimingsStore>()(
  persist(
    (set, get) => ({
      prepare: 10,
      train: 20,
      rest: 10,
      intervals: 8,
      total: () => {
        const values = get();
        return values.prepare + values.intervals * (values.train + values.rest);
      },
      onChange: (e) => {
        let newValue = +e.target.value;
        if (isNaN(newValue)) return;
        if (e.target.name === 'intervals') newValue = Math.min(newValue, 30);
        set({
          [e.target.name]: newValue,
        });
      },
    }),
    {
      name: 'timings',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
