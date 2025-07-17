import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PresentationSection from '@/components/PresentationSection';
import PergolasSlider from '@/components/PergolasSlider';
import FeaturesSection from '@/components/FeaturesSection';
import VideoSection from '@/components/VideoSection';
import CompanySection from '@/components/CompanySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PresentationSection />
      <PergolasSlider />
      <FeaturesSection />
      <VideoSection />
      <CompanySection />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
