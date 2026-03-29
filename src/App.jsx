<<<<<<< HEAD
import { Routes, Route } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero/HeroSection'
import Services from './components/Services'
import About from './components/About'
=======
import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero/HeroSection'
import Services from './components/Services'
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
import Portfolio from './components/Portfolio/Portfolio'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
<<<<<<< HEAD
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
=======
import ProjectDetail from './pages/ProjectDetail'

// ── Home page (single scrollable page) ──────────────────────
function HomePage({ scrollY }) {
  return (
    <div className="relative bg-space text-white overflow-x-hidden">
      {/* Grid background overlay */}
      <div className="fixed inset-0 grid-bg opacity-100 pointer-events-none z-0" />

      {/* Ambient light blobs */}
      <div
        className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse, rgba(123,47,247,0.12) 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      />
      <div
        className="fixed bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse, rgba(0,245,255,0.08) 0%, transparent 70%)',
          transform: `translateY(${-scrollY * 0.08}px)`,
        }}
      />

      <Navbar scrollY={scrollY} />

      <main className="relative z-10">
        <HeroSection scrollY={scrollY} />
        <Services />
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
      </main>
<<<<<<< HEAD
      <Footer />
    </>
=======

      <Footer />
    </div>
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
  )
}

// ── Root component with routing ──────────────────────────────
function App() {
<<<<<<< HEAD
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
    </div>
=======
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<HomePage scrollY={scrollY} />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
>>>>>>> cf4aac6c0deed30892adaa525af220761848410e
  )
}

export default App
