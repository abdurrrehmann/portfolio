import { useState } from 'react'
import { projects, projectCategories } from '../data/data'
import { Code2, ExternalLink, Cpu } from 'lucide-react'

function ProjectImage({ image, name }) {
  const [err, setErr] = useState(false)

  if (!image || err) {
    return (
      <div style={{
        height: 160, borderRadius: '8px 8px 0 0',
        border: '2px dashed rgba(0,212,255,0.18)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center', gap: 10,
        background: 'rgba(0,212,255,0.03)'
      }}>
        <Cpu size={32} style={{ color: 'var(--cyan)', opacity: 0.4 }} />
        <span className="mono" style={{ fontSize: 10, color: 'var(--muted)' }}>
          no preview available
        </span>
      </div>
    )
  }

  return (
    <img
      src={image}
      alt={name}
      onError={() => setErr(true)}
      style={{
        width: '100%', height: 160,
        objectFit: 'cover', borderRadius: '8px 8px 0 0',
        display: 'block'
      }}
    />
  )
}

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <h2 className="section-heading">
          <span />Projects
        </h2>

        {/* Filter tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 36 }}>
          {projectCategories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)}
              className="mono"
              style={{
                padding: '6px 14px', borderRadius: 5, border: 'none',
                cursor: 'pointer', fontSize: 12,
                background: active === cat ? 'var(--cyan)' : 'var(--surface-2)',
                color: active === cat ? '#0B0F19' : 'var(--muted)',
                fontWeight: active === cat ? 700 : 400,
                transition: 'background 0.2s, color 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 20
        }}>
          {filtered.map(project => (
            <div key={project.name} className="glass"
              style={{
                borderRadius: 10, overflow: 'hidden',
                transition: 'border-color 0.2s, box-shadow 0.2s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'
                e.currentTarget.style.boxShadow = 'var(--glow-cyan)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border-dim)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <ProjectImage image={project.image} name={project.name} />

              <div style={{ padding: '20px 22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--text)', lineHeight: 1.3 }}>
                    {project.name}
                  </h3>
                  <span className="tag tag-purple" style={{ flexShrink: 0, marginLeft: 8 }}>
                    {project.category}
                  </span>
                </div>

                <p style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.7, marginBottom: 14 }}>
                  {project.description}
                </p>

                {project.highlight && (
                  <p style={{
                    fontSize: 12,
                    color: 'var(--cyan)',
                    fontFamily: 'JetBrains Mono, monospace',
                    fontWeight: 600,
                    marginBottom: 14,
                    lineHeight: 1.6,
                  }}>
                    {project.highlight}
                  </p>
                )}

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginBottom: 16 }}>
                  {project.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                <div style={{ display: 'flex', gap: 14 }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 5,
                        fontSize: 12, color: 'var(--muted)', textDecoration: 'none',
                        transition: 'color 0.18s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                    >
                      <Code2 size={13} /> Code
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      style={{
                        display: 'flex', alignItems: 'center', gap: 5,
                        fontSize: 12, color: 'var(--muted)', textDecoration: 'none',
                        transition: 'color 0.18s'
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = 'var(--purple)'}
                      onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                    >
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}