import { Box, Typography } from '@/lib/mui';
import { useTrainStore } from '@/store/useTrainStore';
import { useEffect } from 'react';

export function TrainButton() {
  const isRunning = useTrainStore((state) => state.isRunning);
  const toggleRunning = useTrainStore((state) => state.toggleRunning);
  const stopRunning = useTrainStore((state) => state.stopRunning);
  const reset = useTrainStore((state) => state.reset);

  useEffect(() => {
    function keyListener(e: KeyboardEvent) {
      switch (e.key) {
        case ' ':
          toggleRunning();
          break;
        case 'r':
          stopRunning();
          reset();
          break;
      }
    }

    document.addEventListener('keypress', keyListener);

    return () => {
      document.removeEventListener('keypress', keyListener);
    };
  }, [reset, stopRunning, toggleRunning, isRunning]);

  return (
    <Box display='flex' flexDirection='column' alignItems='center' gap={2}>
      <Typography variant='h4'>
        Press{' '}
        <b>
          <i>SPACE</i>
        </b>{' '}
        to start / stop
      </Typography>
      <Typography variant='h4'>
        Press{' '}
        <b>
          <i>R</i>
        </b>{' '}
        to reset
      </Typography>
    </Box>
  );
}
