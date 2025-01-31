import './globals.css';
import { Inter } from 'next/font/google';
import { Header } from 'src/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Madhya Pradesh Art Festival 2025',
  description: 'Experience the vibrant culture and art of Madhya Pradesh',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
