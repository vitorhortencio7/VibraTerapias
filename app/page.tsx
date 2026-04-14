import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Transformation from '@/components/Transformation';
import About from '@/components/About';
import Services from '@/components/Services';
import TargetAudience from '@/components/TargetAudience';
import Testimonials from '@/components/Testimonials';
import DigitalProducts from '@/components/DigitalProducts';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      <Hero />
      <PainPoints />
      <Transformation />
      <About />
      <Services />
      <TargetAudience />
      <Testimonials />
      <DigitalProducts />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
