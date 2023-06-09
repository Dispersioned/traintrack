import Link from 'next/link';
import styles from './styles.module.scss';
import { Box } from '@mui/material';

export function Footer() {
  return (
    <div className={styles.container}>
      Created by{' '}
      <Link
        className={styles.profile_link}
        href='https://github.com/Dispersioned'
        target='_blank'
        rel='noreferrer noopenner'>
        Dispersioned
      </Link>
    </div>
  );
}
