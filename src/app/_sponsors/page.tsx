import Card3 from '@/components/Card3';
import Text from '@/components/Text';
import gold from '../_showcase/assets/gold.png'
import Image from 'next/image';
import Button from '@/components/Button';
import Card from '@/components/Card';

export default function Sponsors() {
  return (
    <section>
      <Text textType="heading-lg" as="h2">
        Sponsors
      </Text>
      <Text textType="paragraph-lg" as="p">
        Paragraph Large
      </Text>
      <Card pixelSize={2} borderWidth={1} radius={1} borderColor='primary'>
      Hi
    </Card>
    </section>
  );
}
