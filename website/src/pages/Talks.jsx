import { useState } from 'react'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import Reveal from '../components/Reveal.jsx'

function PosterImage({ image, caption, alt }) {
  const [failed, setFailed] = useState(false)
  if (!image || failed) return <PlaceholderImage caption={caption} />
  return (
    <img
      src={`${import.meta.env.BASE_URL}talks/${image}`}
      alt={alt}
      onError={() => setFailed(true)}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
    />
  )
}

function VideoEmbed({ videoUrl, title }) {
  if (videoUrl) {
    return (
      <iframe
        src={videoUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
      />
    )
  }
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(127,127,127,0.08)',
        border: '1.5px dashed currentColor',
        borderRadius: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        opacity: 0.75,
        color: 'inherit',
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="2.5" />
        <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
      </svg>
      <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.01em' }}>Coming soon</span>
    </div>
  )
}

const upcomingTalks = []

const pastTalks = [
  {
    id: 'fireside-chat-asm-leadership',
    eyebrow: 'Fireside Chat · 26 September 2026',
    title: 'Charting the Future of Microbial Sciences: Insights from ASM Leadership',
    speakers: [
      { name: 'Stefano Bertuzzi', role: 'CEO, American Society for Microbiology' },
      { name: 'Glen McGugan', role: 'Director, ASM Mechanism Discovery' },
      { name: 'Aditi Jain', role: 'Scientific Partnerships Manager, India, ASM' },
    ],
    note: 'Seminar Hall, IIT Delhi',
    videoUrl: null,
  },
  {
    id: 'microbytes-inaugural-kartik-aiyer',
    eyebrow: 'Microbytes · 11 September 2026',
    title: 'The Electric Life of Microbes',
    speakers: [{ name: 'Dr. Kartik Aiyer', role: 'Marie Curie Postdoctoral Fellow, Aarhus University' }],
    note: 'Inaugural Microbytes talk',
    videoUrl: null,
  },
]

export default function Talks() {
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
          Seminars, webinars and talk series
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
          Talks
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p style={{ margin: '0 0 56px', maxWidth: '62ch', fontSize: 17, lineHeight: 1.62, color: '#4A3A33' }}>
          The chapter’s speaker programme, held on campus and online. Recordings and slides are
          linked where the speaker has agreed to share them.
        </p>
      </Reveal>

      <Reveal
        as="section"
        className="stack-mobile"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.05fr)',
          gap: 40,
          alignItems: 'center',
          padding: 32,
          marginBottom: 64,
          background: '#7A0F14',
          color: '#F7EFE0',
        }}
      >
        <div style={{ position: 'relative', width: '100%', aspectRatio: '4 / 3' }}>
          <PosterImage
            image="Microbytes.png"
            caption="Drop the series poster"
            alt="Microbytes — the Young Microbiologists Talk Series"
          />
        </div>
        <div>
          <p
            style={{
              margin: '0 0 12px',
              fontSize: '11.5px',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: '#E9C6A4',
            }}
          >
            Flagship series · ongoing
          </p>
          <h2
            style={{
              margin: '0 0 6px',
              fontFamily: 'Spectral, Georgia, serif',
              fontSize: 'clamp(28px, 3.2vw, 42px)',
              lineHeight: 1.1,
              fontWeight: 600,
              letterSpacing: '0.01em',
            }}
          >
            Microbytes
          </h2>
          <p
            style={{
              margin: '0 0 18px',
              fontSize: '15px',
              letterSpacing: '0.02em',
              color: '#E9C6A4',
            }}
          >
            The Young Microbiologists Talk Series
          </p>
          <p style={{ margin: '0 0 22px', fontSize: '16.5px', lineHeight: 1.66, color: '#EBD9C4', textWrap: 'pretty' }}>
            A recurring series putting early career microbiologists — PhD scholars, postdocs and
            young faculty — in front of students to talk about their research and the paths that
            took them there.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            <span
              style={{
                padding: '6px 13px',
                border: '1px solid #C2757A',
                borderRadius: '999px',
                fontSize: '12.5px',
                color: '#F0DFCB',
                whiteSpace: 'nowrap',
                flex: '0 0 auto',
              }}
            >
              Open to all students
            </span>
            <span
              style={{
                padding: '6px 13px',
                border: '1px solid #C2757A',
                borderRadius: '999px',
                fontSize: '12.5px',
                color: '#F0DFCB',
                whiteSpace: 'nowrap',
                flex: '0 0 auto',
              }}
            >
              Offline &amp; online
            </span>
          </div>
        </div>
      </Reveal>

      <Reveal>
        <h2 style={{ margin: '0 0 8px', fontFamily: 'Spectral, Georgia, serif', fontSize: 26, fontWeight: 600 }}>
          Upcoming
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p style={{ margin: '0 0 24px', fontSize: 15, color: '#6B584E' }}>
          The next scheduled talk in the series.
        </p>
      </Reveal>
      {upcomingTalks.length === 0 ? (
        <Reveal
          delay={0.12}
          style={{ padding: '40px 26px', marginBottom: 64, border: '1px dashed #D3C1A4', borderRadius: 4, textAlign: 'center' }}
        >
          <p style={{ margin: 0, fontSize: 15, color: '#7C6A5C' }}>
            No talks scheduled right now — check back soon.
          </p>
        </Reveal>
      ) : (
        upcomingTalks.map((talk, i) => (
          <Reveal
            key={talk.id}
            as="article"
            delay={0.12 + i * 0.08}
            className="stack-mobile"
            style={{
              display: 'grid',
              gridTemplateColumns: '140px 90px minmax(0, 1fr)',
              gap: 24,
              alignItems: 'start',
              padding: '24px 26px',
              marginBottom: i === upcomingTalks.length - 1 ? 64 : 16,
              background: '#F5EBD9',
              border: '1px solid #E4D8C2',
            }}
          >
            <div style={{ position: 'relative', width: 140, height: 140, background: '#FAF5EA' }}>
              <PosterImage image={talk.image} caption="Drop the talk poster" alt={talk.title} />
            </div>
            <div>
              <p style={{ margin: 0, fontFamily: 'Spectral, Georgia, serif', fontSize: 30, fontWeight: 600, color: '#7A0F14' }}>
                {talk.day}
              </p>
              <p style={{ margin: '2px 0 0', fontSize: '12.5px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#8C7A6B' }}>
                {talk.month} · {talk.time}
              </p>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
                <p
                  style={{
                    margin: 0,
                    fontSize: '11px',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: '#A8262B',
                  }}
                >
                  {talk.eyebrow}
                </p>
                <span
                  style={{
                    padding: '7px 14px',
                    border: '1px solid #DFCFB4',
                    borderRadius: '999px',
                    fontSize: '12.5px',
                    color: '#6B584E',
                    whiteSpace: 'nowrap',
                    flex: '0 0 auto',
                  }}
                >
                  {talk.mode}
                </span>
              </div>
              <h3 style={{ margin: '0 0 10px', fontSize: 19, fontWeight: 600, lineHeight: 1.35 }}>{talk.title}</h3>
              <ul style={{ margin: '0 0 8px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 3 }}>
                {talk.speakers.map((speaker) => (
                  <li key={speaker.name} style={{ fontSize: 15, lineHeight: 1.5, color: '#4A3A33' }}>
                    <span style={{ fontWeight: 600 }}>{speaker.name}</span> — {speaker.role}
                  </li>
                ))}
              </ul>
              <p style={{ margin: talk.registerUrl ? '0 0 10px' : 0, fontSize: '13.5px', color: '#8C7A6B' }}>
                {talk.venue}
              </p>
              {talk.registerUrl && (
                <a
                  href={talk.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 14, letterSpacing: '0.02em', fontWeight: 600 }}
                >
                  Register for the talk
                </a>
              )}
            </div>
          </Reveal>
        ))
      )}

      <Reveal>
        <h2 style={{ margin: '0 0 8px', fontFamily: 'Spectral, Georgia, serif', fontSize: 26, fontWeight: 600 }}>
          Past talks
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p style={{ margin: '0 0 24px', fontSize: 15, color: '#6B584E' }}>
          Every completed talk is archived here with its speaker and recording.
        </p>
      </Reveal>
      {pastTalks.length === 0 ? (
        <Reveal
          delay={0.12}
          style={{ padding: '40px 26px', border: '1px dashed #D3C1A4', borderRadius: 4, textAlign: 'center' }}
        >
          <p style={{ margin: 0, fontSize: 15, color: '#7C6A5C' }}>
            No talks held yet — the first entries appear once the series begins.
          </p>
        </Reveal>
      ) : (
        pastTalks.map((talk, i) => (
          <Reveal
            key={talk.id}
            as="article"
            delay={0.12 + i * 0.08}
            className="stack-mobile"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 280px) minmax(0, 1fr)',
              gap: 32,
              alignItems: 'start',
              padding: 24,
              marginBottom: i === pastTalks.length - 1 ? 0 : 20,
              background: '#F5EBD9',
              border: '1px solid #E4D8C2',
            }}
          >
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16 / 9', background: '#FAF5EA' }}>
              <VideoEmbed videoUrl={talk.videoUrl} title={talk.title} />
            </div>
            <div>
              <p
                style={{
                  margin: '0 0 8px',
                  fontSize: '11px',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: '#A8262B',
                }}
              >
                {talk.eyebrow}
              </p>
              <h3 style={{ margin: '0 0 10px', fontSize: 19, fontWeight: 600, lineHeight: 1.35 }}>{talk.title}</h3>
              <ul style={{ margin: '0 0 8px', padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 3 }}>
                {talk.speakers.map((speaker) => (
                  <li key={speaker.name} style={{ fontSize: 15, lineHeight: 1.5, color: '#4A3A33' }}>
                    <span style={{ fontWeight: 600 }}>{speaker.name}</span> — {speaker.role}
                  </li>
                ))}
              </ul>
              <p style={{ margin: 0, fontSize: '13.5px', color: '#8C7A6B' }}>{talk.note}</p>
            </div>
          </Reveal>
        ))
      )}
    </main>
  )
}
