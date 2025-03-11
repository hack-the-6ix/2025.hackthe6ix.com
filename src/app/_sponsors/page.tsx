import Card2 from '@/components/Card2';
import Text from '@/components/Text';

export default function Sponsors() {
  return (
    <section>
      <Text textType="heading-lg" as="h2">
        Sponsors
      </Text>
      <Text textType="paragraph-lg" as="p">
        Paragraph Large
      </Text>
      <Card2 borderColor="frameBrown" contentColor="primary" type="phone">
        <Text textType="paragraph-lg" as="p" style={{ padding: '16px' }}>
          Paragraph Large
        </Text>
      </Card2>
    </section>
  );
}
