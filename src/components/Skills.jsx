import { skillGroups } from '../data/data'

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'rgba(17,34,64,0.18)' }}>
      <div className="section-inner">
        <h2 className="section-heading">
          <span />Technical Skills
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 20
        }}>
          {skillGroups.map(group => (
            <div key={group.group} className="glass" style={{ borderRadius: 10, padding: '22px 24px' }}>
              <h3 className="mono" style={{
                fontSize: 12,
                color: group.color === 'cyan' ? 'var(--cyan)' : 'var(--purple)',
                marginBottom: 16, fontWeight: 600
              }}>
                {group.group}/
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7 }}>
                {group.skills.map(skill => (
                  <span key={skill}
                    className={group.color === 'cyan' ? 'tag' : 'tag tag-purple'}
                    style={{ fontSize: 12, padding: '4px 11px' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}