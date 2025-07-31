import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="p-10">
      <h1 data-aos="fade-right" className="text-3xl font-bold">
        About Me
      </h1>
      <p data-aos="fade-up" className="mt-4 text-gray-600">
        I am a frontend developer who loves animations.
      </p>
      <img data-aos="zoom-in" src="your-image.jpg" alt="Profile" />
    </div>
  );
}

export default AboutSection;
