
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4 md:px-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <p className="flex items-center"><MapPin className="mr-2" /> 123 Spicy Street, Flavortown, MX 12345</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="flex items-center"><Phone className="mr-2" /> (555) 123-4567</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Hours</h3>
          <p className="flex items-center"><Clock className="mr-2" /> Mon-Sat: 11am-10pm, Sun: 12pm-9pm</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 El Sabor Verde. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
