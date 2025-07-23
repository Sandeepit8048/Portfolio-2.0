import { useState } from 'react'
import Eduction from './components/Eduction'
import Home from './components/Home'
import Skil from './components/Skil'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Contact />
      <Skil />
      <Eduction />
      <Footer />
      {/* <Landingpage /> */}
     
    </>
  )
}

export default App
