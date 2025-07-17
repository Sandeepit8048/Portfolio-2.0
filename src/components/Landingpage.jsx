import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import heroImg from '../assets/hero.avif'
import bgVideo from '../assets/bgvideo.mp4'

function TypingSection() {
  const typedElement = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedElement.current, {
      strings: ['Forntend Developer', 'Backend Developer', 'UI/UX Design'],
      typeSpeed: 80,
      backSpeed: 40,
      loop: true,
    });

    return () => {
      // Destroy instance on unmount to prevent memory leaks
      typedInstance.current.destroy();
    };
  }, []);
  return (
    <div className="relative w-full h-screen overflow-hidden" id="home">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo}
        autoPlay
        loop
        muted
      />
      {/* If you use particles.js, add its React implementation here */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full container mx-auto">
        <div className="flex-1 flex flex-col justify-center items-start px-6">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Hi There,<br />
            Sandeep <span className="text-blue-400">Kr.Yadav</span>
          </h2>
               
          <p className="text-white text-lg mb-4">
            I am into -- {' '}
            <span
              ref={typedElement}
              className="text-blue-400 font-semibold"
            ></span>
          </p>
          <a
            href="#about"
            className="btn inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition mb-6"
          >
            <span>About Me</span>
            <i className="fas fa-arrow-circle-down ml-2"></i>
          </a>
          <div className="socials mb-6">
            <ul className="flex space-x-4">
              <li>
                <a className="linkedin text-white hover:text-blue-500" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sandeep-kumar-yadav-021668242/">
                  <i className="fab fa-linkedin text-2xl"></i>
                </a>
              </li>
              <li>
                <a className="github text-white hover:text-gray-400" aria-label="GitHub" target="_blank" rel="noopener noreferrer"href='https://github.com/Sandeepit8048'>
                  <i className="fab fa-github text-2xl"></i>
                </a>
              </li>
              <li>
                <a className="twitter text-white hover:text-blue-400" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
              </li>
              <li>
                <a className="telegram text-white hover:text-blue-400" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-telegram-plane text-2xl"></i>
                </a>
              </li>
              <li>
                <a className="instagram text-white hover:text-pink-500" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </li>
              <li>
                <a className="dev text-white hover:text-black" aria-label="Dev" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-dev text-2xl"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center transition-transform duration-700 hover:scale-105 transform hover:rotate-20 hover:translate-x-2 hover:translate-y-2">
          <img
            draggable="false"
            className="tilt w-64 h-64 object-cover rounded-full shadow-lg"
            src={heroImg}
            alt="Hero"
          />
        </div>
      </div>
    </div>
  )
}

export default TypingSection;