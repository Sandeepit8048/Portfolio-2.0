import React from 'react'
import { FcReadingEbook } from "react-icons/fc";
import { TbCertificate } from "react-icons/tb";
import { GiAchievement } from "react-icons/gi";
import { FaBriefcase, FaArrowRight } from "react-icons/fa";
import IMS from '../assets/ims.jpeg';
import KVN from '../assets/kvn.avif';
import SHPS from '../assets/shps.jpg';
function Eduction() {
 const experiences = [
  {
    company: "Self Employed",
    role: "Full Stack Developer",
    duration: "Oct 2023 - present",
  },
  {
    company: "Tejoverse Creative Solutions",
    role: "Frontend Development | Internship",
    duration: "June 2023 – August 2023",
  },
  {
    company: "10X Bulls ",
    role: "Website Developer | Internship",
    duration: "Sep. 2024 – March.2025",
  },
  {
    company: "Hackathon Participate",
    role: "Event| CodeFest 2023",
    duration: "Year: 2023",
  },

];
  return (
    <>
    <div className="card  p-5 mt-7 flex-col items-center justify-center">
      <div className='flex items-center justify-center font-bold text-3xl mb-4 gap-2 '>
        <FcReadingEbook  className='text-5xl '/>
      <h1 className=' font-bold  text-center'>Education</h1>
      </div>
      <p className='text-gray-500 mb-4 text-center'>Here are my educational qualifications:</p>
      <div className="education-list">
      <div className="education-item bg-gray-200 p-4 rounded-lg shadow-md mb-4 flex gap-6 items-center">
     <img src={IMS} alt="IMS" className="w-[400px] h-[150px]    " />
     <div>
    <h2 className="text-xl font-semibold">Bachelor of Technology in Information Technology</h2>
    <p className="text-gray-600">Institute: IMSEC, Ghaziabad</p>
    <p className="text-gray-600">Year: 2021-2025 -- (1-Div)</p>
    {/* <p className='text-gray-600'>I-Div</p> */}
    </div>
   </div>

        <div className="education-item bg-gray-200 p-4 rounded-lg shadow-md mb-4">
      <div className="education-item bg-gray-200 p-4 rounded-lg shadow-md mb-4 flex gap-6 items-center"> 
           <img src={KVN} alt="KVN" className="w-[400px] h-[150px]  " />
          <div>
          <h2 className='text-xl font-semibold'>High School</h2>
          <p className='text-gray-600'>School: Kvn public School, Varanasi</p>
          <p className='text-gray-600'>Year:  2020</p>
          </div>
        </div>
        </div>
        <div className="education-item bg-gray-200 p-4 rounded-lg shadow-md mb-4">
      <div className="education-item bg-gray-200 p-4 rounded-lg shadow-md mb-4 flex gap-6 items-center">
          <img src={SHPS} alt="SHPS" className="w-[400px] h-[150px]  " />
          <div>
          <h2 className='text-xl font-semibold'> School-(1 to 10th Class)</h2>
          <p className='text-gray-600'>School: Swami Harsewanad public School, Varanasi</p>
          <p className='text-gray-600'>Year:  2020</p>
          </div>
          </div>
        </div>
        </div>
    </div>

    <div className="card  p-5 mt-7 flex-col items-center justify-center">
      <div className='flex items-center justify-center font-bold text-3xl mb-4 gap-2 '>
        <TbCertificate className='text-5xl  '/>
      <h1 className=' font-bold  text-center'>Certifications</h1>
      </div>
      <p className='text-gray-500 mb-4 text-center'>Here are some of the certifications I have completed:</p>
      <div className="certification-list">    
        <div className="certification-item bg-gray-200 p-4 rounded-lg shadow-md mb-4">
          <h2 className='text-xl font-semibold'>Full Stack Development</h2>
          <p className='text-gray-600'>Platform: Udemy</p>
          <p className='text-gray-600'>Year: 2022</p>
          <p className='text-gray-600'><a href="https://drive.google.com/file/d/110Yvp8hq0vNfYPDmoNddU4BmAcrvNlVl/view?usp=sharing">Certificate</a></p>
        </div>
        <div className="certification-item bg-gray-200 p-4 rounded-lg shadow-md mb-4">
          <h2 className='text-xl font-semibold'>JavaScript Algorithms and Data Structures</h2>
          <p className='text-gray-600'>Platform: freeCodeCamp</p>
          <p className='text-gray-600'>Year: 2023</p>
        </div>
        <div className="certification-item bg-gray-200 p-4 rounded-lg shadow-md mb-4">
          <h2 className='text-xl font-semibold'>Internship</h2>
          <p className='text-gray-600'>Tejoverse Creative Solutions  - Frontend Develope</p>
          <p className='text-gray-600'>June 2023 – August 2023</p>
          <p className='text-gray-600'><a href="https://drive.google.com/file/d/1gjOsNkBDu1HXeya-KhbkeVGcDaPIE2hr/view?usp=sharing">Certificate</a></p>   

        </div>
        </div>
      </div>

    {/* <div className="card  p-5 mt-7 flex-col items-center justify-center">
      <div className='flex items-center justify-center font-bold text-3xl mb-4 gap-2 '>
        <GiAchievement className='text-5xl  '/> 
      <h1 className=' font-bold  text-center'>Achievements</h1>
      </div>
      <p className='text-gray-500 mb-4 text-center'>Here are some of my achievements:</p>
        <div className="achievement-item bg-gray-200 p-4 rounded-lg shadow-md mb-4">
          <h2 className='text-xl font-semibold'>Internship</h2>
          <p className='text-gray-600'>Tejoverse Creative Solutions  - Frontend Developer</p>
          <p className='text-gray-600'>June 2023 – August 2023</p>
          <p className='text-gray-600'><a href="https://drive.google.com/file/d/1gjOsNkBDu1HXeya-KhbkeVGcDaPIE2hr/view?usp=sharing">Certificate</a></p>   
        </div>
         <div className="achievement-item bg-gray-200 p-4 rounded-lg shadow-md mb-4">
          <h2 className='text-xl font-semibold'>Internship</h2>
          <p className='text-gray-600'>10X Bulls  - Frontend Developer</p>
          <p className='text-gray-600'>Sep. 2024 – March.2025</p>
        </div>
      <div className="achievement-list">
        <div className="achievement-item bg-gray-200 p-4 rounded-lg shadow-md mb-4">
          <h2 className='text-xl font-semibold'>Hackathon Participate</h2>
          <p className='text-gray-600'>Event: CodeFest 2023</p>
          <p className='text-gray-600'>Year: 2023</p>
        </div>
        </div>
      </div> */}

      <section id="experience" className="mt-20 px-4">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3 mb-10">
          <FaBriefcase className="text-orange-500" />
          Experience
        </h2>
        <div className="relative max-w-5xl mx-auto before:content-[''] before:absolute before:w-1 before:bg-indigo-900 before:top-0 before:bottom-0 before:left-1/2 before:-translate-x-1/2 z-0">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`relative w-full md:w-1/2 px-4 mb-8 ${
                  isLeft ? "md:pr-10 md:ml-0 md:left-0" : "md:pl-10 md:left-1/2"
                }`}
              >
                <div
                  className={`absolute top-3 w-6 h-6 bg-white border-4 border-orange-500 rounded-full z-10 ${
                    isLeft ? "right-[-12px]" : "left-[-12px]"
                  }`}
                />
                <div className="bg-orange-500 text-white rounded-lg shadow-md p-4">
                  <h2 className="text-lg font-semibold">{exp.company}</h2>
                  <h3 className="text-xl font-bold mt-2">{exp.role}</h3>
                  <p className="text-sm mt-1">{exp.duration}</p>
                </div>
              </div>
            );
          })}
        </div>
      <div className="flex justify-center mt-10">
        <a
          href="/experience"
          className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition"
        >
          View All
          <FaArrowRight />
        </a>
      </div>  
    </section>


    </>
  )
}

export default Eduction