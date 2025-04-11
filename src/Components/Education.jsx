import React from "react";
import "../Styles/Education.css";

const Education = () => {
  const educationData = [
    {
      year: "2020 - 2024",
      degree: "Bachelor of Computer Science",
      university: "University of Menoufia",
      location: "Menoufia , Egypt",
      description:
        "I earned my Bachelor’s degree in Computer Science from Menoufia University, specializing in Embedded Systems. My studies focused on microcontroller programming, real-time processing, system architecture, and low-level hardware-software integration. Through hands-on projects and coursework, I developed strong problem-solving skills and a deep understanding of designing efficient and reliable embedded solutions.",
    },
    {
      year: "Jun 2024 -Jan 2025",
      degree: "Embedded Systems Intern",
      university: "FuzeTek",
      location: "Remote",
      description:
        "I have successfully completed the 5-month Embedded Systems Diploma, gaining expertise in C programming, fundamentals of embedded systems, AVR microcontroller with drivers, reading and understanding any microcontroller data sheet, Real-Time Operating Systems (RTOS), software testing, and version control systems",
    },
    {
      year: "2021 - 2022",
      degree: "ReactJS Course",
      university: "Mosh Academy",
      location: "Remote",
      description: `
        <p>Completed the React 18 for Beginners course, where I learned to build modern web apps using React and TypeScript. I gained experience in creating reusable components, managing state, handling forms with React Hook Forms and Zod, and styling with CSS techniques. Additionally, I learned to connect apps to backends and deploy them, while following best practices for writing clean, maintainable code.</p>
        <br/>
        <p>Completed the React 18: Intermediate Topics course, where I enhanced my skills in state management, routing, and performance optimization. I gained experience with React Query, Zustand, and React Router, learning how to build scalable, efficient React applications while applying advanced techniques for improved app performance and maintainability.</p>
      `,
    },
  ];

  return (
    <section className="education-section">
      <div className="education">
        <h2>
          <i className="fa-solid fa-graduation-cap"></i> Education
        </h2>
      </div>
      <div className="education-container">
        {educationData.map((item, index) => (
          <div className="education-card" key={index}>
            <h3 className="education-year">{item.year}</h3>
            <h4 className="education-degree">{item.degree}</h4>
            <div className="timeline-horizontal-border">
              <i className="fa fa-circle" aria-hidden="true"></i>
              <span className="single-timeline-horizontal"></span>
            </div>
            <p className="education-university">
              <strong>{item.university}</strong>
              <br />
              {item.location}
            </p>
            <div
              className="education-description"
              dangerouslySetInnerHTML={{ __html: item.description }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
