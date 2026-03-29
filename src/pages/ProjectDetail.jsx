import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import siteConfig from '../data/siteConfig'

export default function ProjectDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const project = siteConfig.projects.find(p => String(p.id) === String(id))

  const [activeImg, setActiveImg] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50)
  })

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white gap-6">
        <p className="text-white/50 text-lg">Project not found.</p>
        <Link to="/" className="btn-secondary">← Back to Home</Link>
      </div>
    )
  }

  const images = project.images || [project.image]

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative pt-16 md:pt-20">
      {/* Background grid removed for global App grid */}
      {/* Ambient glow */}
      <div
        className="fixed top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: `radial-gradient(ellipse, ${project.color}18 0%, transparent 70%)` }}
      />

      {/* ── Fixed top bar ── */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'backdrop-blur-xl bg-space/80 border-b border-white/[0.06] shadow-[0_4px_32px_rgba(0,0,0,0.4)]'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between">
          {/* Back button */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"
          >
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

          {/* Live URL button */}
          {project.liveUrl && project.liveUrl !== '#' ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4"
            >
              <span className="relative z-10">Live Site →</span>
            </a>
          ) : (
            <div className="w-24" />
          )}
        </div>
      </header>

      {/* ── Main content ── */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">

        {/* Category badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span
            className="section-badge"
            style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}12` }}
          >
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: project.color }} />
            {project.category}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-6 leading-[1.1]"
        >
          {project.title}
        </motion.h1>

        {/* Two-column layout on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 mt-4">

          {/* Left: images + description */}
          <div className="space-y-8">
            {/* Main image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative rounded-2xl overflow-hidden aspect-[16/9] glass-card"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={images[activeImg]}
                  alt={`${project.title} screenshot ${activeImg + 1}`}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                />
              </AnimatePresence>
              {/* Image overlay gradient */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ boxShadow: `inset 0 0 0 1px ${project.color}25` }}
              />
            </motion.div>

            {/* Thumbnail strip */}
            {images.length > 1 && (
              <div className="flex gap-3 flex-wrap">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`relative rounded-xl overflow-hidden w-24 h-16 transition-all duration-200 ${activeImg === i
                      ? 'ring-2 opacity-100'
                      : 'ring-0 opacity-50 hover:opacity-75'
                      }`}
                    style={activeImg === i ? { ringColor: project.color, boxShadow: `0 0 0 2px ${project.color}` } : {}}
                  >
                    <img src={img} alt={`thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* Detailed description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 space-y-4"
            >
              <h2 className="text-xl font-bold text-white">About this project</h2>
              <p className="text-white/70 leading-relaxed text-base">
                {project.detailedDescription || project.description}
              </p>
            </motion.div>
          </div>

          {/* Right sidebar: tech stack + CTA */}
          <div className="space-y-6">
            {/* Tech Stack card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="glass-card p-6"
            >
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {(project.techStack || project.tags).map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-full text-xs font-semibold border"
                    style={{
                      color: project.color,
                      borderColor: `${project.color}40`,
                      background: `${project.color}10`,
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Tags card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-6"
            >
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/[0.06] text-white/60 border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="glass-card p-6 space-y-3"
            >
              <h3 className="text-sm font-semibold text-white/40 uppercase tracking-widest mb-4">Links</h3>

              {project.liveUrl && project.liveUrl !== '#' ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center block"
                >
                  <span className="relative z-10">🚀 Visit Live Site →</span>
                </a>
              ) : (
                <div
                  className="w-full text-center py-4 rounded-xl text-sm font-semibold text-white/30 border border-white/10 cursor-not-allowed"
                >
                  Live URL Coming Soon
                </div>
              )}

              {project.github && project.github !== '#' ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center block"
                >
                  View on GitHub
                </a>
              ) : (
                <div className="w-full text-center py-4 rounded-xl text-sm font-semibold text-white/30 border border-white/10 cursor-not-allowed">
                  Private Repository
                </div>
              )}
            </motion.div>

            {/* Interested? */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-6 text-center"
              style={{ border: `1px solid ${project.color}25` }}
            >
              <p className="text-white/50 text-sm mb-4">Interested in a similar project?</p>
              <Link
                to="/#contact"
                onClick={() => {
                  // navigate to home then scroll to contact
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }, 300)
                }}
                className="btn-primary w-full text-center block"
              >
                <span className="relative z-10">Start a Project →</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Other projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold mb-6">More Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {siteConfig.projects
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(p => (
                <Link
                  key={p.id}
                  to={`/project/${p.id}`}
                  className="glass-card overflow-hidden rounded-2xl group hover:border-white/20 transition-all duration-300"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <span
                      className="text-xs font-semibold uppercase tracking-wider"
                      style={{ color: p.color }}
                    >
                      {p.category}
                    </span>
                    <h3 className="text-base font-bold text-white mt-1">{p.title}</h3>
                    <p className="text-xs text-white/40 mt-1.5 line-clamp-2">{p.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </main>
    </div>
  )
}
