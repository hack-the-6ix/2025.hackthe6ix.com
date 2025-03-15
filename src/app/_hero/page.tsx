'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Input from '@/components/Input';
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
  }, []);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#e5eeda] to-[#cfedaf] overflow-hidden">
      <div className="relative z-10 flex flex-col items-center text-center gap-6">
        <Text textType="subtitle-sm" textColor="primary">
          July 18-20, 2025 • In-person event • location
        </Text>
        <Text textType="title" textFont="Jersey10" textColor="primary">
          Hack the 6ix
        </Text>
        <Text textType="subtitle-lg" textColor="primary">
          Embark on a quest to{' '}
          <span className="text-accent">[{typedWord}]</span>
        </Text>

        <Card
          pixelSize={4}
          radius={10}
          borderWidth={1}
          padding={25}
          borderColor="randoms-100"
          backgroundColor="#43603f"
        >
          <Text textType={'label'} textColor="white">
            Applications open soon! Sign up to receive the
          </Text>
          <Text textType={'label'} textColor="white">
            latest updates in your inbox.
          </Text>
        </Card>
        <Input
          currentBackground="#cfedaf"
          borderColor="#494440"
          placeholder="Enter Email"
        ></Input>
      </div>

      <div className="w-screen overflow-x-clip">
        <Image
          src={HeroTree}
          alt="Left Tree"
          width={500}
          height={827}
          className="absolute sm:top-[60px] sm:left-[-30px] w-[20%] top-[-160px] left-0"
        />
        <Image
          src={HeroTreeRight}
          alt="Right Tree"
          width={506}
          height={988}
          className="absolute sm:top-[60px] w-[25%] top-[-250px] right-0"
        />
        <Image
          src={HeroPatch}
          alt="Patch"
          width={134}
          height={36}
          className="absolute sm:top-[88%] sm:left-[38%] w-[10%]"
        />
        <Image
          src={HeroPatchTwo}
          alt="Patch"
          width={300}
          height={94}
          className="absolute sm:top-[90%] sm:left-[38%] w-[25%]"
        />
        <Image
          src={Fire}
          alt="Fire"
          width={160}
          height={173}
          className="absolute sm:top-[80%] sm:left-[15%] w-[12%] top-[35%] left-[13%]"
        />
        <Image
          src={AppleCharacter}
          alt="Apple Character"
          width={120}
          height={115}
          className="absolute sm:top-[75%] sm:left-[10%] animate-bounce w-[8%] top-[35%] left-[9%]"
        />
        {fireflies.map((firefly, index) => (
          <Image
            key={index}
            src={Firefly}
            alt="Firefly"
            width={180}
            height={180}
            className={`absolute transition-opacity duration-1500 ease-in-out ${
              firefly.visible ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ top: firefly.top, left: firefly.left }}
          />
        ))}
      </div>
    </section>
  );
}
