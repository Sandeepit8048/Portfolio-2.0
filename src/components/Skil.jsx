import React from 'react';
import Img from '../assets/HTML5_logo.webp';
import CSS from '../assets/css.webp';
import Tailwind from '../assets/tailwind.webp';
import JS from '../assets/js.png';
import DBMS from '../assets/dbms.png';
import Next from '../assets/nextjs.webp';
import java from '../assets/java.png';
import mongodb from '../assets/mongodb.png';
// import SQL from '../assets/SQL.png';
import Postman from '../assets/Postman.svg';
import router from '../assets/router.jpg';
import CN from '../assets/CN.png';
import { GiSkills } from "react-icons/gi";

function Skil() {
  const skills = [
    { name: 'HTML', Image: Img },
    { name: 'CSS', Image: CSS },
    { name: 'JavaScript', Image: JS },
    { name: 'React', Image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Node.js', Image: 'https://nodejs.org/static/images/logo.svg' },
    { name: 'Express.js', Image: 'https://expressjs.com/images/favicon.png' },
    { name: 'Next.js', Image: Next },
    { name: 'Redux', Image: 'https://raw.githubusercontent.com/reduxjs/redux/master/logo/logo.png' },
    { name: 'MongoDB', Image: 'https://www.mongodb.com/assets/images/global/favicon.ico' },
    { name: 'Git', Image: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
    { name: 'GitHub', Image: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png' },
    { name: 'Tailwind CSS', Image: Tailwind },
    { name: 'Bootstrap', Image: 'https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo-shadow.png' },
    { name: 'DBMS', Image: DBMS },
    { name: 'Figma', Image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/2048px-Figma-logo.svg.png' },
    { name: 'VS Code', Image: 'https://code.visualstudio.com/assets/favicon.ico' },
    { name: 'Java', Image: java },
    { name: 'SQL', Image: 'https://cdn-icons-png.flaticon.com/512/4248/4248443.png' },
    { name: 'MongoDB', Image: mongodb },
    { name: 'Docker', Image: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png' },
    { name: 'Vercel', Image: 'https://vercel.com/favicon.ico' },
    { name: 'Postman', Image: Postman },
    { name: 'React Router', Image: router },
    { name: 'Computer Networks', Image: CN }
  ];

  return (
    <div className="p-4 md:p-8 mt-7 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center font-bold text-3xl mb-4 gap-2 text-center">
        <GiSkills className="text-orange-500 text-4xl" />
        <h1 className="font-bold">Skills</h1>
      </div>
      <p className="text-gray-500 mb-6 text-center max-w-2xl">
        Here are some of the technologies I have worked with:
      </p>

      {/* Responsive grid: 2 cols on small, 3 on md, 4 on lg */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 w-full max-w-7xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition duration-300 flex flex-col items-center justify-center text-center"
          >
            <img
              src={skill.Image}
              alt={skill.name}
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain mb-2"
            />
            <h2 className="text-md font-semibold">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skil;
