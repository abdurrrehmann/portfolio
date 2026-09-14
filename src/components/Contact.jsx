import { Mail, Code2, Linkedin, Send } from 'lucide-react'
import { personal } from '../data/data'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <h2 className="section-heading">
          <span />Get in Touch
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {/* Left — message */}
          <div className="glass glass-cyan" style={{ borderRadius: 12, padding: 32 }}>
            <p style={{ fontSize: 15, color: 'var(--muted)', lineHeight: 1.8, marginBottom: 28 }}>
              I&apos;m open to AI engineering roles, research collaborations, and interesting
              freelance projects. Send a message and I&apos;ll respond within 24 hours.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { icon: Mail, label: personal.email, href: `mailto:${personal.email}` },
                { icon: Code2, label: 'GitHub', href: personal.github },
                { icon: Linkedin, label: 'LinkedIn', href: personal.linkedin },
              ].map(({ icon: Icon, label, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', gap: 10,
                    color: 'var(--muted)', textDecoration: 'none',
                    fontSize: 14, transition: 'color 0.18s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="glass" style={{ borderRadius: 12, padding: 32 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                { id: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
              ].map(field => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="mono" style={{
                    display: 'block', fontSize: 11, color: 'var(--muted)', marginBottom: 6
                  }}>
                    {field.label}
                  </label>
                  <input id={field.id} type={field.type} placeholder={field.placeholder}
                    style={{
                      width: '100%', padding: '10px 14px',
                      background: 'var(--surface-2)', border: '1px solid var(--border-dim)',
                      borderRadius: 6, color: 'var(--text)', fontSize: 14,
                      outline: 'none', fontFamily: 'Space Grotesk, sans-serif',
                      transition: 'border-color 0.18s'
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border-dim)'}
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="mono" style={{
                  display: 'block', fontSize: 11, color: 'var(--muted)', marginBottom: 6
                }}>
                  Message
                </label>
                <textarea id="message" rows={4} placeholder="What's on your mind?"
                  style={{
                    width: '100%', padding: '10px 14px',
                    background: 'var(--surface-2)', border: '1px solid var(--border-dim)',
                    borderRadius: 6, color: 'var(--text)', fontSize: 14,
                    outline: 'none', resize: 'vertical',
                    fontFamily: 'Space Grotesk, sans-serif',
                    transition: 'border-color 0.18s'
                  }}
                  onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                  onBlur={e => e.target.style.borderColor = 'var(--border-dim)'}
                />
              </div>
              <a href={`mailto:${personal.email}`}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '11px 0', borderRadius: 6,
                  background: 'linear-gradient(110deg, var(--cyan), var(--purple))',
                  color: '#0B0F19', fontWeight: 700, fontSize: 14,
                  textDecoration: 'none', transition: 'opacity 0.18s'
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                <Send size={14} /> Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}