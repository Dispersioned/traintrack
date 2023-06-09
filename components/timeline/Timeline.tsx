import { TextField } from '@/lib/mui';
import { ITimeValues } from '@/shared/types';
import styles from './styles.module.scss';
import { getTotalTime } from '@/helpers/getTotalTime';
import { Fira_Sans_Extra_Condensed } from 'next/font/google';
import { useEffect, useRef, useState } from 'react';
import { createIntervals } from '@/helpers/createRenderMap';

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

  const oneSecondWidth = timelineWidth / totalTime;

  const prepareWidth = values.prepare * oneSecondWidth;
  const trainWidth = values.train * oneSecondWidth;
  const restWidth = values.rest * oneSecondWidth;
  const intervalsWidth = values.intervals * oneSecondWidth;

  const intervals = createIntervals(values);

  return <div ref={timelineRef}></div>;
}
