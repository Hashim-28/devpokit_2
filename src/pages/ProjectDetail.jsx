import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'
import siteConfig from '../data/siteConfig'
import Footer from '../components/Footer'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  // Find project in the portfolio list
  const project = siteConfig.portfolio.find(p => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  // Close modal on escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl bg-space/80 border-b border-white/[0.06]' : 'bg-transparent'
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
                    className="h-14 w-auto object-contain transition-transform group-hover:scale-105"
                  />
                ) : (
                  <div className="relative w-12 h-12 transition-transform group-hover:scale-110">
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 opacity-90" />
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 opacity-40 blur-md" />
                    <div className="relative flex items-center justify-center h-full">
                      <span className="text-space font-black text-lg leading-none">Q</span>
                    </div>
                  </div>
                )}
              </div>
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
          <div className="flex flex-col mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-400/10 text-blue-400 border border-blue-400/20 uppercase tracking-widest">
                  {project.category}
                </span>
                <span className="text-white/20">•</span>
                <span className="text-xs font-medium text-white/40 tracking-wider">PROJECT DETAIL</span>
              </div>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black mb-8 leading-[1] tracking-tighter">
                {project.title.split(' ').map((word, i) => (
                  <span key={i} className={i % 2 === 1 ? 'gradient-text' : ''}>
                    {word}{' '}
                  </span>
                ))}
              </h1>
              <p className="text-lg text-white/50 font-light leading-relaxed mb-10 text-justify">
                {project.longDescription || project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-12 py-10 border-t border-white/[0.06]"
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
            className="relative aspect-video rounded-3xl overflow-hidden glass-card mb-24 group cursor-zoom-in"
            onClick={() => setSelectedImage(project.image)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-space/80 via-transparent to-transparent opacity-60 pointer-events-none" />
            
            {/* Zoom indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 backdrop-blur-[2px]">
               <div className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase tracking-widest">
                  Click to View Full
               </div>
            </div>
          </motion.div>

          {/* Screenshot Gallery (Carousel) */}
          {project.screenshots?.length > 0 && (
            <div className="mb-24 relative overflow-hidden px-4 md:px-0">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-px bg-blue-400" />
                  <h2 className="text-2xl font-bold uppercase tracking-wider">Project Gallery</h2>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      const el = document.getElementById('screenshot-carousel');
                      el.scrollBy({ left: -el.offsetWidth, behavior: 'smooth' });
                    }}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white/50 hover:text-white"
                  >
                    ←
                  </button>
                  <button 
                    onClick={() => {
                      const el = document.getElementById('screenshot-carousel');
                      el.scrollBy({ left: el.offsetWidth, behavior: 'smooth' });
                    }}
                    className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all text-white/50 hover:text-white"
                  >
                    →
                  </button>
                </div>
              </div>

              <div 
                id="screenshot-carousel"
                className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {project.screenshots.map((src, i) => {
                  const isMobile = project.category?.toLowerCase().includes('app') || project.category?.toLowerCase().includes('mobile');
                  
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                      className={`flex-none snap-center px-4 ${isMobile ? 'w-[280px] md:w-[320px]' : 'w-[500px] md:w-[700px]'}`}
                    >
                      <div className="flex flex-col gap-6 items-center">
                        {isMobile ? (
                          /* Premium iPhone Frame */
                          <div className="relative w-full aspect-[9/19] group">
                            <div className="absolute inset-0 rounded-[3rem] border-[8px] border-[#1a1a1a] bg-[#000] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.1)] transition-transform duration-700 group-hover:scale-[1.02]">
                              <div className="absolute inset-[2px] rounded-[2.5rem] overflow-hidden bg-space cursor-zoom-in" onClick={() => setSelectedImage(src)}>
                                <img
                                  src={src}
                                  alt={`${project.title} screenshot ${i + 1}`}
                                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                              </div>
                              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#000] rounded-full z-20 flex items-center justify-center border border-white/5">
                                <div className="w-2 h-2 rounded-full bg-blue-500/20 blur-[1px]" />
                              </div>
                              <div className="absolute -left-[10px] top-24 w-1 h-12 bg-[#1a1a1a] rounded-l-md" />
                              <div className="absolute -left-[10px] top-40 w-1 h-8 bg-[#1a1a1a] rounded-l-md" />
                              <div className="absolute -right-[10px] top-32 w-1 h-16 bg-[#1a1a1a] rounded-r-md" />
                            </div>
                            <div className="absolute inset-0 rounded-[3rem] pointer-events-none border border-white/10 opacity-50" />
                          </div>
                        ) : (
                          /* Premium Browser/Desktop Frame */
                          <div className="relative w-full aspect-video group">
                            <div className="absolute inset-0 rounded-2xl border-[8px] border-[#1a1a1a] bg-[#000] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5),0_0_20px_rgba(59,130,246,0.1)] transition-transform duration-700 group-hover:scale-[1.01]">
                              {/* Browser Header */}
                              <div className="h-8 bg-[#1a1a1a] flex items-center px-4 gap-1.5 border-b border-white/5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-amber-500/40" />
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
                                <div className="ml-4 h-4 w-48 bg-white/5 rounded-full" />
                              </div>
                              {/* Screen Content */}
                              <div className="absolute inset-x-[2px] bottom-[2px] top-[34px] rounded-b-xl overflow-hidden bg-space cursor-zoom-in" onClick={() => setSelectedImage(src)}>
                                <img
                                  src={src}
                                  alt={`${project.title} screenshot ${i + 1}`}
                                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                              </div>
                            </div>
                            <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/10 opacity-30" />
                          </div>
                        )}

                        {/* Label below frame */}
                        <div className="text-center">
                          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400">
                            {isMobile ? 'Mobile Vista' : 'Desktop Vista'} 0{i + 1}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-24">
            <div className="lg:col-span-2 space-y-12">
              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-blue-400" />
                  The Challenge
                </h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  {project.challenge || "We were tasked with redefining the digital presence for this brand. The goal was to create a high-performance platform that not only showcases their unique value proposition but also provides a seamless user journey across all devices. We focused on speed, accessibility, and a modern aesthetic that aligns with current industry standards while pushing the boundaries of traditional web design."}
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-px bg-blue-400" />
                  Our Solution
                </h2>
                <p className="text-lg text-white/60 leading-relaxed font-light">
                  Our approach combined deep strategic research with bleeding-edge technology. We implemented a headless CMS architecture to ensure blazingly fast load times and a future-proof content strategy. The interface features custom-designed micro-interactions and transitions that guide the user's focus and elevate the overall brand perception.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="font-bold mb-2 text-blue-400">Custom Architecture</h4>
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

              <div className="p-1 rounded-3xl bg-gradient-to-br from-blue-400/20 to-purple-600/20 block group">
                <div className="glass-card p-8 !bg-space/90 h-full">
                  <h3 className="text-lg font-bold mb-4">Project Results</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-xs text-white/40">Performance Score</span>
                        <span className="text-xs font-bold text-blue-400">99/100</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: '99%' }}
                          className="h-full bg-blue-400 shadow-[0_0_10px_#3b82f6]"
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
                      className="w-full h-full object-contain opacity-40 group-hover:opacity-70 transition-all duration-500 scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-x-8 bottom-8">
                      <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mb-2">Next Project</p>
                      <h4 className="text-2xl font-bold">{p.title}</h4>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* ── Image Lightbox Modal ─────────────────────────────────────── */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-space/95 backdrop-blur-2xl p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Full preview"
                className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl border border-white/10 object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 md:-right-12 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 flex items-center justify-center transition-all group"
              >
                <span className="text-white text-xl group-hover:scale-110 transition-transform">✕</span>
              </button>
              
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                Click anywhere outside to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
