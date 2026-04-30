import React from 'react'

export default function SpecialProjectsHero() {
  return (
    <section
      style={{
        backgroundColor: '#000',
        color: '#fff',
        padding: '70px 48px 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="special-projects-layout"
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          position: 'relative',
        }}
      >
        {/* Title */}
        <h1
          style={{
            margin: 0,
            textAlign: 'center',
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(56px, 8vw, 108px)',
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: '-0.06em',
            position: 'relative',
            zIndex: 3,
          }}
        >
          Special <br /> Projects
        </h1>

        {/* Top grid */}
        <div className="special-projects-top">
          {/* Schools */}
          <div className="project-card project-schools">
            <img src="/assets/girl_hug.webp" alt="Girl hugging volunteer" />
            <ProjectTag label="SCHOOLS" color="#5dbaff" />
            <p>VICTORY GLOBAL REACH</p>
          </div>

          {/* Orphanages */}
          <div className="project-card project-orphanages">
            <img src="/assets/girlwave.webp" alt="Girl waving" />
            <ProjectTag label="ORPHANAGES" color="#d1b9f8" />
            <p>VICTORY GLOBAL REACH</p>
          </div>

          {/* Moving circle */}
<div className="project-card project-smile">
  <div className="spinning-badge">
    <div className="green-dot" />
    <svg viewBox="0 0 200 200">
      <defs>
        <path
          id="circlePath"
          d="M100,100 m-76,0 a76,76 0 1,1 152,0 a76,76 0 1,1 -152,0"
        />
      </defs>
      <text>
        <textPath href="#circlePath">
          COMMITTED TO SEE THE GOSPEL SHARED THROUGH THE NATIONS
        </textPath>
      </text>
    </svg>
  </div>

  <img src="/assets/kidsmile.webp" alt="Child smiling" />
</div>

          {/* Text */}
          <div className="project-text">
            <p>
              Victory gives towards special projects each year to impact international
              communities and further the Gospel’s reach in the nations. Our special
              projects include children’s homes, elementary schools, Bible schools,
              orphanages, church plants, and water wells.
            </p>
          </div>
        </div>

        {/* Bottom image */}
        <div className="project-bottom-image">
          <img src="/assets/girlclass.webp" alt="Children in classroom" />
        </div>
      </div>

      {/* White bottom band */}
      <div className="special-bottom-band">
        schools • orphanages • water wells • bible schools
      </div>

      <style>
        {`
          .special-projects-top {
            margin-top: -20px;
            display: grid;
            grid-template-columns: 1.1fr 0.85fr;
            gap: 42px 70px;
            align-items: start;
            position: relative;
          }

          .project-card {
            position: relative;
          }

          .project-card img {
  width: 100%;
  height: clamp(190px, 20vw, 300px);
  display: block;
  border-radius: 16px;
  object-fit: cover;
  object-position: center center;
}

.project-schools img {
  object-position: center 33%;
}

.project-orphanages img {
  object-position: center 42%;
}

.project-smile img {
  object-position: center 60%;
}

          .project-card p {
            margin: 6px 0 0;
            font-family: "DM Sans", sans-serif;
            font-size: 16px;
            color: rgba(255,255,255,0.35);
            font-weight: 700;
          }

          .project-schools {
            margin-top: -10px;
          }

          .project-orphanages {
            margin-top: 90px;
          }

          .project-smile {
            max-width: 520px;
            margin-left: 80px;
          }

          .project-text {
            align-self: center;
            max-width: 390px;
          }

          .project-text p {
            font-family: "DM Sans", sans-serif;
            font-size: clamp(16px, 1.3vw, 20px);
            line-height: 1.55;
            font-weight: 700;
            margin: 0;
            color: #fff;
          }

          .project-bottom-image {
            margin-top: 80px;
            position: relative;
            z-index: 2;
          }

          .project-bottom-image img {
            width: 100%;
            max-height: 470px;
            object-fit: cover;
            object-position: center 50%;
            border-radius: 18px;
            display: block;
          }

          .special-bottom-band {
            background: #eaebe2;
            color: #1a1a1a;
            margin-top: -120px;
            padding: 165px 48px 55px;
            text-align: center;
            font-family: "DM Sans", sans-serif;
            font-size: clamp(28px, 3.2vw, 48px);
            font-weight: 900;
            letter-spacing: -0.04em;
          }

          .project-smile {
  position: relative;
  margin-left: 80px;
}

.spinning-badge {
  position: absolute;
  left: -60px;
  top: -60px;
  width: 150px;
  height: 150px;
  z-index: 4;
}
          .spinning-badge svg {
            width: 100%;
            height: 100%;
            animation: spinText 12s linear infinite;
          }

          .spinning-badge text {
            fill: #fff;
            font-family: "DM Mono", monospace;
            font-size: 12px;
            letter-spacing: 1.5px;
          }

          .green-dot {
            position: absolute;
            inset: 32px;
            background: #02f590;
            border: 1px solid #000;
            border-radius: 999px;
            z-index: 2;
          }

          @keyframes spinText {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          @media (max-width: 900px) {
            .special-projects-top {
              grid-template-columns: 1fr;
              gap: 36px;
            }

            .project-orphanages,
            .project-smile {
              margin: 0;
            }

            .project-text {
              max-width: none;
            }

            .spinning-badge {
              left: 20px;
              top: 360px;
            }
          }

          @media (max-width: 600px) {
            .special-projects-layout {
              padding: 0;
            }

            .special-bottom-band {
              margin-top: -70px;
              padding-top: 110px;
            }
          }

          @media (max-width: 900px) {
  .project-smile {
    margin-left: 0;
  }

  .spinning-badge {
    left: -50px;
    top: -54px;
    width: 130px;
    height: 130px;
  }
}

@media (max-width: 600px) {
  .spinning-badge {
    left: -38px;
    top: -45px;
    width: 110px;
    height: 110px;
  }

  .green-dot {
    inset: 26px;
  }
}
        `}
      </style>
    </section>
  )
}

function ProjectTag({ label, color }) {
  return (
    <div
      style={{
        marginTop: '10px',
        display: 'inline-block',
        backgroundColor: '#000',
        padding: '2px',
        clipPath:
          'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)',
      }}
    >
      <div
        style={{
          backgroundColor: color,
          padding: '7px 32px',
          fontFamily: '"DM Mono", monospace',
          fontSize: 'clamp(18px, 2vw, 30px)',
          fontWeight: 700,
          color: '#000',
          lineHeight: 1,
          clipPath:
            'polygon(0 0, calc(100% - 20px) 0, 100% 50%, calc(100% - 20px) 100%, 0 100%)',
        }}
      >
        {label}
      </div>
    </div>
  )
}