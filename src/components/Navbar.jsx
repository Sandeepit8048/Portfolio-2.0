import React from 'react'
import Landingpage from './Landingpage'

function Navbar() {
  return (
    <>
<div className="container  flex p-4">
  <ul className="flex space-x-4 font-bold justify-end w-full">
    <li><a href="#">Home</a></li>
    <li><a href="">Education</a></li>
    <li><a href="#">Skills</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</div>
    <Landingpage/>
    </>
  )
}

export default Navbar