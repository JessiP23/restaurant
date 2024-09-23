
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="py-6 px-4 md:px-8 flex justify-between items-center">
      <motion.h1 
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Las Locas
      </motion.h1>
      <nav>
        <ul className="flex space-x-4">
          {[
            { name: 'Home', path: '/' },
            { name: 'Menu', path: '/menu' },
            { name: 'Promotions', path: '/promotions' },
          ].map((item, index) => (
            <motion.li 
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={item.path} className="hover:text-white transition-colors duration-300">{item.name}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;