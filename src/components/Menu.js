import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

import Taco from '../images/taco.jpg'
import Burrito from '../images/burrito.jpg'
import Torta from '../images/torta.jpg'
import Quesadilla from '../images/quesadilla.jpg'
import Chilaquiles from '../images/chilaquiles.jpg'
import Enchiladas from '../images/enchiladas.jpg'
import Fajita from '../images/fajita.jpg'
import Tostada from '../images/tostada.jpg'
import Cemita from '../images/cemita.jpg'
import Pechuga from '../images/pechuga.jpg'
import Bistec from '../images/bistec.jpg'
import Huevo from '../images/huevo.jpg'
import Pollo from '../images/pollo.jpg'
import Arroz from '../images/arroz.jpg'
import Frijol from '../images/frijol.jpg'
import Guacamole from '../images/guacamole.jpg'
import Fries from '../images/fries.jpg'
import Ensalada from '../images/ensalada.jpg'
import Agua from '../images/agua.jpg'
import Clasica from '../images/clasica.jpg'
import Doble from '../images/doble.jpg'
import Hawai from '../images/hawai.jpg'
import Horchata from '../images/horchata.jpg'
import Jamaica from '../images/jamaica.jpg'
import Refresco from '../images/refresco.jpg'

const menuData = {
  mainDishes: [
    { name: 'TACOS', price: '$3', description: 'AL PASTOR, POLLO, ASADA, TINGA, CARNITAS', image: Taco },
    { name: 'BURRITOS', price: '$13', description: 'POLLO, ASADA, TINGA, CARNITAS', image: Burrito },
    { name: 'TORTAS', price: '$10', description: 'MILANESA, POLLO, ASADA, TINGA, CARNITAS', image: Torta },
    { name: 'QUESADILLAS', price: '$10', description: 'POLLO, ASADA, TINGA, CARNITAS', image: Quesadilla },
    { name: 'CHILAQUILES', price: '$13', description: 'POLLO, ASADA, CARNITAS', image: Chilaquiles },
    { name: 'ENCHILADAS', price: '$15', description: 'POLLO, ASADA, TINGA, CARNITAS', image: Enchiladas },
    { name: 'FAJITAS', price: '$15', description: 'POLLO, STEAK', image: Fajita },
    { name: 'TOSTADAS', price: '$4', description: 'TINGA', image: Tostada },
    { name: 'CEMITAS', price: '$10', description: '', image: Cemita },
  ],
  specials: [
    { name: 'PECHUGA A LA PLANCHA', price: '$15', image: Pechuga },
    { name: 'BISTEC ENCEBOLLADO', price: '$15', image: Bistec },
    { name: 'HUEVOS A LA MEXICANA', price: '$13', image: Huevo },
  ],
  kids: [
    { name: 'QUESADILLA', price: '$7', image: Quesadilla },
    { name: 'BURRITO', price: '$7', image: Burrito },
    { name: 'PAPAS CON POLLO', price: '$10', image: Pollo },
  ],
  sides: [
    { name: 'ARROZ', price: '$5', image: Arroz },
    { name: 'FRIJOLES', price: '$5', image: Frijol },
    { name: 'GUACAMOLE', price: '$5', image: Guacamole },
    { name: 'PAPAS', price: '$5', image: Fries },
    { name: 'ENSALADA', price: '$5', image: Ensalada },
  ],
  combos: [
    { name: 'CLASICA', price: '$15', image: Clasica },
    { name: 'DOBLE', price: '$17', image: Doble },
    { name: 'HAWAIANA', price: '$17', image: Hawai },
  ],
  drinks: [
    { name: 'REFRESCO', price: '$5', image: Refresco },
    { name: 'AGUA', price: '$5', image: Agua },
    { name: 'HORCHATA', price: '$5', image: Horchata },
    { name: 'JAMAICA', price: '$5', image: Jamaica },
  ],
};

const MenuItem = ({ item, onClick }) => (
  <motion.div
    className="mb-4 cursor-pointer"
    whileHover={{ scale: 1.05 }}
    onClick={() => onClick(item)}
  >
    <div className="flex justify-between items-center">
      <span className="font-bold text-xl">{item.name}</span>
      <span className="text-lg">{item.price}</span>
    </div>
    {item.description && (
      <p className="text-sm text-gray-200">{item.description}</p>
    )}
  </motion.div>
);

const Modal = ({ item, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    onClick={onClose}
  >
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 50, opacity: 0 }}
      className="bg-white rounded-lg p-8 max-w-md w-full mx-4"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
        <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
          <X size={24} />
        </button>
      </div>
      <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg mb-4" />
      <p className="text-xl font-semibold text-gray-800 mb-2">{item.price}</p>
      {item.description && (
        <p className="text-gray-600">{item.description}</p>
      )}
    </motion.div>
  </motion.div>
);

const LupitaMenu = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 text-white min-h-screen font-sans">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold mb-2 text-center">LUPITA</h1>
          <h2 className="text-3xl font-semibold mb-12 text-center">COMIDA MEXICANA</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2">Main Dishes</h2>
              {menuData.mainDishes.map((item, index) => (
                <MenuItem key={index} item={item} onClick={setSelectedItem} />
              ))}
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2">Specials</h2>
              {menuData.specials.map((item, index) => (
                <MenuItem key={index} item={item} onClick={setSelectedItem} />
              ))}

              <h2 className="text-3xl font-bold mt-10 mb-6 border-b-2 pb-2">Kids Menu</h2>
              {menuData.kids.map((item, index) => (
                <MenuItem key={index} item={item} onClick={setSelectedItem} />
              ))}

              <h2 className="text-3xl font-bold mt-10 mb-6 border-b-2 pb-2">Sides</h2>
              <div className="grid grid-cols-2 gap-4">
                {menuData.sides.map((item, index) => (
                  <MenuItem key={index} item={item} onClick={setSelectedItem} />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2">Hamburguesa Combo</h2>
            <p className="text-lg mb-4">INCLUYE PAPAS Y REFRESCO</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuData.combos.map((item, index) => (
                <MenuItem key={index} item={item} onClick={setSelectedItem} />
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 border-b-2 pb-2">Bebidas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {menuData.drinks.map((item, index) => (
                <MenuItem key={index} item={item} onClick={setSelectedItem} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <Modal item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default LupitaMenu;