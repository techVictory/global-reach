// ShortTermHeroCarousel.jsx
import React, { useEffect, useState } from 'react'

const carouselImages = [
  '/assets/belize.webp',
  '/assets/guatemala.webp',
  '/assets/mexico.webp',
  '/assets/dominican.webp',
  '/assets/costa_r.webp',
]

export default function ShortTermHeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % carouselImages.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section style={{ backgroundColor: '#eaebe2' }}>
      <div
        style={{
          maxWidth: '1450px',
          margin: '0 auto',
          padding: '40px 48px 0',
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
        }}
      >
        <div
          className="missions-carousel-track"
          style={{
            transform: `translateX(-${activeIndex * 33.333}%)`,
          }}
        >
          {[...carouselImages, ...carouselImages].map((src, index) => (
            <div className="missions-carousel-slide" key={`${src}-${index}`}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .missions-carousel-track {
            display: flex;
            gap: 36px;
            transition: transform 900ms cubic-bezier(0.22, 1, 0.36, 1);
            will-change: transform;
          }

          .missions-carousel-slide {
            flex: 0 0 calc((100% - 72px) / 3);
            height: clamp(220px, 28vw, 410px);
            overflow: hidden;
          }

          .missions-carousel-slide img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
          }

          @media (max-width: 768px) {
            .missions-carousel-track {
              gap: 18px;
            }

            .missions-carousel-slide {
              flex: 0 0 78%;
              height: 240px;
            }
          }

          @media (max-width: 520px) {
            .missions-carousel-slide {
              flex: 0 0 88%;
              height: 210px;
            }
          }
        `}
      </style>
    </section>
  )
}