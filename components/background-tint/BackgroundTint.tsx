import { getColor } from '@/helpers/getColor';
import { useTrainStore } from '@/store/useTrainStore';

export function BackgroundTint() {
  const isRunning = useTrainStore((state) => state.isRunning);
  const currentType = useTrainStore((state) => state.currentType);

  return (
    <div
      style={{
        position: 'fixed',
        width: '100vw',
        height: '100vh',
        left: 0,
        top: 0,
        opacity: 0.5,
        background: isRunning ? getColor(currentType) : '',
        zIndex: -1,
      }}>
      123
    </div>
  );
}
