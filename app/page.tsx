'use client';
import { TimeSelector } from '@/components/time-selector';
import { Timeline } from '@/components/timeline';
import { loadValuesFromLocalStore } from '@/helpers/loadValuesFromLocalStore';
import { saveValuesToLocalStore } from '@/helpers/saveValuesToLocalStore';
import { useState, useEffect, ChangeEvent } from 'react';
import styles from './styles.module.scss';

export default function Home() {
  const [values, setValues] = useState(loadValuesFromLocalStore());

  useEffect(() => {
    saveValuesToLocalStore(values);
  }, [values]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    let newValue = +e.target.value;
    if (isNaN(newValue)) return;
    if (e.target.name === 'intervals') newValue = Math.min(newValue, 30);
    setValues((values) => ({
      ...values,
      [e.target.name]: newValue,
    }));
  };

  return (
    <div className={styles.content}>
      <Timeline values={values} />
      <TimeSelector values={values} onChange={onChange} />
    </div>
  );
}
