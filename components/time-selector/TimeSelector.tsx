'use client';
import { TextField } from '@/lib/mui';
import { useTimingsStore } from '@/store/useTimingsStore';
import styles from './styles.module.scss';

export function TimeSelector() {
  const { prepare, train, rest, intervals, onChange } = useTimingsStore();
  return (
    <div className={styles.wrapper}>
      <TextField label='Prepare' name='prepare' value={prepare} onChange={onChange} />
      <TextField label='Train' name='train' value={train} onChange={onChange} />
      <TextField label='Rest' name='rest' value={rest} onChange={onChange} />
      <TextField label='Intervals' name='intervals' value={intervals} onChange={onChange} />
    </div>
  );
}
