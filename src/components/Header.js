
import {React, useState} from 'react';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Promotions', path: '/promotions' },
  ];

  return (
    <header className="bg-black py-6 px-4 md:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-4xl font-bold text-neon-green"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Lupita Mexican Food
        </motion.h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {menuItems.map((item, index) => (
              <motion.li 
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link 
                  to={item.path} 
                  className="text-neon-green hover:text-white transition-colors duration-300 text-lg font-medium"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-neon-green">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <motion.nav 
          className="md:hidden mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className="text-neon-green hover:text-white transition-colors duration-300 text-lg font-medium block"
                  onClick={toggleMenu}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;