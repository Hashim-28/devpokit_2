import { useState, useEffect } from 'react'
<<<<<<< HEAD
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Link, useLocation, useNavigate } from 'react-router-dom'
=======
import { motion, AnimatePresence } from 'framer-motion'
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
import siteConfig from '../data/siteConfig'

const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
<<<<<<< HEAD
  { label: 'About', href: '#about' },
=======
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
  { label: 'Work', href: '#portfolio' },
  { label: 'Team', href: '#team' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

<<<<<<< HEAD
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  const handleNav = (e, href) => {
    const id = href.replace('#', '')
    
    if (location.pathname !== '/') {
      // If not on homepage, navigate to home then scroll
      setIsOpen(false)
      // Navigation happens naturally via Link, but we can add smooth scroll after navigation if needed.
      // However, the browser won't auto-smooth-scroll to the ID on a new page load by default.
      // We can handle this in a useEffect.
    } else {
      e.preventDefault()
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  // Handle scrolling to hash after navigation from another page
  useEffect(() => {
    if (location.hash && location.pathname === '/') {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 500)
    }
  }, [location])

  useEffect(() => {
    if (location.pathname !== '/') return

=======
export default function Navbar({ scrollY }) {
  const [isOpen, setIsOpen] = useState(false)
  const [active, setActive] = useState('hero')

  const scrolled = scrollY > 50

  const handleNav = (e, href) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  useEffect(() => {
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
    const sections = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' }
    )
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
<<<<<<< HEAD
  }, [location])
=======
  }, [])
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'backdrop-blur-xl bg-space/80 border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
<<<<<<< HEAD
            <Link 
              to="/#hero" 
              onClick={(e) => handleNav(e, '#hero')} 
              className="flex items-center gap-2.5 group"
            >
=======
            <a href="#hero" onClick={(e) => handleNav(e, '#hero')} className="flex items-center gap-2.5 group">
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
              <div className="relative h-8 flex items-center">
                {siteConfig.logoUrl ? (
                  <img
                    src={siteConfig.logoUrl.startsWith('http') || siteConfig.logoUrl.startsWith('/') ? siteConfig.logoUrl : '/' + siteConfig.logoUrl}
                    alt={siteConfig.siteName}
<<<<<<< HEAD
                    className="h-8 w-auto object-contain transition-transform group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
=======
                    className="h-8 w-auto object-contain"
                  />
                ) : (
                  <div className="relative w-8 h-8">
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 opacity-40 blur-md group-hover:blur-lg transition-all" />
                    <div className="relative flex items-center justify-center h-full">
                      <span className="text-space font-black text-sm leading-none select-none">D</span>
                    </div>
                  </div>
                )}
              </div>
<<<<<<< HEAD
              <span className="font-bold text-lg sm:text-xl tracking-tight block">
                Dev<span className="gradient-text">Pokit</span>
              </span>
            </Link>
=======
              <span className="font-bold text-xl tracking-tight hidden sm:block">
                Dev<span className="gradient-text">Pokit</span>
              </span>
            </a>
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, href }) => (
<<<<<<< HEAD
                <Link
                  key={href}
                  to={`/${href}`}
                  onClick={(e) => handleNav(e, href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group ${active === href.replace('#', '') && location.pathname === '/'
=======
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-lg group ${active === href.replace('#', '')
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
                    ? 'text-cyan-400'
                    : 'text-white/60 hover:text-white'
                    }`}
                >
<<<<<<< HEAD
                  {active === href.replace('#', '') && location.pathname === '/' && (
=======
                  {active === href.replace('#', '') && (
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: 'rgba(0,245,255,0.08)', border: '1px solid rgba(0,245,255,0.15)' }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
<<<<<<< HEAD
                </Link>
=======
                </a>
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
<<<<<<< HEAD
              <Link
                to="/#contact"
=======
              <a
                href="#contact"
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
                onClick={(e) => handleNav(e, '#contact')}
                className="btn-primary text-xs py-2.5 px-5"
              >
                <span className="relative z-10">Get a Quote →</span>
<<<<<<< HEAD
              </Link>
=======
              </a>
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(v => !v)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg glass-card"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white block transition-all"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-5 h-0.5 bg-white block"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="w-5 h-0.5 bg-white block transition-all"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden backdrop-blur-xl bg-space/95 border-b border-white/[0.06] px-4 py-6"
          >
            <nav className="flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
<<<<<<< HEAD
                <Link
                  key={href}
                  to={`/${href}`}
                  onClick={(e) => handleNav(e, href)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${active === href.replace('#', '') && location.pathname === '/'
=======
                <a
                  key={href}
                  href={href}
                  onClick={(e) => handleNav(e, href)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${active === href.replace('#', '')
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {label}
<<<<<<< HEAD
                </Link>
              ))}
              <Link
                to="/#contact"
=======
                </a>
              ))}
              <a
                href="#contact"
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
                onClick={(e) => handleNav(e, '#contact')}
                className="btn-primary text-center mt-2"
              >
                <span className="relative z-10">Get a Quote →</span>
<<<<<<< HEAD
              </Link>
=======
              </a>
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
