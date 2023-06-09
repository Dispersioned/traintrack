import { Button } from '@/lib/mui';
import styles from './styles.module.scss';
import { useTrainStore } from '@/store/useTrainStore';
import { useHasHydrated } from '@/hooks/useHasHydrated';

export function TrainButton() {
  const hasHydrated = useHasHydrated();

  const isRunning = useTrainStore((state) => state.isRunning);
  const toggleRunning = useTrainStore((state) => state.toggleRunning);

  return (
    <Button
      className={styles.button}
      variant='contained'
      color={isRunning ? 'warning' : 'info'}
      onClick={toggleRunning}
      disabled={!hasHydrated}>
      {isRunning ? 'pause' : 'start'}
    </Button>
  );
}
