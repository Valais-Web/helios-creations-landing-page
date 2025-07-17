import { Check, Star } from 'lucide-react';
import heroImage from '@/assets/hero-pergola.jpg';

const Hero = () => {
  const benefits = [
    "Isolation thermique et sonore haute performance",
    "Qualité de fabrication Inotherm premium", 
    "Sécurité anti-effraction avancée",
    "Pose professionnelle rapide & service local"
  ];

  return (
    <section 
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay pour rendre l'image très légèrement visible */}
      <div className="absolute inset-0 bg-background/95"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-red-hat mb-2 leading-tight">
              La pergola sur mesure qui{' '}
              <span className="text-primary">
                sécurise, isole
              </span>{' '}
              et{' '}
              <span className="text-primary">
                sublime
              </span>{' '}
              votre jardin.
            </h1>
            
            <p className="text-muted-foreground font-rubik text-lg mb-8 leading-relaxed">
              400 modèles, personnalisation illimitée, installation experte
              partout en Suisse romande.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                  <span className="text-foreground font-rubik leading-relaxed">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            <button className="btn-helios mb-6">
              Obtenir mon devis gratuit et personnalisé
            </button>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <img 
              src={heroImage} 
              alt="Pergola bioclimatique Hélios Créations" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
            
            {/* Badge Google Reviews */}
            <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" 
                  alt="Google" 
                  className="w-16 h-auto"
                />
              </div>
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-2xl font-bold text-foreground">5.0</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">Basé sur 39 avis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;