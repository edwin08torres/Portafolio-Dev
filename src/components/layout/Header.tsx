export const Header: React.FC = () => {
  return (
    <header className="bg-neutral h-12 md:h-16 w-full flex items-center justify-between px-4 lg:justify-center lg:items-center text-white fixed top-0 left-0 z-50">
      <a
        href="#about"
        className="skip-link absolute left-2 top-0 
                 -translate-y-full focus:translate-y-0 
                 bg-blue-600 text-white px-3 py-1 rounded shadow-lg 
                 transition-transform"
      >
        Saltar al contenido
      </a>
      <nav className="hidden nav-bg lg:flex justify-center space-x-6 items-center w-[24rem] fixed shadow-md shadow-black py-2 rounded-lg  lg:text-lg animate-fade-in">
        <a href="#home" className="link-nav-lg">
          Home
        </a>
        <a href="#about" className="link-nav-lg">
          About
        </a>
        <a href="#project" className="link-nav-lg">
          Projects
        </a>
      </nav>
    </header>
  );
};
