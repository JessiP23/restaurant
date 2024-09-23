
import React from 'react';
import { motion } from 'framer-motion';

const menuItems = [
  { category: 'Appetizers', items: [
    { name: 'Guacamole & Chips', price: '$8' },
    { name: 'Queso Fundido', price: '$10' },
  ]},
  { category: 'Main Courses', items: [
    { name: 'Enchiladas Verdes', price: '$14' },
    { name: 'Carne Asada', price: '$18' },
  ]},
  { category: 'Desserts', items: [
    { name: 'Churros', price: '$6' },
    { name: 'Flan', price: '$7' },
  ]},
];

const Menu = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <motion.h2 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Menu
      </motion.h2>
      {menuItems.map((category, index) => (
        <motion.div 
          key={category.category}
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h3 className="text-2xl font-semibold mb-4">{category.category}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((item) => (
              <div key={item.name} className="bg-gray-900 p-4 rounded-lg">
                <h4 className="text-xl font-medium">{item.name}</h4>
                <p className="text-neon-green">{item.price}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Menu;