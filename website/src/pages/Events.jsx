import { useState } from 'react'
import { Link } from 'react-router-dom'
import PlaceholderImage from '../components/PlaceholderImage.jsx'
import Reveal from '../components/Reveal.jsx'

function EventPhoto({ image, caption, alt }) {
  const [failed, setFailed] = useState(false)
  if (!image || failed) return <PlaceholderImage caption={caption} />
  return (
    <img
      src={`${import.meta.env.BASE_URL}events/${image}`}
      alt={alt}
      onError={() => setFailed(true)}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
    />
  )
}

const upcomingEvents = [
  {
    id: 'ev-micropitch',
    eyebrow: 'Competition · 26 September 2026',
    title: 'MicroPitch',
    description:
      '60 seconds, one idea. Record a pitch on any research, technology, idea or solution around the future of microbial sciences and post it on Instagram to enter. Finalists pitch live and get to interact with ASM CEO and distinguished guests.',
    tags: ['Format: ≤60‑sec video', 'Entries close: 24 September 2026'],
    placeholder: 'Drop the MicroPitch poster',
    image: 'micropitch.jpeg',
    aspectRatio: '4 / 5',
  },
]

const pastEvents = [
  {
    id: 'ev-tour-of-stalls',
    eyebrow: 'Campus activity · 25/07/26',
    title: 'Tour of Stalls',
    description:
      'A guided walk through the exhibit stalls, introducing visitors to the chapter and to microbiology work happening across the institute. ',
    tags: ['Visitors: 100+', 'Venue: LH 325 Foyer'],
    placeholder: 'Drop a photo from the tour',
    image: 'tos.png',
  },
  {
    id: 'ev-microbiome-day',
    eyebrow: 'Hackathon · 27/06/26',
    title: 'World Microbiome Day Hackathon',
    description:
      'A week-long student hackathon celebrating World Microbiome Day, focused on developing solutions for gut microbiome and AMR challenges.',
    tags: ['Teams: 30', 'Mode: Online'],
    placeholder: 'Drop a photo from the hackathon',
    image: 'wmd.png',
  },
  {
    id: 'ev-open-house-2026',
    eyebrow: 'Outreach · 06/06/26',
    title: 'Open House 2026',
    description:
      'The chapter’s first public appearance at the IIT Delhi Open House, presenting microbiology demonstrations and the chapter’s plans to visiting students and families. ',
    tags: ['Visitors: 50+', 'Venue: Central Atrium'],
    placeholder: 'Drop a photo from Open House',
    image: 'openhouse.png',
  },
]

function EventCard({ event, isLast, delay }) {
  return (
    <Reveal
      as="article"
      delay={delay}
      className="stack-mobile"
      style={{
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.05fr)',
        gap: 40,
        alignItems: 'start',
        paddingBottom: isLast ? 0 : 52,
        marginBottom: isLast ? 0 : 52,
        borderBottom: isLast ? undefined : '1px solid #E4D8C2',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: event.aspectRatio || '4 / 3',
          background: '#F5EBD9',
        }}
      >
        <EventPhoto image={event.image} caption={event.placeholder} alt={event.title} />
      </div>
      <div>
        <p
          style={{
            margin: '0 0 12px',
            fontSize: 12,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#8C7A6B',
          }}
        >
          {event.eyebrow}
        </p>
        <h2
          style={{
            margin: '0 0 16px',
            fontFamily: 'Spectral, Georgia, serif',
            fontSize: 'clamp(24px, 2.6vw, 34px)',
            lineHeight: 1.16,
            fontWeight: 600,
          }}
        >
          {event.title}
        </h2>
        <p style={{ margin: '0 0 20px', fontSize: '16.5px', lineHeight: 1.66, color: '#4A3A33', textWrap: 'pretty' }}>
          {event.description}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {event.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '6px 13px',
                border: '1px solid #DFCFB4',
                borderRadius: '999px',
                fontSize: '12.5px',
                color: '#6B584E',
                whiteSpace: 'nowrap',
                flex: '0 0 auto',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default function Events() {
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
          Archive
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
          Events
        </h1>
      </Reveal>
      <Reveal delay={0.12}>
        <p style={{ margin: '0 0 56px', maxWidth: '62ch', fontSize: 17, lineHeight: 1.62, color: '#4A3A33' }}>
          Competitions, hands‑on workshops, outreach activities and career fairs run by the chapter.
          Seminars and talks live under <Link to="/talks">Talks</Link>.
        </p>
      </Reveal>

      <Reveal>
        <h2 style={{ margin: '0 0 8px', fontFamily: 'Spectral, Georgia, serif', fontSize: 26, fontWeight: 600 }}>
          Upcoming
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p style={{ margin: '0 0 40px', fontSize: 15, color: '#6B584E' }}>
          Open for entries now.
        </p>
      </Reveal>
      {upcomingEvents.map((event, i) => (
        <EventCard key={event.id} event={event} isLast={i === upcomingEvents.length - 1} delay={0.12 + i * 0.08} />
      ))}

      <div style={{ height: 64 }} />

      <Reveal>
        <h2 style={{ margin: '0 0 8px', fontFamily: 'Spectral, Georgia, serif', fontSize: 26, fontWeight: 600 }}>
          Past events
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <p style={{ margin: '0 0 40px', fontSize: 15, color: '#6B584E' }}>Newest first.</p>
      </Reveal>
      {pastEvents.map((event, i) => (
        <EventCard key={event.id} event={event} isLast={i === pastEvents.length - 1} delay={0.12 + i * 0.08} />
      ))}
    </main>
  )
}
