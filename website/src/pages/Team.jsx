import Reveal from '../components/Reveal.jsx'

const facultyAdvisor = { id: 'faculty-advisor', role: 'Faculty Advisor' }

const leadership = [
  {
    id: 'officer-overall',
    role: 'Overall Coordinator',
    name: 'Naman Kohli',
    programme: 'B. Tech',
    dept: 'DBEB',
    email: 'bb1231015@iitd.ac.in',
  },
  {
    id: 'officer-co-overall',
    role: 'Co‑Overall Coordinator',
    name: 'Khushi Chouhan',
    programme: 'PhD',
    dept: 'DBEB',
    email: 'bez238390@dbeb.iitd.ac.in',
  },
]

const verticals = [
  {
    name: 'Administration',
    description: 'Records, minutes, membership roster and meeting logistics.',
    coordinators: ['Aryan Jain', 'Shivanshu Agrawal'],
    executives: ['', '','',''],
  },
  {
    name: 'Outreach',
    description: 'Social media, workshops, guest sessions and external collaborations.',
    coordinators: ['Harihar Muralidharan', 'Bhumika Varin'],
    executives: ['', '','',''],
  },
  {
    name: 'Design',
    description: 'Posters, pamphlets, invitations and correct logo usage.',
    coordinators: ['Yashsvi Bhadoriya', 'Shabnoor Chaudhary'],
    executives: ['', '','',''],
  },
  {
    name: 'Sponsorship & Fundraising',
    description: 'Funds, accounts, fundraisers and chapter purchases.',
    coordinators: ['', ''],
    executives: ['', '','',''],
  },
  
]

export default function Team() {
  return (
    <main style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 32px 90px' }}>
      <Reveal>
        <p
          style={{
            margin: '0 0 14px',
            fontSize: '11.5px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#A8262B',
          }}
        >
          2026 term
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <h1
          style={{
            margin: '0 0 18px',
            fontFamily: 'Spectral, Georgia, serif',
            fontSize: 'clamp(32px, 4.4vw, 54px)',
            lineHeight: 1.08,
            fontWeight: 600,
            letterSpacing: '-0.015em',
          }}
        >
          Chapter Organization
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p style={{ margin: '0 0 56px', maxWidth: '62ch', fontSize: 17, lineHeight: 1.62, color: '#4A3A33' }}>
          The chapter is run by an Overall Coordinator, a Co-Overall Coordinator and four verticals, each with its own Coordinators and Executives.
          Officers serve a one‑year term beginning with Semester I.
        </p>
      </Reveal>

      <Reveal
        as="section"
        style={{
          padding: 28,
          marginBottom: 24,
          background: '#F5EBD9',
          border: '1px solid #E4D8C2',
        }}
      >
        <p
          style={{
            margin: '0 0 10px',
            fontSize: '11.5px',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#A8262B',
          }}
        >
          {facultyAdvisor.role}
        </p>
        <h2 style={{ margin: '0 0 12px', fontFamily: 'Spectral, Georgia, serif', fontSize: 27, fontWeight: 600 }}>
          Dr. Shilpi Sharma
        </h2>
        <p style={{ margin: '0 0 14px', fontSize: 15, lineHeight: 1.6, color: '#4A3A33' }}>
          DBEB · Faculty mentorship and strategic guidance to the chapter.
        </p>
        <a href="mailto:shilpi@dbeb.iitd.ac.in" style={{ fontSize: 14, letterSpacing: '0.02em' }}>
          Contact
        </a>
      </Reveal>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: 24,
          marginBottom: 56,
        }}
      >
        {leadership.map((officer, i) => (
          <Reveal
            key={officer.id}
            as="section"
            delay={i * 0.1}
            style={{
              padding: 28,
              background: '#F5EBD9',
              border: '1px solid #E4D8C2',
            }}
          >
            <p
              style={{
                margin: '0 0 10px',
                fontSize: '11.5px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: '#A8262B',
              }}
            >
              {officer.role}
            </p>
            <h2 style={{ margin: '0 0 12px', fontFamily: 'Spectral, Georgia, serif', fontSize: 27, fontWeight: 600 }}>
              {officer.name}
            </h2>
            <p style={{ margin: '0 0 14px', fontSize: 15, lineHeight: 1.6, color: '#4A3A33' }}>
              {officer.programme} · {officer.dept}
            </p>
            <a href={`mailto:${officer.email}`} style={{ fontSize: 14, letterSpacing: '0.02em' }}>
              Contact
            </a>
          </Reveal>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: 24 }}>
        {verticals.map((vertical, i) => (
          <Reveal
            key={vertical.name}
            as="section"
            delay={i * 0.08}
            style={{ padding: 28, background: '#FAF5EA', border: '1px solid #E4D8C2' }}
          >
            <h3
              style={{
                margin: '0 0 6px',
                fontFamily: 'Spectral, Georgia, serif',
                fontSize: 22,
                fontWeight: 600,
                color: '#7A0F14',
              }}
            >
              {vertical.name}
            </h3>
            <p style={{ margin: '0 0 22px', fontSize: 14, lineHeight: 1.55, color: '#6B584E' }}>{vertical.description}</p>
            <p
              style={{
                margin: '0 0 8px',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#A8262B',
              }}
            >
              Coordinators
            </p>
            <ul style={{ margin: '0 0 20px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {vertical.coordinators.map((name, i) => (
                <li key={i} style={{ fontSize: '15.5px', paddingBottom: 8, borderBottom: '1px solid #EDE2CE' }}>
                  {name}
                </li>
              ))}
            </ul>
            <p
              style={{
                margin: '0 0 8px',
                fontSize: 11,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#A8262B',
              }}
            >
              Executives
            </p>
            <ul
              style={{
                margin: 0,
                padding: 0,
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: 6,
                fontSize: 15,
                color: '#4A3A33',
              }}
            >
              {vertical.executives.map((name, i) => (
                <li key={i}>{name}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <p style={{ margin: '40px 0 0', fontSize: '14.5px', lineHeight: 1.6, color: '#6B584E', maxWidth: '60ch' }}>
          Outstanding board members are listed once appointed for the term.
        </p>
      </Reveal>
    </main>
  )
}
