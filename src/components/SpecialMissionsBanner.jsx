export default function SpecialMissionsBanner() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: 'clamp(380px, 55vw, 640px)',
        overflow: 'hidden',
      }}
    >
      {/* Image */}
      <img
        src="/assets/crusadepeople.webp"
        alt="People worshipping"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 50%',
          display: 'block',
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to right, rgba(0,0,0,0.65), rgba(0,0,0,0.25))',
        }}
      />

      {/* Text */}
      <div
        style={{
          position: 'absolute',
          right: 'clamp(20px, 6vw, 80px)',
          top: '50%',
          transform: 'translateY(-50%)',
          color: '#fff',
          maxWidth: '420px',
          textAlign: 'left',
        }}
      >
        <h3
          style={{
            margin: 0,
            fontFamily: '"DM Sans", sans-serif',
            fontSize: 'clamp(22px, 2.5vw, 36px)',
            fontWeight: 800,
          }}
        >
          Want to know more info?
        </h3>

        <p
  style={{
    marginTop: '8px',
    fontFamily: '"DM Sans", sans-serif',
    fontSize: 'clamp(14px, 1.2vw, 18px)',
    opacity: 0.9,
  }}
>
  message us at{' '}
  <a
    href="mailto:trips@victory.com"
    style={{
      color: '#fff',
      textDecoration: 'none',
      fontWeight: 600,
    }}
  >
    trips@victory.com
  </a>
</p>
      </div>
    </section>
  )
}