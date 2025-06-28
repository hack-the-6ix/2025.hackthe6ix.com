'use client';

import { ReactNode, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
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
        question: 'What is Hack the 6ix?',
        answer:
          'Hack the 6ix is an in-person hackathon where "hackers" (participants) design, develop, and pitch an innovative project built from scratch over the course of 36 hours. Over the course of the weekend, hackers will have opportunities to network, learn, and collaborate through workshops, panels, activities, and more.',
      },
      {
        question:
          'What kind of workshops, talks, and activities will there be at Hack the 6ix?',
        answer:
          "We'll be hosting a variety of workshops ranging from introductory to advanced topics facilitated by our amazing sponsors and mentors. In addition, there will also be interesting tech talks by industry leaders from different companies. For breaks, we'll have a ton of fun activities planned for you, such as games, contests, and more! Hack the 6ix is much more than just a hackathon – we want it to be an event that you'll thoroughly enjoy while expanding your skillset and network.",
      },
      {
        question: 'Do I need to know how to code?',
        answer:
          'Nope! Our mentors and workshops will help you develop the skills required to create something big. Regardless of where your strengths lie, our team is here to guide and help you throughout your project.',
      },
      {
        question: "What if I've never been to a hackathon before?",
        answer:
          "That's completely OK! Many participants attend Hack the 6ix as their first hackathon. We welcome hackers of all skill levels. We will provide resources, mentorship, and workshops to help you learn and develop your project.",
      },
      {
        question: 'Are travel reimbursements provided?',
        answer:
          'No, unfortunately travel reimbursements will not be provided this year at Hack the 6ix.',
      },
      {
        question: "What if my question isn't answered here?",
        answer:
          'If you have any other questions, feel free to reach out to us by emailing hello@hackthe6ix.com. Our team would be happy to help you out.',
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
            Hacker applications for Hack the 6ix 2025 will open in early June.
            Follow us on our social platforms to be the first to know when
            applications are released!
          </>
        ),
      },
      {
        question: 'Am I eligible to participate?',
        answer:
          'Any high-school students, post-secondary students or recent graduates (<1 years of graduating) are eligible to participate in Hack the 6ix.',
      },
      {
        question: "What if I don't have a team or idea?",
        answer:
          "Don't sweat it - we will be coordinating team formation and idea generation events leading up to, as well as during the event.",
      },
      {
        question: 'How do I attend as a judge?',
        answer:
          'Feel free to reach out to us at hello@hackthe6ix.com if you would like to come to HT6 as a judge, but be aware that all judges must be available in person.',
      },
    ],
  },
  {
    label: 'Event',
    items: [
      {
        question: 'Where will Hack the 6ix be held?',
        answer:
          "As a non-university affiliated hackathon, Hack the 6ix takes place at a new location in Toronto every year! We've previously hosted at corporate offices and universities. This year's venue will be announced soon!",
      },
      {
        question: 'What should I bring?',
        answer:
          'Make sure to bring your laptop (or desktop) and a piece of valid student ID or government ID! You can also bring a pillow and blanket if you want to get comfy. A detailed packing list will be sent to hackers who successfully RSVP.',
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
    <section id="faq">
      <div className={cn(styles.faq, 'relative', 'z-1')}>
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
            className={cn(
              styles.buttons,
              'flex-col md:flex-row gap-4 md:gap-16 w-full z-10',
            )}
            justify="center"
            align="center"
            inline
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
                className={cn(styles.button, 'w-full md:w-auto')}
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
            className={cn(styles.qaContainer, 'z-10')}
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
          className={cn(styles.bug_on_rock, 'z-0')}
        />
      </Flex>
    </section>
  );
}
