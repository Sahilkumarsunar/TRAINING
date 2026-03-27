import React from 'react'

const Education = () => {
  return (
      <section id="eduction">
      <div className="titlle-wrap">
        <span className="section-titlle">Education</span>
      </div>

      <div className="education-container">
        <div className="education-card">
          <h3>B.Tech Computer Science</h3>
          <span>Lyallpur Khalsa College | 2026</span>
          <p>Pursuing Bachelor of Technology in Computer Science</p>
        </div>

        <div className="education-card">
          <h3>Senior Secondary (Non-Medical)</h3>
          <span>Govt. Model Smart School | 2022</span>
          <p>86.6% with PCM</p>
        </div>

        <div className="education-card">
          <h3>Matriculation</h3>
          <span>PSEB | 2020</span>
          <p>A+ Grade</p>
        </div>
      </div>
    </section>
    
  )
}

export default Education