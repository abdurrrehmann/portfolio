import { Code2, Linkedin, Mail, BrainCircuit } from 'lucide-react'
import { personal } from '../data/data'
import { useState } from 'react'

export default function Hero() {
  const [imgError, setImgError] = useState(false)

  return (
    <section style={{
      minHeight: '100vh', display: 'flex', alignItems: 'center',
      paddingTop: 80,
    }}>
      <div className="section-inner" style={{ width: '100%' }}>
        <div style={{
          display: 'flex', gap: 56, alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {/* Text side */}
          <div style={{ flex: '1 1 340px' }}>
            <p className="mono" style={{ color: 'var(--cyan)', fontSize: 13, marginBottom: 16 }}>
              &gt; initializing portfolio...
            </p>

            <h1 style={{
              fontSize: 'clamp(36px, 6vw, 60px)',
              fontWeight: 700, lineHeight: 1.1,
              marginBottom: 8, color: 'var(--text)'
            }}>
              <span className="hero-name-wrap">
                {personal.name}
                <span className="hero-scan" />
              </span>
            </h1>

            <h2 className="grad-text" style={{
              fontSize: 'clamp(17px, 3vw, 22px)',
              fontWeight: 600, marginBottom: 24, lineHeight: 1.3
            }}>
              {personal.role}
            </h2>

            <p style={{
              color: 'var(--muted)', fontSize: 15, maxWidth: 480,
              lineHeight: 1.75, marginBottom: 36
            }}>
              {personal.tagline}
            </p>

            {/* Social links */}
            <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
              {[
                { href: personal.github, icon: Code2, label: 'GitHub' },,,
                { href: personal.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${personal.email}`, icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 7,
                    padding: '9px 18px', borderRadius: 6,
                    border: '1px solid var(--border-dim)',
                    color: 'var(--muted)', textDecoration: 'none',
                    fontSize: 13, transition: 'border-color 0.2s, color 0.2s'
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--cyan)'
                    e.currentTarget.style.color = 'var(--cyan)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'var(--border-dim)'
                    e.currentTarget.style.color = 'var(--muted)'
                  }}
                >
                  <Icon size={14} /> {label}
                </a>
              ))}
            </div>
          </div>

          {/* Avatar side */}
          <div style={{ flex: '0 0 auto' }}>
            <div style={{
              width: 220, height: 220, borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--cyan), var(--purple))',
              padding: 3,
              boxShadow: '0 0 40px rgba(0,212,255,0.22), 0 0 80px rgba(155,89,245,0.12)'
            }}>
              {!imgError ? (
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  onError={() => setImgError(true)}
                  style={{
                    width: '100%', height: '100%',
                    borderRadius: '50%', objectFit: 'cover',
                    background: 'var(--surface-2)'
                  }}
                />
              ) : (
                <div style={{
                  width: '100%', height: '100%', borderRadius: '50%',
                  background: 'var(--surface-2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                  <BrainCircuit size={64} style={{ color: 'var(--cyan)', opacity: 0.6 }} />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ marginTop: 72, display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 1, height: 40,
            background: 'linear-gradient(180deg, var(--cyan), transparent)'
          }} />
          <span className="mono" style={{ fontSize: 11, color: 'var(--muted)' }}>scroll</span>
        </div>
      </div>
    </section>
  )
}