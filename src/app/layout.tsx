import { ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import './layout.scss';

export const metadata: Metadata = {
  title: 'Hack the 6ix',
  description: 'owo',
};

export interface RootLayoutProps {
  navigation: ReactNode;
  footer: ReactNode;
  about: ReactNode;
  contact: ReactNode;
  home: ReactNode;
  faq: ReactNode;
  showcase: ReactNode;
  sponsors: ReactNode;
}

export default function RootLayout({
  navigation,
  footer,
  about,
  contact,
  home,
  faq,
  showcase,
  sponsors,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        {navigation}
        {about}
        {contact}
        {home}
        {faq}
        {showcase}
        {sponsors}
        {footer}
      </body>
      <Script strategy="lazyOnload" id="animate">
        {`document.documentElement.classList.add('animate');`}
      </Script>
    </html>
  );
}
