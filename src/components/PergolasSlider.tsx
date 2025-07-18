import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import pergola1 from '/lovable-uploads/ebffc880-3b29-4833-a4e2-7789f51ad359.png';
import pergola2 from '/lovable-uploads/1aa19414-eff8-44d9-a8a9-46140157e0cb.png';
import pergola3 from '/lovable-uploads/eee61c12-e6e9-410c-b5e5-6ddb11789e50.png';
import pergola4 from '/lovable-uploads/d59cdf9c-cdae-48d3-82b8-6c96ba90f380.png';

const PergolasSlider = () => {
  const images = [pergola1, pergola2, pergola3, pergola4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + images.length) % images.length);
  };

  // Auto-advance the slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleImages = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % images.length;
      result.push({
        src: images[index],
        index: index
      });
    }
    return result;
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary mb-4">
            Inspirez-vous
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos réalisations récentes. Des pergolas bioclimatiques sur-mesure qui allient 
            isolation, sécurité et design pour s'adapter parfaitement à votre architecture.
          </p>
        </div>

        {/* Image Gallery */}
        <div className="relative mb-12">
          {/* Mobile: Single image */}
          <div className="md:hidden flex justify-center">
            <div className="w-full max-w-sm h-48 relative overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={images[currentIndex]} 
                alt={`Pergola réalisation ${currentIndex + 1}`}
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
          
          {/* Desktop: Three images */}
          <div className="hidden md:flex justify-center items-center gap-4 md:gap-6">
            {getVisibleImages().map((image, i) => (
              <div 
                key={`${image.index}-${i}`} 
                className={`relative overflow-hidden rounded-2xl shadow-lg transition-all duration-300 ${
                  i === 1 ? 'w-80 h-64 md:w-96 md:h-72 scale-105 z-10' : 'w-64 h-48 md:w-80 md:h-60 opacity-80'
                }`}
              >
                <img 
                  src={image.src} 
                  alt={`Pergola réalisation ${image.index + 1}`}
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>

        {/* CTA Section */}
        <div className="mx-4 md:mx-0">
          {/* Mobile: Stacked layout */}
          <div className="flex flex-col gap-4 md:hidden bg-background/80 backdrop-blur-sm rounded-2xl px-6 py-6 shadow-lg border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">➞</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  Prêt à créer la vôtre ?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Recevez votre devis gratuit et personnalisé
                </p>
              </div>
            </div>
            
            <Button 
              className="font-semibold w-full"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Demander un devis gratuit
            </Button>
          </div>

          {/* Desktop: Horizontal layout */}
          <div className="hidden md:inline-flex items-center gap-6 bg-background/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-lg border border-border/50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">➞</span>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-foreground leading-tight">
                  Prêt à créer la vôtre ?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Recevez votre devis gratuit et personnalisé
                </p>
              </div>
            </div>
            
            <Button 
              className="font-semibold px-6 whitespace-nowrap"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Demander un devis gratuit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PergolasSlider;
