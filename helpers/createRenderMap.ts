import { IInterval, ITimeValues } from '@/shared/types';

export function createIntervals(values: ITimeValues) {
  const intervals: IInterval[] = [];
  if (values.prepare > 0) {
    intervals.push({
      type: 'prepare',
      time: values.prepare,
    });
  }

  const singleInterval: IInterval[] = [];
  singleInterval.push({
    type: 'train',
    time: values.train,
  });
  singleInterval.push({
    type: 'rest',
    time: values.rest,
  });
  for (let i = 0; i < values.intervals; i++) {
    intervals.push(...singleInterval);
  }
  return intervals;
}
