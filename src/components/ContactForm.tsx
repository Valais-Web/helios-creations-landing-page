import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// DataLayer for analytics
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // All field names must match index.html
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postal_code: '',
    callback_time: '',
    message: '',
    gclid: typeof window !== "undefined"
      ? (new URLSearchParams(window.location.search).get('gclid') || localStorage.getItem('gclid') || '')
      : ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  function encode(data: Record<string, string>) {
    return Object.keys(data)
      .map(
        key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key] ?? "")
      )
      .join("&");
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Submit to Netlify (must include "form-name" field)
      const netlifyFormData = {
        "form-name": "contact",
        ...formData
      };

      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(netlifyFormData)
      });

      // 2. DataLayer push (for GTM etc)
      if (typeof window !== 'undefined') {
        if (!window.dataLayer) window.dataLayer = [];
        window.dataLayer.push({
          event: 'form_submit',
          form_name: 'contact',
          form_data: { ...formData }
        });
      }

      setIsSubmitted(true);
      toast({
        title: "Merci pour votre message !",
        description: "Nous vous recontacterons dans les plus brefs délais pour établir un devis.",
      });

    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact-form" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary mb-4">
                Merci pour votre message !
              </h2>
              <p className="text-lg text-foreground leading-relaxed">
                Nous vous recontacterons dans les plus brefs délais pour établir un devis et répondre à vos questions.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary text-center mb-12">
          Prêt à profiter de votre extérieur ?
        </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image section */}
          <div className="relative order-1 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img
                src="/lovable-uploads/d8e6f146-04d1-41ba-8294-99b7cffeea8e.png"
                alt="Pergola moderne avec femme se détendant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
          {/* Form section */}
          <div className="order-2 lg:order-2">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
              autoComplete="off"
            >
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="gclid" value={formData.gclid} />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-rubik font-medium mb-2">
                    Prénom et Nom *
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => handleInputChange('name', e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-rubik font-medium mb-2">
                    Email *
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}"
                    title="Veuillez entrer une adresse email valide (ex: nom@exemple.com)"
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-rubik font-medium mb-2">
                    Téléphone *
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => handleInputChange('phone', e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-foreground font-rubik font-medium mb-2">
                    Code Postal *
                  </label>
                  <input
                    name="postal_code"
                    type="text"
                    required
                    value={formData.postal_code}
                    onChange={e => handleInputChange('postal_code', e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none"
                    pattern="[0-9]{4}"
                    maxLength={4}
                    title="Veuillez entrer un code postal à 4 chiffres"
                  />
                </div>
              </div>
              <div>
                <label className="block text-foreground font-rubik font-medium mb-2">
                  Quand pouvons-nous vous rappeler ? *
                </label>
                <select
                  name="callback_time"
                  required
                  value={formData.callback_time}
                  onChange={e => handleInputChange('callback_time', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none bg-white"
                >
                  <option value="">Sélectionnez un créneau</option>
                  <option value="Matin (8h-12h)">Matin (8h-12h)</option>
                  <option value="Après-midi (12h-18h)">Après-midi (12h-18h)</option>
                  <option value="Soir (18h-20h)">Soir (18h-20h)</option>
                  <option value="Week-end">Week-end</option>
                </select>
              </div>
              <div>
                <label className="block text-foreground font-rubik font-medium mb-2">Votre message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={e => handleInputChange('message', e.target.value)}
                  className="w-full p-3 border border-gray-200 rounded-lg focus:border-primary focus:outline-none resize-vertical"
                  placeholder="Décrivez votre projet..."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-helios"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Demander un devis gratuit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
