import { useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToFavorites = () => {
    const element = document.getElementById("favorites");
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu on click
  };

  const scrollToHome = () => {
    const element = document.getElementById("home");
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close menu on click
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-transparent backdrop-blur-md text-white px-6 py-4 shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-extrabold flex items-center gap-1">
          <span className="text-red-500">Creator</span>
          <span className="bg-red-600 text-white px-2 py-0.5 rounded-md">Verse</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base font-medium">
          <button className="hover:text-red-400 transition" onClick={scrollToHome}>
            Home
          </button>
          <button className="hover:text-red-400 transition" onClick={scrollToFavorites}>
            Favorites
          </button>
          <Link to="/addcreator" className="hover:text-red-400 transition">
            Add Creator
          </Link>
        </div>

        {/* Hamburger button - shown on mobile */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {/* Hamburger icon: 3 bars */}
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              // X icon when open
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger icon when closed
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu, toggle visibility */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-3 text-center font-medium text-white bg-black bg-opacity-80 rounded-md py-4 shadow-lg">
          <button className="block w-full hover:text-red-400" onClick={scrollToHome}>
            Home
          </button>
          <button className="block w-full hover:text-red-400" onClick={scrollToFavorites}>
            Favorites
          </button>
          <Link
            to="/addcreator"
            className="block w-full hover:text-red-400"
            onClick={() => setIsOpen(false)}
          >
            Add Creator
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
