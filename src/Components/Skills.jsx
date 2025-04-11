import React from "react";
import "../Styles/Skills.css";

const Skills = () => {
  const skillsData = [
    { name: "Microcontrollers", percentage: 90 },
    { name: "Real-Time Processing", percentage: 85 },
    { name: " Computer Systems Architecture", percentage: 90 },
    { name: "Embedded C", percentage: 95 },
    { name: "React JS", percentage: 80 },
    { name: "C", percentage: 95 },
    { name: "C++", percentage: 70 },
  ];

  return (
    <section className="skills-section">
        <div className="skills">
          <h2>Skills</h2>
        </div>
       <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-bar" key={index}>
            <div className="skill-info">
              <span>{skill.name}</span>
              <span className="percentage">{skill.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
