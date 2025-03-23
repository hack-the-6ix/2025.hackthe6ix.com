import Container from '@/components/Container';
import Text from '@/components/Text';

export default function Footer() {
  return (
    <Container as="footer" className="bg-[#062938]">
      <div className="bg-[#062938] w-full flex flex-col sm:p-12 p-6">
        <Text textType="heading-sm" textColor="white" className="sm:mb-6 mb-3">
          HACK THE 6IX
        </Text>
        <Text textType="paragraph-sm" textColor="white" className="mb-3">
          © Copyright 2025 Hack the 6ix | Made with ♡ in Toronto
        </Text>
        <div className="flex flex-row sm:justify-start justify-between sm:gap-12 gap-0 mb-4">
          <Text
            textType="paragraph-sm"
            textColor="white"
          >
            Privacy Policy
          </Text>
          <Text
            textType="paragraph-sm"
            textColor="white"
          >
            MLH Code of Conduct
          </Text>
          <Text
            textType="paragraph-sm"
            textColor="white"
          >
            2024 Website
          </Text>
          <Text
            textType="paragraph-sm"
            textColor="white"
            className="hidden sm:flex"
          >
            Covid - 19 Safety
          </Text>
        </div>
      </div>
    </Container>
  );
}
