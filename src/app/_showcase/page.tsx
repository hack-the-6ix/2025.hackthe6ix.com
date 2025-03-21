"use client";

import Card from '@/components/Card';
import Text from '@/components/Text';
import Image from 'next/image';
import Link from 'next/link';
import gold_proj from './assets/gold_proj.png'
import silver_proj from './assets/silver_proj.png'
import bronze_proj from './assets/bronze_proj.png'
import diceman from './assets/diceman.png'
import gold from './assets/gold.png'
import silver from './assets/silver.png'
import bronze from './assets/bronze.png'
import stalagmites from './assets/stalagmites.png'
import Flex from '@/components/Flex';
import styles from './showcase.module.scss';

import useIsMobile from '../../hooks/useIsMobile';
import Button from '@/components/Button';
import { useState } from 'react';
import Card2 from '@/components/Card2';
import Card3 from '@/components/Card3';

export default function Showcase() {

  const isMobile = useIsMobile();

  const mainPixelSize = isMobile ? 4 : 16;
  const [selectedProject, setSelectedProject] = useState<string>('gold');

  const [projectImage, setProjectImage] = useState(gold_proj);
  const [projectDesc, setProjectDesc] = useState(
    'Poképlants employs a combination of cameras, moisture sensors, and a photoresistor to provide real-time insight into the health of our household plants. Using this information, the web app creates an interactive gaming experience where users can gain insight into their plants while levelling up and battling other players’ plants.'
  );
  const [projectLink, setProjectLink] = useState(
    'https://devpost.com/software/pokeplants?_gl=1*164glal*_gcl_au*MjA3MDI1OTM1NC4xNzM3ODQzMTQ1*_ga*MTI5NTE3OTMzLjE3MDk2NzMwNTc.*_ga_0YHJK3Y10M*MTc0MTU0MTc1MS42Ni4xLjE3NDE1NDI0OTMuMC4wLjA.'
  );

  const see_all_proj_link = 'https://hackthe6ix2024.devpost.com/project-gallery';

  const handleButtonClick = (project: string) => {
    setSelectedProject(project); 
    if (project === 'gold') {
      setProjectImage(gold_proj);
      setProjectDesc(
        'Poképlants employs a combination of cameras, moisture sensors, and a photoresistor to provide real-time insight into the health of our household plants. Using this information, the web app creates an interactive gaming experience where users can gain insight into their plants while levelling up and battling other players’ plants.'
      );
      setProjectLink(
        'https://devpost.com/software/pokeplants?_gl=1*164glal*_gcl_au*MjA3MDI1OTM1NC4xNzM3ODQzMTQ1*_ga*MTI5NTE3OTMzLjE3MDk2NzMwNTc.*_ga_0YHJK3Y10M*MTc0MTU0MTc1MS42Ni4xLjE3NDE1NDI0OTMuMC4wLjA.'
      );
    } else if (project === 'silver') {
      setProjectImage(silver_proj); // Update to silver image
      setProjectDesc(
        'Silver project description goes here. Replace with actual description for the silver project.'
      );
      setProjectLink(
        'https://devpost.com/software/hackthe6ix-bqlrik?_gl=1*7a6uaj*_gcl_au*MjA3MDI1OTM1NC4xNzM3ODQzMTQ1*_ga*MTI5NTE3OTMzLjE3MDk2NzMwNTc.*_ga_0YHJK3Y10M*MTc0MTU0MTc1MS42Ni4xLjE3NDE1NDM0MTUuMC4wLjA.'
      );
    } else if (project === 'bronze') {
      setProjectImage(bronze_proj); // Update to bronze image
      setProjectDesc(
        'Bronze project description goes here. Replace with actual description for the bronze project.'
      );
      setProjectLink(
        'https://devpost.com/software/expresso-9inhuw?_gl=1*gv6jqx*_gcl_au*MjA3MDI1OTM1NC4xNzM3ODQzMTQ1*_ga*MTI5NTE3OTMzLjE3MDk2NzMwNTc.*_ga_0YHJK3Y10M*MTc0MTU0MTc1MS42Ni4xLjE3NDE1NDQ5NTUuMC4wLjA.'
      );
    }
  };


  return (
    <section  className="bg-[#1E3A5E]"> 
      <Flex className={styles.header_text} align='center' justify='center' direction='column'>
            <Flex className={styles.header} align='center' justify='center' direction='row'>
              <Text textType='heading-lg' textWeight='black' textColor='white'>               
                Explore previous projects
              </Text>
            </Flex>


            <Image src={stalagmites} alt="stalagmites"  className={styles.stalagmites}>
            </Image>
      
      </Flex>
      <Flex direction='column' align='center'>


        <Flex className={styles.wrapper}>
          {/* Seperator (abs)*/}
{/* 
          <Card pixelSize={16} radius={4} borderWidth={1} padding={0} borderColor='secondary' backgroundColor='#9D4512' className={styles.seperator}>
          </Card> */}

          {/* Top Buttons (abs)*/}


          <Flex className={styles.wrappermedal}>
            <Flex direction='row' className={styles.medals}>
                <Card3 borderColor="frameBrown" padding={0}  className="py-2">
                  <Button borderWidth={0} onClick={() => handleButtonClick('gold')} backgroundColor={selectedProject === 'gold' ? '#EBA867' : '#A2774D'}>
                    <Image src={gold} alt="gold" className={styles.medal}/>
                  </Button>
                </Card3>
                <Card3 borderColor="frameBrown"  padding={0}  className="py-2">
                  <Button borderWidth={0} onClick={() => handleButtonClick('silver')} backgroundColor={selectedProject === 'silver' ? '#EBA867' : '#A2774D'}>
                    <Image src={silver} alt="silver" className={styles.medal} />
                  </Button>
                </Card3>
                <Card3 borderColor="frameBrown" padding={0}  className="py-2">
                  <Button borderWidth={0} onClick={() => handleButtonClick('bronze')} backgroundColor={selectedProject === 'bronze' ? '#EBA867' : '#A2774D'}>
                    <Image src={bronze} alt="bronze" className={styles.medal} />
                  </Button>
                </Card3>

            </Flex>
          </Flex>
      {/* <Card2 borderColor="frameBrown" contentColor="primary" type="phone">
        <Text textType="paragraph-lg" as="p" style={{ padding: '16px' }}>
          Paragraph Large
        </Text>
      </Card2> */}

          {/* Main */}

        
              <Flex direction='column' className={styles.card}>
                {/* <Card pixelSize={mainPixelSize} radius={4} borderWidth={2} padding={isMobile ? 42 : 70} borderColor='secondary' > */}
                <Card2 borderColor="frameBrown" contentColor="showcase-100" padding={isMobile ? 25 : 50}>
                <Flex direction='row' gap='x-huge'>

                    {/* Project Pic*/}
                    <Card pixelSize={isMobile ? 4 : 8} radius={2} borderWidth={1} borderColor='secondary-400'  
                      className={styles.wrapper_project} backgroundColor='#EBA867' padding={0}
                      borderLeftColor='frameSpecialBrown-100' borderBottomColor='frameSpecialBrown-100' 
                      borderRightColor='frameSpecialBrown-200' borderTopColor='frameSpecialBrown-200'
                      >
                      <Card padding={isMobile ? 18 : 35} backgroundColor='#EBA867'>
                        <Card pixelSize={isMobile ? 3 : 6} radius={4} borderWidth={1}  borderColor='secondary' padding={-1}>
                          <Link href={projectLink}>
                            <Image src={projectImage} alt="project"  className={styles.gold_proj} />
                          </Link>
                        </Card>
                      </Card>

  
                    </Card>
 



                    {/* Desc */}

                  <Card pixelSize={8} radius={2} borderWidth={1} padding={0} borderColor='secondary'  
                    className={styles.desc_card} backgroundColor='#EBA867'
                    borderLeftColor='frameSpecialBrown-100' borderBottomColor='frameSpecialBrown-100' 
                    borderRightColor='frameSpecialBrown-200' borderTopColor='frameSpecialBrown-200'
                    >
                      <Card padding={isMobile ? 0 : 35} backgroundColor='#EBA867'>
                        <Flex className={styles.proj_desc}>
                          <Text textType={'paragraph-lg'} textColor='black' className={styles.desc_text}>
                            {projectDesc}
                          </Text>
                        </Flex>
                      </Card>

                  </Card>
                </Flex>

                </Card2>
                <Card2 borderColor="frameBrown" contentColor="showcase-100" padding={isMobile ? 33: 50}>

                {/* <Card2 pixelSize={mainPixelSize} radius={4} borderWidth={2} padding={isMobile ? 42 : 70} borderColor='secondary'> */}


                <Flex direction='row' gap='2x-big' justify="space-between">
                  <Flex direction='column' className='md:pr-15 pr-4'> 
                    <Flex className={styles.hack_desc}>
                      <Text textType={'paragraph-lg'} textColor='black' className={styles.desc_text}> 
                      At our last hackathon, teams showcased their creativity and ingenuity to bring outstanding projects to life. Venture into the quest to leave your mark—be the next team to create a groundbreaking innovation and build your legacy.                
                      </Text>
                    </Flex>
                    <Flex justify='center'>
                        
                        {/* Btn */}
                      <Link href={see_all_proj_link}>

                        <Button pixelSize={5} radius={4} borderWidth={1} buttonPadding={isMobile ? 8 : 13} borderColor='frameBlack' backgroundColor='#6D4A41'>
                          <Text textType={'paragraph-lg'} textColor='white' textWeight='bold' className='px-2'>
                            See all projects
                          </Text>
                        </Button>
                      </Link>

                    </Flex>
                  </Flex>

                      {/* Img */}

                  <Card pixelSize={8} radius={2} borderWidth={1} padding={0}  className={styles.diceman}
                    backgroundColor='#EBA867' borderLeftColor='frameSpecialBrown-100' borderBottomColor='frameSpecialBrown-100' 
                    borderRightColor='frameSpecialBrown-200' borderTopColor='frameSpecialBrown-200'>
                      <Card padding={30} backgroundColor='#EBA867'>
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