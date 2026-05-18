import React from 'react'
import { HiAcademicCap } from 'react-icons/hi'
import lkcLogo from '../assets/lkc_logo.png'
import ptuLogo from '../assets/ptu_logo.png'
import psebLogo from '../assets/pseb_logo.png'

const entries = [
  {
    degree: 'B.Tech in Computer Science',
    school: 'Lyallpur Khalsa College of Engineering',
    affiliated: 'I.K. Gujral Punjab Technical University (PTU)',
    year: 'Expected Jun 2026',
    detail: 'Pursuing Bachelor of Technology in Computer Science.',
    logos: [lkcLogo, ptuLogo],
    logoAlts: ['LKC Technical Campus', 'PTU Kapurthala'],
    logoUrls: ['https://lkctc.edu.in', 'https://ptu.ac.in'],
  },
  {
    degree: 'Senior Secondary (Non-Medical) — 86.6%',
    school: 'Ajit Saini Junior Model Co-Edu Sr. Sec. Smart School',
    affiliated: 'Punjab School Education Board (PSEB)',
    year: 'Jun 2022',
    detail: 'Completed higher secondary education with PCM subjects.',
    logos: [psebLogo],
    logoAlts: ['PSEB'],
    logoUrls: ['https://www.pseb.ac.in'],
  },
  {
    degree: 'Matriculation — A+ Grade',
    school: 'Ajit Saini Junior Model Co-Edu Sr. Sec. Smart School',
    affiliated: 'Punjab School Education Board (PSEB)',
    year: 'Jun 2020',
    detail: 'Completed secondary education with top grades.',
    logos: [psebLogo],
    logoAlts: ['PSEB'],
    logoUrls: ['https://www.pseb.ac.in'],
  },
]

const Education = () => {
  return (
    <section id="eduction">
      <div className="titlle-wrap">
        <span className="section-titlle">Education</span>
      </div>

      <div className="timeline">
        {entries.map((e, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot">
              <HiAcademicCap size={20} color="#ff6b6b" />
            </div>
            <div className="timeline-card">
              <div className="timeline-top">
                <div className="timeline-meta">
                  <span className="timeline-year">{e.year}</span>
                  <h3>{e.degree}</h3>
                  <span className="timeline-school">{e.school}</span>
                  <span className="timeline-affiliated">{e.affiliated}</span>
                  <p>{e.detail}</p>
                </div>
                <div className="edu-logos">
                  {e.logos.map((logo, j) => (
                    <a
                      key={j}
                      href={e.logoUrls[j]}
                      target="_blank"
                      rel="noreferrer"
                      title={`Visit ${e.logoAlts[j]} website`}
                      style={{ display: 'inline-block' }}
                    >
                      <img
                        src={logo}
                        alt={e.logoAlts[j]}
                        className="edu-logo"
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education