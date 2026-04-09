import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import siteConfig from '../data/siteConfig'

export default function PrivacyPolicy() {
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
                  className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                />
              ) : (
                <div className="relative w-12 h-12 transition-transform group-hover:scale-110">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 opacity-90 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 opacity-40 blur-md group-hover:blur-lg transition-all" />
                  <div className="relative flex items-center justify-center h-full">
                    <span className="text-space font-black text-lg leading-none select-none">Q</span>
                  </div>
                </div>
              )}
            </div>
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8">Privacy Policy</h1>
          <p className="text-white/40 mb-12">Last Updated: March 29, 2026</p>

          <div className="glass-card p-8 sm:p-12 space-y-10 text-white/70 leading-relaxed font-light">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                At our company, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc ml-6 mt-4 space-y-2">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Your Legal Rights</h2>
              <p>
                Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to request access, correction, erasure, restriction, transfer, or to object to processing.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us at qiblax@gmail.com.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
