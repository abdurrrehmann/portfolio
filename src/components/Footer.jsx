import { personal } from '../data/data'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid var(--border-dim)',
      padding: '28px 24px',
      textAlign: 'center'
    }}>
      <p className="mono" style={{ fontSize: 12, color: 'var(--muted)' }}>
        © {new Date().getFullYear()} {personal.name} — built with React + Vite
        <span style={{ margin: '0 10px', color: 'var(--border-dim)' }}>|</span>
        <span className="grad-text">AI Engineer & Computer Vision Specialist</span>
      </p>
    </footer>
  )
}