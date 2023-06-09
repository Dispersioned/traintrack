import { IInterval } from '@/shared/types';

type B = IInterval['type'];

export function getColor(type: IInterval['type']) {
  if (type === 'prepare') return '#66db42';
  else if (type === 'train') return '#cf4432';
  else if (type === 'rest') return '#7883e3';
  return 'lightgray';
}
