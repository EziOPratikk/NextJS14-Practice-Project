import { Inter } from 'next/font/google';

import './globals.css';
import MainNavigation from '@/components/header/MainNavigation';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Learning Project',
    description: '%s | Next.js 14',
  },
  description: 'Next.js starter app description',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='main-container'>
          <MainNavigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
