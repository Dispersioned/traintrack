import { INTERVALS_KEY, PREPARE_KEY, REST_KEY, TRAIN_KEY } from '@/shared/config/storageKeys';
import { ITimeValues } from '@/shared/types';

export function saveValuesToLocalStore(timeValues: ITimeValues) {
  localStorage.setItem(PREPARE_KEY, timeValues.prepare.toString());
  localStorage.setItem(TRAIN_KEY, timeValues.train.toString());
  localStorage.setItem(REST_KEY, timeValues.rest.toString());
  localStorage.setItem(INTERVALS_KEY, timeValues.intervals.toString());
}
