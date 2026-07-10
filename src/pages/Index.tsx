import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProofBar from '@/components/ProofBar';
import PresentationSection from '@/components/PresentationSection';
import PergolasSlider from '@/components/PergolasSlider';
import FeaturesSection from '@/components/FeaturesSection';
import ProcessSection from '@/components/ProcessSection';
import CompanySection from '@/components/CompanySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import StickyMobileCTA from '@/components/StickyMobileCTA';

const Index = () => {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProofBar />
      <PresentationSection />
      <PergolasSlider />
      <FeaturesSection />
      <ProcessSection />
      <CompanySection />
      <TestimonialsSection />
      <FAQSection />
      <ContactForm />
      <Footer />
      <StickyMobileCTA />
    </div>
  );
};

export default Index;
