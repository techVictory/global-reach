/*
  HeroSection.jsx
  ───────────────
  • Three pill buttons (orange, purple, green) with black border, DM Mono text
  • Full-width banner image with "Victory Missions" pill overlay bottom-RIGHT, sticking out slightly
  • "OUR MISSION" + body text below
*/

import { Link } from 'react-router-dom'

export default function HeroSection() {
  const buttons = [
    { label: 'SHORT TERM\nMISSIONS', color: '#ff6e46', to: '/missions' },
    { label: 'SPECIAL PROJECTS', color: '#d1b9f8', to: '/special-projects' },
    { label: 'MISSIONARIES\nWE SUPPORT', color: '#02f590', to: '/missionaries' },
  ]

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#eaebe2',
        padding: '0 48px 80px',
      }}
    >
      {/* ── Pill buttons ── */}
      <div
        className="flex flex-wrap justify-center"
        style={{ gap: '32px', padding: '48px 0 40px' }}
      >
        {buttons.map(({ label, color, to }) => (
          <Link
            key={to}
            to={to}
            className="no-underline flex items-center justify-center text-center transition-opacity duration-200 hover:opacity-80"
            style={{
              backgroundColor: color,
              border: '2px solid black',
              borderRadius: '999px',
              padding: '10px 38px',
              fontFamily: '"DM Mono", monospace',
              fontSize: 'clamp(14px, 1.4vw, 20px)',
              fontWeight: 700,
              letterSpacing: '0.04em',
              color: '#000000',
              whiteSpace: 'pre-line',
              lineHeight: 1.25,
              textAlign: 'center',
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* ── Banner image + Victory Missions pill ── */}
      <div
        className="relative w-full"
        style={{ overflow: 'visible' }}
      >
        {/* Image */}
        <img
          src="/assets/kids.png"
          alt="Children smiling"
          className="w-full object-cover"
          style={{
            maxHeight: '520px',
            display: 'block',
          }}
        />

        {/* "Victory Missions" pill — bottom RIGHT, slightly outside image edge */}
        <div
          className="absolute"
          style={{
            bottom: '-32px',
            right: '-24px',
          }}
        >
          <div
            style={{
              backgroundColor: '#5dbaff',
              border: '2px solid black',
              borderRadius: '999px',
              padding: 'clamp(14px, 2vw, 22px) clamp(28px, 4vw, 56px)',
              fontFamily: '"DM Mono", monospace',
              fontSize: 'clamp(24px, 4vw, 56px)',
              fontWeight: 800,
              color: '#000000',
              whiteSpace: 'nowrap',
              lineHeight: 1,
            }}
          >
            victory missions
          </div>
        </div>
      </div>

{/* ── OUR MISSION + body text ── */}
<div
  className="flex flex-col md:flex-row items-center md:items-start justify-center"
  style={{
    paddingTop: 'clamp(64px, 8vw, 96px)',
    gap: 'clamp(24px, 4vw, 64px)',
    maxWidth: '900px',
    margin: '0 auto',
  }}
>
  {/* Title */}
  <div style={{ flexShrink: 0, minWidth: '200px' }}>
  <h2
    className="text-black uppercase leading-none"
    style={{
      fontFamily: '"DM Sans", sans-serif',
      fontSize: 'clamp(36px, 5vw, 64px)',
      fontWeight: 900,
    }}
  >
    <span className="block" style={{ textAlign: 'right' }}>OUR</span>
    <span className="block" style={{ textAlign: 'left' }}>MISSION</span>
  </h2>
</div>

  {/* Body text */}
  <p
    className="text-black"
    style={{
      fontFamily: '"DM Sans", sans-serif',
      fontSize: 'clamp(14px, 1.2vw, 17px)',
      fontWeight: 600,
      lineHeight: 1.65,
      margin: 0,
      flex: 1,
    }}
  >
    Reach the lost &amp; introduce them to the One who changes everything.
    Our heart is to obey Jesus' mandate to make disciples of all nations.
    Victory has a Missions legacy that stretches over three decades and
    extends across the globe. We have had the opportunity to impact
    countless lives around the world with the Love of Christ.
  </p>
</div>
    </section>
  )
}