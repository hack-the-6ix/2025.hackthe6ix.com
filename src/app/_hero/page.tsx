import Text from '@/components/Text';
import './hero.scss';
import Button from '@/components/Button';
import Card from '@/components/Card';
import HeroTree from '../../assets/hero-trees-left.svg'
import HeroTreeRight from '../../assets/hero-trees-right.svg'

import Image from 'next/image';


export default function Hero() {
  return (
    <section>
      <div className="hero-text-container">
        <Text textType="subtitle-sm" textColor="primary" as="h2" style={{ textAlign: "center", margin: "0px 16px" }}>
          July 18-20, 2025 • In-person event • location
        </Text>
        <Text textType="title" textFont="Jersey10" textColor="primary">
          Hack the 6ix
        </Text>
        <Text textType="subtitle-lg" textColor="primary" style={{ textAlign: "center" }}>
          Embark on a quest to [create]
        </Text>

        <div className="application-card-container">
          <Card
            pixelSize={4}
            radius={10}
            borderWidth={1}
            padding={25}
            borderColor='randoms-100'
            backgroundColor='#43603f'
          >
            <Text textType={'label'} textColor='white'
            >
              Applications open soon! Sign up to receive the
            </Text>
            <Text textType={'label'} textColor='white'
            >
              latest updates in your
              inbox.
            </Text>
          </Card>
          <div className="flex mt-4 gap-2">
            <input
              type="email"
              placeholder="Enter Email"
              style={{ marginRight: "20px" }}
            />

            <Card
              padding={10}
              pixelSize={4}
              radius={4}
              borderWidth={1}
              backgroundColor='#74A600'
              borderColor='shades-100'
            >
              <Text textType={'label'} textWeight="semi-bold" textColor='white' >
                Sign up!
              </Text>
            </Card>
          </div>
        </div>
      </div>
      <Image
        src={HeroTree}
        alt="Left Tree"
        width={520}
        height={827}
        className="hero-tree-left"
      />
      <Image
        src={HeroTreeRight}
        alt="Right Tree"
        width={506}
        height={988}
        className="hero-tree-right"
      />
      <div>
      </div>
    </section>
  );
}

