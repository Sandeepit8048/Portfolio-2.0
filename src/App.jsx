import React from 'react';
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Eduction from './components/Eduction'
import Home from './components/Home'
import Skil from './components/Skil'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Landingpage from './components/Landingpage'
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css'

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<Home />} />
        <Route path="/education" element={<Eduction />} />
        <Route path="/skills" element={<Skil />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
   
   </>
  );
}

export default App;
