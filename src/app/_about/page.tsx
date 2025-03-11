import Text from '@/components/Text';
import Image from 'next/image';
import AboutTrees from '@/assets/about-trees-1.svg';
import AboutGroup from '@/assets/about-group-1.svg';
import AboutGroup2 from '@/assets/about-group-2.svg';

export default function About() {
  return (
    <section className="bg-[#cfedaf] relative">
      <Image src={AboutTrees} alt="Trees" className="absolute top-[280px] left-0 z-0" />
      <Image src={AboutGroup} alt="Group" className="absolute top-[600px] right-0 z-0" />
      <Image src={AboutGroup2} alt="Group" className="absolute top-[400px] right-0 z-0" />
      {/* <Text textType="heading-lg" as="h2">
        About
      </Text> */}
      
      {/* "main" content */}
      <div className="z-20 flex flex-col p-40 relative">
        <div className="flex flex-col gap-4 max-w-[600px]">
          <Text textType="heading-lg" textWeight="bold">
            Join us for an unforgettable weekend
          </Text>
          <Text textType="paragraph-lg">
          Hack the 6ix is the largest summer student-run, not-for-profit hackathon based in Toronto, now in its 11th iteration.
          </Text>
          <Text textType="paragraph-lg">
            We take pride in the diversity and talent of our hackers, who help us become a key player in the Toronto tech environment. As such, we provide an outlet for students to present their ideas of the future.
          </Text>
        </div>

        <div className="h-[500px]">

        </div>

        <div className="flex flex-col gap-4 max-w-xl">
          <Text textType="heading-sm" textWeight="bold">
            Last year, we had...
          </Text>
        </div>
      </div>
    </section>
  );
}
