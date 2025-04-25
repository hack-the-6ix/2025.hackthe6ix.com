'use client';

import Image from 'next/image';
import Link from 'next/link';
import Card2 from '@/components/Card2';
import Text from '@/components/Text';
import Anvil from '../../assets/anvil.svg';
import VikingMan from '../../assets/viking-man.svg';

export default function PartnershipInfo() {
  return (
    <div className="flex flex-col items-end">
      <Image
        src={Anvil}
        alt="Anvil"
        width={0}
        height={0}
        className="-translate-x-1/5 z-5 w-31 md:w-62 2xl:w-66"
      />
      {/* Card displaying sponsor information with custom background */}
      <Card2 borderColor="frameBlack" contentBackground="/lava.svg">
        <div className="flex px-12 py-2 md:p-12 gap-10 bg-[url('/lava.svg')] bg-center">
          {/* First card inside the main card for the Viking image */}
          <Card2
            borderColor="frameBlack"
            contentColor="neutral-50"
            className="w-36 h-44 md:w-72 md:h-88 2xl:w-84 2xl:h-96"
          >
            <div className="h-full flex items-center justify-center">
              <Image
                src={VikingMan}
                alt="Viking Man"
                height={0}
                width={0}
                className="h-[75%]"
              />
            </div>
          </Card2>
          {/* Second card inside the main card for sponsor information text*/}
          <div className="hidden md:block">
            <Card2
              borderColor="frameBlack"
              contentColor="neutral-50"
              className="w-72 h-88 2xl:w-84 2xl:h-96"
            >
              <div className="flex flex-col items-center justify-center h-full gap-8">
                <Text
                  textType="subtitle-sm"
                  textWeight="extra-bold"
                  textColor="primary"
                  className="w-[75%] text-center"
                >
                  Your name could be here!
                </Text>
                <Text
                  textType="paragraph-lg"
                  textWeight="medium"
                  textColor="primary"
                  className="w-[75%] text-center"
                >
                  And your logo could be to the left! Contact us{' '}
                  <Link href="mailto:sponsor@hackthe6ix.com">
                    sponsor@hackthe6ix.com
                  </Link>{' '}
                  for details on sponsoring the event.
                </Text>
              </div>
            </Card2>
          </div>
        </div>
      </Card2>
      {/* Mobile view for sponsor information text, displayed on small screens */}
      <div className="md:hidden pt-10">
        <Card2
          borderColor="frameBlack"
          contentColor="neutral-50"
          className="w-75 h-88"
        >
          <div className="flex flex-col items-center justify-center h-full gap-8">
            <Text
              textType="subtitle-sm"
              textWeight="extra-bold"
              textColor="primary"
              className="w-[75%] text-center"
            >
              Your name could be here!
            </Text>
            <Text
              textType="paragraph-lg"
              textWeight="medium"
              textColor="primary"
              className="w-[75%] text-center"
            >
              And your logo could be to the left! Contact us email@domain.com
              for details on sponsoring the event.
            </Text>
          </div>
        </Card2>
      </div>
    </div>
  );
}
