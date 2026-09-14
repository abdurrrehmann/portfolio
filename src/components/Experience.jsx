import { experience } from '../data/data'

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'rgba(17,34,64,0.18)' }}>
      <div className="section-inner">
        <h2 className="section-heading">
          <span />Work Experience
        </h2>

        <div style={{ position: 'relative', paddingLeft: 40 }}>
          <div className="timeline-spine" />

          {experience.map((job, i) => (
            <div key={i} style={{ position: 'relative', marginBottom: i < experience.length - 1 ? 40 : 0 }}>
              {/* Dot */}
              <div style={{
                position: 'absolute', left: -32, top: 22,
                width: 12, height: 12, borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
                boxShadow: '0 0 10px rgba(0,212,255,0.5)'
              }} />

              <div className="glass glass-cyan" style={{ borderRadius: 10, padding: '24px 28px' }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'flex-start', flexWrap: 'wrap', gap: 8, marginBottom: 12
                }}>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--text)', marginBottom: 3 }}>
                      {job.title}
                    </h3>
                    <p className="grad-text" style={{ fontSize: 14, fontWeight: 600 }}>
                      {job.company}
                    </p>
                  </div>
                  <span className="mono" style={{
                    fontSize: 11, color: 'var(--muted)',
                    background: 'var(--surface-2)', padding: '4px 10px',
                    borderRadius: 4, whiteSpace: 'nowrap'
                  }}>
                    {job.period}
                  </span>
                </div>

                <ul style={{ paddingLeft: 18, marginBottom: 16 }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{
                      fontSize: 14, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 6,
                      listStyleType: 'disc'
                    }}>
                      {b}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}