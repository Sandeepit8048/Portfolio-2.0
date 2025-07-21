import React from 'react'

function Footer() {
  return (
    <>
    <footer className="bg-gray-800 text-white p-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Sandeep Yadav. All rights reserved.
        </p>
        <p className="text-sm">
          Follow me on 
          <a href="#" className="text-blue-400 hover:underline ml-1">LinkedIn</a> and
          <a href="#" className="text-blue-400 hover:underline ml-1">GitHub</a>
        </p>

    </footer>
    </>
  )
}

export default Footer