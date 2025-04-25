import About from './_about/page';
import Contact from './_contact/page';
import FAQ from './_faq/page';
import Hero from './_hero/page';
import Showcase from './_showcase/page';
import Sponsors from './_sponsors/page';

export default function LandingPage() {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <Hero />
      <About />
      <Sponsors />
      <div className="custom-gradient">
        <Showcase />
        <FAQ />
        <Contact />
      </div>
    </main>
  );
}
