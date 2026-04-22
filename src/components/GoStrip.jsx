/*
  GoStrip.jsx
  ───────────
  Yellow ticker strip matching the prototype:
  • Black border top + bottom
  • Left anchor: "SIGN UP! →"  |  "GO!" (Roc Grotesk)  |  "victory" (DM Mono, vertical, RIGHT of GO!)
  • Scrolling ticker: two content blocks separated by a gap
      Block 1 — stacked lines (DM Mono):
        CREATE A MANAGED MISSIONS PROFILE
        GET YOUR PASSPORT
        START FUNDRAISING
      Block 2 — two rows (mixed italic/bold, larger):
        SPRING BREAK MISSIONS  –  SUMMER MISSIONS
        FALL BREAK MISSIONS    –  WINTER MISSIONS
  • Responsive: smaller font + height on mobile
*/

export default function GoStrip() {
  const block1 = (
    <span className="flex flex-col justify-center" style={{ gap: '2px' }}>
      {[
        'CREATE A MANAGED MISSIONS PROFILE',
        'GET YOUR PASSPORT',
        'START FUNDRAISING',
      ].map((line) => (
        <span
          key={line}
          className="block text-black uppercase leading-tight"
          style={{
            fontFamily: '"DM Mono", monospace',
            fontSize: 'clamp(10px, 1.1vw, 14px)',
            letterSpacing: '0.06em',
            whiteSpace: 'nowrap',
          }}
        >
          {line}
        </span>
      ))}
    </span>
  )

  const block2 = (
    <span className="flex flex-col justify-center" style={{ gap: '2px' }}>
      {[
        ['SPRING BREAK ', 'MISSIONS', '  –  ', 'SUMMER ', 'MISSIONS'],
        ['FALL BREAK ', 'MISSIONS', '    –  ', 'WINTER ', 'MISSIONS'],
      ].map((parts, i) => (
        <span
          key={i}
          className="block text-black uppercase leading-tight"
          style={{
            fontSize: 'clamp(12px, 1.4vw, 18px)',
            letterSpacing: '0.04em',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{ fontFamily: '"source-code-pro", monospace', fontStyle: 'italic', fontWeight: 200, letterSpacing: '-0.02em' }}>{parts[0]}</span>
<span style={{ fontFamily: '"DM Mono", monospace', fontStyle: 'normal', fontWeight: 700 }}>{parts[1]}</span>
<span style={{ fontFamily: '"source-code-pro", monospace', fontStyle: 'italic', fontWeight: 200, letterSpacing: '-0.02em' }}>{parts[2]}</span>
<span style={{ fontFamily: '"source-code-pro", monospace', fontStyle: 'italic', fontWeight: 200, letterSpacing: '-0.02em' }}>{parts[3]}</span>
<span style={{ fontFamily: '"DM Mono", monospace', fontStyle: 'normal', fontWeight: 700 }}>{parts[4]}</span>
        </span>
      ))}
    </span>
  )

  const tickerContent = (
    <>
      {/* Block 1 */}
      <span className="inline-flex items-center" style={{ paddingRight: 'clamp(48px, 6vw, 96px)' }}>
        {block1}
      </span>

      {/* Divider */}
      <span
        className="inline-block self-stretch"
        style={{
          width: '1px',
          backgroundColor: 'black',
          marginRight: 'clamp(48px, 6vw, 96px)',
          opacity: 0.3,
        }}
      />

      {/* Block 2 */}
      <span className="inline-flex items-center" style={{ paddingRight: 'clamp(64px, 8vw, 128px)' }}>
        {block2}
      </span>
    </>
  )

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        backgroundColor: '#e5ff03',
        borderTop: '2px solid black',
        borderBottom: '2px solid black',
      }}
    >
      {/* ── Fixed left anchor panel ── */}
<div
  className="absolute left-0 top-0 bottom-0 z-10 flex items-center"
  style={{
    backgroundColor: '#e5ff03',
    paddingLeft: 'clamp(24px, 3vw, 48px)',
    paddingRight: 'clamp(24px, 3vw, 48px)',
    gap: 'clamp(16px, 2vw, 28px)',
  }}
>
  {/* Logo */}
  <img
    src="/logo.png"
    alt="Global Reach logo"
    style={{ height: 'clamp(32px, 4vw, 52px)', width: 'auto', display: 'block' }}
  />

  {/* SIGN UP! → */}
  <a
    href="https://brushfire.com/victory/Fee/536603"
    className="no-underline text-black hover:opacity-60 transition-opacity duration-200 flex flex-col"
    style={{
      fontFamily: '"DM Sans", sans-serif',
      fontSize: 'clamp(12px, 1vw, 16px)',
      fontWeight: 700,
      letterSpacing: '0.08em',
      whiteSpace: 'nowrap',
    }}
  >
    <span>SIGN UP! →</span>
    <span style={{ borderBottom: '2px solid black', marginTop: '3px' }} />
  </a>

  {/* GO! + "victory" to the right of GO! */}
  <div className="flex items-center" style={{ gap: '5px' }}>
  <span
  className="text-black leading-none"
  style={{
    fontFamily: '"roc-grotesk-wide", sans-serif',
    fontSize: 'clamp(40px, 5.5vw, 76px)',
    fontWeight: 800,
    lineHeight: 0.9,
    letterSpacing: '-0.02em',
  }}
>
  GO!
</span>
    <span
      className="text-black uppercase"
      style={{
        fontFamily: '"DM Mono", monospace',
        fontSize: 'clamp(7px, 0.7vw, 9px)',
        letterSpacing: '0.15em',
        writingMode: 'vertical-rl',
        transform: 'rotate(180deg)',
        lineHeight: 1,
      }}
    >
      victory
    </span>
  </div>
</div>

      {/* ── Scrolling ticker track ── */}
      <div
        className="flex items-center"
        style={{ height: 'clamp(72px, 8vw, 100px)' }}
      >
        <div
          className="flex items-center whitespace-nowrap"
          style={{
            animation: 'go-ticker 32s linear infinite',
            /* paddingLeft pushes ticker start past the fixed panel */
            paddingLeft: 'clamp(220px, 22vw, 340px)',
          }}
        >
          {/* Render 3× for a seamless loop on all screen sizes */}
          {[0, 1, 2].map((i) => (
            <span key={i} className="inline-flex items-center">
              {tickerContent}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes go-ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  )
}