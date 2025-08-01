import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    message: '',
    callbackTime: ''
  });
  // Function to get gclid from URL
  const getGclid = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('gclid') || localStorage.getItem('gclid') || '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default redirect
    setIsSubmitting(true);

    try {
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        postal_code: formData.postalCode,
        callback_time: formData.callbackTime,
        message: formData.message,
        gclid: getGclid()
      };

      // Submit to Supabase
      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (supabaseError) {
        throw new Error(`Erreur Supabase: ${supabaseError.message}`);
      }

      // Push form data to dataLayer
      if (typeof window !== 'undefined') {
        if (!(window as any).dataLayer) {
          (window as any).dataLayer = [];
        }
        (window as any).dataLayer.push({
          event: 'form_submit',
          form_name: 'contact',
          form_data: {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            postal_code: formData.postalCode,
            callback_time: formData.callbackTime,
            message: formData.message,
            gclid: getGclid()
          }
        });
        console.log('Form data pushed to dataLayer');
      }

      // Success
      toast({
        title: "Merci pour votre message !",
        description: "Nous vous recontacterons dans les plus brefs délais pour établir un devis.",
      });

      // Submit to Netlify manually
      const netlifyFormData = new FormData();
      netlifyFormData.append('form-name', 'contact');
      netlifyFormData.append('name', formData.name);
      netlifyFormData.append('email', formData.email);
      netlifyFormData.append('phone', formData.phone);
      netlifyFormData.append('postal_code', formData.postalCode);
      netlifyFormData.append('callback_time', formData.callbackTime);
      netlifyFormData.append('message', formData.message);
      netlifyFormData.append('gclid', getGclid());

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        postalCode: '',
        message: '',
        callbackTime: ''
      });

    } catch (error) {
      e.preventDefault(); // Only prevent default on error
      console.error('Erreur lors de l\'envoi:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <section id="contact-form" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-red-hat text-primary text-center mb-12">
          Prêt à profiter de votre extérieur ?
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image section */}
          <div className="relative order-1 lg:order-1">
            <div className="relative overflow-hidden rounded-lg shadow-lg">
              <img src="/lovable-uploads/d8e6f146-04d1-41ba-8294-99b7cffeea8e.png" alt="Pergola moderne avec femme se détendant" className="w-full h-full object-cover" />
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
            >
              {/* Hidden fields for Netlify */}
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>
              <input type="hidden" name="gclid" value={getGclid()} />
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
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
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
                    value={formData.postalCode} 
                    onChange={e => handleInputChange('postalCode', e.target.value)} 
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
                  value={formData.callbackTime}
                  onChange={e => handleInputChange('callbackTime', e.target.value)}
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
                <Button type="submit" className="btn-helios" disabled={isSubmitting}>
                  {isSubmitting ? 'Envoi en cours...' : 'Demander un devis gratuit'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactForm;