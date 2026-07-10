import { useEffect, useState } from 'react';

const StickyMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const [hideNearForm, setHideNearForm] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 500);

      // Hide sticky bar when the form is on screen so it never covers the submit button.
      const form = document.getElementById('contact-form');
      if (form) {
        const rect = form.getBoundingClientRect();
        const inView =
          rect.top < window.innerHeight && rect.bottom > window.innerHeight * 0.2;
        setHideNearForm(inView);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible || hideNearForm) return null;

  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-[0_-4px_16px_rgba(0,0,0,0.08)] px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
      <button
        onClick={() =>
          document
            .getElementById('contact-form')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        className="w-full bg-primary text-primary-foreground font-semibold py-3.5 rounded-lg shadow hover:bg-primary/90 transition-colors"
      >
        Demander un devis gratuit
      </button>
    </div>
  );
};

export default StickyMobileCTA;
