'use client';

import { ReactNode, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import bat from './_assets/bat.png';
import bug_on_rock from './_assets/bug_on_rock.png';
import thing from './_assets/thing_on_rock.png';
import styles from './faq.module.scss';

interface FaqQuestionSection {
  label: string;
  items: {
    question: ReactNode;
    answer: ReactNode;
  }[];
}

const faqQuestions: FaqQuestionSection[] = [
  {
    label: 'General',
    items: [
      {
        question: 'How do I get to Hack the 6ix?',
        answer:
          'Hack the 6ix will be happening at <insert location>. On Friday, July 17th during the registration hours (<insert time>), just show up to the venue and you will be guided to where you need to go.',
      },
      {
        question: 'What should I bring?',
        answer:
          'Make sure to bring your laptop (or desktop) and a piece of valid student ID or government ID! You can also bring a pillow and blanket if you want to get comfy. Everything else will be provided for you!',
      },
      {
        question: 'Will there be hardware provided at the event?',
        answer:
          'We have a variety of hardware that can be borrowed at our hardware station for free, including Raspberry Pi’s, Arduinos, sensors, and breadboards. Due to limited quantity, hardware will be lent out on a first come, first serve basis. If you are unsure whether or not we have a certain piece of hardware that you will need for your hack, bring your own to the event!',
      },
      {
        question: 'How much does it cost to attend?',
        answer:
          'Absolutely nothing! Hack the 6ix is a completely free event run by a non-profit organization. All food, resources, and accommodations for hacking for the entire event will be provided free of charge. Information about travel reimbursement will be provided closer to the date of the event.',
      },
    ],
  },
  {
    label: 'Preperation',
    items: [
      {
        question: 'Filler Question?',
        answer: (
          <>
            Filler. Hacker applications for Hack the 6ix 2024 are now closed.
            Check your inboxes for updates!
          </>
        ),
      },

      {
        question: 'Filler Question?',
        answer:
          'Filler. Any high-school students, post-secondary students or recent graduates (<1 years of graduating) are eligible to participate in Hack the 6ix.',
      },
      {
        question: 'Filler Question?',
        answer:
          "Filler. Don't sweat it - we will be coordinating team formation and idea generation events leading up to, as well as during the event.",
      },
    ],
  },
  {
    label: 'Application',
    items: [
      {
        question: 'When do hacker applications open?',
        answer: (
          <>
            Hacker applications for Hack the 6ix 2024 are now closed. Check your
            inboxes for updates!
          </>
        ),
      },
      {
        question: 'Am I eligible to participate?',
        answer:
          'Any high-school students, post-secondary students or recent graduates (<1 years of graduating) are eligible to participate in Hack the 6ix.',
      },
      {
        question: 'What if I don’t have a team or idea?',
        answer:
          "Don't sweat it - we will be coordinating team formation and idea generation events leading up to, as well as during the event.",
      },
    ],
  },
  {
    label: 'Health & Safety',
    items: [
      {
        question: 'How do I get to Hack the 6ix?',
        answer:
          'For logistical reasons, venue and location details will be released to attendees closer to the date of the event. As per tradition, Hack the 6ix will take place in Downtown Toronto.',
      },
      {
        question: 'What should I bring?',
        answer:
          'Make sure to bring your laptop (or desktop) and a piece of valid student ID or government ID! You can also bring a pillow and blanket if you want to get comfy. Everything else will be provided for you!',
      },
      {
        question: 'Will there be hardware provided at the event?',
        answer:
          'We have a variety of hardware that can be borrowed at our hardware station for free, including Raspberry Pi’s, Arduinos, sensors, and breadboards. Due to limited quantity, hardware will be lent out on a first come, first serve basis. If you are unsure whether or not we have a certain piece of hardware that you will need for your hack, bring your own to the event!',
      },
      {
        question: 'How much does it cost to attend?',
        answer:
          'Absolutely nothing! Hack the 6ix is a completely free event run by a non-profit organization. All food, resources, and accommodations for hacking for the entire event will be provided free of charge. Information about travel reimbursement will be provided closer to the date of the event.',
      },
    ],
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section>
      <div className={styles.faq}>
        <Flex className={styles.wrapper}>
          <Image src={thing} alt="thing" className={styles.thing} />
          <Image src={bat} alt="bat" className={styles.batBob} />
        </Flex>

        <Flex
          direction="column"
          justify="center"
          align="center"
          className={styles.faqContainer}
          gap="2x-lg"
        >
          <Text textType="heading-lg" textWeight="bold" textColor="white">
            FAQ
          </Text>

          <Flex
            className={styles.buttons}
            direction="row"
            justify="center"
            align="center"
            inline
            gap="huge"
          >
            {faqQuestions.map(({ label }, idx) => (
              <Button
                pixelSize={5}
                radius={4}
                borderWidth={1}
                key={idx}
                onClick={() => setActive(idx)}
                contentColor="faqButton"
                borderColor="frameBlack"
                buttonDarker={active === idx}
                className={styles.button}
              >
                <div className={styles.card}>
                  <Text
                    textType="paragraph-lg"
                    textWeight="extra-bold"
                    textColor="white"
                  >
                    {label}
                  </Text>
                </div>
              </Button>
            ))}
          </Flex>

          <Flex
            direction="row"
            gap="huge"
            wrap
            justify="center"
            className={styles.qaContainer}
          >
            {faqQuestions[active].items.map((faq, index) => (
              <Flex
                direction="column"
                gap="2x-big"
                align="center"
                key={index}
                className={styles.faqItem}
              >
                <Card
                  className={styles.questionBox}
                  pixelSize={5}
                  borderColor="frameBlack"
                  backgroundColor="#736387"
                  radius={5}
                  borderWidth={1}
                >
                  <div className={styles.card}>
                    <Text
                      className={styles.question}
                      textType="paragraph-lg"
                      textWeight="semi-bold"
                      textColor="white"
                    >
                      {faq.question}
                    </Text>
                  </div>
                </Card>

                <Flex
                  className={styles.answers}
                  align="center"
                  justify="center"
                >
                  <Text
                    textType="paragraph-sm"
                    textWeight="regular"
                    textColor="white"
                    className={styles.alignleft}
                  >
                    {faq.answer}
                  </Text>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </div>
      <Flex className={styles.wrapper}>
        <Image
          src={bug_on_rock}
          alt="bug_on_rock"
          className={styles.bug_on_rock}
        />
      </Flex>
    </section>
  );
}
