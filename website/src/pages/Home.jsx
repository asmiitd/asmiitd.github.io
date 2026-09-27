import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal.jsx'

const departments = [
  {
    abbr: 'DBEB',
    name: 'Department of Biochemical Engineering and Biotechnology',
    desc: 'Bioprocess engineering, fermentation and industrial biotechnology — microbes at production scale.',
  },
  {
    abbr: 'KSBS',
    name: 'Kusuma School of Biological Sciences',
    desc: 'Molecular microbiology, host–pathogen biology and genomics across bacterial and viral systems.',
  },
  {
    abbr: 'CBME',
    name: 'Centre for Biomedical Engineering',
    desc: 'Diagnostics, biomaterials and medical devices, with joint work alongside AIIMS clinicians.',
  },
]

const stats = [
  { stat: '3', label: 'biology departments and centres on one campus' },
  { stat: '4', label: 'chapter verticals: administration, outreach, sponsorship, design' },
  { stat: '₹0', label: 'chapter dues for members' },
]

const goals = [
  'Promote student interest in microbiology and support the advancement of microbiology‑related education and research at IIT Delhi.',
  'Explain the benefits and value of ASM membership to students, postdocs and early career scientists at IITD.',
  'Reach K–12 students through educational outreach initiatives run by the chapter.',
  'Provide aid and professional development opportunities across curriculum, research and employment.',
  'Promote student participation in local, state and national ASM meetings and activities.',
]

export default function Home() {
  return (
    <main>
      <section
        className="stack-mobile"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.35fr) minmax(0, 1fr)',
          gap: 56,
          alignItems: 'center',
          padding: '84px 32px 76px',
          maxWidth: 1180,
          margin: '0 auto',
        }}
      >
        <div>
          <Reveal delay={0}>
            <p
              style={{
                margin: '0 0 22px',
                fontSize: '11.5px',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: '#A8262B',
              }}
            >
              American Society for Microbiology · IIT Delhi
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1
              style={{
                margin: '0 0 24px',
                fontFamily: 'Spectral, Georgia, serif',
                fontSize: 'clamp(38px, 5.2vw, 68px)',
                lineHeight: 1.04,
                fontWeight: 600,
                letterSpacing: '-0.02em',
                color: '#241614',
                textWrap: 'pretty',
              }}
            >
              The microbial world, studied where India&rsquo;s engineers and biologists meet.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p
              style={{
                margin: '0 0 32px',
                maxWidth: '56ch',
                fontSize: '17.5px',
                lineHeight: 1.62,
                color: '#4A3A33',
                textWrap: 'pretty',
              }}
            >
              ASM&#8209;IITD is the newly established student chapter of the American Society for
              Microbiology at the Indian Institute of Technology Delhi. We exist to spread
              microbiology awareness across campus and beyond, and to open access to research,
              training and career opportunities for students working with microbes.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <Link
                to="/events"
                className="btn-primary"
                style={{
                  padding: '14px 26px',
                  border: 0,
                  borderRadius: '999px',
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: '14.5px',
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  display: 'inline-block',
                }}
              >
                See our events
              </Link>
              <Link
                to="/team"
                className="btn-outline"
                style={{
                  padding: '14px 26px',
                  border: '1px solid #C9B79A',
                  borderRadius: '999px',
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: '14.5px',
                  letterSpacing: '0.02em',
                  cursor: 'pointer',
                  display: 'inline-block',
                }}
              >
                Meet the officers
              </Link>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.2} y={0} style={{ display: 'flex', justifyContent: 'center' }}>
          <img
            src={`${import.meta.env.BASE_URL}logo.png`}
            alt="ASM-IITD chapter logo"
            style={{ width: '100%', maxWidth: 380, display: 'block' }}
          />
        </Reveal>
      </section>

      <section style={{ borderTop: '1px solid #E4D8C2', borderBottom: '1px solid #E4D8C2', background: '#F5EBD9' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', padding: '72px 32px' }}>
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
              Why IIT Delhi
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              style={{
                margin: '0 0 18px',
                maxWidth: '26ch',
                fontFamily: 'Spectral, Georgia, serif',
                fontSize: 'clamp(28px, 3.4vw, 44px)',
                lineHeight: 1.14,
                fontWeight: 600,
                letterSpacing: '-0.01em',
              }}
            >
              Few campuses in India carry this much microbiology under one roof.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              style={{
                margin: '0 0 48px',
                maxWidth: '62ch',
                fontSize: '16.5px',
                lineHeight: 1.6,
                color: '#4A3A33',
                textWrap: 'pretty',
              }}
            >
              Three departments at IIT Delhi work on the biological sciences side by side, backed by
              a research publication record and a faculty roster that draws collaborators from
              across the country and abroad. A student chapter here reaches engineers, biologists
              and clinicians in the same corridor.
            </p>
          </Reveal>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 20,
              marginBottom: 40,
            }}
          >
            {departments.map((dept, i) => (
              <Reveal
                key={dept.abbr}
                delay={i * 0.1}
                as="article"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  padding: 28,
                  background: '#FAF5EA',
                  border: '1px solid #E4D8C2',
                  borderRadius: 4,
                  height: '100%',
                }}
              >
                <span style={{ fontFamily: 'Spectral, Georgia, serif', fontSize: 30, fontWeight: 600, color: '#7A0F14' }}>
                  {dept.abbr}
                </span>
                <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, lineHeight: 1.4 }}>{dept.name}</h3>
                <p style={{ margin: 0, fontSize: '14.5px', lineHeight: 1.6, color: '#574540' }}>{dept.desc}</p>
              </Reveal>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 4,
              border: '1px solid #E4D8C2',
              background: '#E4D8C2',
            }}
          >
            {stats.map((item, i) => (
              <Reveal
                key={item.label}
                delay={i * 0.1}
                style={{ padding: '24px 26px', background: '#FAF5EA', height: '100%' }}
              >
                <p
                  style={{
                    margin: '0 0 6px',
                    fontFamily: 'Spectral, Georgia, serif',
                    fontSize: 34,
                    fontWeight: 600,
                    color: '#7A0F14',
                  }}
                >
                  {item.stat}
                </p>
                <p style={{ margin: 0, fontSize: '13.5px', lineHeight: 1.5, color: '#574540' }}>{item.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1180, margin: '0 auto', padding: '76px 32px' }}>
        <div className="stack-mobile" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: 56 }}>
          <Reveal>
            <div>
              <p
                style={{
                  margin: '0 0 14px',
                  fontSize: '11.5px',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: '#A8262B',
                }}
              >
                What we set out to do
              </p>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'Spectral, Georgia, serif',
                  fontSize: 'clamp(26px, 3vw, 38px)',
                  lineHeight: 1.16,
                  fontWeight: 600,
                }}
              >
                Awareness, and a way in.
              </h2>
              <p style={{ margin: '20px 0 0', fontSize: 16, lineHeight: 1.65, color: '#4A3A33' }}>
                Our goals, as set out in the chapter constitution.
              </p>
            </div>
          </Reveal>
          <ol style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {goals.map((goal, i) => (
              <Reveal
                key={goal}
                delay={i * 0.08}
                as="li"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '40px minmax(0, 1fr)',
                  gap: 16,
                  padding: '22px 0',
                  borderTop: '1px solid #E4D8C2',
                  borderBottom: i === goals.length - 1 ? '1px solid #E4D8C2' : undefined,
                }}
              >
                <span style={{ fontFamily: 'Spectral, Georgia, serif', fontSize: 15, color: '#A8262B' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p style={{ margin: 0, fontSize: '16.5px', lineHeight: 1.6, color: '#33231F' }}>{goal}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section style={{ background: '#7A0F14', color: '#F7EFE0' }}>
        <div
          style={{
            maxWidth: 1180,
            margin: '0 auto',
            padding: '64px 32px',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 32,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Reveal>
            <div>
              <h2
                style={{
                  margin: '0 0 10px',
                  fontFamily: 'Spectral, Georgia, serif',
                  fontSize: 'clamp(24px, 3vw, 34px)',
                  fontWeight: 600,
                  lineHeight: 1.2,
                }}
              >
                Membership is open to every student working with microbes.
              </h2>
              <p style={{ margin: 0, maxWidth: '60ch', fontSize: 16, lineHeight: 1.6, color: '#EBD9C4' }}>
                Undergraduate, postgraduate and doctoral students at IIT Delhi enrolled in
                microbiology&#8209;related programmes or engaged in microbiological research. No
                chapter dues.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <a
              href="mailto:asm_iitd@admin.iitd.ac.in"
              className="cta-pill"
              style={{
                padding: '15px 28px',
                border: '1px solid #E7C9A8',
                borderRadius: '999px',
                fontSize: '14.5px',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
              }}
            >
              Write to the chapter
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
