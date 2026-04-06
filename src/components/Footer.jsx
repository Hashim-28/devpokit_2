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

const socials = [
  { label: 'GitHub', href: 'https://github.com', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'LI' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'TW' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-cyan-400/50 to-transparent" />

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
              <div className="relative h-8 flex items-center">
                {siteConfig.logoUrl ? (
                  <img
                    src={siteConfig.logoUrl.startsWith('http') || siteConfig.logoUrl.startsWith('/') ? siteConfig.logoUrl : '/' + siteConfig.logoUrl}
                    alt={siteConfig.siteName}
                    className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative w-8 h-8 transition-transform duration-300 group-hover:scale-110">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 opacity-90" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 opacity-40 blur-md" />
                    <div className="relative flex items-center justify-center h-full">
                      <span className="text-space font-black text-sm leading-none">D</span>
                    </div>
                  </div>
                )}
              </div>
              <span className="font-bold text-xl tracking-tight">
                Qibla<span className="text-orange-500">X</span>
              </span>
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
                  className="w-9 h-9 rounded-xl glass-card flex items-center justify-center text-xs font-bold text-white/50 hover:text-cyan-400 hover:border-cyan-400/30 transition-all duration-200"
                  aria-label={s.label}
                >
                  {s.icon}
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
            © {new Date().getFullYear()} QiblaX. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="dot-cyan animate-pulse-slow" />
            <span className="text-xs text-white/30">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
