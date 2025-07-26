import React from 'react'
import Landingpage from './Landingpage'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Navbar() {
  return (
    <>
<div className=" bg-white-800  p-3  justify-between flex items-center text-black-100 shadow-md">
    <li className='w-[150px] h-[50px] flex items-center justify-center '>
       <DotLottieReact
      src="https://lottie.host/6e331173-5016-4ea5-ab5a-a81452c877d4/nsKCvXaQrJ.lottie"
      loop
      autoplay
    />
    </li>
  <ul className="flex space-x-3 font-bold-50 text-xl  flex-wrap items-center justify-end p-2 ">
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