import Text from '@/components/Text';

export default function LandingPage() {
  return (
    <main>
      <Text textType="display" as="p">
        Display
      </Text>
      <Text textType="heading-lg" as="p">
        Heading Large
      </Text>
      <Text textType="heading-sm" as="p">
        Heading Small
      </Text>
      <Text textType="subtitle-lg" as="p">
        Subtitle Large
      </Text>
      <Text textType="subtitle-sm" as="p">
        Subtitle Small
      </Text>
      <Text textType="paragraph-lg" as="p">
        Paragraph Large
      </Text>
      <Text textType="paragraph-sm" as="p">
        Paragraph Small
      </Text>
      <Text textType="label" as="p">
        Label
      </Text>
    </main>
  );
}
