import React from "react";
import "../Styles/Navbar.css";
import logo from "../assets/Images/logo2.jpeg";

const Navbar = () => {
  return (
    <nav className="navbar">
        <div className="logo">
            <img src={logo} alt="Logo" />
{/*             <h2>Habiba Amir</h2>
 */}        </div>
        <ul className="nav-links">
            <li><a href="#about">About Me</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
