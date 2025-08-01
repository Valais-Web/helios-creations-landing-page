import { useState, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

// Declare dataLayer for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

const ContactForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    message: '',
    callbackTime: '',
    gclid: new URLSearchParams(window.location.search).get('gclid') || ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Store contact submission in Supabase first
      const submissionData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        postal_code: formData.postalCode,
        callback_time: formData.callbackTime,
        message: formData.message,
        gclid: formData.gclid
      };

      const { error: supabaseError } = await supabase
        .from('contact_submissions')
        .insert([submissionData]);

      if (supabaseError) throw supabaseError;

      console.log('Supabase submission successful');

      // Submit form natively to Netlify
      if (formRef.current) {
        const netlifyFormData = new FormData(formRef.current);

        await fetch('/', {
          method: 'POST',
          body: new URLSearchParams(netlifyFormData as any).toString(),
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        });

        console.log('Netlify submission successful');
      }

      // Initialize dataLayer and push data
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'form_submit',
          form_name: 'contact',
          form_data: submissionData
        });

        console.log('dataLayer pushed:', window.dataLayer);
      }

      setIsSubmitted(true);

      toast({
        title: "Merci pour votre message !",
        description: "Nous vous recontacterons dans les plus brefs délais pour établir un devis.",
      });

    } catch (error) {
      console.error('Submission error:', error);
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

  // Success state
  if (isSubmitted) {
    return (
      <section className="section-padding bg-gray-50">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-primary mb-4">Merci pour votre message !</h2>
          <p className="text-lg text-foreground">Nous vous recontacterons rapidement.</p>
        </div>
      </section>
    );
  }

  return (
    <form
      ref={formRef}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 rounded-lg shadow-lg"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden><input name="bot-field" /></p>
      <input type="hidden" name="gclid" value={formData.gclid} />

      {/* Example input field */}
      <input
        name="name"
        required
        value={formData.name}
        onChange={e => handleInputChange('name', e.target.value)}
        className="w-full p-3 border rounded-lg"
        placeholder="Prénom et Nom *"
      />

      {/* Repeat for other fields (email, phone, postalCode, etc.) with correct name attributes */}

      <button
        type="submit"
        className="btn-helios"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Demander un devis gratuit'}
      </button>
    </form>
  );
};

export default ContactForm;
