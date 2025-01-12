import  { useState, useEffect } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        isSticky
          ? 'fixed top-0 z-50 w-[98%] text-black bg-white h-auto p-5 transition-all rounded-full mt-2 duration-700 ease-in-out'
          : 'bg-transparent shadow-xl bg-black text-white rounded-full z-50 mt-3 w-[90%] p-3 px-5 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50 border border-gray-100 transition-all duration-300 ease-in-out'
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">VeloCity</h1>

        {/* Navbar for larger screens */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-gray-300">Home</a></li>
            <li><a href="#services" className="hover:text-gray-300">Services</a></li>
            <li><a href="#about" className="hover:text-gray-300">About</a></li>
            <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
          </ul>
        </nav>

        {/* User Icon / Login Button */}
        <div className="flex items-center space-x-4">
          <button className="text-white hover:text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-3.87 0-7 3.13-7 7v1h14v-1c0-3.87-3.13-7-7-7z"
              />
            </svg>
          </button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
            Login
          </button>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden flex items-center" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>

      {/* Mobile Navbar */}
      <nav
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <ul className="flex flex-col space-y-4 p-4">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#services" className="hover:text-gray-300">Services</a></li>
          <li><a href="#about" className="hover:text-gray-300">About</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
