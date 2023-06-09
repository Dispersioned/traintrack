import { createIntervals } from '@/helpers/createRenderMap';
import { getColor } from '@/helpers/getColor';
import { getTotalTime } from '@/helpers/getTotalTime';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.scss';
import { useTimingsStore } from '@/store/useTimingsStore';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { Skeleton } from '@mui/material';

export function Timeline() {
  const hasHydrated = useHasHydrated();
  const { prepare, train, rest, intervals } = useTimingsStore();

  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineWidth, setTimelineWidth] = useState(0);

  useEffect(() => {
    if (!timelineRef.current) return;
    setTimelineWidth(timelineRef.current.offsetWidth);
  }, []);

  const blockIntervals = useMemo(() => {
    const values = { prepare, train, rest, intervals };
    const totalTime = getTotalTime(values);
    const singleSecondWidth = timelineWidth / totalTime;
    return createIntervals(values, singleSecondWidth);
  }, [prepare, train, rest, intervals, timelineWidth]);

  return (
    <div ref={timelineRef}>
      {hasHydrated ? (
        <div className={styles.timeline_container}>
          {blockIntervals.map((interval) => (
            <div
              className={styles.interval}
              key={Math.random()}
              style={{
                width: interval.width,
                background: getColor(interval.type),
              }}></div>
          ))}
        </div>
      ) : (
        <Skeleton variant='rounded' width='100%' height={150}></Skeleton>
      )}
    </div>
  );
}
