import React, { useState } from 'react'

const makeImages = (folder, count) =>
  Array.from({ length: count }, (_, i) => {
    const n = i + 1
    return {
      src: `/assets/${folder}/${n}.webp`,
    }
  })

const galleryCards = [
  {
    title: 'SCHOOLS',
    tagColor: '#ff6e46',
    preview: '/assets/girls.webp',
    gallery: [
      { src: '/assets/Schools/1.jpg' },
      { src: '/assets/Schools/2.jpg' },
      ...Array.from({ length: 32 }, (_, i) => {
        const n = i + 3
        return { src: `/assets/Schools/${n}.webp` }
      }),
    ],
    className: 'schools',
  },
  {
    title: 'MINISTRY',
    tagColor: '#5dbaff',
    preview: '/assets/group.webp',
    gallery: makeImages('Ministry', 23),
    className: 'ministry',
  },
  {
    title: 'CRUSADES',
    tagColor: '#e5ff03',
    preview: '/assets/crusadegirl.webp',
    gallery: Array.from({ length: 12 }, (_, i) => {
      const n = i + 1
      return {
        src: n === 5 ? `/assets/Crusades/${n}.jpg` : `/assets/Crusades/${n}.webp`,
      }
    }),
    className: 'crusades',
  },
]

const faqs = [
  {
    question: 'How do I apply for a trip?',
    answer: [
      '- Go to www.victory.com/trips',
      '- Click link to apply as student or adult',
      '- Create a Managed Missions account or log in to your preexisting account',
      '- Fill out all information',
      '- You will receive an email stating your application has been successfully completed',
      '- Click online link to pay your application fee',
      '- After your application has been reviewed you will be added to the trip',
    ],
  },
  {
    question: 'What is Managed Missions?',
    answer: [
      'Managed Missions is the platform used to apply, manage trip information, and track fundraising.',
    ],
  },
  {
    question: 'What does the price include?',
    answer: [
      'The trip cost may include travel, lodging, ministry expenses, and other trip-related costs.',
    ],
  },
]

export default function GalleryFaqSection() {
  const [openGallery, setOpenGallery] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <section style={{ backgroundColor: '#eaebe2' }}>
      {/* Gallery */}
      <div
        style={{
          maxWidth: '1420px',
          margin: '0 auto',
          padding: '32px 48px 0',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <div
  className="gallery-layout"
  style={{
    display: 'grid',
    gridTemplateColumns: '1.35fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: '6px',
    height: 'clamp(360px, 42vw, 560px)',
  }}
>
          {galleryCards.map((card) => (
            <button
              key={card.title}
              onClick={() => setOpenGallery(card)}
              className={`gallery-card ${card.className}`}
              style={{
                border: 'none',
                padding: 0,
                background: 'transparent',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <img
                src={card.preview}
                alt={card.title}
                className="gallery-preview-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition:
                    card.className === 'schools'
                      ? 'center center'
                      : card.className === 'ministry'
                      ? 'center center'
                      : 'center center',
                  display: 'block',
                }}
              />

<div
  style={{
    position: 'absolute',
    left: '18px',
    bottom: '18px',
  }}
>
  {/* OUTER (border) */}
  <div
    style={{
      backgroundColor: '#000',
      padding: '2px',
      clipPath:
        'polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)',
      display: 'inline-block',
    }}
  >
    {/* INNER (actual tag) */}
    <div
      style={{
        backgroundColor: card.tagColor,
        padding: '6px 22px',
        fontFamily: '"DM Mono", monospace',
        fontSize: 'clamp(14px, 1.6vw, 26px)',
        fontWeight: 700,
        color: '#000',
        lineHeight: 1,
        clipPath:
          'polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)',
      }}
    >
      {card.title}
    </div>
  </div>
</div>
            </button>
          ))}
        </div>
      </div>

      {/* FAQ black section */}
      <div
        style={{
          backgroundColor: '#171717',
          marginTop: '-66px',
          padding: '120px 48px 110px',
        }}
      >
        <div
          className="faq-layout"
          style={{
            maxWidth: '1120px',
            margin: '40px auto',
            display: 'grid',
            gridTemplateColumns: '0.9fr 1.1fr',
            gap: 'clamp(40px, 7vw, 100px)',
            alignItems: 'start',
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                fontFamily: '"DM Sans", sans-serif',
                fontSize: 'clamp(44px, 6vw, 78px)',
                fontWeight: 900,
                lineHeight: 0.95,
                letterSpacing: '-0.06em',
                color: '#fff',
              }}
            >
              questions?
            </h2>

            <a
              href="https://drive.google.com/file/d/1t4w148rRpIqVvopJynHglbxxzMa5J6L_/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              style={{
                marginTop: '30px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                border: '1px solid rgba(255,255,255,0.5)',
                padding: '14px 22px',
                color: '#fff',
                textDecoration: 'none',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: '18px',
                fontWeight: 500,
              }}
            >
              View all FAQs
              <span
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '999px',
                  backgroundColor: '#fff',
                  color: '#171717',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 900,
                }}
              >
                ↗
              </span>
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((item, index) => {
              const isOpen = openFaq === index

              return (
                <div
                  key={item.question}
                  style={{
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    overflow: 'hidden',
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    style={{
                      width: '100%',
                      border: 'none',
                      background: 'transparent',
                      padding: '22px 28px',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '20px',
                      textAlign: 'left',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: 'clamp(18px, 1.7vw, 25px)',
                      fontWeight: 800,
                      color: '#111',
                    }}
                  >
                    {item.question}
                    <span
                      style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '999px',
                        backgroundColor: '#171717',
                        color: '#fff',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      {isOpen ? '↑' : '↓'}
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '0 28px 30px',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '16px',
                        lineHeight: 1.5,
                        color: '#111',
                      }}
                    >
                      <ul style={{ margin: 0, paddingLeft: '18px' }}>
                        {item.answer.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Gallery modal */}
      {openGallery && (
        <div
          onClick={() => setOpenGallery(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(0,0,0,0.88)',
            overflowY: 'auto',
            padding: '32px 20px',
          }}
        >
          <button
  onClick={() => setOpenGallery(null)}
  style={{
    position: 'fixed',
    top: '20px',
    right: '24px',
    width: '52px',
    height: '52px',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 10000,
  }}
>
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    stroke="#000"
    strokeWidth="2.5"
    strokeLinecap="round"
  >
    <line x1="5" y1="5" x2="19" y2="19" />
    <line x1="19" y1="5" x2="5" y2="19" />
  </svg>
</button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
            }}
          >
            <h2
              style={{
                color: '#fff',
                fontFamily: '"DM Sans", sans-serif',
                fontSize: 'clamp(40px, 6vw, 82px)',
                fontWeight: 900,
                margin: '0 0 24px',
              }}
            >
              {openGallery.title}
            </h2>

            <div
              style={{
                columns: '3 260px',
                columnGap: '18px',
              }}
            >
              {openGallery.gallery.map((img, index) => (
                <img
                key={index}
                src={img.src}
                alt={`${openGallery.title} ${index + 1}`}
                loading="lazy"
                style={{
                  width: '100%',
                  display: 'block',
                  marginBottom: '18px',
                  borderRadius: '14px',
                  breakInside: 'avoid',
                }}
              />
              ))}
            </div>
          </div>
        </div>
      )}

<style>
  {`
    .gallery-card {
      isolation: isolate;
    }

    .gallery-preview-img {
      transition:
        transform 600ms cubic-bezier(0.22, 1, 0.36, 1),
        filter 600ms cubic-bezier(0.22, 1, 0.36, 1);
      will-change: transform, filter;
    }

    .gallery-card:hover .gallery-preview-img {
      transform: scale(1.06);
      filter: saturate(1.18) contrast(1.05) brightness(0.92);
    }

    .gallery-card:focus-visible {
      outline: 3px solid #02f590;
      outline-offset: 4px;
    }

    .gallery-card.schools {
      grid-row: span 2;
    }

    @media (max-width: 768px) {
      .gallery-layout,
      .faq-layout {
        grid-template-columns: 1fr !important;
      }

      .gallery-layout {
        height: auto !important;
      }

      .gallery-card.schools {
        grid-row: auto;
      }

      .gallery-card img {
        height: 250px !important;
      }
    }

    @media (max-width: 520px) {
      .gallery-card img {
        height: 210px !important;
      }
    }
  `}
</style>
    </section>
  )
}