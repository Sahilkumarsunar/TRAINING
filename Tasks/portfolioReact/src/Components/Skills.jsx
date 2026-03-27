import React from 'react'

const Skills = () => {
  return (
    <div>
        <section id="skills">
      <div className="titlle-wrap">
        <span className="section-titlle">Skills</span>
      </div>

      <div className="skills-container">
        <div className="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>React.js</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>MERN Stack</h3>
          <ul>
            <li>MongoDB</li>
            <li>Express.js</li>
            <li>Node.js</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Programming</h3>
          <ul>
            <li>C</li>
            <li>C++</li>
            <li>Python</li>
          </ul>
        </div>

        <div className="skill-card">
          <h3>Core Concepts</h3>
          <ul>
            <li>Data Structures</li>
            <li>Arrays, Stacks, Queues</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Skills
