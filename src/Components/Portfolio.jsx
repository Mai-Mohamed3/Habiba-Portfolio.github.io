import React from "react";
import "../Styles/Portfolio.css"; // تأكدي من وجود ملف الـ CSS

const projects = [
  {
    id: 1,
    image: "/images/project1.jpg", // استبدلي بالمسار الصحيح
    description: "تصميم داخلي حديث لشقة فاخرة.",
    link: "http://www.github.com/habibaamirsaad/GivingCircle",
  },
  {
    id: 2,
    image: "/images/project2.jpg",
    description: "برج زجاجي بتصميم معماري معاصر.",
    link: "http://www.github.com/habibaamirsaad/Secure_Traffic_Control_System.",
  },
  {
    id: 3,
    image: "/images/project3.jpg",
    description: "فيلا زجاجية بتصميم فاخر.",
    link: "http://www.github.com/habibaamirsaad/Lavida",
  },
  {
    id: 4,
    image: "/images/project4.jpg",
    description: "تصميم داخلي لغرفة اجتماعات.",
    link: "http://www.github.com/habibaamirsaad/Shoping_Cart",
  },
  {
    id: 5,
    image: "/images/project5.jpg",
    description: "تصميم إبداعي لمنتجات منزلية.",
    link: "http://www.github.com/habibaamirsaad/LAB11_Proj2_Smart_Traffic_Lights_Lec",
  },
  {
    id: 6,
    image: "/images/project5.jpg",
    description: "تصميم إبداعي لمنتجات منزلية.",
    link: "http://www.github.com/habibaamirsaad/LAB12_Proj3_TheSafe_Lec",
  },
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
        <div className="portfolio">
          <h2>Portfolio</h2>
        </div>      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <img src={project.image} alt="Project" className="project-image" />
            <p className="project-description">{project.description}</p>
            <a href={project.link} className="project-button" target="_blank" rel="noopener noreferrer">
              Project Link
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
