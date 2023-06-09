import { Button } from '@/lib/mui';
import styles from './styles.module.scss';
import { useTrainStore } from '@/store/useTrainStore';

export function TrainButton() {
  const isRunning = useTrainStore((state) => state.isRunning);
  const toggleRunning = useTrainStore((state) => state.toggleRunning);

  return (
    <Button
      className={styles.button}
      variant='contained'
      color={isRunning ? 'warning' : 'info'}
      onClick={toggleRunning}>
      {isRunning ? 'pause' : 'start'}
    </Button>
  );
}
