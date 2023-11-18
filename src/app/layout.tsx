import 'normalize.css/normalize.css';
import './globals.scss';
import { Inter } from 'next/font/google';
import {ReactNode} from 'react';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'BeeTrade',
  description: 'BeeTrade: Navigate the Markets with Confidence',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="he" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
