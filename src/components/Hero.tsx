import { Check, Star } from 'lucide-react';
import QuoteForm from './QuoteForm';

const HERO_IMAGE = '/lovable-uploads/dee3b2b2-b17b-4947-88b5-6fd4795df7f4.png';
const LOUVERS_DETAIL = '/lovable-uploads/ee9d1e67-5715-4992-8cc9-8adc2809cf5c.png';

const Hero = () => {
  const benefits = [
    'Conception sur-mesure adaptée à votre architecture',
    'Pose réalisée par nos propres équipes, jamais sous-traitée',
    'Entreprise familiale, plus de 15 ans d’expérience',
    'Accompagnement de A à Z, du permis à la mise en service',
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background image + horizontal gradient overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        {/* Desktop: dégradé horizontal, dense à gauche, transparent au milieu */}
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/85 via-black/55 to-transparent" />
        {/* Mobile: dégradé vertical léger pour lisibilité */}
        <div className="absolute inset-0 md:hidden bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-8 pb-16 md:pt-14 md:pb-28">
        <div className="grid lg:grid-cols-[1.15fr_auto] gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <div className="text-white">
            <p className="inline-block bg-white/95 text-primary text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded mb-5 shadow-sm">
              Pergolas bioclimatiques sur-mesure
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-red-hat leading-[1.15] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]">
              Votre pergola bioclimatique sur-mesure, posée par nos équipes en Suisse
              romande
            </h1>

            <ul className="space-y-3 mb-7">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="text-primary-foreground" size={14} strokeWidth={3} />
                  </span>
                  <span className="font-rubik text-base md:text-lg leading-relaxed text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.4)]">
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

          {/* Right: form card (compact, narrow) */}
          <div className="w-full lg:w-[380px]">
            <div className="mb-3 text-center lg:text-left">
              <p className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded">
                Devis gratuit en 2 min
              </p>
            </div>
            <QuoteForm variant="compact" formLocation="hero" />
          </div>
        </div>
      </div>

      {/* Louvers detail vignette, bottom-left of the image area — desktop only */}
      <div className="hidden lg:block absolute bottom-6 left-6 z-20 w-[170px] rounded-lg overflow-hidden shadow-2xl ring-1 ring-white/20 bg-white">
        <img
          src={LOUVERS_DETAIL}
          alt="Gros plan sur les lames orientables de la pergola bioclimatique"
          loading="lazy"
          decoding="async"
          className="w-full h-[120px] object-cover"
        />
        <div className="px-3 py-2 bg-white">
          <p className="text-[11px] font-semibold text-primary uppercase tracking-wide">
            Lames orientables
          </p>
          <p className="text-[10px] text-gray-600 leading-tight">
            Contrôlez soleil, ombre et pluie
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
