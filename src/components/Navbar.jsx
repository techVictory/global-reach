import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'motion/react'

const navLinks = [
  { label: 'HOME', to: '/', external: false },
  { label: 'SHORT-TERM MISSIONS', to: '/missions', external: false },
  { label: 'SPECIAL PROJECTS', to: '/special-projects', external: false },
  { label: 'MISSIONARIES WE SUPPORT', to: '/missionaries', external: false },
  { label: 'SIGN UP', to: 'https://brushfire.com/victory/Fee/536603', external: true },
  { label: 'DONATE', to: 'https://victorymissions.managedmissions.com/Donations/Donate/91196', external: true },
  { label: 'CONTACT US', to: '/contact', external: false },
]

const linkClass = (isActive) =>
  `no-underline text-black text-[13px] font-bold tracking-[0.05em] whitespace-nowrap transition-opacity duration-200 hover:opacity-60 ${
    isActive ? 'underline underline-offset-4' : ''
  }`

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setMenuOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-100 bg-white border-b border-[#e0e0e0]">
        <div
          className="flex items-center justify-between h-16"
          style={{ padding: '0 48px' }}
        >

          {/* Left: logo + Back to Victory */}
          <div className="flex items-center gap-4">
            <a
              href="https://victory.com"
              className="flex items-center gap-2.5 no-underline text-black text-[13px] font-bold tracking-[0.05em] whitespace-nowrap transition-opacity duration-200 hover:opacity-60"
            >
              <span className="text-base leading-none">←</span>
              <span>GO BACK TO VICTORY.COM</span>
            </a>
          </div>

          {/* Desktop links — xl and above */}
          <div className="hidden xl:flex items-center gap-8 2xl:gap-12">
            {navLinks.map(({ label, to, external }) =>
              external ? (
                <a
                  key={to}
                  href={to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass(false)}
                >
                  {label}
                </a>
              ) : (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => linkClass(isActive)}
                >
                  {label}
                </NavLink>
              )
            )}
          </div>

          {/* Hamburger — below xl */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
            className="xl:hidden flex flex-col justify-center items-center gap-[5px] bg-transparent border-none cursor-pointer p-2 w-10 h-10"
          >
            <span
              className="block w-[22px] h-[2px] bg-black rounded-sm transition-transform duration-250 ease-in-out origin-center"
              style={{ transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none' }}
            />
            <span
              className="block w-[22px] h-[2px] bg-black rounded-sm transition-all duration-250 ease-in-out origin-center"
              style={{ transform: menuOpen ? 'scaleX(0)' : 'none', opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-[22px] h-[2px] bg-black rounded-sm transition-transform duration-250 ease-in-out origin-center"
              style={{ transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none' }}
            />
          </button>

        </div>

        {/* Mobile / tablet dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="flex flex-col bg-white border-t border-[#e0e0e0] overflow-hidden"
            >
              {navLinks.map(({ label, to, external }) =>
                external ? (
                  <a
                    key={to}
                    href={to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass(false)}
                    style={{ padding: '24px 48px', borderBottom: '1px solid #f0f0f0' }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </a>
                ) : (
                  <NavLink
                    key={to}
                    to={to}
                    end={to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) => linkClass(isActive)}
                    style={{ padding: '24px 48px', borderBottom: '1px solid #f0f0f0' }}
                  >
                    {label}
                  </NavLink>
                )
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}