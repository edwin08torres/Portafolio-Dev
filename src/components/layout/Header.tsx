import { useState } from "react";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-neutral h-12 md:h-16 w-full flex items-center justify-between px-4 lg:justify-center lg:items-center text-white fixed top-0 left-0 z-50">
      {/* navegacion desktop */}
      <nav className="hidden nav-bg lg:flex justify-center space-x-6 items-cente w-[24rem] fixed shadow-md shadow-black  py-2 rounded-lg border-[1px] border-gray-50  lg:text-lg animate-fade-in">
        <a href="/" className="link-nav-lg">
          Home
        </a>
        <a href="/#about" className="link-nav-lg">
          About
        </a>
        <a href="/project" className="link-nav-lg">
          Projects
        </a>
        {/* <a href="#" className="link-nav-lg">
          test
        </a> */}
      </nav>

      {/* Hamburger button (mobile + tablet) */}
      <button
        className="block md:block lg:hidden text-white focus:outline-none z-50"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
      </button>
      {/* Menu Mobile */}
      <div
        className={`block lg:hidden fixed top-0 left-0 w-full h-[100vh] bg-slate-950 z-40 transform transition-all duration-700 ease-in-out ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <nav className="flex flex-col justify-center items-center h-[100%] w-full gap-4">
          <a className="link-nav" href="/">
            <i className="fa-solid fa-code"></i>
            Home
          </a>
          <a className="link-nav" href="/#about">
            <i className="fa-solid fa-code"></i>
            About
          </a>
          <a className="link-nav" href="/project">
            <i className="fa-solid fa-code"></i>
            Projects
          </a>
          {/* <a className="link-nav" href="#">
            <i className="fa-solid fa-code"></i>
            test
          </a> */}
        </nav>
      </div>
    </header>
  );
};
