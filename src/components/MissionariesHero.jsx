import React, { useEffect, useState } from 'react'
import { allCountries } from '../data/countries'

export default function MissionariesHero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % allCountries.length)
    }, 2500)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(320px, 42vw, 560px)',
        overflow: 'hidden',
      }}
    >
      {/* FULL WIDTH IMAGE ✅ */}
      <img
        src="/assets/globe.jpg"
        alt="Globe map"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* OVERLAY */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.2), rgba(0,0,0,0.4))',
        }}
      />

      {/* TEXT CONTAINER (CENTERED) ✅ */}
      <div
        className="missionaries-hero-text"
        style={{
          position: 'relative',
          height: '100%',
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          padding: '0 clamp(32px, 7vw, 100px)',
          color: '#fff',
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(34px, 5vw, 72px)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
          }}
        >
          Victory supports
        </h1>

        <div
          key={allCountries[index]}
          className="rotating-country"
          style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(34px, 5vw, 72px)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
          }}
        >
          {allCountries[index]}
        </div>
      </div>

      <style>
        {`
          .rotating-country {
            animation: countryFade 700ms ease both;
          }

          @keyframes countryFade {
            from {
              opacity: 0;
              transform: translateY(14px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @media (max-width: 700px) {
            .missionaries-hero-text {
              grid-template-columns: 1fr !important;
              gap: 14px;
            }
          }
        `}
      </style>
    </section>
  )
}