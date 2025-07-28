import React, { useState } from 'react';
import Todo from '../assets/todo-app.png';
import Crypto from '../assets/crypto.svg';
import Ecommerce from '../assets/E-commerce.webp';
import Web from '../assets/web.webp';
import car from '../assets/car-finder.jpg';
import Canteen from '../assets/canteen.webp';
import { GoProjectSymlink } from 'react-icons/go';

function Projects() {
  const [projects] = useState([
    {
      title: 'To-Do App',
      description: 'A personal website to showcase my skills and projects.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS', 'react-router-dom'],
      Image: Todo,
      link: 'https://to-do-snowy-alpha.vercel.app/',
    },
    {
      title: 'Track-Crypto',
      description: 'A cryptocurrency tracking application that provides real-time data.',
      technologies: ['React', 'Tailwind CSS', 'CoinGecko API', 'Axios', 'React Router'],
      Image: Crypto,
      link: 'https://track-crypto-bjmd.vercel.app/',
    },
    {
      title: 'E-commerce Website',
      description: 'An e-commerce website that allows users to browse and purchase products online.',
      technologies: ['Next.Js', 'Node.js', 'Express', 'MongoDB', 'Redux'],
      Image: Ecommerce,
      link: 'https://e-commerce-o8tb.vercel.app/',
    },
    {
      title: 'Website',
      description: 'A personal website to showcase my skills and projects.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      Image: Web,
      link: 'https://sandeepit8048.github.io/konnet/',
    },
    {
      title: 'Car Finder',
      description: 'A car finder application to search for cars based on various criteria.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      Image: car,
      link: 'https://car-finder-eta.vercel.app/',
    },
    {
      title: 'Canteen Management System',
      description: 'A canteen management system that allows users to order food online.',
      technologies: ['React', 'Tailwind CSS', 'JavaScript', 'HTML', 'CSS'],
      Image: Canteen,
      link: 'https://https-github-com-sandeepit8048-canteen.vercel.app/',
    },
    {
      title: 'Project 50+',
      description: 'A collection of 50+ projects showcasing various web development skills.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Next.js', 'Redux', 'Tailwind CSS', 'Bootstrap', 'Axios', 'Postman', 'Git', 'GitHub'],
    },
  ]);

  return (
    <div className="p-5 md:p-8 mt-7 flex flex-col items-center justify-center">
      <div className="flex items-center justify-center font-bold text-3xl mb-4 gap-2 text-center">
        <GoProjectSymlink className="text-4xl text-blue-600" />
        <h1 className="font-bold">Projects</h1>
      </div>

      <p className="text-gray-500 mb-6 text-center max-w-xl">Here are some of my projects:</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 text-center flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{project.description}</p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Tech:</strong> {project.technologies.join(', ')}
            </p>
            {project.Image && (
              <img
                src={project.Image}
                alt={project.title}
                className="w-full h-40 object-contain mb-4 rounded"
              />
            )}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
