'use client';

import { useState } from 'react';
import Text from '@/components/Text';
import './contact.scss';
import ContactStatue from '../../assets/contact-statue.svg';
import Image from 'next/image';

export default function About() {
  const [rating, setRating] = useState(0);

  return (
    <section className="contact-wrapper">
      <div className="contact-container">
        <div className="contact-left">
          <Text textType="heading-lg" textColor="white" textWeight="bold">
            Still Have Questions?
          </Text>
          <Text textType="paragraph-sm" textColor="white">
            Send your question our way and we'll get back to you as soon as possible!
          </Text>

          <Text textType="paragraph-sm" textColor="white">
            How was your experience with our website?
          </Text>
          <div className="rating-container">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`heart-icon ${index < rating ? 'filled' : ''}`}
                onClick={() => setRating(index + 1)}
              >
                ❤️
              </span>
            ))}
          </div>
        </div>
        <div className="contact-right">
          <Image src={ContactStatue} alt="Contact Statue" width={340} height={621} className="contact-statue" />
        </div>
      </div>
    </section>
  );
}
