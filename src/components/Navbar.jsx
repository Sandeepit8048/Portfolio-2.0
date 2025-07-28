import React from 'react'
import Landingpage from './Landingpage'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { motion } from 'framer-motion';

function Navbar() {
  return (
    <>
      <div className="bg-gray-400 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[80px]">
          
          {/* Logo / Animation */}
          <div className="w-[100px] h-[60px] flex items-center">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{ repeat: Infinity, duration: 10, ease: 'linear' }}
            >
              <DotLottieReact
                src="https://lottie.host/6e331173-5016-4ea5-ab5a-a81452c877d4/nsKCvXaQrJ.lottie"
                autoplay
                loop
                className="w-full h-[60px] object-cover"
              />
            </motion.div>
          </div>

          {/* Menu Items */}
          <ul className="flex space-x-5 text-lg font-semibold flex-wrap items-center">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Education</a></li>
            <li><a href="#" className="hover:text-white">Skills</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>

        </div>
      </div>

      <Landingpage />
    </>
  )
}

export default Navbar
