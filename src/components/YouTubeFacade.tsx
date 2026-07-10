import { useState } from 'react';
import { Play } from 'lucide-react';

interface Props {
  videoId: string;
  start?: number;
  title?: string;
  className?: string;
}

const YouTubeFacade = ({ videoId, start = 0, title = 'Vidéo', className = '' }: Props) => {
  const [loaded, setLoaded] = useState(false);

  const poster = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

  if (loaded) {
    return (
      <div className={`relative w-full aspect-video rounded-lg overflow-hidden shadow-lg ${className}`}>
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&start=${start}&rel=0`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLoaded(true)}
      aria-label={`Lire la vidéo : ${title}`}
      className={`group relative w-full aspect-video rounded-lg overflow-hidden shadow-lg block ${className}`}
    >
      <img
        src={poster}
        alt={title}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="w-20 h-20 rounded-full bg-primary/95 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
          <Play className="text-primary-foreground ml-1" size={32} fill="currentColor" />
        </span>
      </span>
    </button>
  );
};

export default YouTubeFacade;
