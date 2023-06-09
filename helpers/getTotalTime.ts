import { ITimeValues } from '@/shared/types';

export function getTotalTime(values: ITimeValues) {
  return Object.values(values).reduce((acc, v) => acc + +v, 0);
}
