import { IBoundary, IInterval } from '@/shared/types';

export function calcBoundaries(blocks: IInterval[]) {
  const boundaries: IBoundary[] = [];
  let startTime = 0;

  blocks.forEach((block) => {
    boundaries.push({
      type: block.type,
      startTime,
      duration: block.time,
    });
    startTime += block.time;
  });
  return boundaries;
}
