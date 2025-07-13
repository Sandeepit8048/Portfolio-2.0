import { useState } from 'react'
import Eduction from './components/Eduction'
import Home from './components/Home'
import Skil from './components/Skil'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import './App.css'

function App() {
 

  return (
    <>
     <h1>Welcome to My Portfolio</h1>
     <p>This is a simple portfolio application built with React.</p>
     <Eduction />
     <Home />
     <Skil />
      <Navbar />
     <Contact />
    </>
  )
}

export default App
