import React, { useEffect,useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import emailjs from 'emailjs-com';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Img from '../assets/contactimg.png';
import '../Style/Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {
   useEffect(() => {
          AOS.init({ duration: 1200 });
        }, []);
    
   const formRef = useRef();
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          'service_eqs6euf',        // Replace with your actual service ID
          'template_f1zwdch',       // Replace with your template ID
          formRef.current,
          'S7as_04vCv3xGYVhg'       // Replace with your public key
        )
        .then(
          (result) => {
            console.log('Email successfully sent!', result.text);
            alert('Message sent successfully!');
            formRef.current.reset();
          },
          (error) => {
            console.error('Email send failed:', error.text);
            alert('Failed to send message.');
          }
        );
    };

  return (
    <>
      <h1 className="flex items-center justify-center text-3xl font-bold mb-4 gap-2 mt-6">
        <FontAwesomeIcon icon={faAddressBook} className="text-blue-600 text-4xl" />
        Contact <span>Me</span>
      </h1>

      <p className="text-center text-gray-500 mt-4">Feel free to reach out for any queries or collaborations!</p>
      <p className="text-gray-500 text-center">
        Or you can contact me via email at{' '}
        <a href="mailto:rkysandeepyadav@gmail.com" className="text-blue-600 hover:underline">
          Email
        </a>
      </p>

      <div  className="flex items-center justify-center">
        <img data-aos="slide-up" src={Img} alt="Description" className="w-90" />
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        data-aos="fade-up"
        className="flex flex-row items-center justify-center flex-wrap gap-5 mb-2"
      >
        <div className="form-group p-4 w-full max-w-md border border-gray-500 rounded-lg shadow-lg bg-yellow-50 mb-5">
          <h1 className="text-center font-bold text-3xl">Form</h1>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required placeholder="Username" />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required placeholder="Email" />

          <label htmlFor="number">Number</label>
          <input type="number" id="number" name="number" required placeholder="Mobile Number" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required placeholder="Type your message here..." />

          <button
            type="submit"
            className="btn bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </div>

        <div className="image-container w-[392px] h-[450px]">
          <DotLottieReact
            src="https://lottie.host/69289ece-f8f2-4ced-a7a9-260ee4c57f14/J4gMSjiu3T.lottie"
            loop
            autoplay
          />
        </div>
      </form>
    </>
  );
}

export default Contact;
