export type ITimings = {
  prepare: number;
  train: number;
  rest: number;
  intervals: number;
};

export type IIntervalType = Omit<keyof ITimings, 'intervals'>;

export type IInterval = {
  type: IIntervalType;
  time: number;
  width: number;
};

export type IBoundary = {
  type: IIntervalType;
  startTime: number;
  duration: number;
};
