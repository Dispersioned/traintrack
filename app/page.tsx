'use client';
import { BackgroundTint } from '@/components/background-tint';
import { TimeSelector } from '@/components/time-selector';
import { Timeline } from '@/components/timeline';
import { TrainButton } from '@/components/train-button';
import { formatTime } from '@/helpers/formatTime';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { Skeleton, Typography } from '@/lib/mui';
import { useTimingsStore } from '@/store/useTimingsStore';
import { useTrainStore } from '@/store/useTrainStore';
import styles from './styles.module.scss';
import { getColor } from '@/helpers/getColor';

export default function Home() {
  const hasHydrated = useHasHydrated();
  const { total } = useTimingsStore();

  const isRunning = useTrainStore((state) => state.isRunning);
  const elapsedMs = useTrainStore((state) => state.elapsedMs);
  const currentType = useTrainStore((state) => state.currentType);
  const elapsedSeconds = Math.floor(elapsedMs / 1000);

  return (
    <div className={styles.content}>
      {hasHydrated ? (
        <>
          {isRunning && (
            <Typography variant='h1' style={{ background: '#000', color: getColor(currentType), padding: '5px 20px' }}>
              {currentType}
            </Typography>
          )}
          <Typography variant='h2'>
            {isRunning ? `${formatTime(elapsedSeconds)} / ${formatTime(total())}` : formatTime(total())}
          </Typography>
        </>
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
      <BackgroundTint />
    </div>
  );
}
