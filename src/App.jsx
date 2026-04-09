import { Routes, Route } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero/HeroSection'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio/Portfolio'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackgroundParticles from './components/BackgroundParticles'
import ProjectDetail from './pages/ProjectDetail'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookiePolicy from './pages/CookiePolicy'

// ── Home page (single scrollable page) ──────────────────────
function HomePage() {
  return (
    <>
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <Services />
        <About />
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

// ── Root component with routing ──────────────────────────────
function App() {
  return (
    <div className="relative min-h-screen bg-space text-white overflow-x-hidden">
      <BackgroundParticles />
      {/* Grid background overlay (Safe Mode: Hidden via CSS) */}
      <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none z-0" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/cookies" element={<CookiePolicy />} />
      </Routes>

      {/* SVG Filters for Effects */}
      <svg style={{ visibility: 'hidden', position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <filter id="turbulent-displace">
            <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="noise">
              <animate attributeName="seed" from="1" to="1000" dur="0.25s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default App
