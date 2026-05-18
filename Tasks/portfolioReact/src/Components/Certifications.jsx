import React from 'react'

const Certifications = () => {
  return (
    <section id="certifications">
      <div className="titlle-wrap">
        <span className="section-titlle">Certifications & Achievements</span>
      </div>

      <div className="project-grid">
        <div className="project-card">
          <div className="cert-img-byteverse"></div>
          <h3>Byteverse 1.0 Hackathon</h3>
          <p>1st Runner-Up</p>
          <ul>
            <li>Recognized for competitive problem-solving and end-to-end product development.</li>
          </ul>
        </div>

        <div className="project-card">
          <div className="cert-img-research"></div>
          <h3>Published Research</h3>
          <p>Face Recognition Model Analysis</p>
          <ul>
            <li>Peer-reviewed and presented at an International Conference (2025).</li>
          </ul>
        </div>

        <div className="project-card">
          <div className="cert-img-isro"></div>
          <h3>ISRO-IIRS Certified</h3>
          <p>AI/ML for Geodata Analysis</p>
          <ul>
            <li>Issued by the Indian Space Research Organisation.</li>
          </ul>
        </div>

        <div className="project-card">
          <div className="cert-img-cisco"></div>
          <h3>Cisco Networking Academy</h3>
          <p>Introduction to Packet Tracer</p>
        </div>

        <div className="project-card">
          <div className="cert-img-tcs"></div>
          <h3>TCS iON Career Edge</h3>
          <p>Professional Development & Soft Skills</p>
        </div>
      </div>
    </section>
  )
}

export default Certifications
