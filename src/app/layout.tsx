import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import './layout.scss';

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
      <body>
        {navigation}
        {children}
        {footer}
      </body>
      <Script strategy="lazyOnload" id="animate">
        {`document.documentElement.classList.add('animate');`}
      </Script>
    </html>
  );
}
