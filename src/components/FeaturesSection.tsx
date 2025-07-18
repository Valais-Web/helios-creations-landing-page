import { Check } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const FeaturesSection = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const videoSrc = isInView 
    ? "https://www.youtube.com/embed/9PrgaUNNLWw?autoplay=1&mute=1&start=3&controls=1"
    : "https://www.youtube.com/embed/9PrgaUNNLWw?start=3&controls=1";

  const features = [
    "Structure durable en aluminium",
    "Lames orientables", 
    "Capteur vent/pluie/soleil",
    "Contrôle via l'application",
    "Motorisation automatique",
    "Hauts-parleurs Bluetooth",
    "Prises de courant et USB",
    "Éclairage LED intégré",
    "Chauffage infrarouge",
    "Fermetures latérales",
    "Complètement personnalisable",
    "Et plus encore..."
  ];

  return (
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary text-center mb-12">
          Des pergolas d'exception
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <Check className="text-primary flex-shrink-0" size={20} />
              <span className="text-foreground font-rubik text-lg">
                {feature}
              </span>
            </div>
          ))}
        </div>
        
        {/* Video Section */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              ref={videoRef}
              width="100%"
              height="100%"
              src={videoSrc}
              title="Hélios Créations | Pergolas"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button 
            className="btn-helios-cta"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            DEMANDEZ UN DEVIS GRATUIT
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
