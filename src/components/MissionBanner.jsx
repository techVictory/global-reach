import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'motion/react'

const slides = [
  { src: '/assets/missions_graphic.webp', alt: 'Missions Sign Up 2027' },
  { src: '/assets/uganda.webp', alt: 'Uganda Mission Trip' },
]

export default function MissionBanner() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goTo = (index) => {
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  return (
    <section
      className="w-full"
      style={{ backgroundColor: '#eaebe2', padding: '32px 48px 0' }}
    >
      {/* ── Centered width-limited wrapper ── */}
      <div
        style={{
          width: '100%',
          maxWidth: '1320px',
          margin: '0 auto',
        }}
      >
        {/* ── Carousel track ── */}
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            position: 'relative',
            paddingBottom: '56.25%',
            height: 0,
          }}
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={slides[current].src}
              src={slides[current].src}
              alt={slides[current].alt}
              custom={direction}
              variants={{
                enter: (d) => ({ x: d > 0 ? '100%' : '-100%' }),
                center: { x: '0%' },
                exit: (d) => ({ x: d > 0 ? '-100%' : '100%' }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* ── Dot indicators ── */}
      <div
        className="flex justify-center"
        style={{ gap: '10px', paddingTop: '20px' }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? '28px' : '10px',
              height: '10px',
              borderRadius: '999px',
              backgroundColor: i === current ? '#000000' : 'rgba(0,0,0,0.25)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </section>
  )
}