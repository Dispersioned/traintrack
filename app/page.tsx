'use client';
import { TimeSelector } from '@/components/time-selector';
import { Timeline } from '@/components/timeline';
import { loadValuesFromLocalStore } from '@/helpers/loadValuesFromLocalStore';
import { saveValuesToLocalStore } from '@/helpers/saveValuesToLocalStore';
import { useState, useEffect, ChangeEvent } from 'react';
import styles from './styles.module.scss';
import { Button, Typography } from '@/lib/mui';
import { getTotalTime } from '@/helpers/getTotalTime';

export default function Home() {
  const [isRunning, setIsRunning] = useState(false);

  const [values, setValues] = useState(loadValuesFromLocalStore());
  const totalTime = getTotalTime(values);

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

  function handleClick() {
    setIsRunning((isRunning) => !isRunning);
  }

  return (
    <div className={styles.content}>
      <Typography>Total: {totalTime}</Typography>
      <Timeline values={values} />
      <TimeSelector values={values} onChange={onChange} />
      <div>
        <Button variant='contained' color={isRunning ? 'warning' : 'info'} onClick={handleClick}>
          {isRunning ? 'pause' : 'start'}
        </Button>
      </div>
    </div>
  );
}
