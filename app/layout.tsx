import { Container } from '@/lib/mui';
import '@/styles/global.css';
import { Metadata } from 'next';
import { ABeeZee } from 'next/font/google';
import './styles.css';
import styles from './styles.module.scss';

const DEFAULT_FONT = ABeeZee({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'TrainTrack',
  description: 'Training tracker ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={DEFAULT_FONT.className}>
        <div className={styles.layout}>
          <Container maxWidth='md' className={styles.main}>
            {children}
          </Container>
        </div>
      </body>
    </html>
  );
}
