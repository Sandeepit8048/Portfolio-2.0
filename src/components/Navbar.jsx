import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/education', label: 'Education' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="bg-gray-800 text-white shadow-md w-full sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[80px]">

        <div className="w-[100px] h-[60px] flex items-center">
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
          >
            <DotLottieReact
              src="https://lottie.host/6e331173-5016-4ea5-ab5a-a81452c877d4/nsKCvXaQrJ.lottie"
              autoplay
              loop
              className="w-full h-[60px] object-cover"
            />
          </motion.div>
        </div>

        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          {navLinks.map(({ path, label }) => (
            <li key={path}>
              <Link
                to={path}
                className="hover:text-gray-300 transition duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 bg-gray-700 space-y-3">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              to={path}
              className="block text-white hover:text-gray-300 font-medium"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;
