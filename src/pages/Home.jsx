import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import ProductGrid from '../components/sections/ProductGrid';
import Testimonials from '../components/sections/Testimonials';
import WhatsAppButton from '../components/common/WhatsAppButton';

/**
 * Home Page - Main landing page
 */

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <Hero />
        <Features />
        <ProductGrid />
        <Testimonials />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
