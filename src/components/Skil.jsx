import React from 'react'
import { useState } from 'react';
import Img from '../assets/HTML5_logo.webp';
import CSS from '../assets/css.webp';
import Tailwind from '../assets/tailwind.webp';
import JS from '../assets/js.png';
import DBMS from '../assets/dbms.png';
import Next from '../assets/nextjs.webp';
import java from '../assets/java.png';
import mongodb from '../assets/mongodb.png';
import SQL from '../assets/sql.png';
import Postman from '../assets/postman.svg';
import router from '../assets/router.jpg';
import CN from '../assets/CN.png';
import { GiSkills } from "react-icons/gi";

function Skil() {
  const [skills, setSkills] = React.useState([
   {  name: 'HTML',
     Image: Img,
     style: { width: '100px', height: '100px' }
     
    },
    {
       name : 'CSS',
     Image: CSS,
      style: { width: '100px', height: '100px' }
    },
    {
    name : 'JavaScript',
    Image: JS,
     style: { width: '100px', height: '100px' }
    },
    {
      name: 'React',
      Image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
       style: { width: '100px', height: '100px' }
    },
    {
      name: 'Node.js',
      Image: 'https://nodejs.org/static/images/logo.svg'
    },
    {
      name: 'Express.js',
      Image: 'https://expressjs.com/images/favicon.png'
    },
    {
      name: 'Next.js',
      Image: Next
    },
    {
      name: 'Redux',
      Image: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png'
    },
    {
      name: 'MongoDB',
      Image: 'https://www.mongodb.com/assets/images/global/favicon.ico'
    },
    {
      name: 'Git',
      Image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'
    },
    {
      name: 'GitHub',
      Image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png'
    },
    {
      name: 'Tailwind CSS',
      Image: Tailwind
    },
    {
      name: 'Bootstrap',
      Image: 'https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo-shadow.png'
    },
    {
      name: 'DBMS',
      Image: DBMS
    },{
      name: 'Figma',
      Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/2048px-Figma-logo.svg.png'
    },
    {
      name: 'VS Code',
      Image: 'https://code.visualstudio.com/assets/favicon.ico'
    },{
      name: 'java',
      Image: java
    },
    {
      name: 'SQL',
      Image: SQL
    },
   {
      name: 'MongoDB',
      Image: mongodb
   },
     {
      name : 'Docker',
      Image: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png'
     },
    {
      name: 'Vercel',
      Image: 'https://vercel.com/favicon.ico'
    },{
      name : 'Postman', 
      Image: Postman
    },{
      name:'react-router',
      Image: router
    },
    {
      name: 'Computer Networks',
      Image: CN
    }

  ]);

  return (
    <>
     <div className="box  flex-col items-center justify-center p-5 mt-7 flex-wrap text-center">
      <div className="flex items-center justify-center font-bold text-3xl mb-4 gap-2 ">
        <GiSkills className=' text-orange-500 bold-4xl '  />
      <h1 className='font-bold  text-center'>Skills</h1>
      </div>
      <p className='text-gray-500 mb-4'>Here are some of the technologies I have worked with:</p>
        <div className="grid grid-cols-3 gap-4 mt-4 ">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-200 p-3 rounded-lg shadow-md hover:bg-gray-300 transition-colors flex flex-col items-center">
              <img src={skill.Image} alt={skill.name} className='w-[200px] h-[200px]' />
              <h2 className='text-xl font-semibold'>{skill.name}</h2>
            </div>
          ))}
          </div>
       
        
          
        

     </div>
    </>
  )
}

export default Skil