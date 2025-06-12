'use client';

import Image from 'next/image';
import Text from '@/components/Text';

interface Partner {
  alt: string;
  src: string;
  href?: string;
  border?: boolean;
}

export default function PartnersLogos() {
  const partners = [
    {
      src: '/sponsors/cshub.png',
      alt: 'CSHub',
      href: 'https://www.linkedin.com/showcase/yorkcshub',
    },
    {
      src: '/sponsors/mlh.png',
      alt: 'MLH',
      border: true,
      href: 'https://www.mlh.io',
    },
  ] as Partner[];

  return (
    <div className="absolute flex flex-col z-5 left-1/2 -translate-x-1/2 gap-7 md:gap-16 pt-30 md:pt-8">
      <Text
        textType="display"
        textWeight="medium"
        textColor="white"
        className="text-center"
      >
        Our Partners
      </Text>
      <div className="flex flex-wrap justify-center gap-2 md:gap-6 2xl:gap-10 w-full">
        {partners.map((partner, index) => (
          <a key={index} href={partner.href} target="_blank" rel="noreferrer">
            <Image
              src={partner.src}
              alt={partner.alt}
              width={500}
              height={500}
              className={`w-auto rounded-lg md:rounded-xl 2xl:rounded-2xl max-w-full h-20 md:h-24 2xl:h-30 ${partner.border ? 'border-16 border-white' : ''}`}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
