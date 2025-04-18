import React, { useState, useEffect } from "react";
import "../Styles/Hero.css";
import bg1 from "../assets/Images/background.jpeg";
import bg2 from "../assets/Images/bg2.jpeg";
import bg3 from "../assets/Images/bg3.jpeg";
import { TypeAnimation } from "react-type-animation";


const images = [bg1];

  
  const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <section className="hero" style={{
      backgroundImage: `url(${images[currentImageIndex]})`,
      backgroundRepeat: 'no-repeat',
    }}>
      <div className="overlay"></div>
      <div className="hero-content">
        <h1>HI <span>, </span>I AM <br /> Habiba   Amir <span> .</span></h1>
        <p>
        <TypeAnimation
          sequence={[
            "Embedded Software Developer", 3000, 
            "", 1500, // مسح تدريجي ببطء
            "Freelancer", 3000, 
            "", 1500, 
            "Web Developer", 3000, 
            "", 1500
          ]}
          speed={60} // سرعة الكتابة (قيم أقل = أبطأ)
          deletionSpeed={40} // سرعة المسح (قيم أقل = أبطأ)
          repeat={Infinity} 
        />
        </p>    
        <a href="../public/cv.pdf" className="btn" download>Download Resume</a>
        </div>
    </section>
    
  );
};

export default Hero;


