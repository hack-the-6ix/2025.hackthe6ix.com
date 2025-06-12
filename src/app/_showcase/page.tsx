'use client';

import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';
import Card from '@/components/Card';
import Card2 from '@/components/Card2';
import Card3 from '@/components/Card3';
import Flex from '@/components/Flex';
import Text from '@/components/Text';
import useIsMobile from '../../hooks/useIsMobile';
import bronze from './assets/bronze.png';
import bronze_proj from './assets/bronze_proj.png';
import diceman from './assets/diceman.png';
import gold from './assets/gold.png';
import gold_proj from './assets/gold_proj.png';
import silver from './assets/silver.png';
import silver_proj from './assets/silver_proj.png';
import styles from './showcase.module.scss';

interface Project {
  type: string;
  image: StaticImageData;
  desc: string;
  link: string;
}

export default function Showcase() {
  const isMobile = useIsMobile();

  const [selectedProject, setSelectedProject] = useState<Project>({
    type: 'gold',
    image: gold_proj,
    desc: 'Poképlants employs a combination of cameras, moisture sensors, and a photoresistor to provide real-time insight into the health of our household plants. Using this information, the web app creates an interactive gaming experience where users can gain insight into their plants while levelling up and battling other players’ plants.',
    link: 'https://devpost.com/software/pokeplants?_gl=1*164glal*_gcl_au*MjA3MDI1OTM1NC4xNzM3ODQzMTQ1*_ga*MTI5NTE3OTMzLjE3MDk2NzMwNTc.*_ga_0YHJK3Y10M*MTc0MTU0MTc1MS42Ni4xLjE3NDE1NDI0OTMuMC4wLjA.',
  });

  const see_all_proj_link =
    'https://hackthe6ix2024.devpost.com/project-gallery';

  const handleButtonClick = (project: string) => {
    if (project === 'gold') {
      setSelectedProject({
        type: 'gold',
        image: gold_proj,
        desc: 'Poképlants employs a combination of cameras, moisture sensors, and a photoresistor to provide real-time insight into the health of our household plants. Using this information, the web app creates an interactive gaming experience where users can gain insight into their plants while levelling up and battling other players’ plants.',
        link: 'https://devpost.com/software/pokeplants',
      });
    } else if (project === 'silver') {
      setSelectedProject({
        type: 'silver',
        image: silver_proj,
        desc: 'WattWise was built using a Raspberry Pi connected directly to a household power supply, enabling real-time energy consumption tracking. The team implemented sensors for accurate data collection, utilized Python for backend analytics, and integrated machine learning algorithms to predict electricity usage.',
        link: 'https://devpost.com/software/hackthe6ix-bqlrik',
      });
    } else if (project === 'bronze') {
      setSelectedProject({
        type: 'bronze',
        image: bronze_proj,
        desc: "Expresso is an Adobe Express plugin that streamlines the creation and optimization of social media posts. The development team utilized Adobe's plugin development framework to integrate seamlessly with Adobe Express. They implemented algorithms to analyze and enhance posts for optimal engagement across various platforms..",
        link: 'https://devpost.com/software/expresso-9inhuw',
      });
    }
  };

  return (
    <section className="pt-[20rem] sm:pt-[10rem]" id="showcase">
      <Flex
        className={styles.header_text}
        align="center"
        justify="center"
        direction="column"
      >
        <Flex
          className={styles.header}
          align="center"
          justify="center"
          direction="row"
        >
          <Text
            className="text-center"
            textType="heading-lg"
            textWeight="black"
            textColor="white"
          >
            Explore previous projects
          </Text>
        </Flex>
      </Flex>
      <Flex direction="column" align="center">
        <Flex className={styles.wrapper}>
          <Flex className={styles.wrappermedal}>
            <Flex direction="row" className={styles.medals}>
              <Card3 borderColor="frameBrown" padding={0} className="py-2">
                <Button
                  borderWidth={0}
                  onClick={() => handleButtonClick('gold')}
                  contentColor="showCaseButton"
                  buttonDarker={selectedProject.type === 'gold'}
                >
                  <Image src={gold} alt="gold" className={styles.medal} />
                </Button>
              </Card3>
              <Card3 borderColor="frameBrown" padding={0} className="py-2">
                <Button
                  borderWidth={0}
                  onClick={() => handleButtonClick('silver')}
                  contentColor="showCaseButton"
                  buttonDarker={selectedProject.type === 'silver'}
                >
                  <Image src={silver} alt="silver" className={styles.medal} />
                </Button>
              </Card3>
              <Card3 borderColor="frameBrown" padding={0} className="py-2">
                <Button
                  borderWidth={0}
                  onClick={() => handleButtonClick('bronze')}
                  contentColor="showCaseButton"
                  buttonDarker={selectedProject.type === 'bronze'}
                >
                  <Image src={bronze} alt="bronze" className={styles.medal} />
                </Button>
              </Card3>
            </Flex>
          </Flex>

          <Flex direction="column" className={styles.card}>
            <Card2
              borderColor="frameBrown"
              contentColor="showcase-100"
              padding={isMobile ? 25 : 50}
            >
              <Flex direction="row" gap="x-huge">
                <Card
                  pixelSize={isMobile ? 4 : 8}
                  radius={2}
                  borderWidth={1}
                  borderColor="secondary-400"
                  className={styles.wrapper_project}
                  backgroundColor="#EBA867"
                  padding={0}
                  borderLeftColor="frameSpecialBrown-100"
                  borderBottomColor="frameSpecialBrown-100"
                  borderRightColor="frameSpecialBrown-200"
                  borderTopColor="frameSpecialBrown-200"
                >
                  <Card padding={isMobile ? 18 : 12} backgroundColor="#EBA867">
                    <Card
                      pixelSize={isMobile ? 3 : 6}
                      radius={4}
                      borderWidth={1}
                      borderColor="secondary"
                      padding={-5.8}
                    >
                      <Link
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={selectedProject.image}
                          alt="project"
                          className={styles.gold_proj}
                        />
                      </Link>
                    </Card>
                  </Card>
                </Card>

                <Card
                  pixelSize={8}
                  radius={2}
                  borderWidth={1}
                  padding={0}
                  borderColor="secondary"
                  className={styles.desc_card}
                  backgroundColor="#EBA867"
                  borderLeftColor="frameSpecialBrown-100"
                  borderBottomColor="frameSpecialBrown-100"
                  borderRightColor="frameSpecialBrown-200"
                  borderTopColor="frameSpecialBrown-200"
                >
                  <Card padding={isMobile ? 0 : 12} backgroundColor="#EBA867">
                    <Flex className={styles.proj_desc}>
                      <Text
                        textType={'paragraph-lg'}
                        textColor="black"
                        className={styles.desc_text}
                      >
                        {selectedProject.desc}
                      </Text>
                    </Flex>
                  </Card>
                </Card>
              </Flex>
            </Card2>
            <Card2
              borderColor="frameBrown"
              contentColor="showcase-100"
              padding={isMobile ? 33 : 50}
            >
              <Flex direction="row" gap="sm" justify="space-between">
                <Flex direction="column" className="md:pr-15 pr-4">
                  <Flex className={styles.hack_desc}>
                    <Text
                      textType={'paragraph-lg'}
                      textColor="black"
                      className={styles.desc_text}
                    >
                      At our last hackathon, teams showcased their creativity
                      and ingenuity to bring outstanding projects to life.
                      Venture into the quest to leave your mark—be the next team
                      to create a groundbreaking innovation and build your
                      legacy.
                    </Text>
                  </Flex>
                  <Flex justify="left" className="p-4 pt-0">
                    <Link
                      href={see_all_proj_link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        pixelSize={5}
                        radius={4}
                        borderWidth={1}
                        buttonPadding={isMobile ? 2 : 6}
                        borderColor="shades-100"
                        contentColor="seeProjectsButton"
                      >
                        <Text
                          textType={'paragraph-lg'}
                          textColor="white"
                          textWeight="bold"
                          className="px-2"
                        >
                          See all projects
                        </Text>
                      </Button>
                    </Link>
                  </Flex>
                </Flex>

                <Card
                  pixelSize={8}
                  radius={2}
                  borderWidth={1}
                  padding={0}
                  className={styles.diceman}
                  backgroundColor="#EBA867"
                  borderLeftColor="frameSpecialBrown-100"
                  borderBottomColor="frameSpecialBrown-100"
                  borderRightColor="frameSpecialBrown-200"
                  borderTopColor="frameSpecialBrown-200"
                >
                  <Card padding={10} backgroundColor="#EBA867">
                    <Image src={diceman} alt="diceman" />
                  </Card>
                </Card>
              </Flex>
            </Card2>
          </Flex>
        </Flex>
      </Flex>
    </section>
  );
}
