import { Check } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    "Espaces de vie élargis",
    "Lames orientables", 
    "Capteur vent/pluie/soleil",
    "Contrôle via l'application",
    "Motorisation automatique",
    "Haute perf. fiabilité/durabilité",
    "Résiste au courant jusqu'à 115 km/h",
    "Éclairage LED intégré",
    "Chauffage infrarouge",
    "Fermeture des côtés vitrés",
    "Complètement personnalisable",
    "Et plus encore..."
  ];

  return (
    <section className="section-padding bg-gray-50">
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
      </div>
    </section>
  );
};

export default FeaturesSection;