'use client';

import Button from '@/components/Button';
import Card from '@/components/Card';
import Text from '@/components/Text';

export default function FAQ() {
  return (
    <section>
      <Text textType="heading-sm" as="h2">
        FAQ
      </Text>
      <Text textType="subtitle-sm" as="p">
        Subtitle Small
      </Text>

      <Button
        contentColor='primary'
        pixelSize={5}
        borderColor='secondary'
        radius={3}
        borderWidth={2}
        buttonPadding={10}
        onClick={() => console.log('Button clicked!')}

      >
        <Text textType={'label'} textColor='white'>
          Primary Button Example
        </Text>
      </Button>

      <Card
      
        pixelSize={6}
        borderColor='secondary'
        radius={3}
        borderWidth={2}
      >
        <Text textType={'label'} textColor='white'>
          Example Card
        </Text>
        
        
      </Card>
    </section>
  );
}
