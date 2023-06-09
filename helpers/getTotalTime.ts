import { ITimeValues } from '@/shared/types';

export function getTotalTime(values: ITimeValues) {
  return +values.prepare + +values.intervals * (+values.train + +values.rest);
}
