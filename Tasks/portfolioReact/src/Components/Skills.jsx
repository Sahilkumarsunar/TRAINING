import React from 'react'
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaGithub } from 'react-icons/fa'
import { SiJavascript, SiRedux, SiExpress, SiMongodb, SiPostman, SiCplusplus, SiC, SiJsonwebtokens } from 'react-icons/si'
import { VscSymbolInterface } from 'react-icons/vsc'
import { DiDatabase } from 'react-icons/di'
import { TbApi } from 'react-icons/tb'
import { BiGitBranch } from 'react-icons/bi'

const Skills = () => {
  return (
    <div>
      <section id="skills">
        <div className="titlle-wrap">
          <span className="section-titlle">Technical Skills</span>
        </div>

        <div className="skills-container">
          <div className="skill-card">
            <h3>Frontend</h3>
            <ul>
              <li><FaReact size={24} style={{ marginRight: '12px', color: '#61dafb' }} /> React.js, <SiJavascript size={20} style={{ marginRight: '8px', marginLeft: '12px', color: '#f7df1e' }} /> JS (ES6+)</li>
              <li><FaHtml5 size={24} style={{ marginRight: '12px', color: '#e34f26' }} /> HTML5, <FaCss3Alt size={24} style={{ marginRight: '8px', marginLeft: '12px', color: '#1572b6' }} /> CSS3</li>
              <li><SiRedux size={24} style={{ marginRight: '12px', color: '#764abc' }} /> Redux Toolkit, Context API</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Backend</h3>
            <ul>
              <li><FaNodeJs size={24} style={{ marginRight: '12px', color: '#339933' }} /> Node.js, <SiExpress size={24} style={{ marginRight: '8px', marginLeft: '12px', color: '#fff' }} /> Express.js</li>
              <li><TbApi size={24} style={{ marginRight: '12px', color: '#ff6b6b' }} /> REST API Design</li>
              <li><SiJsonwebtokens size={24} style={{ marginRight: '12px', color: '#fb015b' }} /> JWT Authentication</li>
              <li><VscSymbolInterface size={24} style={{ marginRight: '12px', color: '#007acc' }} /> Middleware Architecture</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Database</h3>
            <ul>
              <li><SiMongodb size={24} style={{ marginRight: '12px', color: '#47a248' }} /> MongoDB, Mongoose ODM</li>
              <li><DiDatabase size={24} style={{ marginRight: '12px', color: '#f29111' }} /> CRUD Operations</li>
              <li><VscSymbolInterface size={24} style={{ marginRight: '12px', color: '#007acc' }} /> Schema Design</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Languages & Tools</h3>
            <ul>
              <li><FaPython size={24} style={{ marginRight: '12px', color: '#3776ab' }} /> Python, <SiCplusplus size={24} style={{ marginRight: '8px', marginLeft: '12px', color: '#00599c' }} /> C++</li>
              <li><BiGitBranch size={24} style={{ marginRight: '12px', color: '#f34f29' }} /> Git, <FaGithub size={24} style={{ marginRight: '8px', marginLeft: '12px', color: '#fff' }} /> GitHub</li>
              <li><SiPostman size={24} style={{ marginRight: '12px', color: '#ff6c37' }} /> Postman</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Skills
