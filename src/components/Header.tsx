import heliosLogo from '@/assets/helios-logo.png';

const Header = () => {
  return (
    <header className="w-full py-6 px-5 md:px-20">
      <div className="max-w-7xl mx-auto flex justify-end">
        <div className="w-40 h-auto">
          <img 
            src={heliosLogo} 
            alt="Hélios Créations SA" 
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;