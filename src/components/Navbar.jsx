import React from 'react'
import Landingpage from './Landingpage'

function Navbar() {
  return (
    <>
<div className=" bg-gray-800 text-white p-4 text-center z-10 fixed top-0 w-full">
  <ul className="flex space-x-4 font-bold-50 text-xl    flex-wrap items-center justify-between  p-2 ">
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