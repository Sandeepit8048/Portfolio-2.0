import { useState } from 'react'
import Eduction from './components/Eduction'
import Home from './components/Home'
import Skil from './components/Skil'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Eduction /> */}
      {/* <Skil /> */}
      {/* <Contact /> */}
    </>
  )
}

export default App
