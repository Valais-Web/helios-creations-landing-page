import backgroundImage from '@/assets/modern-house-bg.jpg';

const Header = () => {
  return (
    <header className="relative bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100/50">
      {/* Subtle background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-[0.02]" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center py-4">
          <img 
            src="/lovable-uploads/606d7749-8f6f-4797-b77b-eae7f7abe860.png" 
            alt="Hélios Créations SA" 
            className="h-12 w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;