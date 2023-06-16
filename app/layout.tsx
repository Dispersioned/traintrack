import { Container } from '@/lib/mui';
import '@/styles/global.css';
import { Footer } from '@/widgets/footer/Footer';
import { Metadata } from 'next';
import { ABeeZee } from 'next/font/google';
import './styles.css';
import styles from './styles.module.scss';
import { MUIThemeProvider } from '@/providers/ThemeProvider';

const DEFAULT_FONT = ABeeZee({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'TrainTrack',
  description: 'Training tracker ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <MUIThemeProvider>
      <html lang='en'>
        <body className={DEFAULT_FONT.className}>
          <div className={styles.layout}>
            <Container
              maxWidth='lg'
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: '1 0 100%',
              }}>
              {children}
            </Container>
            <Footer />
          </div>
        </body>
      </html>
    </MUIThemeProvider>
  );
}
