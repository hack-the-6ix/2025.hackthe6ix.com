'use client';

import Image from 'next/image';
import styles from './Sponsors.module.scss';

export default function LogoGrid() {
  // Array containing logo tiers with their respective logos and heights
  const allLogos = [
    {
      tier: 1,
      height: 10,
      logos: [
        { src: '/logo.png', alt: 'CSSU' },
        { src: '/logo.png', alt: 'Jane Street' },
      ],
    },
    {
      tier: 2,
      height: 6.4,
      logos: [
        { src: '/logo.png', alt: 'Warp' },
        { src: '/logo.png', alt: 'University of Toronto' },
        { src: '/logo.png', alt: 'Best Buy' },
      ],
    },
    {
      tier: 3,
      height: 4.8,
      logos: [
        { src: '/logo.png', alt: 'FGF' },
        { src: '/logo.png', alt: 'Awake' },
        { src: '/logo.png', alt: 'Balsamiq' },
        { src: '/logo.png', alt: 'Taskade' },
      ],
    },
  ];

  return (
    <div className="absolute flex flex-col z-5 left-1/2 -translate-x-1/2 gap-7 md:gap-16 pt-30 md:pt-8">
      {/* Iterating through logo tiers */}
      {allLogos.map((tierLogos) => (
        <div
          key={tierLogos.tier}
          className="flex flex-warp justify-center gap-2 md:gap-6 2xl:gap-10 w-full"
        >
          {/* Iterating through each logo within a tier */}
          {tierLogos.logos.map((logo, index) => (
            <Image
              key={index}
              src={logo.src}
              alt={logo.alt}
              width={500}
              height={500}
              className={`w-auto rounded-lg md:rounded-xl 2xl:rounded-2xl max-w-full ${styles.logo}`}
              style={
                {
                  '--default-height': `${tierLogos.height}rem`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}
