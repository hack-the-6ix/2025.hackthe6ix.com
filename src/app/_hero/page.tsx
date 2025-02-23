'use client'
import { useEffect, useState } from "react";
import Text from '@/components/Text';
import './hero.scss';
import Button from '@/components/Button';
import Card from '@/components/Card';
import HeroTree from '../../assets/hero-trees-left.svg';
import HeroTreeRight from '../../assets/hero-trees-right.svg';
import HeroPatch from '../../assets/hero-patch-1.svg';
import HeroPatchTwo from '../../assets/hero-patch-2.svg';
import Fire from '../../assets/fire.svg';
import AppleCharacter from '../../assets/apple-character.svg';
import Firefly from '../../assets/firefly.svg';
import Image from 'next/image';

const WORD_ARRAY = ["create", "learn", "collaborate", "network"];
const NUM_FIREFLIES = 20; 

export default function Hero() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedWord, setTypedWord] = useState("");

  const [fireflies, setFireflies] = useState(
    Array.from({ length: NUM_FIREFLIES }, () => ({ top: "50%", left: "50%", visible: false }))
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
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % WORD_ARRAY.length);
        }, 2500);
      }
    };
    typeWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const fireflyIntervals = fireflies.map((_, index) => {
      return setInterval(() => {
        const randomTop = Math.random() * 80 + 10;
        const randomLeft = Math.random() * 80 + 10;
        
        setFireflies((prevFireflies) => {
          const newFireflies = [...prevFireflies];
          newFireflies[index] = { top: `${randomTop}%`, left: `${randomLeft}%`, visible: true };
          return newFireflies;
        });

        setTimeout(() => {
          setFireflies((prevFireflies) => {
            const newFireflies = [...prevFireflies];
            newFireflies[index].visible = false;
            return newFireflies;
          });
        }, 3000); 
      }, index * 2000 + 3000); 
    });

    return () => {
      fireflyIntervals.forEach(clearInterval);
    };
  }, []);

  return (
    <section className="hero-wrapper">
      <div className="hero-text-container">
        <Text textType="subtitle-sm" textColor="primary" as="h2" style={{ textAlign: "center", margin: "0px 16px" }}>
          July 18-20, 2025 • In-person event • location
        </Text>
        <Text textType="title" textFont="Jersey10" textColor="primary">
          Hack the 6ix
        </Text>
        <Text textType="subtitle-lg" textColor="primary" style={{ textAlign: "center" }}>
          Embark on a quest to <span className="rotating-word">[{typedWord}]</span>
        </Text>

        <div className="application-card-container">
          <Card pixelSize={4} radius={10} borderWidth={1} padding={25} borderColor='randoms-100' backgroundColor='#43603f'>
            <Text textType={'label'} textColor='white'>
              Applications open soon! Sign up to receive the
            </Text>
            <Text textType={'label'} textColor='white'>
              latest updates in your inbox.
            </Text>
          </Card>
          <div className="flex mt-4 gap-2">
            <input type="email" placeholder="Enter Email" style={{ marginRight: "20px" }} />
            <Card padding={10} pixelSize={4} radius={4} borderWidth={1} backgroundColor='#74A600' borderColor='shades-100'>
              <Text textType={'label'} textWeight="semi-bold" textColor='white'>Sign up!</Text>
            </Card>
          </div>
        </div>
      </div>
      <div className="background-images">
        <Image src={HeroTree} alt="Left Tree" width={520} height={827} className="hero-tree-left" />
        <Image src={HeroTreeRight} alt="Right Tree" width={506} height={988} className="hero-tree-right" />
        <Image src={HeroPatch} alt="Patch" width={134} height={36} className="hero-patch-1" />
        <Image src={HeroPatchTwo} alt="Patch" width={300} height={94} className="hero-patch-2" />
        <Image src={Fire} alt="Fire" width={160} height={173} className="fire" />
        <Image src={AppleCharacter} alt="Apple Character" width={120} height={115} className="apple-character" />
        {fireflies.map((firefly, index) => (
          firefly.visible && (
            <Image
              key={index}
              src={Firefly}
              alt="Firefly"
              width={180}
              height={180}
              className="firefly"
              style={{ position: "absolute", top: firefly.top, left: firefly.left }}
            />
          )
        ))}
      </div>
    </section>
  );
}