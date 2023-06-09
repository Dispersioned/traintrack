'use client';
import { TimeSelector } from '@/components/time-selector';
import { Timeline } from '@/components/timeline';
import { formatTime } from '@/helpers/formatTime';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { Button, Skeleton, Typography } from '@/lib/mui';
import { useTimingsStore } from '@/store/useTimingsStore';
import { useState } from 'react';
import styles from './styles.module.scss';
import { TrainButton } from '@/components/train-button';

export default function Home() {
  const hasHydrated = useHasHydrated();
  const { total } = useTimingsStore();

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
        <TrainButton />
      </div>
    </div>
  );
}
