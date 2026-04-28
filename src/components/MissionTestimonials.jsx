import React, { useEffect, useState } from 'react'
import ActionButtons from './ActionButtons'

const testimonials = [
  {
    location: 'el salvador',
    name: 'Hayden',
    text: 'After praying for a girl who had been in a wheelchair for 8 years, I felt led to speak life over her legs. She stood up, and for the first time in years, she walked across the stage completely healed.',
  },
  {
    location: 'el salvador',
    name: 'Ana Appel',
    text: 'There was a woman who had suffered pain in her fingertips and feet for years. We prayed, and in that moment all the pain completely left. She broke down in tears because she was fully healed.',
  },
  {
    location: 'dominican republic',
    name: 'Shawn',
    text: 'I met a man recovering from foot surgery who couldn’t put weight on his foot or move his toes. After multiple prayers, strength and movement began to return to his foot.',
  },
  {
    location: 'dominican republic',
    name: 'Rousny',
    text: 'One woman shared that she had been tormented every night. After we prayed, she suddenly said she felt completely light, and even her face changed as peace came over her.',
  },
  {
    location: 'el salvador',
    name: 'Mai & Joy',
    text: 'A woman came forward carrying both spiritual oppression and physical pain. As we prayed for deliverance, she said she felt something leave her, and immediately experienced total peace and freedom.',
  },
  {
    location: 'el salvador',
    name: 'Otto',
    text: 'We prayed for a boy who had ankle pain and couldn’t walk properly. Right after prayer, he tested it out and realized all the pain was gone—then started walking normally again.',
  },
  {
    location: 'el salvador',
    name: 'Caden & Cooper',
    text: 'While sharing the gospel, I spoke with a man who felt completely far from God because of his sin. As we talked, he broke down and made the decision to give his life to Jesus.',
  },
  {
    location: 'el salvador',
    name: 'Gabi',
    text: 'A boy came with knee pain that stopped him from running or moving freely. After prayer, he got up and immediately started running and dancing with no pain at all.',
  },
  {
    location: 'dominican republic',
    name: 'Zody & Rylan',
    text: 'We prayed for a girl who had been oppressed spiritually, and in that moment she experienced complete freedom and peace that she had never felt before.',
  },
  {
    location: 'guatemala',
    name: 'Max',
    text: 'During prayer, a woman with vision problems experienced something shift instantly. After we prayed, she testified that her eyesight had been restored.',
  },
]

export default function MissionTestimonials() {
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      style={{
        backgroundColor: '#eaebe2',
        padding: '70px 48px 90px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <h2
          style={{
            margin: '0 0 38px',
            textAlign: 'right',
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            color: '#1a1a1a',
          }}
        >
          life changing experiences
        </h2>

        <div className="testimonial-shell">
          <button className="testimonial-arrow left" onClick={prev} aria-label="Previous testimony">
            ←
          </button>

          <div
            className="testimonial-track"
            style={{
              transform: `translateX(-${index * 33.333}%)`,
            }}
          >
            {[...testimonials, ...testimonials].map((item, i) => (
              <article className="testimonial-card" key={`${item.name}-${i}`}>
                <h3>{item.location}</h3>
                <p>{item.text}</p>
                <div className="testimonial-name-tag">
                  <span>{item.name}</span>
                </div>
              </article>
            ))}
          </div>

          <button className="testimonial-arrow right" onClick={next} aria-label="Next testimony">
            →
          </button>
        </div>

        <div style={{ marginTop: '70px' }}>
          <ActionButtons />
        </div>
      </div>

      <style>
  {`
    .testimonial-shell {
      position: relative;
      overflow: hidden;
      padding: 20px 0;
    }

    .testimonial-track {
      display: flex;
      gap: 0;
      transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
      will-change: transform;
    }

    .testimonial-card {
      flex: 0 0 38%;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      background: #fff;
      padding: clamp(46px, 5vw, 78px);
      margin-right: -4%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #1a1a1a;
    }

    .testimonial-card h3 {
      margin: 0 0 14px;
      font-family: "DM Sans", sans-serif;
      font-size: clamp(24px, 2.3vw, 38px);
      font-weight: 900;
      letter-spacing: -0.04em;
      text-transform: lowercase;
    }

    .testimonial-card p {
      margin: 0;
      font-family: "DM Sans", sans-serif;
      font-size: clamp(13px, 1.05vw, 16px);
      line-height: 1.45;
      color: #555;
    }

    .testimonial-name-tag {
      margin-top: 26px;
      align-self: flex-start;
      display: inline-block;
      background: #000;
      padding: 2px;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%);
    }

    .testimonial-name-tag span {
      display: block;
      background: #5dbaff;
      padding: 5px 18px;
      font-family: "DM Mono", monospace;
      font-size: 13px;
      color: #000;
      clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 50%, calc(100% - 14px) 100%, 0 100%);
    }

    .testimonial-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 5;
      width: 46px;
      height: 46px;
      border-radius: 999px;
      border: none;
      background: rgba(0,0,0,0.38);
      color: #fff;
      font-size: 26px;
      cursor: pointer;
    }

    .testimonial-arrow.left {
      left: 16px;
    }

    .testimonial-arrow.right {
      right: 16px;
    }

    @media (max-width: 900px) {
      .testimonial-card {
        flex: 0 0 58%;
        margin-right: -8%;
        padding: clamp(40px, 7vw, 62px);
      }

      .testimonial-track {
        transform: translateX(-${index * 50}%) !important;
      }
    }

    @media (max-width: 600px) {
      .testimonial-shell {
        padding: 10px 0 20px;
      }

      .testimonial-card {
        flex: 0 0 88vw;
        width: 88vw;
        height: 88vw;
        min-width: 88vw;
        max-width: 88vw;
        border-radius: 50%;
        aspect-ratio: 1 / 1;
        margin-right: -18vw;
        padding: 44px;
      }

      .testimonial-card h3 {
        font-size: clamp(24px, 7vw, 34px);
      }

      .testimonial-card p {
        font-size: clamp(13px, 3.7vw, 16px);
      }

      .testimonial-track {
        transform: translateX(-${index * 70}vw) !important;
      }

      .testimonial-arrow.left {
        left: 10px;
      }

      .testimonial-arrow.right {
        right: 10px;
      }
    }
  `}
</style>
    </section>
  )
}