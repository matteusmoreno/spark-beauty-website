import React from 'react';
// REMOVA a linha: import './assets/styles/App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Products from './components/Products';
import About from './components/About';
import Promotions from './components/Promotions';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Promotions />
      </main>
      <Footer />
    </div>
  );
}

export default App;