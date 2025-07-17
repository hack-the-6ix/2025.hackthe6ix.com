'use client';

import Image from 'next/image';
import Text from '@/components/Text';
import styles from './Sponsors.module.scss';

export default function LogoGrid() {
  const allLogos = [
    {
      tier: 1,
      height: 8,
      logos: [
        {
          src: '/sponsors/vellum.png',
          alt: 'Vellum',
          href: 'https://www.vellum.ai',
        },
      ],
    },
    {
      tier: 2,
      height: 6.4,
      logos: [
        { src: '/sponsors/qnx.png', alt: 'QNX', href: 'https://www.qnx.com' },
        {
          src: '/sponsors/ribbon.png',
          alt: 'Ribbon',
          href: 'https://www.ribbon.ai',
        },
      ],
    },
    {
      tier: 3,
      height: 3.5,
      logos: [
        {
          src: '/sponsors/twelvelabs.png',
          alt: 'TwelveLabs',
          href: 'https://www.twelvelabs.io',
        },
        {
          src: '/sponsors/uoft.png',
          alt: 'University of Toronto, Department of Computer Science',
          href: 'https://web.cs.toronto.edu',
        },
        {
          src: '/sponsors/warp.png',
          alt: 'Warp',
          href: 'https://www.warp.dev',
        },
        {
          src: '/sponsors/tks.png',
          alt: 'The Knowledge Society (TKS)',
          href: 'https://tks.world',
        },
        {
          src: '/sponsors/deloitte.png',
          alt: 'Deloitte',
          href: 'https://www2.deloitte.com',
        },
        {
          src: '/sponsors/linear.png',
          alt: 'Linear',
          href: 'https://linear.app',
        },
        {
          src: '/sponsors/nokia.png',
          alt: 'Nokia',
          href: 'https://www.nokia.com',
        },
      ],
    },
    {
      tier: 4,
      height: 2.2,
      logos: [
        {
          src: '/sponsors/solcoa.jpg',
          alt: 'Solcoa Industries',
          href: 'https://solcoa.industries',
        },
        {
          src: '/sponsors/taskade.png',
          alt: 'Taskade',
          href: 'https://www.taskade.com',
        },
        {
          src: '/sponsors/awake.png',
          alt: 'Awake Chocolate',
          href: 'https://awakechocolate.com',
        },
        {
          src: '/sponsors/incogni.png',
          alt: 'Incogni',
          href: 'https://incogni.com',
        },
        {
          src: '/sponsors/nordvpn.png',
          alt: 'NordVPN',
          href: ' https://nordvpn.com/hackathons',
        },
        {
          src: '/sponsors/nordpass.png',
          alt: 'NordPass',
          href: 'https://nordpass.com',
        },
        {
          src: '/sponsors/nordprotect.png',
          alt: 'NordProtect',
          href: 'https://nordprotect.com/',
        },
        { src: '/sponsors/saily.png', alt: 'Saily', href: 'https://saily.com' },
        {
          src: '/sponsors/cryptochicks.png',
          alt: 'CryptoChicks',
          href: 'https://cryptochicks.ca',
        },
        {
          src: '/sponsors/microsoft.png',
          alt: 'Microsoft Reactor',
          href: 'https://reactor.microsoft.com',
        },
        {
          src: '/sponsors/nomadff.png',
          alt: 'Nomad Futurist Foundation',
          href: 'https://nomadfuturist.org',
        },
        {
          src: '/sponsors/fgf.png',
          alt: 'FGF Brands',
          href: 'https://fgfbrands.com',
        },
        {
          src: '/sponsors/tailed.png',
          alt: "Tail'ed",
          href: 'https://tailed.ca',
        },
      ],
    },
  ];

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
  ];

  return (
    <div className="flex flex-col items-center gap-5 md:gap-9 w-full max-w-[75%] mx-auto z-20 translate-y-1 md:-translate-y-1">
      {allLogos.map((tierLogos) => (
        <div
          key={tierLogos.tier}
          className="flex flex-wrap justify-center gap-2 md:gap-6 2xl:gap-10 w-full"
        >
          {tierLogos.logos.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-lg md:rounded-xl 2xl:rounded-2xl p-2 md:p-3 2xl:p-4"
            >
              <a href={logo.href} target="_blank" rel="sponsored">
                <Image
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
              </a>
            </div>
          ))}
        </div>
      ))}

      <div className="flex flex-col items-center gap-5 md:gap-9 pt-9">
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
              <div className="bg-white rounded-lg md:rounded-xl 2xl:rounded-2xl p-2 md:p-3 2xl:p-4">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={500}
                  height={500}
                  className={`w-auto rounded-lg md:rounded-xl 2xl:rounded-2xl max-w-full h-20 md:h-24 2xl:h-30 ${partner.border ? 'border-16 border-white' : ''}`}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
