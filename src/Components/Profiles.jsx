import React from "react";
import { FaDribbble, FaBehance, FaGithub, FaFlickr, FaBitbucket } from "react-icons/fa";
import { SiSquarespace } from "react-icons/si";
import "../Styles/Profiles.css";

import { FaTree } from "react-icons/fa"; // أيقونة بديلة

const profiles = [
  { name: "Themeforest", icon: <FaTree />, link: "https://themeforest.net" },
  { name: "Dribbble", icon: <FaDribbble />, link: "https://dribbble.com" },
  { name: "Behance", icon: <FaBehance />, link: "https://www.behance.net" },
  { name: "Github", icon: <FaGithub />, link: "https://github.com" },
  { name: "FlickR", icon: <FaFlickr />, link: "https://www.flickr.com" },
  { name: "SmungMung", icon: <span role="img" aria-label="smile">😊</span>, link: "#" },
  { name: "SquareSpace", icon: <SiSquarespace />, link: "https://www.squarespace.com" },
  { name: "BitBucket", icon: <FaBitbucket />, link: "https://bitbucket.org" },
];


const Profiles = () => {
  return (
    <section className="profiles-section">
        <div className="profiles">
          <h2>Profiles</h2>
        </div>
        <div className="profiles-grid">
        {profiles.map((profile, index) => (
          <a key={index} href={profile.link} className="profile-card" target="_blank" rel="noopener noreferrer">
            <div className="icon">{profile.icon}</div>
            <span>{profile.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Profiles;
