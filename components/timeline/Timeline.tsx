import { calcBoundaries } from '@/helpers/calcBoundaries';
import { createIntervals } from '@/helpers/createRenderMap';
import { getColor } from '@/helpers/getColor';
import { getTotalTime } from '@/helpers/getTotalTime';
import { useHasHydrated } from '@/hooks/useHasHydrated';
import { useTimingsStore } from '@/store/useTimingsStore';
import { useTrainStore } from '@/store/useTrainStore';
import { Skeleton } from '@mui/material';
import { memo, useEffect, useMemo, useRef, useState } from 'react';
import styles from './styles.module.scss';

export const Timeline = memo(function Timeline() {
  const hasHydrated = useHasHydrated();
  const { prepare, train, rest, intervals } = useTimingsStore();

  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineWidth, setTimelineWidth] = useState(0);

  useEffect(() => {
    function calcTimelineWidth() {
      console.log('tick');
      if (!timelineRef.current) return;
      setTimelineWidth(timelineRef.current.offsetWidth);
    }

    calcTimelineWidth();
    window.addEventListener('resize', calcTimelineWidth);
    return () => window.addEventListener('resize', calcTimelineWidth);
  }, []);

  const blockIntervals = useMemo(() => {
    const values = { prepare, train, rest, intervals };
    const totalTime = getTotalTime(values);
    const singleSecondWidth = timelineWidth / totalTime;
    return createIntervals(values, singleSecondWidth);
  }, [prepare, train, rest, intervals, timelineWidth]);

  const setBoundaries = useTrainStore((state) => state.setBoundaries);

  useEffect(() => {
    if (blockIntervals) setBoundaries(calcBoundaries(blockIntervals));
  }, [blockIntervals, setBoundaries]);

  return (
    <div ref={timelineRef} className={styles.timeline}>
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
});
