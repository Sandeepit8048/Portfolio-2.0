import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import Img from '../assets/contactimg.png';
import Img2 from '../assets/img2.avif';
import '../Style/Home.css'; 
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
function Contact() {
  
  return (
    <>
    {/* <div className=" mt-7 p-5 rounded-lg shadow-md"> */}
      {/* <div className="registion  "> */}
       <h1 className='flex items-center justify-center text-3xl font-bold mb-4 gap-2 mb-6 '> 
         <FontAwesomeIcon icon={faAddressBook} className="text-blue-600 text-4xl  space-2" />
           Contact<span>Me</span></h1>
                <p className='text-center text-gray-500 mt-4 text-center'>Feel free to reach out for any queries or collaborations!</p>
                <p className='text-gray-500 text-center  '>Or you can contact me  email at <a href="rkysandeepyadav@gmail.com" className='text-blue-600 hover:underline '>Email</a></p>
                 <div className="flex items-center justify-center">
                      <img src={Img} alt="Description" className="w-90" />
                    </div>

           {/* <div className="registrationform "> */}
            <form action="" method="post" className='flex flex-row items-center justify-center flex-wrap items-center justify-center  gap-5 mb-2 '>
              <div className="form-group  bouder p-4 w-full max-w-md border border-gray-500  rounded-lg shadow-lg bg-yellow-50  mb-5">
                <h1 className='text-center font-bold text-3xl '>Form</h1>
                <label htmlFor="name">Name</label>
               <input type="text" id="name" name="name" required  placeholder='username' />  
              <label htmlFor="Email">E-mail</label>
              <input type="email" id='email' name='email' required placeholder='email' />
              <label htmlFor="Number">Number</label>
              <input type="number" id='number' name='number' required placeholder='Mobile Number' />
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="4" required placeholder='Type your message here...'></textarea>
              <button type="submit" className='btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition'>Send Message</button>
              </div>
              <div className="image-container w-[392px] h-[450px] ">
                <DotLottieReact
                        src="https://lottie.host/69289ece-f8f2-4ced-a7a9-260ee4c57f14/J4gMSjiu3T.lottie"
                        loop
                        autoplay
                      />
                </div>
              
              {/* <div className='text-center mt-4'> */}
              {/* </div> */}
              {/* </div> */}
             

            </form>
           {/* </div> */}
      {/* </div> */}
    {/* // </div> */}
    </>
  )
}

export default Contact