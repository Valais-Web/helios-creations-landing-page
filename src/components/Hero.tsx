import { Check, Star } from 'lucide-react';
import QuoteForm from './QuoteForm';

const HERO_IMAGE = '/lovable-uploads/9882f6b3-2664-43eb-874a-38a527d25447.png';

const GoogleGLogo = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.7-6.1 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" />
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" />
    <path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2c-2 1.5-4.6 2.4-7.2 2.4-5.2 0-9.6-3.3-11.2-7.9l-6.5 5C9.5 39.6 16.2 44 24 44z" />
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2C41.9 35.2 44 30 44 24c0-1.3-.1-2.4-.4-3.5z" />
  </svg>
);

const Hero = () => {
  const benefits = [
    'Conception sur-mesure adaptée à votre architecture',
    'Pose réalisée par nos propres équipes, jamais sous-traitée',
    'Entreprise familiale, plus de 15 ans d’expérience',
    'Accompagnement de A à Z, du permis à la mise en service',
  ];

  return (
    <section className="relative overflow-hidden md:min-h-[680px]">
      {/* Background image + overlays */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-center"
        />
        {/* Desktop: dégradé horizontal, dense à gauche, disparaît avant 55% */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(to right, hsla(0,0%,0%,0.75) 0%, hsla(0,0%,0%,0.35) 30%, hsla(0,0%,0%,0) 55%)',
          }}
        />
        {/* Mobile: scrim doux et localisé en haut, image lumineuse en dessous */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(to bottom, hsla(0,0%,0%,0.65) 0%, hsla(0,0%,0%,0.35) 35%, hsla(0,0%,0%,0) 60%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 lg:px-12 pt-8 pb-16 md:pt-14 md:pb-28">
        <div className="grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <div className="text-white max-w-[560px]">
            <p className="inline-block bg-white/95 text-primary text-[11px] md:text-xs font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded mb-5 shadow-sm">
              Pergolas bioclimatiques sur-mesure
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-bold font-red-hat leading-[1.15] mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)]">
              Votre pergola bioclimatique sur-mesure, posée par nos équipes en Suisse
              romande
            </h1>

            <ul className="space-y-3 mb-7">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="text-primary-foreground" size={14} strokeWidth={3} />
                  </span>
                  <span className="font-rubik text-base md:text-lg leading-relaxed text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>

            {/* Google reviews badge */}
            <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur px-4 py-3 rounded-lg shadow-md">
              <div className="flex items-center gap-2">
                <GoogleGLogo className="h-5 w-5" />
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
    </section>
  );
};

export default Hero;
