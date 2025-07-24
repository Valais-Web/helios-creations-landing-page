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
    e.preventDefault();
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

      // Submit to Netlify
      const netlifyFormData = new FormData();
      Object.entries(submissionData).forEach(([key, value]) => {
        netlifyFormData.append(key, value || '');
      });
      netlifyFormData.append('form-name', 'contact');

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      // Success
      toast({
        title: "Merci pour votre message !",
        description: "Nous vous recontacterons dans les plus brefs délais pour établir un devis.",
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
              onSubmit={handleSubmit} 
              className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground font-rubik font-medium mb-2">
                    Prénom et Nom *
                  </label>
                  <Input name="name" type="text" required value={formData.name} onChange={e => handleInputChange('name', e.target.value)} className="w-full" />
                </div>
                
                <div>
                  <label className="block text-foreground font-rubik font-medium mb-2">
                    Email *
                  </label>
                  <Input 
                    name="email"
                    type="email" 
                    required 
                    value={formData.email} 
                    onChange={e => handleInputChange('email', e.target.value)} 
                    className="w-full"
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
                  <Input name="phone" type="tel" required value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} className="w-full" />
                </div>
                
                <div>
                  <label className="block text-foreground font-rubik font-medium mb-2">
                    Code Postal *
                  </label>
                  <Input 
                    name="postal_code"
                    type="text" 
                    required 
                    value={formData.postalCode} 
                    onChange={e => handleInputChange('postalCode', e.target.value)} 
                    className="w-full"
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
                <Select onValueChange={value => handleInputChange('callbackTime', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez un créneau" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Matin (8h-12h)">Matin (8h-12h)</SelectItem>
                    <SelectItem value="Après-midi (12h-18h)">Après-midi (12h-18h)</SelectItem>
                    <SelectItem value="Soir (18h-20h)">Soir (18h-20h)</SelectItem>
                    <SelectItem value="Week-end">Week-end</SelectItem>
                  </SelectContent>
                </Select>
                <input type="hidden" name="callback_time" value={formData.callbackTime} />
              </div>
              
              <div>
                <label className="block text-foreground font-rubik font-medium mb-2">Votre message</label>
                <Textarea name="message" rows={5} value={formData.message} onChange={e => handleInputChange('message', e.target.value)} className="w-full" placeholder="Décrivez votre projet..." />
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