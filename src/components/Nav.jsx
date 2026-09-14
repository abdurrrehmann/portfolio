import { useState, useEffect } from 'react'
import { personal } from '../data/data'

const LINKS = ['about', 'experience', 'projects', 'skills', 'contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'background 0.3s, border-color 0.3s',
      background: scrolled ? 'rgba(11, 15, 25, 0.88)' : 'transparent',
      borderBottom: scrolled ? '1px solid var(--border-dim)' : '1px solid transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
    }}>
      <div style={{
        maxWidth: 1080, margin: '0 auto', padding: '0 24px',
        height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between'
      }}>
        <span className="mono" style={{ color: 'var(--cyan)', fontSize: 13, fontWeight: 600 }}>
          {personal.name.split(' ')[0].toLowerCase()}.ai
        </span>
        <nav style={{ display: 'flex', gap: 28 }}>
          {LINKS.map(l => (
            <a key={l} href={`#${l}`} className="mono" style={{
              fontSize: 12, color: 'var(--muted)', textDecoration: 'none',
              transition: 'color 0.18s'
            }}
              onMouseEnter={e => e.target.style.color = 'var(--cyan)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}
            >
              {l}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}