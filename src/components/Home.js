
import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Clock, ArrowRight } from 'lucide-react';
import Burrito from '../images/burrito.jpg'
import Car from '../images/car.jpg'

const Home = () => {
    return (
      <div className="container mx-auto px-4 md:px-8 py-12">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl font-bold mb-6 text-neon-green">Authentic Mexican Cuisine</h2>
          <p className="text-2xl text-gray-300">Experience the vibrant flavors of Mexico in every bite</p>
          <motion.button
            className="mt-8 bg-neon-green text-black font-bold py-3 px-6 rounded-full hover:bg-white transition duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order Now <ArrowRight className="inline-block ml-2" />
          </motion.button>
        </motion.div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {[
            { icon: Utensils, title: 'Fresh Ingredients', description: 'We use only the finest, locally-sourced produce' },
            { icon: Clock, title: 'Quick Service', description: 'Fast service without compromising on quality' }
          ].map((feature, index) => (
            <motion.div 
              key={feature.title}
              className="bg-gray-900 p-8 rounded-xl text-left flex items-start"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <feature.icon className="w-16 h-16 mr-6 text-neon-green flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-300 text-lg">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
  
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.img 
            src={Burrito} 
            alt="Mexican dish" 
            className="rounded-xl shadow-2xl object-cover h-96 w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img 
            src={Car} 
            alt="Restaurant interior" 
            className="rounded-xl shadow-2xl object-cover h-96 w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    );
  };
  
  export default Home;