import Text from '@/components/Text';
import './hero.scss';

export default function Hero() {
  return (
    <section>
      <div className="hero-text-container">
        <Text textType="subtitle-sm" color="primary" as="h2">
          July 18-20, 2025 • In-person event  • location
        </Text>
        <Text textType="title" textFont="Jersey10" color="primary">
          Hack the 6ix
        </Text>
        <Text textType="subtitle-lg" color="primary">
          Embark on a quest to [create]
        </Text>
        <div className="application-container shadow-lg pixelated-box">
          Applications open soon! Sign up to receive the latest updates in your
          inbox.
        </div>
        <div className="flex mt-4 gap-2">
          <input
            type="email"
            placeholder="Enter Email"
            className="border-4 border-green-900 px-4 py-2 text-lg pixelated-box"
          />
          <button className="bg-green-600 text-white px-4 py-2 border-4 border-green-900 pixelated-box">
            Sign up!
          </button>
        </div>
      </div>
    </section>
  );
}
