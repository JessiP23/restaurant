
import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-5xl font-bold mb-4">Authentic Mexican Cuisine</h2>
        <p className="text-xl">Experience the vibrant flavors of Mexico in every bite</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          
          { icon: Utensils, title: 'Fresh Ingredients', description: 'We use only the finest, locally-sourced produce' },
          { icon: Clock, title: 'Quick Service', description: 'Fast service without compromising on quality' }
        ].map((feature, index) => (
          <motion.div 
            key={feature.title}
            className="bg-gray-900 p-6 rounded-lg text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <feature.icon className="w-12 h-12 mx-auto mb-4 text-neon-green" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <img src="/api/placeholder/600/400" alt="Mexican dish" className="rounded-lg shadow-lg" />
        <img src="/api/placeholder/600/400" alt="Restaurant interior" className="rounded-lg shadow-lg" />
      </motion.div>
    </div>
  );
};

export default Home;