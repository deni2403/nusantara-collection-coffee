import NavigationBar from './components/NavigationBar';
import Hero from './components/Hero';
import ProductSection from './components/ProductSection';
import AboutSection from './components/AboutSection';
import InfoSection from './components/InfoSection';
import FooterSection from './components/FooterSection';

export default function Home() {
  return (
    <main>
      <NavigationBar />
      <Hero />
      <ProductSection />
      <AboutSection />
      <InfoSection />
      <FooterSection />
    </main>
  );
}
