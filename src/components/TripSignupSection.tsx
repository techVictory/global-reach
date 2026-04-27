import React from 'react'

export default function TripSignupSection() {
  const actions = [
    {
      label: 'APPLY HERE!',
      href: 'https://brushfire.com/victory/Fee/536603',
    },
    {
      label: 'CREATE A MANAGED\nMISSIONS ACCOUNT',
      href: 'https://victorymissions.managedmissions.com/MissionApplication/Start/8812',
    },
    {
      label: 'START FUNDRAISING',
      href: 'https://drive.google.com/file/d/1eKOghA-jl_RuYyXmTTrSrCruYAIzREcZ/view',
    },
  ]

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: '#eaebe2',
        padding: '32px 48px 56px',
      }}
    >
      <div
        style={{
          maxWidth: '1500px',
          margin: '0 auto',
        }}
      >
        {/* Heading */}
        <h2
          style={{
            margin: 0,
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(32px, 5.3vw, 88px)',
            fontWeight: 900,
            lineHeight: 0.95,
            color: '#000000',
            letterSpacing: '-0.06em',
          }}
        >
          Sign up for a trip
        </h2>

        {/* Buttons + step block */}
        <div
          className="flex flex-col"
          style={{
            paddingTop: 'clamp(28px, 4vw, 54px)',
            gap: '18px',
          }}
        >
          {/* Buttons row */}
          <div
  className="flex flex-wrap items-start justify-center"
  style={{
    gap: 'clamp(20px, 3vw, 48px)',
  }}
>
  {actions.map(({ label, href }, index) => (
    <div
      key={href}
      className="flex flex-col items-start"
      style={{
        gap: 'clamp(12px, 2vw, 24px)',
      }}
    >
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="trip-btn no-underline flex items-center justify-center text-center"
        style={{
          backgroundColor: '#02f590',
          border: '2px solid black',
          borderRadius: '999px',
          padding: 'clamp(6px, 1.2vw, 10px) 34px',
          minHeight: 'clamp(52px, 6vw, 72px)',
          minWidth: 'clamp(220px, 24vw, 390px)',
          fontFamily: '"DM Mono", monospace',
          fontSize: 'clamp(14px, 1.4vw, 20px)',
          fontWeight: 700,
          letterSpacing: '0.04em',
          color: '#000000',
          whiteSpace: 'pre-line',
          textAlign: 'center',
          lineHeight: 1.15,
        }}
      >
        {label}
      </a>

      {index === 0 && (
        <div
          className="flex items-center"
          style={{
            gap: '8px',
            paddingLeft: '4px',
          }}
        >
          <span
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 'clamp(18px, 3vw, 32px)',
              fontWeight: 800,
              lineHeight: 1,
              color: '#1a1a1a',
              letterSpacing: '-0.03em',
              whiteSpace: 'nowrap',
            }}
          >
            STEP 1
          </span>

          <img
            src="/arrow.png"
            alt=""
            aria-hidden="true"
            style={{
              width: 'clamp(36px, 5vw, 64px)',
              height: 'auto',
              display: 'block',
              transform: 'translateY(-6px)',
              flexShrink: 0,
            }}
          />
        </div>
      )}
    </div>
  ))}
</div>
        </div>
      </div>
      <style>
      {`
  .trip-btn {
    transition: transform 200ms ease, box-shadow 200ms ease, filter 200ms ease;
  }

  .trip-btn:hover {
    transform: translateY(-1.5px) scale(1.01);
    box-shadow: 0 5px 9px rgba(0,0,0,0.12);
    filter: saturate(1.05);
  }

  .trip-btn:active {
    transform: translateY(0px) scale(0.99);
    box-shadow: 0 2px 4px rgba(0,0,0,0.10);
  }
`}
</style>
    </section>
  )
}