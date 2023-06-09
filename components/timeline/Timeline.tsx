import { createIntervals } from '@/helpers/createRenderMap';
import { getColor } from '@/helpers/getColor';
import { getTotalTime } from '@/helpers/getTotalTime';
import { ITimeValues } from '@/shared/types';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';

type Timeline = {
  values: ITimeValues;
};

export function Timeline({ values }: Timeline) {
  const totalTime = getTotalTime(values);

  const timelineRef = useRef<HTMLDivElement>(null);
  const [timelineWidth, setTimelineWidth] = useState(0);

  useEffect(() => {
    if (!timelineRef.current) return;
    setTimelineWidth(timelineRef.current.offsetWidth);
  }, []);

  const singleSecondWidth = timelineWidth / totalTime;

  console.log('timelineWidth :>> ', timelineWidth);
  console.log('totalTime', totalTime);
  console.log('singleSecondWidth', singleSecondWidth);

  const intervals = createIntervals(values, singleSecondWidth);

  return (
    <div ref={timelineRef} className={styles.timeline_container}>
      {intervals.map((interval) => (
        <div
          className={styles.interval}
          key={Math.random()}
          style={{
            width: interval.width,
            background: getColor(interval.type),
          }}></div>
      ))}
    </div>
  );
}
