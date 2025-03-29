'use client';

import { useState } from 'react';
import Image from 'next/image';
import Input from '@/components/Input';
import Text from '@/components/Text';
import ContactStatue from '../../assets/contact-statue.svg';
import HeartEmpty from '../../assets/heart-empty.svg';
import HeartFull from '../../assets/heart-full.svg';
import './styles.css';
import Card from '@/components/Card';

export default function About() {
  const [rating, setRating] = useState(0);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setRating(index + 1);
    setClickedIndex(index + 1);
    setTimeout(() => setClickedIndex(null), 300);
  };

  return (
    <>
      <section className=" w-[100vw] h-[100vh] flex flex-row items-center">
        <div className="flex flex-col gap-8 sm:mx-24 mx-16 sm:w-[50%] w-full">
          <Text
            textType="heading-lg"
            textColor="white"
            textWeight="bold"
            className="sm:text-start text-center"
          >
            Still Have Questions?
          </Text>
          <Text
            textType="paragraph-lg"
            textColor="white"
            className="sm:text-start text-center"
          >
            Send your question our way and we'll get back to you as soon as
            possible!
          </Text>
          <div className="flex flex-col gap-4">
            <div className="flex sm:flex-row flex-col sm:gap-8 gap-4 w-full">
              <div className="sm:w-1/2 w-full">
                <Text
                  textType="paragraph-sm"
                  textColor="white"
                  textWeight="bold"
                >
                  Name<span className="text-red-500">*</span>
                </Text>
                <Input
                  currentBackground="#062938"
                  placeholder="Enter name"
                  inputBackground="transparent"
                  borderColor="#9B9997"
                  className="w-full"
                />
                <Text textType="label" textColor="white">
                  Assistive/Descriptive Text
                </Text>
              </div>
              <div className="sm:w-1/2 gap-0 w-full">
                <Text
                  textType="paragraph-sm"
                  textColor="white"
                  textWeight="bold"
                >
                  Email<span className="text-red-500">*</span>
                </Text>
                <Input
                  currentBackground="#062938"
                  placeholder="Enter email"
                  inputBackground="transparent"
                  borderColor="#9B9997"
                  className="w-full"
                />
                <Text textType="label" textColor="white">
                  Assistive/Descriptive Text
                </Text>
              </div>
            </div>
            <div className="flex sm:flex-row flex-col sm:gap-8 gap-4 w-full justify-center sm:items-center">
              <div className="flex-grow sm:w-auto w-full">
                <Text
                  textType="paragraph-sm"
                  textColor="white"
                  textWeight="bold"
                >
                  Question<span className="text-red-500">*</span>
                </Text>
                <Input
                  currentBackground="#062938"
                  placeholder="Enter question"
                  inputBackground="transparent"
                  borderColor="#9B9997"
                  className="w-full"
                />
                <Text textType="label" textColor="white">
                  Assistive/Descriptive Text
                </Text>
              </div>
              <Card
                pixelSize={4}
                radius={4}
                borderWidth={1}
                padding={6}
                borderColor="shades-100"
                backgroundColor="#406FAA"
              >
                <Text
                  textType={'label'}
                  textColor="white"
                  textWeight="bold"
                  className="mx-2"
                >
                  Send Message
                </Text>
              </Card>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col gap-8 items-center">
            <Text
              textType="paragraph-lg"
              textColor="white"
              className="sm:text-start text-center"
            >
              How was your experience with our website?
            </Text>
            <div className="flex gap-2 items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`cursor-pointer text-2xl transition-transform duration-200 
                  ${clickedIndex && clickedIndex > index ? 'animate-scale' : ''}`}
                  onClick={() => handleClick(index)}
                >
                  {index < rating ?
                    <Image src={HeartFull} alt="Heart" width={30} height={30} />
                  : <Image
                      src={HeartEmpty}
                      alt="Heart"
                      width={30}
                      height={30}
                    />
                  }
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="sm:flex items-center hidden">
          <div className="flex justify-center items-center absolute right-16 w-[25%]">
            <Image
              src={ContactStatue}
              alt="Contact Statue"
              width={340}
              height={621}
              className="w-[85%]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
