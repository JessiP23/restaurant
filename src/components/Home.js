'use client'
import {React, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import { Utensils, Clock, ArrowRight } from 'lucide-react';
import Burrito from '../images/burrito.jpg'
import Car from '../images/car.jpg'
import Food from '../images/food.jpg'
import Carone from '../images/carone.jpg'
import Burger from '../images/burger.jpg'
import Worker from '../images/worker.jpg'
import Side from '../images/side.jpg'
import Night from '../images/night.jpg'
import Like from '../images/like.jpg'

import Video from '../video/video.mp4'

const Home = () => {
  const images = [
    Burrito,
    Car,
    Food,
    Carone,
    Burger,
    Worker,
    Side,
    Night,
    Like
  ];

  const carouselRef = useRef(null);

  useEffect(() => {
    const scrollCarousel = () => {
      if (carouselRef.current) {
        if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += 1;
        }
      }
    };

    const intervalId = setInterval(scrollCarousel, 20);

    return () => clearInterval(intervalId);
  }, []);

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

      <div className="mb-16">
        <h3 className="text-3xl font-bold mb-8 text-center">Featured Dishes</h3>
        <div 
          ref={carouselRef}
          className="overflow-hidden whitespace-nowrap"
          style={{ height: '300px' }}
        >
          <div className="inline-block">
            {images.concat(images).map((src, index) => (
              <div
                key={index}
                className="inline-block w-[400px] h-[300px] mx-2"
              >
                <img 
                  src={src} 
                  alt={`Dish ${index + 1}`} 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-4xl font-bold mb-8 text-center">Video</h2>
        <div className="flex justify-center h-[90vh]">
          <video
            className="w-full max-w-3xl rounded-xl shadow-lg"
            controls
            playsInline
          >
            <source src={Video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* <motion.div 
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
      </motion.div> */}
    </div>
  );
};

export default Home;