
import React from 'react';
import { motion } from 'framer-motion';

const promotions = [
  { title: 'Taco Tuesday', description: 'Get 3 tacos for the price of 2 every Tuesday!', image: '/api/placeholder/400/300' },
  { title: 'Happy Hour', description: '50% off all drinks from 4-6 PM, Monday to Friday', image: '/api/placeholder/400/300' },
  { title: 'Family Fiesta', description: 'Feed a family of 4 for just $40 on Sundays', image: '/api/placeholder/400/300' },
];

const Promotions = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <motion.h2 
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Special Promotions
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {promotions.map((promo, index) => (
          <motion.div 
            key={promo.title}
            className="bg-gray-900 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img src={promo.image} alt={promo.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
              <p>{promo.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Promotions;