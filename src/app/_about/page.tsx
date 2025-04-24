import Image from 'next/image';
import AboutFountain from '@/assets/about-fountain.svg';
import AboutGroup from '@/assets/about-group-1.svg';
import AboutGroup2 from '@/assets/about-group-2.svg';
import AboutPond from '@/assets/about-pond.svg';
import AboutTrees from '@/assets/about-trees-1.svg';
import LilyPad1 from '@/assets/lily-pad-1.svg';
import LilyPad2 from '@/assets/lily-pad-2.svg';
import LilyPad3 from '@/assets/lily-pad-3.svg';
import LilyPad4 from '@/assets/lily-pad-4.svg';
import LilyPad5 from '@/assets/lily-pad-5.svg';
import Text from '@/components/Text';

export default function About() {
  return (
    <section className="bg-[#cfedaf] relative w-full" id="about">
      {/* "main" content */}
      <div className="flex flex-col relative">
        <div className="p-12 sm:p-32 md:p-40 z-20 mb-20">
          <div className="flex flex-col gap-4 max-w-[760px]">
            <Text
              textType="heading-lg"
              textWeight="bold"
              className="max-w-[600px]"
            >
              Join us for an unforgettable weekend
            </Text>
            <Text textType="paragraph-lg">
              Hack the 6ix is the largest summer student-run, not-for-profit
              hackathon based in Toronto, now in its 11th iteration.
            </Text>
            <Text textType="paragraph-lg">
              We take pride in the diversity and talent of our hackers, who help
              us become a key player in the Toronto tech environment. As such,
              we provide an outlet for students to present their ideas of the
              future.
            </Text>
          </div>
        </div>
        <div className="flex flex-col gap-80 sm:gap-0 sm:flex-row md:flex-row flex-wrap w-full h-[400px]">
          <Image
            src={AboutTrees}
            alt="Trees"
            className="absolute top-50 w-[200px] sm:w-[320px] md:w-[418px] left-0 z-0"
          />
          <Image
            src={AboutGroup}
            alt="Group"
            className="absolute right-0 z-0"
          />
          <Image
            src={AboutGroup2}
            alt="Group"
            className="hidden md:block absolute bottom-50 right-0 z-0"
          />
        </div>
      </div>
      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col w-1/8 h-fit">
          <div className="flex flex-col gap-4 max-w-xl mt-40 pl-12 sm:pl-32 md:pl-40">
            <Text
              textType="heading-lg"
              textWeight="bold"
              className="whitespace-nowrap overflow-visible"
            >
              Last year, we had...
            </Text>
          </div>
          <div className="relative flex flex-col w-full overflow-visible">
            <Image
              src={AboutFountain}
              alt="Fountain"
              className="absolute top-[100px] left-0 z-0"
            />
          </div>
        </div>
        <div className="relative flex flex-col w-full">
          <div className="absolute right-0 flex flex-col items-center justify-center h-fit w-fit pl-8 sm:p-0 md:p-0">
            <Image src={AboutPond} alt="Pond" className="" />
            <div className="absolute flex top-[36%] left-[36%]">
              <div className="relative flex flex-col items-center justify-center">
                <Image
                  src={LilyPad1}
                  alt="Lily Pad"
                  className="md:w-[100%] md:h-[100%] sm:w-[80%] sm:h-[80%] w-[70%] h-[70%]"
                />
                <Text
                  textType="heading-sm"
                  textWeight="regular"
                  className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-[16px] md:text-[40px]"
                >
                  <span className="font-extrabold">197</span>Schools
                </Text>
              </div>
            </div>
            <div className="absolute flex top-[56%] left-[12%]">
              <div className="relative flex flex-col items-center justify-center">
                <Image
                  src={LilyPad2}
                  alt="Lily Pad"
                  className="md:w-[100%] md:h-[100%] sm:w-[80%] sm:h-[80%] w-[70%] h-[70%]"
                />
                <Text
                  textType="heading-sm"
                  textWeight="regular"
                  className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-[16px] md:text-[40px]"
                >
                  <span className="font-extrabold">440+</span>Hackers
                </Text>
              </div>
            </div>
            <div className="absolute flex top-[72%] left-[32%]">
              <div className="relative flex flex-col items-center justify-center">
                <Image
                  src={LilyPad3}
                  alt="Lily Pad"
                  className="md:w-[100%] md:h-[100%] sm:w-[80%] sm:h-[80%] w-[70%] h-[70%]"
                />
                <Text
                  textType="heading-sm"
                  textWeight="regular"
                  className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-[16px] md:text-[40px]"
                >
                  <span className="font-extrabold">68</span>Projects
                </Text>
              </div>
            </div>
            <div className="absolute flex top-[52%] left-[63%]">
              <div className="relative flex flex-col items-center justify-center">
                <Image
                  src={LilyPad4}
                  alt="Lily Pad"
                  className="md:w-[100%] md:h-[100%] sm:w-[80%] sm:h-[80%] w-[70%] h-[70%]"
                />
                <Text
                  textType="heading-sm"
                  textWeight="regular"
                  className="absolute inset-0 flex flex-col items-center justify-center text-center text-white text-[16px] md:text-[40px]"
                >
                  <span className="font-extrabold">$15k</span>In Prizes
                </Text>
              </div>
            </div>
            <div className="absolute flex top-[84%] right-[8%]">
              <div className="relative flex flex-col items-center justify-center">
                <Image
                  src={LilyPad5}
                  alt="Lily Pad"
                  className="md:w-[100%] md:h-[100%] sm:w-[80%] sm:h-[80%] w-[70%] h-[70%]"
                />
                <Text
                  textType="heading-sm"
                  textWeight="regular"
                  className="absolute inset-0 flex flex-col ml-8 p-8 text-center text-[#3E2523] text-[16px] md:text-[40px]"
                >
                  <span className="font-extrabold">15</span>Mentors
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
