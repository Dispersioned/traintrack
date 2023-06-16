export type ITimings = {
  prepare: number;
  train: number;
  rest: number;
  intervals: number;
};

export type IInterval = {
  type: Omit<keyof ITimings, 'intervals'>;
  time: number;
  width: number;
};

export type IBoundary = {
  type: Omit<keyof ITimings, 'intervals'>;
  startTime: number;
  duration: number;
};
