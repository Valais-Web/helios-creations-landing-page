import { Check, Star } from 'lucide-react';
const Hero = () => {
  const benefits = ["Profitez d'une pergola bioclimatique personnalisée qui correspondra à votre style", "Des produits de qualité supérieure avec le souci intégral du détail", "Installations professionnelles, durables et de qualité partout en Suisse Romande", "Adapté à votre budget et vos besoins"];
  return <section className="flex flex-col flex-1">
      {/* Content */}
      <div className="flex flex-col flex-1">
        {/* Main content */}
        <div className="flex-1 section-padding pt-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-red-hat text-primary mb-8 leading-tight animate-fade-in">
                  Profitez de votre jardin toute l'année avec nos pergolas bioclimatiques
                </h1>
                
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => <li key={index} className="flex items-start gap-3">
                      <Check className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-foreground font-rubik text-lg leading-relaxed">
                        {benefit}
                      </span>
                    </li>)}
                </ul>

                <button 
                  className="btn-helios-cta mb-8 hover-scale"
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Demander un devis gratuit
                </button>

                {/* Google Reviews Badge */}
                <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-lg shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="h-6 w-6" />
                    <span className="font-medium text-gray-900">Google</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">4.7</span> • Basé sur 19 avis
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative group">
                  <img src="/lovable-uploads/9882f6b3-2664-43eb-874a-38a527d25447.png" alt="Pergola bioclimatique avec famille - Hélios Créations" className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300 transform group-hover:scale-[1.02]" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;