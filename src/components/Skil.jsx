import React from 'react'
import { useState } from 'react';
import Img from '../assets/HTML5_logo.webp';
function Skil() {
  const [skills, setSkills] = React.useState([
   {  name: 'HTML',
     Image: Img,},
  ]);

  return (
    <>
     <div className="box  flex-col items-center justify-center p-5 mt-7 flex-wrap text-center">
      <h1 className='text-3xl font-bold mb-4'>Skills</h1>
      <p className='text-gray-500 mb-4'>Here are some of the technologies I have worked with:</p>
        {/* <div className="box">
          <ul className='list-disc list-inside w-[300px] h-[200px] bg-gray-400'>
        <img src={Img} alt="" className='w-[285px] h-[200px] p-2' />
        </ul>
        </div> */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-200 p-3 rounded-lg shadow-md hover:bg-gray-300 transition-colors">
              <img src={skill.Image} alt={skill.name}/>
              <h2 className='text-xl font-semibold'>{skill.name}</h2>
            </div>
          ))}
          </div>
       
        
          
        

     </div>
    </>
  )
}

export default Skil