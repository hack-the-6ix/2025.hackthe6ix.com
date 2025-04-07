import { PropsWithChildren, ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import './layout.scss';

export const metadata: Metadata = {
  title: 'Hack the 6ix 2025',
  description: `Hack the 6ix is Toronto's largest summer hackathon, where anyone can hack to. network, learn, create, collaborate, innovate, and network.`,
};

export interface RootLayoutProps extends PropsWithChildren {
  navigation: ReactNode;
  footer: ReactNode;
}

export default function RootLayout({
  navigation,
  children,
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
