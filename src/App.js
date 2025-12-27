import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './screens/about';
import Client from './screens/client';
import Feature from './screens/feature';
import Product from './screens/product';
// import Service from './screens/service';
import Resource from './screens/resource';
import Home from './home';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/clients" element={<Client />} />
            <Route path="/features" element={<Feature />} />
            <Route path="/products" element={<Product />} />
            {/* <Route path="/services" element={<Service />} /> */}
            <Route path="/resources" element={<Resource />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
