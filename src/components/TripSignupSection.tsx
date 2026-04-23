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
            className="flex flex-wrap items-center justify-center"
            style={{
              gap: 'clamp(20px, 3vw, 48px)',
            }}
          >
            {actions.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="no-underline flex items-center justify-center text-center transition-opacity duration-200 hover:opacity-80"
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
            ))}
          </div>

          {/* Step row */}
          <div
            className="flex items-center"
            style={{
              gap: '8px',
              marginTop: '-2px',
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
              }}
            >
              STEP 1
            </span>

            <svg
  width="78"
  height="44"
  viewBox="0 0 78 44"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  style={{
    display: 'block',
    flexShrink: 0,
    overflow: 'visible',
  }}
  aria-hidden="true"
>
  <path
    d="M4 34C18 40 36 39 50 29C58 23 63 16 67 8"
    stroke="#1a1a1a"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
  <path
    d="M60 9L67 8L66 15"
    stroke="#1a1a1a"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  />
</svg>
          </div>
        </div>
      </div>
    </section>
  )
}