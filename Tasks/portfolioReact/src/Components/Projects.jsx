import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  return (
    <div>
      <section id="projects">
        <div className="titlle-wrap">
          <span className="section-titlle">Projects</span>
        </div>

        <div className="project-grid">
          <div className="project-card">
            <div className="project-img-nova"></div>
            <h3>Nova - Real-Time Bus Tracker</h3>
            <p>MERN, React Native, REST API</p>
            <ul>
              <li>Engineered a cross-platform Punjab bus tracking app using React.js and React Native, delivering near real-time location updates (every 10 seconds) for buses spanning 200 routes 41 cities.</li>
              <li>Designed and consumed optimized REST APIs to fetch live map data, implementing Context API state management to ensure seamless UI re-rendering and a smooth user experience.</li>
            </ul>
            <a href="https://github.com/Sahilkumarsunar/Nova-Punjab-bus-live-tracking-application" target="_blank" rel="noreferrer" className="project-link">
              <FaGithub size={18} style={{ marginRight: '8px' }} /> View Code
            </a>
          </div>

          <div className="project-card">
            <div className="project-img1"></div>
            <h3>Keshvika - E-Commerce Platform</h3>
            <p>MongoDB, Express.js, React.js, Node.js (MERN)</p>
            <ul>
              <li>Built a full-stack e-commerce web application with product listing, cart management, user authentication (JWT), and order workflow using the complete MERN stack. Implemented MongoDB schemas with Mongoose for product.</li>
            </ul>
            <a href="https://github.com/Sahilkumarsunar/Keshvika-Hair-accessory-shopping-site" target="_blank" rel="noreferrer" className="project-link">
              <FaGithub size={18} style={{ marginRight: '8px' }} /> View Code
            </a>
          </div>

          <div className="project-card">
            <div className="project-img2"></div>
            <h3>Face Recognition Attendance System</h3>
            <p>Python, PyQt, OpenCV, Haar Cascade</p>
            <ul>
              <li>Developed a desktop attendance system using Python and Haar Cascade facial detection, achieving ~90-93% recognition accuracy.</li>
              <li>Designed a PyQt GUI for non-technical staff, enabling one-click attendance marking and eliminating manual roll-call processes.</li>
            </ul>
            <a href="https://github.com/Sahilkumarsunar/SmileVerify-Student-Face-Recognition-Attendance-System" target="_blank" rel="noreferrer" className="project-link">
              <FaGithub size={18} style={{ marginRight: '8px' }} /> View Code
            </a>
          </div>

          <div className="project-card">
            <div className="project-img3"></div>
            <h3>Elite Home - Real Estate Frontend</h3>
            <p>React.js, CSS3</p>
            <ul>
              <li>Developed a pixel-perfect, responsive real estate landing page in React.js with component-based architecture and clean, maintainable CSS3 styling.</li>
            </ul>
            <a href="https://github.com/Sahilkumarsunar/Elite-home-furniture-shopping-site" target="_blank" rel="noreferrer" className="project-link">
              <FaGithub size={18} style={{ marginRight: '8px' }} /> View Code
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Projects
