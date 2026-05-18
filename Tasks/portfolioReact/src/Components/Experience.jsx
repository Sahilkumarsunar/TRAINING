import React from 'react'
import alphaLogo from '../assets/alpha_it_logo.png'
import thinknextLogo from '../assets/thinknext_logo.png'

const Experience = () => {
  return (
    <section id="experience">
      <div className="titlle-wrap">
        <span className="section-titlle">Internship Experience</span>
      </div>

      <div className="education-container">
        <div className="education-card experience-card">
          <div className="experience-header">
            <img src={alphaLogo} alt="Alpha IT Managed Services" className="company-logo" />
            <div>
              <h3>Full Stack Developer Training</h3>
              <span>Alpha IT Managed Services Pvt. Ltd. | Jan 2026 – Present</span>
            </div>
          </div>
          <ul className="experience-list">
            <li>Developed and built 7+ full-stack MERN projects using React, Node.js, Express.js, MongoDB, Axios, RESTful APIs, JWT Authentication, and CRUD operations</li>
            <li>Implemented state management, responsive web design, database query optimization, Git, GitHub, and blockchain fundamentals.</li>
          </ul>
        </div>

        <div className="education-card experience-card">
          <div className="experience-header">
            <img src={thinknextLogo} alt="ThinkNEXT Technologies" className="company-logo" />
            <div>
              <h3>React Developer Intern</h3>
              <span>ThinkNEXT Technologies Pvt. Ltd. | Jun 2024 – Aug 2024</span>
            </div>
          </div>
          <ul className="experience-list">
            <li>Developed reusable and responsive frontend components using React, JavaScript, HTML5, CSS3, and Axios for REST API.</li>
            <li>Implemented performance optimization, and frontend debugging to improve usability and component reusability.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
