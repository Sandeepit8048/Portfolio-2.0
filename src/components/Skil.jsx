import React from 'react'
import { useState } from 'react';
function Skil() {
  const [skills, setSkills] = React.useState([
    'HTML',
    'CSS',
    'React',
    'Node.js',
    'JavaScript',
    'Express',
  ]);

  return (
    <>
     <div className="box  flex-col items-center justify-center p-5 mt-7 flex-wrap">
      <h1 className='text-3xl font-bold mb-4'>Skills</h1>
      <p className='text-gray-500 mb-4'>Here are some of the technologies I have worked with:</p>
       <ul className='list-disc list-inside w-[300px] h-[200px] bg-gray-400'>
         {box.map((skil, index) => (
            <li key={index.id} className='text-gray-700 p-2 hover:bg-gray-300 transition duration-200'>
              {skil}           
            </li>
          ))}
        </ul>
        
          
        

     </div>
    </>
  )
}

export default Skil