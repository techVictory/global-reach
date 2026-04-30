import React from 'react'

export default function MissionariesIntro() {
  return (
    <section
      style={{
        backgroundColor: '#eaebe2',
        padding: '90px 48px 70px',
      }}
    >
      <p
        style={{
          maxWidth: '980px',
          margin: '0 auto',
          textAlign: 'center',
          fontFamily: '"DM Sans", sans-serif',
          fontSize: 'clamp(18px, 2vw, 30px)',
          fontWeight: 800,
          fontStyle: 'italic',
          lineHeight: 1.45,
          color: '#111',
        }}
      >
        Victory supports{' '}
        <span
          style={{
            fontSize: 'clamp(34px, 4vw, 58px)',
            fontWeight: 900,
            fontStyle: 'italic',
          }}
        >
          180+
        </span>{' '}
        Missionaries working throughout the world! It is an honor to partner
        with so many incredible individuals who are committed to see the Gospel
        shared throughout the nations.
      </p>
    </section>
  )
}