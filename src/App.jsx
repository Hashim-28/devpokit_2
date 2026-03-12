import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/Hero/HeroSection'
import Services from './components/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        <Portfolio />
        <Team />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
