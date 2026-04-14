import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import siteConfig from '../data/siteConfig'

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '/#services' },
    { label: 'Mobile Apps', href: '/#services' },
    { label: 'UI/UX Design', href: '/#services' },
    { label: 'AI Agent Development', href: '/#services' },
    { label: 'AI Integration', href: '/#services' },
  ],
  Company: [
    { label: 'About Us', href: '/#about' },
    { label: 'How We Work', href: '/#process' },
    { label: 'Portfolio', href: '/#portfolio' },
    { label: 'Our Team', href: '/#team' },
    { label: 'Contact', href: '/#contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Cookie Policy', href: '/cookies' },
  ],
}

const socials = siteConfig.socials || []

const SocialIcon = ({ platform }) => {
  switch (platform) {
    case 'github':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    case 'twitter':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    default:
      return <span className="text-[10px] font-bold uppercase">{platform?.slice(0, 2)}</span>
  }
}

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-blue-400/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 mb-4 group inline-flex"
            >
              <div className="relative h-10 flex items-center">
                {siteConfig.logoUrl ? (
                  <img
                    src={siteConfig.logoUrl.startsWith('http') || siteConfig.logoUrl.startsWith('/') ? siteConfig.logoUrl : '/' + siteConfig.logoUrl}
                    alt={siteConfig.siteName}
                    className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                    style={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.3)) brightness(1.15)' }}
                  />
                ) : (
                  <div className="relative w-12 h-12 transition-transform duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 opacity-90" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 opacity-40 blur-md" />
                    <div className="relative flex items-center justify-center h-full">
                      <span className="text-space font-black text-xl leading-none">Q</span>
                    </div>
                  </div>
                )}
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs mb-6">
              We are a premium software house specializing in building world class digital products
              that scale, perform, and inspire.
            </p>
            <div className="flex gap-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-xs font-bold text-white/50 hover:text-blue-400 hover:border-blue-400/30 transition-all duration-200"
                  aria-label={s.label}
                >
                  <SocialIcon platform={s.platform} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white/30 mb-4">{heading}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith('/#')) {
                          const id = link.href.split('#')[1]
                          const el = document.getElementById(id)
                          if (el && window.location.pathname === '/') {
                            e.preventDefault()
                            el.scrollIntoView({ behavior: 'smooth' })
                          }
                        } else {
                          window.scrollTo(0, 0)
                        }
                      }}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-white/[0.06] mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="dot-blue animate-pulse-slow" />
            <span className="text-xs text-white/30">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
