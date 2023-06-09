'use client';
import { TimeSelector } from '@/components/time-selector';
import { Timeline } from '@/components/timeline';
import { formatTime } from '@/helpers/formatTime';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { Button, Skeleton, Typography } from '@/lib/mui';
import { useTimingsStore } from '@/store/useTimingsStore';
import { useState } from 'react';
import styles from './styles.module.scss';

export default function Home() {
  const hasHydrated = useHasHydrated();
  const { total } = useTimingsStore();
  const [isRunning, setIsRunning] = useState(false);

  function handleClick() {
    setIsRunning((isRunning) => !isRunning);
  }

  return (
    <div className={styles.content}>
      {hasHydrated ? (
        <Typography variant='h2'>{formatTime(total())}</Typography>
      ) : (
        <Typography variant='h2'>
          <Skeleton width={100}></Skeleton>
        </Typography>
      )}
      <Timeline />
      <TimeSelector />
      <div>
        <Button variant='contained' color={isRunning ? 'warning' : 'info'} onClick={handleClick}>
          {isRunning ? 'pause' : 'start'}
        </Button>
      </div>
    </div>
  );
}
