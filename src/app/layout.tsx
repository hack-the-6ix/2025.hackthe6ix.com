import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './layout.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hack the 6ix',
  description: 'owo',
};

export interface RootLayoutProps {
  children: ReactNode;
  navigation: ReactNode;
  footer: ReactNode;
}

export default function RootLayout({
  children,
  navigation,
  footer,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {navigation}
        {children}
        {footer}
      </body>
    </html>
  );
}
