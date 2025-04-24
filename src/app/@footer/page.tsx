import Link from 'next/link';
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
          <Text textType="paragraph-sm" textColor="white">
            <Link href="https://cdn.hackthe6ix.com/privacy-policy.pdf">
              Privacy Policy
            </Link>
          </Text>
          <Text textType="paragraph-sm" textColor="white">
            <Link href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md">
              MLH Code of Conduct
            </Link>
          </Text>
          <Text textType="paragraph-sm" textColor="white">
            <Link href="https://2024.hackthe6ix.com">2024 Website</Link>
          </Text>
        </div>
      </div>
    </Container>
  );
}
