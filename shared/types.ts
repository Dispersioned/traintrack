export type ITimeValues = {
  prepare: number;
  train: number;
  rest: number;
  intervals: number;
};

export type IInterval = {
  type: Omit<keyof ITimeValues, 'intervals'>;
  time: number;
  width: number;
};
