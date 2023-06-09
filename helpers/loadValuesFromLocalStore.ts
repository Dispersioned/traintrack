'use client';
import { INTERVALS_KEY, PREPARE_KEY, REST_KEY, TRAIN_KEY } from '@/shared/config/storageKeys';
import { ITimeValues } from '@/shared/types';

export function loadValuesFromLocalStore(): ITimeValues {
  const timeValues = {
    prepare: localStorage.getItem(PREPARE_KEY) || 10,
    train: localStorage.getItem(TRAIN_KEY) || 20,
    rest: localStorage.getItem(REST_KEY) || 10,
    intervals: localStorage.getItem(INTERVALS_KEY) || 8,
  };
  return timeValues as ITimeValues;
}
