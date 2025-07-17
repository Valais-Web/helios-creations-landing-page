import { Check, Star } from 'lucide-react';
import heroImage from '@/assets/hero-pergola.jpg';
import heliosLogo from '@/assets/helios-logo.png';

const Hero = () => {
  const benefits = [
    "Profitez d'une pergola bioclimatique personnalisée qui correspondra à votre style",
    "Des produits de qualité supérieure avec le souci intégral du détail",
    "Installation par nos propres équipes, discrètes et de qualité partout en Suisse romande",
    "Un suivi et service irréprochable dans la durée"
  ];

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/95" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col flex-1">
        {/* Centered logo at top */}
        <div className="flex justify-center pt-8 pb-16">
          <img 
            src={heliosLogo} 
            alt="Hélios Créations SA" 
            className="h-16 w-auto"
          />
        </div>

        {/* Main content */}
        <div className="flex-1 section-padding">
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

                <button className="btn-helios-cta mb-8">
                  Demander un devis gratuit
                </button>

                {/* Google Reviews Badge */}
                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" 
                      alt="Google" 
                      className="h-6 w-6"
                    />
                    <span className="font-medium text-gray-900">Google</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">4.9</span> • Basé sur 47 avis
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <img 
                  src={heroImage} 
                  alt="Pergola bioclimatique Hélios Créations" 
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;