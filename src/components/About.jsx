import { GraduationCap, Award } from 'lucide-react'
import { about } from '../data/data'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <h2 className="section-heading">
          <span />About
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {/* Bio */}
          <div className="glass glass-cyan" style={{ borderRadius: 12, padding: 28, gridColumn: 'span 2' }}>
            <p style={{ color: 'var(--text)', fontSize: 15, lineHeight: 1.8, maxWidth: 680 }}>
              {about.bio}
            </p>
          </div>

          {/* Education */}
          <div className="glass" style={{ borderRadius: 12, padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <GraduationCap size={18} style={{ color: 'var(--cyan)' }} />
              <span style={{ fontWeight: 600, fontSize: 15 }}>Education</span>
            </div>
            {about.education.map((e, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', marginBottom: 3 }}>{e.degree}</p>
                <p style={{ fontSize: 13, color: 'var(--muted)' }}>{e.institution}</p>
                <p className="mono" style={{ fontSize: 11, color: 'var(--cyan)', marginTop: 4 }}>{e.year}</p>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="glass" style={{ borderRadius: 12, padding: 28 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <Award size={18} style={{ color: 'var(--purple)' }} />
              <span style={{ fontWeight: 600, fontSize: 15 }}>Certifications</span>
            </div>
            {about.certifications.map((c, i) => (
              <div key={i} style={{
                marginBottom: 14, paddingBottom: 14,
                borderBottom: i < about.certifications.length - 1 ? '1px solid var(--border-dim)' : 'none'
              }}>
                <p style={{ fontWeight: 600, fontSize: 14, color: 'var(--text)', marginBottom: 2 }}>{c.name}</p>
                <p style={{ fontSize: 12, color: 'var(--muted)' }}>{c.issuer} · {c.year}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}