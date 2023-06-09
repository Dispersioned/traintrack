import { TextField } from '@/lib/mui';
import { ITimeValues } from '@/shared/types';
import styles from './styles.module.scss';
import { getTotalTime } from '@/helpers/getTotalTime';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import { createIntervals } from '@/helpers/createRenderMap';
import { getColor } from '@/helpers/getColor';

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

  const intervals = createIntervals(values, singleSecondWidth);

  return (
    <div ref={timelineRef} className={styles.timeline_container}>
      {intervals.map((interval) => (
        <div
          className={styles.block}
          key={Math.random()}
          style={{
            width: interval.width,
            background: getColor(interval.type),
            height: 150,
          }}></div>
      ))}
    </div>
  );
}
