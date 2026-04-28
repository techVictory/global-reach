// ShortTermSignupBlock.jsx
import React from 'react'

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

export default function ShortTermSignupBlock() {
  return (
    <section
      style={{
        backgroundColor: '#000',
        marginTop: '-80px',
        padding: '150px 48px 90px',
      }}
    >
      <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
        <div
          className="flex flex-wrap items-start justify-center"
          style={{ gap: 'clamp(20px, 3vw, 48px)' }}
        >
          {actions.map(({ label, href }, index) => (
            <div
              key={href}
              className="flex flex-col items-start"
              style={{ gap: 'clamp(10px, 1.5vw, 18px)' }}
            >
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className="missions-trip-btn no-underline flex items-center justify-center text-center"
                style={{
                  backgroundColor: '#02f590',
                  border: '2px solid black',
                  borderRadius: '999px',
                  padding: 'clamp(6px, 1.2vw, 10px) 34px',
                  minHeight: 'clamp(46px, 5vw, 58px)',
                  minWidth: 'clamp(220px, 24vw, 310px)',
                  fontFamily: '"DM Mono", monospace',
                  fontSize: 'clamp(12px, 1.2vw, 16px)',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: '#000',
                  whiteSpace: 'pre-line',
                  lineHeight: 1.15,
                }}
              >
                {label}
              </a>

              {index === 0 && (
                <div
                  className="flex items-center"
                  style={{ gap: '8px', paddingLeft: '4px' }}
                >
                  <span
                    style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: 'clamp(18px, 3vw, 28px)',
                      fontWeight: 800,
                      color: '#fff',
                      lineHeight: 1,
                      letterSpacing: '-0.03em',
                    }}
                  >
                    STEP 1
                  </span>

                  <img
                    src="/arrow.png"
                    alt=""
                    aria-hidden="true"
                    style={{
                      width: 'clamp(34px, 5vw, 54px)',
                      height: 'auto',
                      display: 'block',
                      transform: 'translateY(-6px)',
                      filter: 'invert(1)',
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        <h1
          style={{
            margin: '42px auto 0',
            maxWidth: '760px',
            color: '#fff',
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(24px, 3vw, 42px)',
            fontWeight: 900,
            lineHeight: 1.08,
            textAlign: 'center',
            letterSpacing: '-0.04em',
          }}
        >
          We’re so excited to invite you to be part <br />
          of our 2027 missions trip opportunities!
        </h1>
      </div>

      <style>
        {`
          .missions-trip-btn {
            transition: transform 200ms ease, box-shadow 200ms ease, filter 200ms ease;
          }

          .missions-trip-btn:hover {
            transform: translateY(-1.5px) scale(1.01);
            box-shadow: 0 5px 9px rgba(255,255,255,0.16);
            filter: saturate(1.05);
          }

          .missions-trip-btn:active {
            transform: translateY(0px) scale(0.99);
          }
        `}
      </style>
    </section>
  )
}