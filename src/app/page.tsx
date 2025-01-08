// app/page.tsx
import HeroSection from '@/components/Hero';
import ClientTransformations from '@/components/ClientTransformations';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Questionnaire from '@/components/Questions';

const HomePage = () => (
  <div>
    <HeroSection />
    <Questionnaire />
    <ClientTransformations />
    <Services />
    <About />
    <Contact />
  </div>

);

export default HomePage;
