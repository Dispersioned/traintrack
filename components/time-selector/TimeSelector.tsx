'use client';
import { TextField } from '@/lib/mui';
import { ITimeValues } from '@/shared/types';
import styles from './styles.module.scss';
import { ChangeEvent } from 'react';

type TimeSelectorProps = {
  values: ITimeValues;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function TimeSelector({ values, onChange }: TimeSelectorProps) {
  return (
    <div className={styles.wrapper}>
      <TextField label='Prepare' name='prepare' value={values.prepare} onChange={onChange} />
      <TextField label='Train' name='train' value={values.train} onChange={onChange} />
      <TextField label='Rest' name='rest' value={values.rest} onChange={onChange} />
      <TextField label='Intervals' name='intervals' value={values.intervals} onChange={onChange} />
    </div>
  );
}
