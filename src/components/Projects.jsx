import React from 'react'
import { useState } from 'react'
import Todo from '../assets/todo-app.png'
import Crypto from '../assets/crypto.svg'
import Ecommerce from '../assets/e-commerce.webp';
import Web from '../assets/web.webp'
import car from '../assets/car-finder.jpg'
import Canteen from '../assets/canteen.webp'
function Projects() {
    const [projects, setProjects] = useState([
        {
            title: 'To-Do App',
            description: 'A personal  website to showcase my skills and projects.',
            technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS' , 'react-router-dom'],
            Image: Todo ,
            link: 'https://to-do-snowy-alpha.vercel.app/'
        },
        {
            title : 'Track-Crypto',
            description: 'A cryptocurrency tracking application that provides real-time data on various cryptocurrencies.',
            technologies: ['React', 'Tailwind CSS', 'CoinGecko API', 'Axios', 'React Router'],
            Image: Crypto,
            link: 'https://track-crypto-bjmd.vercel.app/'
        },
        {
            title: 'E-commerce Website',
            description: 'An e-commerce website that allows users to browse and purchase products online.',
            technologies: ['Next.Js', 'Node.js', 'Express', 'MongoDB', 'Redux'],
            Image: Ecommerce ,
            link:'https://e-commerce-o8tb.vercel.app/'
        },
        {
            title: 'Website ',
            description: 'A personal website to showcase my skills and projects.',
            technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
            Image: Web,
            link: 'https://sandeepit8048.github.io/konnet/'
        },
        {
            title: 'Car Finder',
            description: 'A car finder application that allows users to search for cars based on various criteria.',
            technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
            Image: car,
            link: 'https://car-finder-eta.vercel.app/'
        },
        {
            title: 'Canteen Management System',
            description: 'A canteen management system that allows users to order food online.',
            technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
            Image: Canteen,
            link: 'https://https-github-com-sandeepit8048-canteen.vercel.app/'
        }
    ]);
  return (
    <>
    <div className="card p-5 mt-7 flex-col items-center justify-center">
      <h1 className='text-3xl font-bold mb-4 text-center'>Projects</h1>
      <p className='text-gray-500 mb-4 text-center'>Here are some of my projects:</p>
      <div className="project-list grid grid-cols-2 gap-4 mt-4 ">
        {projects.map((project, index) => (
          <div key={index} className="project-item bg-gray-200 p-4 rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow duration-300 text-center weight-bold  ">
            <h2 className='text-xl font-semibold'>{project.title}</h2>
            <p className='text-gray-600'>{project.description}</p>
            <p className='text-gray-600'>Technologies: {project.technologies.join(', ')}</p>
            {project.link && <p className='text-gray-600 text-xl weight-bold flex flex-col items-center '><img src={project.Image} alt={project.Image} /><a href={project.link}>View Project</a></p>}
          </div>
        ))} 
        </div>
    </div>
    </>
  )
}

export default Projects