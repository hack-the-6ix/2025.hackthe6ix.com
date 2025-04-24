'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
// import Button from '@/components/Button';
import Card from '@/components/Card';
import Text from '@/components/Text';
import AppleCharacter from '../../assets/apple-character.svg';
import Fire from '../../assets/fire.svg';
import Firefly from '../../assets/firefly.svg';
import HeroPatch from '../../assets/hero-patch-1.svg';
import HeroPatchTwo from '../../assets/hero-patch-2.svg';
import HeroTree from '../../assets/hero-trees-left.svg';
import HeroTreeRight from '../../assets/hero-trees-right.svg';

const WORD_ARRAY = ['create', 'learn', 'collaborate', 'network'];
const NUM_FIREFLIES = 20;

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState('');
  const [fireflies, setFireflies] = useState(
    Array.from({ length: NUM_FIREFLIES }, () => ({
      top: '50%',
      left: '50%',
      visible: false,
    })),
  );

  useEffect(() => {
    let charIndex = 0;
    const typeWord = () => {
      if (charIndex <= WORD_ARRAY[currentWordIndex].length) {
        setTypedWord(WORD_ARRAY[currentWordIndex].substring(0, charIndex));
        charIndex++;
        setTimeout(typeWord, 100);
      } else {
        setTimeout(() => {
          setCurrentWordIndex(
            (prevIndex) => (prevIndex + 1) % WORD_ARRAY.length,
          );
        }, 2500);
      }
    };
    typeWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const fireflyIntervals = fireflies.map((_, index) => {
      return setInterval(
        () => {
          const randomTop = Math.random() * 80 + 10;
          const randomLeft = Math.random() * 80 + 10;

          setFireflies((prevFireflies) => {
            const newFireflies = [...prevFireflies];
            newFireflies[index] = {
              top: `${randomTop}%`,
              left: `${randomLeft}%`,
              visible: true,
            };
            return newFireflies;
          });

          setTimeout(() => {
            setFireflies((prevFireflies) => {
              const newFireflies = [...prevFireflies];
              newFireflies[index].visible = false;
              return newFireflies;
            });
          }, 3000);
        },
        index * 2000 + 3000,
      );
    });

    return () => {
      fireflyIntervals.forEach(clearInterval);
    };
  }, [fireflies]);

  return (
    <>
      <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#e5eeda] to-[#cfedaf] overflow-hidden overflow-x-hidden">
        <div className="relative z-10 flex flex-col items-center text-center sm:gap-6 gap-0">
          <Text
            textType="subtitle-sm"
            textColor="primary"
            className="sm:flex hidden"
            textWeight="600"
          >
            July 18-20, 2025 • In-Person event • York University
          </Text>
          <div className="flex flex-col items-center sm:hidden">
            <Text textType="subtitle-sm" textWeight="600" textColor="primary">
              July 18-20, 2025
            </Text>
            <Text textType="subtitle-sm" textWeight="600" textColor="primary">
              In-Person event
            </Text>
            <Text textType="subtitle-sm" textWeight="600" textColor="primary">
              York University
            </Text>
          </div>
          <Text textType="title" textFont="Jersey10" textColor="primary">
            Hack the 6ix
          </Text>
          <Text
            textType="subtitle-lg"
            textColor="primary"
            className="sm:flex hidden"
          >
            Embark on a quest to
            <span className="text-accent ml-4">[{typedWord}]</span>
          </Text>

          <div className="relative bg-[#74A600] border-[4px] border-[#3E2523] py-2 flex items-center justify-center w-[180px] sm:hidden mb-12">
            <Text
              textType="subtitle-sm"
              textColor="white"
              textWeight="semi-bold"
            >
              Applications open soon!
            </Text>
            <div className="absolute top-[-4px] left-[-4px] z-50 bg-[#d9eec2] h-[4px] w-[4px]"></div>
            <div className="absolute top-[-4px] left-[calc(100%)] z-50  bg-[#d9eec2] h-[4px] w-[4px]"></div>
            <div className="absolute top-[calc(100%)] left-[-4px] z-50 bg-[#d9eec2]  h-[4px] w-[4px]"></div>
            <div className="absolute top-[calc(100%)] left-[calc(100%)] z-50 bg-[#d9eec2]  h-[4px] w-[4px]"></div>
          </div>

          <Card
            pixelSize={4}
            radius={10}
            borderWidth={1}
            padding={15}
            borderColor="randoms-100"
            backgroundColor="#43603f"
            className="sm:flex hidden"
          >
            <Text textType={'label'} textColor="white">
              Applications open soon!
            </Text>
          </Card>
        </div>
        <Image
          src={HeroPatchTwo}
          alt="Patch"
          width={300}
          className="absolute md:w-[300px] md:top-[90%] md:left-[38%] sm:w-[250px] sm:top-[90%] sm:left-[38%] w-[100px] left-[0] top-[58%] h-auto"
        />

        <Image
          src={HeroTree}
          alt="Left Tree"
          priority={true}
          width={300}
          className="absolute top-[35%] left-[0px] w-[80px] md:top-[60px] sm:w-[200px] sm:top-[100px] md:w-[250px] h-auto"
        />

        <Image
          src={HeroTreeRight}
          alt="Right Tree"
          width={300}
          className="absolute top-[32%] w-[100px] md:top-[40px] sm:w-[220px] sm:top-[100px] md:w-[300px] right-[0px] h-auto"
        />

        <Image
          src={HeroPatch}
          alt="Patch"
          width={134}
          className="absolute md:top-[88%] sm:top-[88%] md:w-[134px] sm:w-[100px] sm:left-[38%] sm:flex hidden h-auto"
        />

        <Image
          src={AppleCharacter}
          alt="Apple Character"
          width={120}
          height={115}
          className="absolute md:top-[60%] sm:top-[59%] md:left-[8%] animate-bounce top-[55%] left-[9%] md:w-[120px] sm:w-[70px] w-[30px] h-auto"
        />

        <Image
          src={Fire}
          alt="Fire"
          width={160}
          height={173}
          className="absolute md:top-[65%] sm:top-[63%] md:left-[12%] top-[57%] left-[13%] md:w-[160px] sm:w-[110px] w-[40px] h-auto"
        />

        {fireflies.map((firefly, index) => (
          <Image
            key={index}
            src={Firefly}
            alt="Firefly"
            width={180}
            height={180}
            className={`sm:w-[180px] sm:h-[180px] h-[100px] w-[100px] absolute transition-opacity duration-1500 ease-in-out ${
              firefly.visible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ top: firefly.top, left: firefly.left }}
          />
        ))}
      </section>
    </>
  );
}
