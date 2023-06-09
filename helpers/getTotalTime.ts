import { ITimings } from '@/shared/types';

export function getTotalTime(values: ITimings) {
  return +values.prepare + +values.intervals * (+values.train + +values.rest);
}
