
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4 md:px-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <p className="flex items-center"><MapPin className="mr-2" /> 5817 5TH AVE, BROOKLYN, NY 11220</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="flex items-center"><Phone className="mr-2" /> (929) 592-1011</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4">Hours</h3>
          <p className="flex items-center"><Clock className="mr-2" /> MARTES A JUEVES: 11:00 AM - 11:00 PM</p>
          <p className="flex items-center"><Clock className="mr-2" />VIERNES Y SABADO: 11:00 AM - 3:00 AM</p>
          <p className="flex items-center"><Clock className="mr-2" />DOMINGO: 11:00 AM - 11:00 PM</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Lupita Mexican Food. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
