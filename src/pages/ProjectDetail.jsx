import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'
import siteConfig from '../data/siteConfig'
import Footer from '../components/Footer'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  // Find project in the portfolio list
  const project = siteConfig.portfolio.find(p => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Project not found</h1>
      <Link to="/" className="btn-primary">Back to Home</Link>
    </div>
  )

  return (
    <div className="min-h-screen bg-transparent">
      {/* ── Navigation ──────────────────────────────────────────────────
          We use a custom Nav here that mirrors the main Navbar but 
          allows transparent behavior for the detail view. */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'backdrop-blur-xl bg-space/80 border-b border-white/[0.06]' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
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
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 opacity-90" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 opacity-40 blur-md" />
                    <div className="relative flex items-center justify-center h-full">
                      <span className="text-space font-black text-sm leading-none">D</span>
                    </div>
                  </div>
                )}
              </div>
              <span className="font-bold text-lg sm:text-xl tracking-tight block">
                Dev<span className="gradient-text">Pokit</span>
              </span>
            </Link>

            <Link
              to="/"
              className="px-5 py-2.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all text-sm font-medium"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </motion.header>

      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-medium text-white/40 tracking-wider">PROJECT DETAIL</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? 'gradient-text' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-xl text-white/50 font-light leading-relaxed max-w-xl">
                {project.longDescription || project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-8 py-8 border-t border-white/[0.06]"
            >
              <div>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">Duration</p>
                <p className="font-semibold text-white/80">3 Months</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">Service</p>
                <p className="font-semibold text-white/80">{project.category}</p>
              </div>
              <div>
                <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">Role</p>
                <p className="font-semibold text-white/80">Full Service</p>
              </div>
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-3xl overflow-hidden glass-card mb-24 group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space/80 via-transparent to-transparent opacity-60 pointer-events-none" />
          </motion.div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-cyan-400" />
                  The Challenge
                </h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  {project.challenge || "We were tasked with redefining the digital presence for this brand. The goal was to create a high-performance platform that not only showcases their unique value proposition but also provides a seamless user journey across all devices. We focused on speed, accessibility, and a modern aesthetic that aligns with current industry standards while pushing the boundaries of traditional web design."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-cyan-400" />
                  Our Solution
                </h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Our approach combined deep strategic research with bleeding-edge technology. We implemented a headless CMS architecture to ensure blazingly fast load times and a future-proof content strategy. The interface features custom-designed micro-interactions and transitions that guide the user's focus and elevate the overall brand perception.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-bold mb-2 text-cyan-400">Custom Architecture</h4>
                    <p className="text-sm text-white/40">Scalable backend built to handle millions of requests without compromise.</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-bold mb-2 text-purple-400">Fluid Interface</h4>
                    <p className="text-sm text-white/40">Responsive design that adapts perfectly to every conceivable screen size.</p>
                  </div>
                </div>
              </section>
            </div>

            <div className="space-y-10">
              <div className="glass-card p-8">
                <h3 className="text-lg font-bold mb-6">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags?.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-lg text-xs font-medium bg-white/5 border border-white/10 text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-1 rounded-3xl bg-gradient-to-br from-cyan-400/20 to-purple-600/20 block group">
                <div className="glass-card p-8 !bg-space/90 h-full">
                  <h3 className="text-lg font-bold mb-4">Project Results</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-xs text-white/40">Performance Score</span>
                        <span className="text-xs font-bold text-cyan-400">99/100</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '99%' }}
                          className="h-full bg-cyan-400 shadow-[0_0_10px_#00f5ff]"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-xs text-white/40">Load Speed</span>
                        <span className="text-xs font-bold text-purple-400">0.8s</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '92%' }}
                          className="h-full bg-purple-500 shadow-[0_0_10px_#7b2ff7]"
                        />
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    className="btn-primary w-full mt-8 !py-3 text-center block"
                  >
                    Visit Live Site
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Next Projects */}
          <div className="pt-20 border-t border-white/[0.06]">
            <h2 className="text-3xl font-black mb-12">More Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteConfig.portfolio
                .filter(p => p.id !== project.id)
                .slice(0, 2)
                .map(p => (
                  <Link
                    key={p.id}
                    to={`/project/${p.id}`}
                    className="group relative h-64 rounded-3xl overflow-hidden glass-card"
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-all duration-500 scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-x-8 bottom-8">
                      <p className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-2">Next Project</p>
                      <h4 className="text-2xl font-bold">{p.title}</h4>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
