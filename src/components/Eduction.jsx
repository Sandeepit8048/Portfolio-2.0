import React from 'react'

function Eduction() {
  return (
    <>
    <div className="card  p-5 mt-7 flex-col items-center justify-center">
      <h1 className='text-3xl font-bold mb-4 text-center'>Education</h1>
      <p className='text-gray-500 mb-4 text-center'>Here are my educational qualifications:</p>
      <div className="education-list">
        <div className="education-item bg-gray-200 p-4 rounded-lg shadow-md mb-4">
          <h2 className='text-xl font-semibold'>Bachelor of Technology in Information Technology</h2>
          <p className='text-gray-600'>Institute: IMSEC, Ghaziabad</p>
          <p className='text-gray-600'>Year: 2021-2025--(1-Div)</p>
          {/* <p className='text-gray-600'>I-Div</p> */}

        </div>
        <div className="education-item bg-gray-200 p-4 rounded-lg shadow-md mb-4">
          <h2 className='text-xl font-semibold'>High School</h2>
          <p className='text-gray-600'>School: Kvn public School, Varanasi</p>
          <p className='text-gray-600'>Year:  2020</p>
        </div>
        <div className="education-item bg-gray-200 p-4 rounded-lg shadow-md mb-4">
          <h2 className='text-xl font-semibold'> School-(1 to 10th Class)</h2>
          <p className='text-gray-600'>School: Swami Harsewanad public School, Varanasi</p>
          <p className='text-gray-600'>Year:  2020</p>
        </div>
        </div>
    </div>

    <div className="card  p-5 mt-7 flex-col items-center justify-center">
      <h1 className='text-3xl font-bold mb-4 text-center'>Certifications</h1>
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

    <div className="card  p-5 mt-7 flex-col items-center justify-center">
      <h1 className='text-3xl font-bold mb-4 text-center'>Achievements</h1>
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
      </div>
    </>
  )
}

export default Eduction