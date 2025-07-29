import React from 'react'
import Profile from '../assets/profile pic.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import Landingpage from './Landingpage'
import Eduction from './Eduction'
import Skil from './Skil' 
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import { GiSkills } from 'react-icons/gi'
import '../Style/Home.css'

function Home() {
  return (
    <>
    <div className="home-container mt-1">
    <Landingpage />
    </div>
      <section className="about w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-5 rounded-[10px] flex flex-col items-center justify-center mt-4 ">
  {/* Your content here */}

          <h2 className="heading text-4xl gap-2 flex items-center justify-center font-bold mb-6">
            <FontAwesomeIcon icon={faUserAlt} className="text-blue-600 text-4l" />
            About <span>Me</span>
         </h2>
        <div className="row home-row flex-wrap items-center justify-center">
          <div className="image ">
            <img draggable="false" className="tilt " src={Profile} alt="Profile"  />
          </div>
          <div className="content mx-4 p-7 ">
            <h3>I'm Sandeep</h3>
            <span className="tag">Full Stack Developer</span>
            <p>
              I am a Full-Stack developer.
              I am an Information Technology undergraduate from IMSEC.
              I am very passionate about improving my coding skills & developing applications & websites.
              I build WebApps and Websites using MERN Stack.
              Working for myself to improve my skills.
              Love to build Full-Stack clones.
            </p>
            <div className="box-container my-3">
              <div className="box my-6 align-items-center">
                <p><span> Email : </span> rkysandeepyadav@gmail.com</p>
                <p><span> Place : </span>Ghaziabad U.P- 201010</p>
              </div>
            </div>
            <button className="resumebtn">
              <a
                href="https://drive.google.com/file/d/1pNtMnUk6MuNu0BrsN7Pm6wVahTFpJtiL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <span className='text-white' >Resume</span>
                <i className="fas fa-chevron-right"></i>
              </a>
            </button>
          </div>
        </div>
      </section>
       <Eduction/>
    <Skil />
    <Projects />
    <Contact />
    <Footer />
    </>
  )
}

export default Home