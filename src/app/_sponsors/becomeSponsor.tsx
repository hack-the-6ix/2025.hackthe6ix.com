'use client';

import Image from 'next/image';
import Button from '@/components/Button';
import Card2 from '@/components/Card2';
import Text from '@/components/Text';
import AnimatedCandle1 from '../../assets/animated-candle1.svg';
import AnimatedCandle2 from '../../assets/animated-candle2.svg';
import styles from './Sponsors.module.scss';

export default function BecomeSponsor() {
  return (
    <div className="flex flex-col items-center w-full h-full gap-12 max-w-320">
      {/* Heading card */}
      <div className="w-full">
        <Card2
          contentColor="neutral-50"
          className="w-[68%] md:w-[calc(100%-20rem)]"
        >
          <div className="flex justify-center text-center py-10">
            <Text textType="heading-lg" textWeight="black" textColor="primary">
              Forging the path to innovation
            </Text>
          </div>
        </Card2>
      </div>
      {/* Sponsor info section*/}
      <div className="flex flex-row items-end gap-8">
        <Image
          src={AnimatedCandle1}
          alt="Candle"
          width={94}
          height={277}
          layout="intrinsic"
          className="translate-y-1/5 hidden md:block"
        />
        {/* Card displaying sponsor details and call-to-action */}
        <Card2 contentColor="neutral-50" className="w-[68%] md:w-full">
          <div className="flex flex-col items-center py-14 md:py-26 gap-14">
            <div className="flex flex-col items-center w-[90%] md:w-[75%] gap-4">
              <Text
                textType="paragraph-lg"
                textWeight="medium"
                textColor="primary"
                className="text-center"
              >
                Each year, our sponsors unite thousands of emerging developers,
                designers, and builders, forging lasting connections with
                connections with hackers. Special thanks to our sponsors for
                supporting Hack the 6ix and the birth of great ideas.
              </Text>
              <Text
                textType="paragraph-lg"
                textWeight="bold"
                textColor="primary"
                className="text-center"
              >
                Want to help us make Hack the 6ix a reality?
              </Text>
            </div>
            <div className={styles.rainbowButtonWrapper}>
              <Button
                contentColor="secondary"
                pixelSize={5}
                borderColor="neutral-900"
                radius={4}
                borderWidth={2}
                buttonPadding={18}
                onClick={(e) => {
                  window.location.href =
                    'mailto:sponsor@hackthe6ix.com?subject=Interest in Sponsoring Hack the 6ix';
                  e.preventDefault();
                }}
              >
                <Text
                  textType="paragraph-lg"
                  textWeight="medium"
                  textColor="white"
                >
                  Become a sponsor
                </Text>
              </Button>
            </div>
          </div>
        </Card2>
        <Image
          src={AnimatedCandle2}
          alt="Candle"
          width={94}
          height={277}
          layout="intrinsic"
          className="translate-y-1/5 hidden md:block"
        />
      </div>
    </div>
  );
}
