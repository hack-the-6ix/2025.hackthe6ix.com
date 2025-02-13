import About from './_about/page';
import Contact from './_contact/page';
import FAQ from './_faq/page';
import Hero from './_hero/page';
import Showcase from './_showcase/page';
import Sponsors from './_sponsors/page';

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <About />
      <Sponsors />
      <Showcase />
      <FAQ />
      <Contact />
    </main>
  );
}
