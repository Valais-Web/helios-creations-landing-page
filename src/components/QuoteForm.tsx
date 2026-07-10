import { useState } from 'react';
import { CheckCircle, Loader2, ShieldCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// DataLayer for analytics — un seul event `lp_form_submit`
declare global {
  interface Window {
    dataLayer: any[];
  }
}

type Variant = 'full' | 'compact';

interface QuoteFormProps {
  variant?: Variant;
  formLocation?: string; // ex: "hero", "bottom" — pour segmenter côté GTM sans dédoubler l'event
  className?: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  postal_code: string;
  callback_time: string;
  message: string;
  gclid: string;
}

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k] ?? ''))
    .join('&');

const getInitialGclid = () => {
  if (typeof window === 'undefined') return '';
  return (
    new URLSearchParams(window.location.search).get('gclid') ||
    localStorage.getItem('gclid') ||
    ''
  );
};

const QuoteForm = ({ variant = 'full', formLocation = 'default', className = '' }: QuoteFormProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    postal_code: '',
    callback_time: '',
    message: '',
    gclid: getInitialGclid(),
  });

  const isCompact = variant === 'compact';

  const setField = (field: keyof FormState, value: string) => {
    setFormData((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const validate = (): boolean => {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!formData.name.trim()) e.name = 'Ce champ est requis';
    if (!formData.email.trim()) e.email = 'Ce champ est requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email))
      e.email = 'Adresse email invalide';
    if (!formData.phone.trim()) e.phone = 'Ce champ est requis';
    if (!formData.postal_code.trim()) e.postal_code = 'Ce champ est requis';
    else if (!/^\d{4}$/.test(formData.postal_code))
      e.postal_code = 'Code postal à 4 chiffres';
    if (!formData.callback_time) e.callback_time = 'Sélectionnez un créneau';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    try {
      // 1. Netlify Forms
      const netlifyPayload = { 'form-name': 'contact', ...formData };
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(netlifyPayload),
      });

      // 2. DataLayer — UN SEUL event unifié
      if (typeof window !== 'undefined') {
        if (!window.dataLayer) window.dataLayer = [];
        window.dataLayer.push({
          event: 'lp_form_submit',
          form_name: 'contact',
          form_location: formLocation,
          form_variant: variant,
          form_data: { ...formData },
        });
      }

      setIsSubmitted(true);
      toast({
        title: 'Merci pour votre message !',
        description:
          'Nous vous recontacterons dans les plus brefs délais pour établir un devis.',
      });
    } catch (err) {
      toast({
        title: 'Erreur',
        description:
          "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 text-center ${className}`}>
        <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="text-2xl font-bold font-red-hat text-primary mb-3">
          Merci pour votre demande !
        </h3>
        <p className="text-foreground leading-relaxed">
          Un expert Hélios Créations vous rappelle sous 24h ouvrées pour établir un devis
          sur-mesure adapté à votre projet.
        </p>
      </div>
    );
  }

  const inputBase = isCompact
    ? 'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors bg-white text-foreground text-sm'
    : 'w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors bg-white text-foreground';
  const labelBase = isCompact
    ? 'block text-foreground font-rubik font-medium mb-1 text-xs'
    : 'block text-foreground font-rubik font-medium mb-1.5 text-sm';
  const errorText = isCompact ? 'text-xs text-primary mt-0.5' : 'text-sm text-primary mt-1';

  const cardClass = isCompact
    ? `bg-white rounded-lg shadow-xl p-4 md:p-5 space-y-3 w-full max-w-[380px] mx-auto lg:mx-0 ${className}`
    : `bg-white rounded-lg shadow-xl p-6 md:p-8 space-y-4 ${className}`;

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className={cardClass}
      autoComplete="on"
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="gclid" value={formData.gclid} />
      <p hidden>
        <label>
          Don't fill this out: <input name="bot-field" />
        </label>
      </p>

      <div>
        <label htmlFor={`name-${variant}`} className={labelBase}>
          Prénom et Nom <span className="text-primary">*</span>
        </label>
        <input
          id={`name-${variant}`}
          name="name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={(e) => setField('name', e.target.value)}
          className={`${inputBase} ${errors.name ? 'border-primary' : 'border-gray-200'}`}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className={errorText}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor={`email-${variant}`} className={labelBase}>
          Email <span className="text-primary">*</span>
        </label>
        <input
          id={`email-${variant}`}
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={(e) => setField('email', e.target.value)}
          className={`${inputBase} ${errors.email ? 'border-primary' : 'border-gray-200'}`}
          aria-invalid={!!errors.email}
        />
        {errors.email && <p className={errorText}>{errors.email}</p>}
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label htmlFor={`phone-${variant}`} className={labelBase}>
            Téléphone <span className="text-primary">*</span>
          </label>
          <input
            id={`phone-${variant}`}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={(e) => setField('phone', e.target.value)}
            className={`${inputBase} ${errors.phone ? 'border-primary' : 'border-gray-200'}`}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className={errorText}>{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor={`postal-${variant}`} className={labelBase}>
            Code postal <span className="text-primary">*</span>
          </label>
          <input
            id={`postal-${variant}`}
            name="postal_code"
            type="text"
            inputMode="numeric"
            autoComplete="postal-code"
            maxLength={4}
            value={formData.postal_code}
            onChange={(e) => setField('postal_code', e.target.value.replace(/\D/g, ''))}
            className={`${inputBase} ${errors.postal_code ? 'border-primary' : 'border-gray-200'}`}
            aria-invalid={!!errors.postal_code}
          />
          {errors.postal_code && <p className={errorText}>{errors.postal_code}</p>}
        </div>
      </div>

      <div>
        <label htmlFor={`callback-${variant}`} className={labelBase}>
          Quand pouvons-nous vous rappeler ? <span className="text-primary">*</span>
        </label>
        <select
          id={`callback-${variant}`}
          name="callback_time"
          value={formData.callback_time}
          onChange={(e) => setField('callback_time', e.target.value)}
          className={`${inputBase} ${errors.callback_time ? 'border-primary' : 'border-gray-200'}`}
          aria-invalid={!!errors.callback_time}
        >
          <option value="">Sélectionnez un créneau</option>
          <option value="Matin (8h-12h)">Matin (8h-12h)</option>
          <option value="Après-midi (12h-18h)">Après-midi (12h-18h)</option>
          <option value="Soir (18h-20h)">Soir (18h-20h)</option>
          <option value="Week-end">Week-end</option>
        </select>
        {errors.callback_time && <p className={errorText}>{errors.callback_time}</p>}
      </div>

      {!isCompact && (
        <div>
          <label htmlFor={`message-${variant}`} className={labelBase}>
            Votre message
          </label>
          <textarea
            id={`message-${variant}`}
            name="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setField('message', e.target.value)}
            className={`${inputBase} border-gray-200 resize-y`}
            placeholder="Décrivez votre projet..."
          />
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg ${
          isCompact ? 'py-3 px-4 text-sm' : 'py-4 px-6 text-base'
        }`}
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" /> Envoi en cours...
          </>
        ) : (
          'Recevoir mon devis gratuit'
        )}
      </button>

      <p
        className={`text-muted-foreground flex items-start gap-2 leading-relaxed ${
          isCompact ? 'text-[11px]' : 'text-xs'
        }`}
      >
        <ShieldCheck className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
        {isCompact ? (
          <span>Vos données restent confidentielles. Réponse sous 24h ouvrées.</span>
        ) : (
          <span>
            Vos données restent confidentielles et ne sont jamais transmises à des tiers.
            Un expert vous rappelle sous 24h ouvrées.
          </span>
        )}
      </p>
    </form>
  );
};

export default QuoteForm;
