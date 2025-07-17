import { useState, useEffect } from 'react';
import pergola1 from '@/assets/pergola-1.jpg';
import pergola2 from '@/assets/pergola-2.jpg';
import pergola3 from '@/assets/pergola-3.jpg';
import pergola4 from '@/assets/pergola-4.jpg';

const PergolasSlider = () => {
  const images = [pergola1, pergola2, pergola3, pergola4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={images[currentIndex]}
              alt={`Pergola réalisation ${currentIndex + 1}`}
              className="w-full h-[500px] object-cover transition-opacity duration-500"
            />
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PergolasSlider;