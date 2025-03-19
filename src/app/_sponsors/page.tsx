import Card3 from '@/components/Card3';
import Text from '@/components/Text';
import gold from '../_showcase/assets/gold.png'
import Image from 'next/image';
import Button from '@/components/Button';

export default function Sponsors() {
  return (
    <section>
      <Text textType="heading-lg" as="h2">
        Sponsors
      </Text>
      <Text textType="paragraph-lg" as="p">
        Paragraph Large
      </Text>
      <Card3 borderColor="frameBrown" contentColor="randoms-200" type="desktop" padding={0}  className="py-2">
        <Image src={gold} alt="gold" className='pb-10'/>
      </Card3>
      <Button borderWidth={1} pixelSize={1} contentColor='randoms-200'>
        <Image src={gold} alt="gold" className='pb-10'/>
      </Button>
      <Button pixelSize={4} radius={2} borderWidth={2}
                  borderColor='secondary' contentColor='primary'>
                  <Image src={gold} alt="silver"/>
        </Button> 
    </section>
  );
}
