import React from 'react'

const Projects = () => {
  return (
    <div>
       <section id="projects">
      <div className="titlle-wrap">
        <span className="section-titlle">Projects</span>
      </div>

      <div className="project-grid">
        <div className="project-card">
          <div className="project-img1"></div>
          <h3>KESHVIKA</h3>
          <p>E-commerce website using MERN stack</p>
        </div>

        <div className="project-card">
          <div className="project-img2"></div>
          <h3>Face Recognition System</h3>
          <p>Attendance system using Python and Haar Cascade</p>
        </div>

        <div className="project-card">
          <div className="project-img3"></div>
          <h3>ELITE HOME</h3>
          <p>Frontend built with React.js</p>
        </div>
      </div>
    </section>

    </div>
  )
}

export default Projects
