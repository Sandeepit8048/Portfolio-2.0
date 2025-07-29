import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-gray-800 text-white p-2 text-center w-full  bottom-0 left-0">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sandeep Yadav. All rights reserved.
        </p>
        <p className="text-sm">
          Follow me on 
          <a href="https://www.linkedin.com/in/sandeep-kumar-yadav-021668242/" className="text-blue-400 hover:underline ml-1">LinkedIn</a> ,
          <a href="https://github.com/Sandeepit8048" className="text-blue-400 hover:underline ml-1">GitHub</a> and
          <a href="rkysandeepyadav@gmail.com" className="text-blue-400 hover:underline ml-1">E-mail</a>

        </p>

    </footer>
    </>
  )
}

export default Footer