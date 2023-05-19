import React, { useEffect } from 'react';
import AOS from 'aos';
import './animation.css';
import 'aos/dist/aos.css'

const ScrollAnimation = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className='top'>
      <h1 className='text-center'>Welcome to Gulam Home</h1> <br /> <br /> <br />
      <h1>Fade</h1>
      <div className='animation' data-aos="fade-up"></div>
      <div className='animation' data-aos="fade-down"></div>
      <div className='animation' data-aos="fade-right"></div>
      <div className='animation' data-aos="fade-left"></div>
      <h1>Flip</h1>
      <div className='animation' data-aos="flip-right"></div>
      <h1>Zoom Animation</h1>
      <div className='animation' data-aos="fade-up"></div>
      <div className='animation' data-aos="fade-down"></div>
      <div className='animation' data-aos="fade-right"></div>
      <div className='animation' data-aos="fade-left"></div>
      <div className='animation' data-aos="fade-down">FAQ</div>
      <div className='animation' data-aos="fade-down">Teams & Condition</div>
      <div className='animation' data-aos="fade-down">privacy policy</div>
      <div className='animation' data-aos="fade-down">charu</div>
      <div className='animation' data-aos="fade-down">Kngulam</div>
      <div className='animation' data-aos="fade-right"></div>
    </div>
  )
}

export default ScrollAnimation;