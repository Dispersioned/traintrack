import { IInterval, ITimings } from '@/shared/types';

export function createIntervals(values: ITimings, singleSecondWidth: number) {
  const prepareWidth = values.prepare * singleSecondWidth;
  const trainWidth = values.train * singleSecondWidth;
  const restWidth = values.rest * singleSecondWidth;

  const intervals: IInterval[] = [];
  if (values.prepare > 0) {
    intervals.push({
      type: 'prepare',
      time: values.prepare,
      width: prepareWidth,
    });
  }

  const singleInterval: IInterval[] = [];
  singleInterval.push({
    type: 'train',
    time: values.train,
    width: trainWidth,
  });
  singleInterval.push({
    type: 'rest',
    time: values.rest,
    width: restWidth,
  });
  for (let i = 0; i < values.intervals; i++) {
    intervals.push(...singleInterval);
  }
  return intervals;
}
