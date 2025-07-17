import { Check } from 'lucide-react';
import heroImage from '@/assets/hero-pergola.jpg';

const Hero = () => {
  const benefits = [
    "Profitez d'une pergola bioclimatique personnalisée qui correspondra à votre style",
    "Des produits de qualité supérieure avec le souci intégral du détail",
    "Installation par nos propres équipes, discrètes et de qualité partout en Suisse romande",
    "Un suivi et service irréprochable dans la durée"
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-red-hat text-primary mb-8 leading-tight">
              Profitez de votre jardin toute l'année avec nos pergolas bioclimatiques
            </h1>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground font-rubik text-lg leading-relaxed">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            <button className="btn-helios">
              Demander un devis gratuit
            </button>
          </div>
          
          <div className="order-1 lg:order-2">
            <img 
              src={heroImage} 
              alt="Pergola bioclimatique Hélios Créations" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;