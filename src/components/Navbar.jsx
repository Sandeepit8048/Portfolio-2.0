import React from 'react'
import Landingpage from './Landingpage'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <>
<div className=" bg-gray-400 p-3  justify-between flex items-center text-black-100 shadow-md">
    <li className="w-[150px] h-[60px] flex items-center justify-center">
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
        style={{ transform: 'translateY(-50%)' }}
      >
        <DotLottieReact
          src="https://lottie.host/6e331173-5016-4ea5-ab5a-a81452c877d4/nsKCvXaQrJ.lottie"
          autoplay
          loop
          // style={{ width: '150px', height: '150px' }}
          className=" w-full md:w-[100px] h-[80px] object-cover rounded-lg"
        />
      </motion.div>
    </li>
  <ul className="flex space-x-7 font-bold-50 text-xl   flex-wrap items-center justify-end p-2 ">
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