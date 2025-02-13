import Text from '@/components/Text';

export default function Hero() {
  return (
    <section>
      <Text textType="display" as="h1">
        Display
      </Text>
      <Text textType="subtitle-lg" as="p">
        Subtitle Large
      </Text>
    </section>
  );
}
