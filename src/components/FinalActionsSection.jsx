import React from 'react'

export default function FinalActionsSection() {
  const buttons = [
    {
      label: 'APPLY NOW!',
      color: '#e5ff03',
      href: 'https://brushfire.com/victory/Fee/536603',
    },
    {
      label: 'FUNDRAISING GUIDE',
      color: '#02f590',
      href: 'https://drive.google.com/file/d/1eKOghA-jl_RuYyXmTTrSrCruYAIzREcZ/view',
    },
    {
      label: 'DONATE',
      color: '#5dbaff',
      href: 'https://victorymissions.managedmissions.com/Donations/Donate/91196',
    },
    {
      label: 'SAMPLE TRIP ITINERARY',
      color: '#ff6e46',
      href: 'https://drive.google.com/file/d/1i6U27W63KvUbXOg7Nt-MJrRlHNG3mZb2/view',
    },
    {
      label: 'MANAGED MISSIONS PROFILE',
      color: '#d1b9f8',
      href: 'https://victorymissions.managedmissions.com/MissionApplication/Start/8812',
    },
  ]

  return (
    <section
      style={{
        backgroundColor: '#eaebe2',
        padding: '80px 48px 100px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div className="final-actions-grid">
          {buttons.map(({ label, color, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="final-btn"
              style={{
                backgroundColor: color,
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <style>
      {`
      .final-actions-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px 40px;
}

  .final-btn {
  border: 2px solid #000;
  border-radius: 999px;

  width: clamp(240px, 22vw, 320px);
  height: clamp(56px, 6vw, 70px);

  padding: 0 24px;

  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-family: "DM Mono", monospace;
  font-size: clamp(14px, 1.4vw, 20px);
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #000;
  text-decoration: none;

  white-space: normal;
line-height: 1.2;

  transition: transform 200ms ease, box-shadow 200ms ease, filter 200ms ease;
}

  .final-btn:hover {
    transform: translateY(-1.5px) scale(1.01);
    box-shadow: 0 5px 9px rgba(0,0,0,0.12);
    filter: saturate(1.05);
  }

  .final-btn:active {
    transform: translateY(0px) scale(0.99);
    box-shadow: 0 2px 4px rgba(0,0,0,0.10);
  }

  @media (max-width: 600px) {
  .final-btn {
    width: 100%;
    max-width: 340px;
  }
}
`}
      </style>
    </section>
  )
}