'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import hamburger from '@/assets/hamburger.svg';
import Container from '@/components/Container';
import Text from '@/components/Text';
import icon from '../icon.png';

const Links = [
  { name: 'About', href: '#about' },
  { name: 'Sponsors', href: '#sponsors' },
  { name: 'Showcase', href: '#showcase' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container
      as="nav"
      className="px-16 border border-red-300 z-20 absolute top-0 w-full transparent h-32"
    >
      <Container className="max-w-[1700px] border border-red-300 w-full relative mx-auto flex items-center justify-between">
        <Image src={icon} alt="logo" className="w-24 z-30" />
        <Container className="flex items-center gap-8 w-full">
          <Container
            className="mr-30 ml-auto z-30"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <Image
              src={hamburger}
              alt="hamburger"
              className="z-50 w-6 lg:hidden"
            />
          </Container>
          <Container
            className={`${isOpen ? 'opacity-100 pointer-events-auto' : 'pointer-events-none opacity-0'} fixed top-0 left-0 w-screen h-screen bg-[#E5EFD8] z-10 lg:hidden transition-opacity duration-200`}
            onClick={() => {
              setIsOpen(false);
            }}
          >
            <div className="flex flex-col text-center w-screen items-center justify-center m-auto gap-6 h-screen">
              {Links.map((link, index) => (
                <Link href={link.href} key={`navlink-${index}`}>
                  <Text
                    textType="subtitle-sm"
                    className="font-bold"
                    textColor="primary"
                  >
                    {link.name}
                  </Text>
                </Link>
              ))}
            </div>
          </Container>
          <Container className="hidden lg:flex items-center gap-[50px] mr-36">
            {Links.map((link, index) => (
              <Link href={link.href} key={`navlink-${index}`}>
                <Text
                  textType="paragraph-lg"
                  className="font-bold"
                  textColor="primary"
                >
                  {link.name}
                </Text>
              </Link>
            ))}
          </Container>
          <a
            id="mlh-trust-badge"
            className="block max-w-[100px] min-w-[60px] w-[15%] z-[10000] absolute top-0 right-0"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2025-season&utm_content=blue"
            target="_blank"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2025/mlh-trust-badge-2025-blue.svg"
              alt="Major League Hacking 2025 Hackathon Season"
              className="w-full"
            ></img>
          </a>{' '}
        </Container>
      </Container>
    </Container>
  );
}
