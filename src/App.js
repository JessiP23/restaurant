
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Menu from './components/Menu';
import Promotions from './components/Promotions';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-neon-green font-sans">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/promotions" element={<Promotions />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;