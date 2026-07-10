import { Check, Star } from 'lucide-react';
import QuoteForm from './QuoteForm';

const HERO_IMAGE = '/lovable-uploads/9882f6b3-2664-43eb-874a-38a527d25447.png';

const Hero = () => {
  const benefits = [
    'Conception sur-mesure adaptée à votre architecture',
    'Pose réalisée par nos propres équipes, jamais sous-traitée',
    'Entreprise familiale, plus de 15 ans d’expérience',
    'Accompagnement de A à Z, du permis à la mise en service',
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background image + overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-8 pb-16 md:pt-12 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-red-hat leading-[1.15] mb-6">
              Votre pergola bioclimatique sur-mesure, posée par nos équipes en Suisse
              romande
            </h1>

            <ul className="space-y-3 mb-7">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="text-primary-foreground" size={14} strokeWidth={3} />
                  </span>
                  <span className="font-rubik text-base md:text-lg leading-relaxed text-white/95">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* Google reviews badge */}
            <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur px-4 py-3 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                  alt="Google"
                  className="h-5 w-5"
                  loading="lazy"
                />
                <span className="font-semibold text-gray-900 text-sm">Google</span>
              </div>
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-sm text-gray-700">
                <span className="font-bold">4.7</span> · 19 avis
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className="lg:pl-4">
            <div className="mb-3 text-center lg:text-left">
              <p className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                Devis gratuit en 2 min
              </p>
            </div>
            <QuoteForm variant="compact" formLocation="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
