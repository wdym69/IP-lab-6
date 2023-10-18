// Main.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

export default function Main() {
    return (
    <main>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};
