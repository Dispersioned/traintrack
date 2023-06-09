'use client';
import { loadValuesFromLocalStore } from '@/helpers/loadValuesFromLocalStore';
import { saveValuesToLocalStore } from '@/helpers/saveValuesToLocalStore';
import { TextField } from '@/lib/mui';
import { ChangeEvent, PropsWithChildren, useEffect, useState } from 'react';
import styles from './styles.module.scss';

type TimeSelectorProps = PropsWithChildren<{}>;

export function TimeSelector({}: TimeSelectorProps) {
  const [values, setValues] = useState(loadValuesFromLocalStore());

  useEffect(() => {
    saveValuesToLocalStore(values);
  }, [values]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = +e.target.value;
    if (isNaN(newValue)) return;
    setValues((values) => ({
      ...values,
      [e.target.name]: newValue,
    }));
  };

  return (
    <div className={styles.wrapper}>
      <TextField label='Prepare' name='prepare' value={values.prepare} onChange={onChange} />
      <TextField label='Train' name='train' value={values.train} onChange={onChange} />
      <TextField label='Rest' name='rest' value={values.rest} onChange={onChange} />
      <TextField label='Intervals' name='intervals' value={values.intervals} onChange={onChange} />
    </div>
  );
}
