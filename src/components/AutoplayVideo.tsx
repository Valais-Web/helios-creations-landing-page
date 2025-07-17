import { useEffect, useRef, useState } from 'react';

const AutoplayVideo = () => {
  const videoRef = useRef<HTMLIFrameElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const videoSrc = isInView 
    ? "https://www.youtube.com/embed/9PrgaUNNLWw?autoplay=1&mute=1&start=3&controls=1"
    : "https://www.youtube.com/embed/9PrgaUNNLWw?start=3&controls=1";

  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            ref={videoRef}
            width="100%"
            height="100%"
            src={videoSrc}
            title="Hélios Créations | Pergolas"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
};

export default AutoplayVideo;