import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'

const Hero = () => {
  return (
    <div>
      <div className="hero-section">
        <div className="profile-image"></div>
        <div className="hero-content">
          <h1>Hello, I'm <span>Sahil</span></h1>
          <h2>MERN Stack Developer</h2>
          <div className="hero-contact">
            <p>+91 8054216357 | sahilsunar530@gmail.com</p>
            <div className="hero-socials">
              <a href="https://linkedin.com/in/sahil-kumar-a8a9922ba" target="_blank" rel="noreferrer" title="LinkedIn">
                <FaLinkedin size={28} />
              </a>
              <a href="https://github.com/Sahilkumarsunar" target="_blank" rel="noreferrer" title="GitHub">
                <FaGithub size={28} />
              </a>
            </div>
          </div>
          <p className="hero-summary">
            Built multiple full-stack web applications using the MERN stack — spanning real-time systems, e-commerce platforms, and responsive frontends — with a consistent emphasis on scalable architecture and clean design. Hackathon-recognized, research-published, and completing a B.Tech in Computer Science — ready to bring hands-on project depth to a professional engineering team from day one.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
