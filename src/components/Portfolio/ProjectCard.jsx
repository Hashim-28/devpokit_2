import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative group rounded-2xl overflow-hidden cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden bg-space-light">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          loading="lazy"
        />
      </div>

      {/* Hover overlay */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex flex-col justify-end p-6"
            style={{
              background: 'linear-gradient(0deg, rgba(5,8,22,0.97) 0%, rgba(5,8,22,0.7) 50%, rgba(5,8,22,0.2) 100%)',
            }}
          >
            {/* Category badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="section-badge self-start mb-3 text-xs py-1"
              style={{ color: project.color, borderColor: `${project.color}40`, background: `${project.color}12` }}
            >
              {project.category}
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="text-xl font-bold text-white mb-2"
            >
              {project.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-sm text-white/60 leading-relaxed mb-4 line-clamp-2"
            >
              {project.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.12 }}
              className="flex flex-wrap gap-2 mb-4"
            >
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-full text-xs font-medium bg-white/10 text-white/70 border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.14 }}
              className="flex gap-3"
            >
              <a
                href={project.link}
                className="flex-1 text-center py-2.5 rounded-xl text-xs font-semibold transition-all"
                style={{
                  background: `linear-gradient(135deg, ${project.color}20, ${project.color}10)`,
                  border: `1px solid ${project.color}40`,
                  color: project.color,
                }}
              >
                View Project →
              </a>
              <a
                href={project.github}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-white/10 text-white/70 border border-white/10 hover:bg-white/15 transition-all"
              >
                GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom info (visible when not hovered) */}
      <motion.div
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        className="absolute bottom-0 left-0 right-0 p-5"
        style={{
          background: 'linear-gradient(0deg, rgba(5,8,22,0.9) 0%, transparent 100%)',
        }}
      >
        <p className="text-sm font-semibold text-white truncate">{project.title}</p>
        <p className="text-xs text-white/40 mt-0.5">{project.category}</p>
      </motion.div>

      {/* Border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${project.color}30`, borderRadius: 'inherit' }}
      />
    </motion.div>
  )
}
