import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import siteConfig from '../data/siteConfig'

export default function CookiePolicy() {
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8">Cookie Policy</h1>
          <p className="text-white/40 mb-12">Last Updated: March 29, 2026</p>

          <div className="glass-card p-8 sm:p-12 space-y-10 text-white/70 leading-relaxed font-light">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. What Are Cookies?</h2>
              <p>
                Cookies are small text files that are used to store small pieces of information. They are stored on your device when the website is loaded on your browser. These cookies help us make the website function properly, make it more secure, and provide better user experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. How We Use Cookies</h2>
              <p>
                As most of the online services, our website uses first party and third party cookies for several purposes. First party cookies are mostly necessary for the website to function the right way. Third party cookies are used for understanding how the website performs and how you interact with our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
              <ul className="list-disc ml-6 mt-4 space-y-4">
                <li><strong>Essential:</strong> Some cookies are essential for you to be able to experience the full functionality of our site. They allow us to maintain user sessions and prevent any security threats.</li>
                <li><strong>Statistics:</strong> These cookies store information like the number of visitors to the website, which pages have been visited, etc. This helps us understand and analyze how well the website performs.</li>
                <li><strong>Marketing:</strong> Our website may display advertisements. These cookies are used to personalize the advertisements that we show to you.</li>
                <li><strong>Functional:</strong> Tese are the cookies that help certain non-essential functionalities on our website. These functionalities include embedding content like videos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Controlling Cookies</h2>
              <p>
                You can manage your cookies preferences through your browser settings. You can block or delete cookies which have already been set. To find out more out how to manage and delete cookies, visit wikipedia.org, www.allaboutcookies.org.
              </p>
            </section>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}
