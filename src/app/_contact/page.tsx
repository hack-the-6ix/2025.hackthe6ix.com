'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Card from '@/components/Card';
import Input from '@/components/Input';
import Text from '@/components/Text';
import ContactStatue from '../../assets/contact-statue.svg';
import HeartEmpty from '../../assets/heart-empty.svg';
import HeartFull from '../../assets/heart-full.svg';
import { POSTResponse } from '../api/contact/route';
import './styles.css';

export default function About() {
  const controller = useRef<AbortController>(new AbortController());
  const [result, setResult] = useState<POSTResponse>();
  const [loading, setLoading] = useState(false);
  // const [_, setLoaded] = useState(false);
  const [rating, setRating] = useState(0);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);

  const query = async (body: FormData, el: HTMLFormElement) => {
    setLoading(true);
    controller.current.abort();
    controller.current = new AbortController();
    try {
      const res = await fetch('/api/contact', {
        signal: controller.current.signal,
        method: 'POST',
        body,
      });
      setResult(await res.json());
      if (res.ok) el.reset();
    } catch (err) {
      if ((err as Error).name === 'AbortError') return;
    } finally {
      if (controller.current.signal.aborted) return;
      setLoading(false);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (result?.status !== 'success') return;
    const timer = window.setTimeout(() => {
      setResult(undefined);
    }, 3000);
    return () => {
      window.clearTimeout(timer);
    };
  }, [result?.status]);

  useEffect(() => {
    return () => {
      controller.current.abort();
    };
  }, []);

  const handleClick = (index: number) => {
    setRating(index + 1);
    setClickedIndex(index + 1);
    setTimeout(() => setClickedIndex(null), 300);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
      console.log(process.env.NEXT_PUBLIC_TURNSTILE);
    }
    query(formData, e.target as HTMLFormElement);
  };

  return (
    <>
      <section
        className=" w-[100vw] h-[100vh] flex flex-row items-center"
        id="contact"
      >
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
            Send your question our way and we&apos;ll get back to you as soon as
            possible!
          </Text>
          <form
            onSubmit={(e) => handleFormSubmit(e)}
            className="flex flex-col gap-4"
            method="POST"
            action="/api/contact"
          >
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
                  name="name"
                  required={true}
                  type="text"
                />
                <Text textType="label" textColor="white">
                  Your full name
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
                  name="email"
                  type="email"
                  required={true}
                />
                <Text textType="label" textColor="white">
                  Your email address
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
                  name="message"
                  required={true}
                  maxLength={2056}
                  type="text"
                />
                <Text textType="label" textColor="white">
                  What would you like to know?
                </Text>
              </div>
              <button type="submit">
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
                    {loading ?
                      'Sending...'
                    : result?.status === 'success' ?
                      'Sent!'
                    : 'Send message'}
                  </Text>
                </Card>
              </button>
              <div
                className="cf-turnstile"
                data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE}
                data-response-field-name="captchaToken"
              ></div>
            </div>
          </form>
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
