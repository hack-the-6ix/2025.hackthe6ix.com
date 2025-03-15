'use client';

import { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Input from '@/components/Input';
import Text from '@/components/Text';
import ContactStatue from '../../assets/contact-statue.svg';
import './styles.css';

export default function About() {
  const [rating, setRating] = useState(0);

  return (
    <>
      <div className="bg-white h-screen "></div>
      <section className="bg-[#062938] h-[100vh] flex flex-row items-center">
        <div className="flex flex-col gap-8 mx-24 w-[50%]">
          <Text textType="heading-lg" textColor="white" textWeight="bold">
            Still Have Questions?
          </Text>
          <Text textType="paragraph-lg" textColor="white">
            Send your question our way and we'll get back to you as soon as
            possible!
          </Text>
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-8 w-full">
              <div className="w-1/2">
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
              <div className="w-1/2 gap-0">
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
            <div className="flex flex-row gap-8 w-full justify-center items-center">
              <div className="flex-grow">
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
              <button className="bg-[#406FAA] text-white border-4 border-[#24211E] px-4 h-[50px]">
                Primary Button
              </button>
            </div>
          </div>
          <div className="flex flex-row gap-8 items-center">
            <Text textType="paragraph-lg" textColor="white">
              How was your experience with our website?
            </Text>
            <div className="flex gap-2 items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`cursor-pointer text-2xl transition-transform duration-200 ${
                    index < rating ? 'text-red-500 scale-150' : 'text-gray-400'
                  }`}
                  onClick={() => setRating(index + 1)}
                >
                  ❤️
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center">
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
