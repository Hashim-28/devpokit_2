import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import siteConfig from '../data/siteConfig'

export default function TermsOfService() {
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative pt-16 md:pt-20">
      {/* Background accents (Removed for Global Particle visibility) */}

      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'backdrop-blur-xl bg-space/80 border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          
          {/* Logo - Matching Home Navbar */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="relative h-8 flex items-center">
              {siteConfig.logoUrl ? (
                <img
                  src={siteConfig.logoUrl.startsWith('http') || siteConfig.logoUrl.startsWith('/') ? siteConfig.logoUrl : '/' + siteConfig.logoUrl}
                  alt={siteConfig.siteName}
                  className="h-8 w-auto object-contain transition-transform group-hover:scale-110"
                />
              ) : (
                <div className="relative w-8 h-8 transition-transform group-hover:scale-110">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 opacity-40 blur-md group-hover:blur-lg transition-all" />
                  <div className="relative flex items-center justify-center h-full">
                    <span className="text-space font-black text-sm leading-none select-none">D</span>
                  </div>
                </div>
              )}
            </div>
            <span className="font-bold text-lg sm:text-xl tracking-tight block">
              Dev<span className="gradient-text">Pokit</span>
            </span>
          </Link>
          <div className="w-20" />
        </div>
      </header>

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-badge">Legal</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8">Terms of Service</h1>
          <p className="text-white/40 mb-12">Last Updated: March 29, 2026</p>

          <div className="glass-card p-8 sm:p-12 space-y-10 text-white/70 leading-relaxed font-light">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>
                By accessing or using our services at DevPokit, you agree to be bound by these Terms of Service. If you do not agree to all these terms, then you may not access the website or use any services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site and the trademarks, service marks, and logos contained therein are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. User Representations</h2>
              <p>
                By using the Site, you represent and warrant that all registration information you submit will be true, accurate, current, and complete; you will maintain the accuracy of such information and promptly update it as necessary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Prohibited Activities</h2>
              <p>
                You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Modifications and Interruptions</h2>
              <p>
                We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Governing Law</h2>
              <p>
                These terms shall be governed by and defined following the laws of Pakistan. DevPokit and yourself irrevocably consent that the courts of Pakistan shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
