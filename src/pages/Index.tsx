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
    <div className="min-h-screen">
      {/* Hero section with header integrated */}
      <div className="relative min-h-screen">
        {/* Background image for both header and hero */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.03]" style={{
          backgroundImage: `url(/lovable-uploads/7846f98d-2713-4494-9578-18e49b6fb101.png)`
        }} />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/98 to-background/95" />
        
        {/* Header and Hero content */}
        <div className="relative z-10">
          <Header />
          <Hero />
        </div>
      </div>
      <div className="bg-background">
        <PresentationSection />
        <PergolasSlider />
        <FeaturesSection />
        <VideoSection />
        <CompanySection />
        <TestimonialsSection />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
