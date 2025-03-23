'use client';

import Image from 'next/image';
import Text from '@/components/Text';
import AxeChain from '../../assets/axe-chain.svg';
import Axe from '../../assets/axe.svg';
import Chain1 from '../../assets/chain1.svg';
import Chain2 from '../../assets/chain2.svg';
import Chain3 from '../../assets/chain3.svg';
import Firefly from '../../assets/firefly.svg';
import LeftBrickCorner from '../../assets/left-brick-corner.svg';
import RightBrickCorner from '../../assets/right-brick-corner.svg';
import RockGround from '../../assets/rock-ground.svg';
import RockTop from '../../assets/rock-top.svg';
import BecomeSponsor from './becomeSponsor';
import LogoGrid from './logoGrid';
import PartnershipInfo from './partnershipInfo';
import styles from './Sponsors.module.scss';

export default function Sponsors() {
  const haveSponsors = false;
  return (
    <section className="flex flex-col w-full h-full -translate-y-1/50">
      {/* First section with a background image and top rocks image */}
      <div className="relative bg-[#1d1616] bg-[url('/brick-background.svg')] bg-top bg-[auto_800px] md:bg-auto">
        {/* Image of the top rocks, positioned absolutely */}
        <Image
          src={RockTop}
          alt="Top rocks"
          width={500}
          height={500}
          layout="intrinsic"
          className="absolute w-full z-10 -translate-y-6/10"
        />
        {/* Sponsor-related information area */}
        <div className="relative flow flow-row items-start pt-20">
          <div className="absolute flex left-3/100 top-0 md:top-1/25 gap-6">
            <Image
              src={Chain1}
              alt="Chain"
              width={500}
              height={500}
              layout="intrinsic"
              className="z-5 w-6 md:w-13 2xl:w-18"
            />
            <Image
              src={Chain1}
              alt="Chain"
              width={500}
              height={500}
              layout="intrinsic"
              className="z-5 -translate-y-3/20 hidden md:block w-6 md:w-13 2xl:w-18"
            />
          </div>
          <div className="flex flex-col items-center w-full h-full gap-16 pt-8 pb-16 md:pt-60 md:pb-60 2xl:pb-51">
            <BecomeSponsor />
            <PartnershipInfo />
          </div>

          <Image
            src={Chain1}
            alt="Chain"
            width={500}
            height={500}
            layout="intrinsic"
            className="absolute right-4/100 top-1/75 md:top-1/25 z-5 w-6 md:w-13 2xl:w-18"
          />
        </div>
      </div>
      {/* Second section with a dark background and grainy pattern */}
      <div className="relative flex flex-col items-center w-full bg-[#191919] bg-[url('/grainy-background.png')] pb-60 md:pb-100 2xl:pb-110">
        <div className="flex flex-row w-full">
          <Image
            src={LeftBrickCorner}
            alt="Left Brick Corner"
            width={500}
            height={500}
            layout="intrinsic"
            className="items-start z-11 w-30 md:w-60 2xl:w-65"
          />
          <Image
            src={RightBrickCorner}
            alt="Right Brick Corner"
            width={500}
            height={500}
            layout="intrinsic"
            className="ml-auto z-11 w-30 md:w-60 2xl:w-65"
          />
        </div>
        {/* Sponsor logos or message if no sponsors area*/}
        <div className="flex flex-row items-start w-full">
          <Image
            src={AxeChain}
            alt="Axe Chain"
            width={500}
            height={500}
            layout="intrinsic"
            className="items-start z-10 pl-10 w-37 2xl:w-40 hidden md:block"
          />
          <Image
            src={Axe}
            alt="Axe"
            width={500}
            height={500}
            layout="intrinsic"
            className="items-start z-10 pl-15 w-32 -translate-y-1/3 md:hidden"
          />
          {haveSponsors ?
            <LogoGrid />
          : <div className="absolute flex z-5 left-1/2 -translate-x-1/2 max-w-250 translate-y-30">
              <Text
                textType="display"
                textWeight="medium"
                textColor="white"
                className="text-center"
              >
                Sponsors coming soon
              </Text>
            </div>
          }
          <Image
            src={Chain2}
            alt="Chain 2"
            width={500}
            height={500}
            layout="intrinsic"
            className="ml-auto z-10 pr-15 w-25 2xl:w-27 hidden md:block"
          />
          <Image
            src={Chain3}
            alt="Chain 3"
            width={500}
            height={500}
            layout="intrinsic"
            className="ml-auto z-10 pr-3 w-10 md:hidden"
          />
        </div>
        {/* Background elements like the rock ground and fireflies */}
        <div className="absolute justify-center w-[110%] z-15 top-7/10 lg:top-11/20 2xl:top-9/20">
          <Image
            src={RockGround}
            alt="Rock Ground"
            width={500}
            height={500}
            layout="intrinsic"
            className="relative w-full"
          />
          <Image
            src={Firefly}
            alt="Firefly"
            width={500}
            height={500}
            layout="intrinsic"
            className={`absolute w-[8%] z-10 top-[18%] left-[7%] ${styles.firefly1}`}
          />
          <Image
            src={Firefly}
            alt="Firefly"
            width={500}
            height={500}
            layout="intrinsic"
            className={`absolute w-[8%] z-10 top-[30%] left-[67%] ${styles.firefly2}`}
          />
          <Image
            src={Firefly}
            alt="Firefly"
            width={500}
            height={500}
            layout="intrinsic"
            className={`absolute w-[8%] z-10 top-[15%] left-[80%] ${styles.firefly3}`}
          />
        </div>
      </div>
    </section>
  );
}
