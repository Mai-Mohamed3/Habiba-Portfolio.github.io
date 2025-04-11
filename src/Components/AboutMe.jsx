import React from "react";
import "../Styles/AboutMe.css";
import profileImage from "../assets/Images/logo1.jpeg"; 

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
        <div className="about">
          <h2><i className="fa fa-user"></i> ABOUT ME</h2>
        </div>
     <div className="container">
        <div className="about-content">
          
          <p className="intro">
            I am <span>Habiba Amir</span> , I am a dedicated <span> Embedded Software Developer</span> and <span> Web Developer </span>
            with a strong background in Embedded Systems. With expertise in <span> microcontroller programming</span>,
            <span> real-time processing</span>, and <span> system architecture</span>, I specialize in designing and developing high-performance,
            reliable, and efficient embedded solutions.
            </p>
            <p className="description">
            My experience extends to firmware development, low-level programming, 
            and optimizing system performance for real-time applications. Additionally, I have a solid grasp of full-stack web development,
             allowing me to bridge the gap between embedded systems and modern web technologies.
            Let's build something remarkable together!
          </p>
          <div className="info">
            <div>
              <strong>Phone:</strong> <br />
              <span> +2 01012912778</span>
            </div>
            <div>
              <strong>Email:</strong><br />
              <span> habibaamirsaad44@gmail.com</span>
            </div>
            <div>
              <strong>Website:</strong> <br />
              <span> www.Habiba_Amir.com</span>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img src={profileImage} alt="Profile" className="profile-pic" />
          <div className="social-icons">
            <a href="mailto:habibaamirsaad44@gmail.com" target="_blank" title="Gmail"><i className="fa-solid fa-envelope"></i></a>
            <a href="http://wuzzuf.net/me/habiba-amir-fb45fc4fef" target="_blank" title="Wuzzuf"><i className="fa-solid fa-link"></i></a>
            <a href="http://linkedin.com/in/habiba-amir/"target="_blank" title="LinkedIn"><i className="fa-brands fa-linkedin-in" ></i></a>
            <a href="http://www.github.com/habibaamirsaad" target="_blank" title="Github"><i className="fa-brands fa-github"></i></a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
